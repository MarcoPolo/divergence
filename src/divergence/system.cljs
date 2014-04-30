(ns divergence.system
  (:require  [cljs.reader :as reader]
             [divergence.audio :as a]
             [divergence.physics :as phys]
             [divergence.system.conditions :as conditions]
             [divergence.entity :as e]
             [divergence.entity.enemies :as enemies]
             [divergence.textures :as textures]
             [divergence.camera :as camera]))

;;------------------------------------------------
;;GLOBAL VALUES, FUNCTIONS------------------------
;;------------------------------------------------
(def level-width 5400)
(def level-height 3600)

(def current-level (atom 0))

(defn as [entity k]
  (@entity k))

(def pause (atom 0))

;;------------------------------------------------
;;CONVERSIONS-------------------------------------
;;------------------------------------------------
(defn cljs-to-js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings."
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.strobj (reduce (fn [m [k v]]
               (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))

;;------------------------------------------------
;;PHYSICS-----------------------------------------
;;------------------------------------------------

;;climbing -> climbing?      "climbing finds the player then checks conditions in climbing?"
(defn climbing? [player entities]
  (doseq [e entities
          :let [cond1 (= (@e :can-climb) 1)
                sprite (e/entity-atom->ref player)]]
    (if cond1
      (when (phys/colliding? @player @e)
        (do
          (swap! player assoc-in [:climbing] 1)
          (swap! player assoc-in [:gravity] [0 0 0])
          (swap! player assoc-in [:acceleration] [0 -5 0])
          (set! (.-textures sprite) (cljs-to-js e/jumpAnimationRight))
        ))
      (do
        (swap! player assoc-in [:climbing] 0)
        (swap! player assoc-in [:gravity] [0 e/normal-gravity 0])))))

(defn climbing [entities]
  (doseq [e entities
          :let [e-type (e/entity-atom->component-val e :type)]]
    (when (= e-type :player)
        (climbing? e entities))))


;; move -> move-entity      "move-entity takes in velocity for moving, move is for core"
(defn move-entity [entity [x-speed y-speed rot-speed]]
  (update-in entity [:position]
             #(map (partial +) [x-speed y-speed rot-speed] %)))

(defn move [entities]
  (doseq [e entities]
    (let [{v :velocity} @e]
      (swap! e move-entity v))))

;;sets width and height of each ref based on pixijs Sprite object's width/height
;;Note: ref -> sprite
(defn set-width-height [entities]
  (doseq [e entities
          :let [ref (e/entity-atom->ref e)
                not-nil (not (nil? ref))]
          :when not-nil
          ]
        (swap! e assoc-in [:dimensions :width]  (.-width ref))
        (swap! e assoc-in [:dimensions :height] (.-height ref))))

;;collision detection function
(defn collide [entities]
  (let [es (map deref entities)]
    (doseq [e entities
            :when (and (@e :velocity) (not= (@e :velocity) [0 0 0]))
            :let [{[x-v y-v rot-speed] :velocity} @e]]
      (let [x-future (move-entity @e [x-v 0 0])
            y-future (move-entity @e [0 y-v 0])]

        (when (< 1 (count (filter (partial phys/colliding? x-future) es)))
          (swap! e assoc-in [:velocity 0] 0))
        (when (< 1 (count (filter (partial phys/colliding? y-future) es)))
          (swap! e assoc-in [:velocity 1] 0)
          (swap! e assoc-in [:can-jump] 1))))))

;;push     based on collision detection on x-direction
(defn push [entities player]
  (doseq [p player :when (= (@p :type) :player)
                   :let [actions (@p :actions)
                         direction (atom 0)]]
      (when actions (when (actions :left) (reset! direction -2)) (when (actions :right) (reset! direction 2)))
      (let [x-v @direction]
        (let [x-future (move-entity @p [x-v 0 0])]
          (doseq [e entities]
            (when (phys/colliding? x-future @e)
              (swap! e assoc-in [:velocity 0] x-v)
              (swap! p assoc :pushing true)
              (a/play-sound :push)))))))

;;applies friction to entities in core
(defn friction
  [entities]
  (doseq [e entities]
    (let [{[vx vy vr] :velocity
           [ax ay ar] :acceleration
           [f] :friction
           } @e
          actions (@e :actions)
          ]
      (when (and (not= 0 vx) (empty? actions))
        (when (or (<= vx -0.5) (>= vx 0.5))
          (when (<= vx -0.5)
            (swap! e assoc-in [:acceleration] [(* (/ vx vx) f) ay ar]))
          (when (>= vx 0.5)
            (swap! e assoc-in [:acceleration] [(* (/ vx vx) f -1) ay ar])))
        (when (and (> vx -0.5) (< vx 0.5)) (swap! e assoc-in [:acceleration] [(* vx -1) ay ar]))))))

;; acceleration -> velocity
(defn accelerate [entities]
  (doseq [e entities
          :let [{a :acceleration} @e]]
    (swap! e update-in [:velocity] #(mapv + a %))
    ))

;; applies gravity to all entities with gravity property
(defn gravity [entities]
  (doseq [e entities
          :let [{g :gravity} @e]]
    (swap! e update-in [:acceleration] #(mapv + g %))))


;;sets where player's "center" point is defined
;;by default, it is the upper-left corner.
;;values are between 0-1 where 0 is default and 1 is lower-right corner
(defn anchor [entities]
  (doseq [e entities]
    (let [{:keys [x y]} (@e :anchor)
          ref (e/entity-atom->ref e) ]
      (aset (.-anchor ref) "x" x)
      (aset (.-anchor ref) "y" y))))

;;scales size of entity
(defn scale [entities]
  (doseq [e entities]
    (let [{{:keys [x-scale y-scale rot-speed]} :scale} @e
          ref (e/entity-atom->ref e)]
      (aset (.-scale ref) "x" x-scale)
      (aset (.-scale ref) "y" y-scale))))

;; sets position of entities based on their x, y properties
(defn position [entities]
  (doseq [e entities]
    (let [{[x y rot] :position} @e
          ref (e/entity-atom->ref e)]
      (aset (.-position ref) "x" x)
      (aset (.-position ref) "y" y)
      (aset ref "rotation" rot))))

(defn play-time-travel [entities]
  (doseq [e entities
          :let [actions (:actions @e)
                prev-actions (:prev-actions @e)]]
    (when (and (actions :travel-back)
               (not (prev-actions :travel-back)))
          (a/play-sound :time)
      )
    (swap! e assoc :prev-actions actions)
    ))

;;------------------------------------------------
;;ENTITY EVENTS-----------------------------------
;;------------------------------------------------

;;This is where entity events should be defined for execution
;;in the main game loop in core.cljs

;;!! needs to be adjusted so effects like gravity apply
(defn fetch-current-path [entity]
  (let [e @entity
        index (e :path-index)
        dir (e :direction)
        loop? (e :path-loop)
        path (e :path)
        vx (nth path index)
        vy (nth path (inc index))]
    (if (and dir loop?)
      [(* -1 vx) (* -1 vy)]
      [vx vy]
      )))

(defn index-check [entity]
  (let [index (@entity :path-index)
        size (/ (count (@entity :path)) 2)]
    (when (> (compare index size) -1)
      (swap! entity assoc :path-index 0)
      (swap! entity assoc :direction (not (@entity :direction))))
    ))

(defn execute-entities
  "This function is meant to execute move-paths of npcs"
  [entities]
  (doseq [e entities
          :let [cond1 (= (@e :type) :npc)
                cond2 (= (@e :type) :enemy)
                cond3 (= (@e :type) :text)]
          :when (or cond1 cond2 cond3)]
    (index-check e)
    (swap! e assoc-in [:velocity] (fetch-current-path e))
    (swap! e assoc :path-index (+ (@e :path-index) 2))))

(defn execute-effects
  "Apply effects here with map of functions in enemy"
  [player entities]
  (doseq [p player]
    (doseq [e entities
          :let [[x-v y-v rot-speed] (@p :velocity)
                px (move-entity @p [(* x-v 3) 0 0])
                py (move-entity @p [0 (* y-v 3) 0])
                cond3 (= (@e :type) :enemy)
                cond4 (= (@p :type) :player)]
          :when (and cond3 cond4)]
    (when (or (phys/colliding? py @e) (phys/colliding? px @e))
      (enemies/effects p e)))))

;;------------------------------------------------
;;EVENT RESPONSES---------------------------------
;;------------------------------------------------
(defn next-level []
  (swap! current-level inc))

(defn has-item?
  [player itemName]
  (let [item (e/entity-atom->component-val player :holding)]
   (if (= item itemName)
    true
    false
     )))

;;conditions are stored in conditions.cljs
(defn goal? [entities player]
  ;; This is ugly little hack is so we don't run this every single frame
  (when (= (rand-int 5) 0)
    (first
     (for [p player
           e entities
           :let [p-type (e/entity-atom->component-val p :type)
                 e-name (e/entity-atom->component-val e :name)
                 win-cond (e/entity-atom->component-val e :win-condition)
                 cond1 ((conditions/conditions @current-level) p)
                 cond2 (= e-name :goal)
                 cond3 (= p-type :player)
                 cond4 (has-item? p win-cond)
                 en e]
           :when (and cond1 cond2 cond3 cond4)]
       (when (phys/colliding? @p @en)
         true)))))

;;------------------------------------------------
;;RENDERING---------------------------------------
;;------------------------------------------------
(defn create-ref [entities]
  (doseq [e entities]
    (swap! e assoc :ref (js/PIXI.MovieClip. (cljs-to-js (map textures/textures
                                                             (-> @e :sprite :texture)))))))

(defn create-tiling-ref [entities]
  (doseq [e entities]
    (swap! e assoc :ref (js/PIXI.TilingSprite. (-> @e :tiling-sprite :texture textures/textures) (* level-width 2) (* level-height 2)))))

(defn add-camera [camera container]
  (.addChild camera container))

(defn to-stage [container entities]
  (doseq [e entities
          :let [ref (e/entity-atom->ref e)]]
      (swap! e assoc :container container)
      (.addChild container ref)))

(defn on-stage [stage container]
  (.addChild stage container))

(defn create-text [entities]
  (doseq [e entities]
    (let [style (get-in @e [:text :style])
          text (get-in @e [:text :string])
          ref (e/entity-atom->ref e)]
      (swap! e assoc :ref (js/PIXI.Text. text style)))))

(def fps-time (atom (.getTime (js/Date.))))

(defn fps-counter [entities]
  (doseq [e entities
          :let [ref (e/entity-atom->ref e)
                now (.getTime (js/Date.))]]
    (.setText ref (str "FPS: " (js/Math.round (/ 1000 (- now @fps-time))))))
  (reset! fps-time (.getTime (js/Date.))))

(defn animations [entities]
  (doseq [e entities
          :let [sprite (@e :ref)]]
    (set! (.-animationSpeed sprite) 0.25)
    (set! (.-loop sprite) true)
    (set! (.-playing sprite) true)
    ))


;;------------------------------------------------
;;KEYLISTENER AND KEY EVENTS----------------------
;;------------------------------------------------
(def code->key
  (atom {
       32 :up
       87 :up
       37 :left
       65 :left
       38 :up
       39 :right
       68 :right
       40 :down
       83 :down
       77 :item
       80 :p
       16 :travel-back ;; :shift
   }))

(def key-inputs (atom #{}))

(aset js/document.body "onkeydown" (fn [e]
                                     (let [k (@code->key (.-keyCode e))]
                                       (when k
                                         (.preventDefault e)
                                         (swap! key-inputs conj k)))))

(aset js/document.body "onkeyup" (fn [e]
                                     (let [k (@code->key (.-keyCode e))]
                                       (when k
                                         (.preventDefault e)
                                         (swap! key-inputs disj k)))))

(defn player-input [entities]
  (doseq [e entities]
    (swap! (@e/unique-entity-atom->entity-atom e) assoc-in [:actions] @key-inputs)))

(defn execute-actions [entities]
  (doseq [e entities
          :let [actions (@e :actions)
                [ax ay ar] (@e :acceleration)
                sprite (e/entity-atom->ref e)]]
    (if
      (actions :item)
      (swap! e assoc-in [:items] 1)
      (swap! e assoc-in [:items] 0))
    (when actions
      (when
        (actions :p)
        (js/ShowMenu)
        (js/pause)
      )
      (when
        (actions :left)
        (swap! e assoc-in [:acceleration] [-3 0 0])
        (swap! e assoc-in [:climbing] 0) ;when pressing left, turn gravity back on and climb mode off
        (swap! e assoc-in [:gravity] [0 0.2 0])
        (if (= (@e :can-jump) 0)
         (set! (.-textures sprite) (cljs-to-js (map textures/textures e/jumpAnimationLeft)))
         (set! (.-textures sprite) (cljs-to-js (map textures/textures e/walkAnimationLeft)))))
      (when
        (actions :right)
        (swap! e assoc-in [:acceleration] [3 0 0])
        (swap! e assoc-in [:climbing] 0) ;when pressing right, turn gravity back on and climb mode off
        (swap! e assoc-in [:gravity] [0 0.2 0])
        (if (= (@e :can-jump) 0)
          (set! (.-textures sprite) (cljs-to-js (map textures/textures e/jumpAnimationRight)))
          (set! (.-textures sprite) (cljs-to-js (map textures/textures e/walkAnimationRight)))))
      (when
        (actions :down)
        (swap! e assoc-in [:acceleration] [0 1 0]))
      (when
        (and (= (@e :can-jump) 1) (actions :up))
        (when (= (e/entity-atom->component-val e :name) :player)
          (a/play-sound :jump)
            (do (set! (.-textures sprite) (cljs-to-js (map textures/textures e/jumpAnimationRight)))
                (set! (.-playing sprite) true)))
        (swap! e assoc-in [:acceleration] [0 -6.5 0])
        (swap! e assoc-in [:can-jump] 0))

      (when (not-any? actions [:up :left :right :down])
        (when (= (e/entity-atom->component-val e :name) :player)

          (set! (.-textures sprite) (cljs-to-js (map textures/textures [e/pf])))
          )
        (swap! e assoc-in [:acceleration] [0 0 0])))))


(defn change-key-code
  "Change code->key mapping"
  [keyCode newKeyCode]
  (let [value (@code->key keyCode)]
    (swap! code->key dissoc keyCode)
    (swap! code->key assoc newKeyCode value)))

;;------------------------------------------------
;;PERIPHERAL FUNCTIONS----------------------------
;;------------------------------------------------

(defn movement-caps [entities]
  (doseq [e entities]
    (let [actions (e/entity-atom->component-val e :actions)
          {[vx vy vr] :velocity
           [ax ay ar] :acceleration
           } @e]
      (when (> vx 4) (swap! e assoc-in [:velocity] [5 vy vr]))
      (when (< vx -4) (swap! e assoc-in [:velocity] [-5 vy vr]))
      (when (and (< vy -4) (swap! e assoc-in [:velocity] [vx -4 vr]))))))

(defn move-background [player entities]
  (doseq [p player :when (and (@p :velocity) (not= (@p :velocity) [0 0 0]))]
   (doseq [e entities
          :let [actions (@e :actions)
                [x y r] (@e :position)
                e-type (e/entity-atom->component-val e :type)]
          :when (= e-type :move-bg)]
    (cond (actions :left) (swap! e assoc-in [:position] [(+ x 10) y r])
          (actions :right) (swap! e assoc-in [:position] [(- x 10) y r])
          ))))

(defn pick-drop-item [entities]
  (doseq [e entities
          :let [e-type (e/entity-atom->component-val e :type)]]
    (when (= e-type :player)
      (let [p e
            actions (@p :actions)
            [x y r] (@p :position)]
          (doseq [en entities
                  :let [item @en
                        item-name (e/entity-atom->component-val en :name)]]
            (when (= (item :type) :item)
              (if (and (= (@p :items) 1) (phys/colliding? item @p))
                (do (set! (.-visible (e/entity-atom->ref en)) false) ;pick up item
                    (swap! p assoc-in [:holding] item-name)
                    (let [pheight (.-height (e/entity-atom->ref p))
                          iheight (.-height (e/entity-atom->ref en))]
                     (swap! en assoc-in [:position] [x (+ y (- pheight iheight)) r]))
                    (println (e/entity-atom->component-val p :holding))
                    (a/play-sound :pickup))
                #_(do (swap! p assoc-in [:holding] [:nothing])
                    (set! (.-visible (e/entity-atom->ref en)) true)
                    ))))))))


(defn hit-button [player entities]
  (doseq [pl player
          :let [p-type (e/entity-atom->component-val pl :type)]
          :when (= p-type :player)]
      (let [p pl
            actions (@p :actions)]
          (doseq [en entities
                  :let [item @en
                        item-name (e/entity-atom->component-val en :name)]]
            (when (= (item :type) :button)
              (when (phys/colliding? item @p)
                 (do
                (swap! en assoc-in [:button-pushed] true)
                (swap! p assoc-in [:cleared] true)
                (doseq [x entities
                        :when (= (e/entity-atom->component-val x :type) :door)
                        :let [sprite (e/entity-atom->ref x)]]
                          (set! (.-textures sprite) (cljs-to-js (map textures/textures [e/doorOpenTexture]))))
                 ))
              ;(do
              ;  (swap! e assoc-in [:button-pushed] false)
              ;  (swap! p assoc-in [:cleared] false)
              ;  (doseq [x entities
              ;          :when (= (e/entity-atom->component-val x :type) :door)
              ;          :let [sprite (e/entity-atom->ref x)]]
              ;            (set! (.-textures sprite) (cljs-to-js (map textures/textures [e/doorClosedTexture]))))
              ;)
            )))))

;;consider generate entities functions, instead of a super specific event function
(defn hit-button-box-fall [player entities]
  (doseq [pl player
          :let [e-type (e/entity-atom->component-val pl :type) ]]
    (when (= e-type :player)
      (let [p pl
            actions (@p :actions)
            [x y r] (@p :position)]
          (doseq [en entities
                  :let [item @en
                        item-name (e/entity-atom->component-val en :name)]]
            (when (= (item :type) :button-fall)
              (when (phys/colliding? item @p)
                (doseq [e1 entities]
                  (if (= ":boxfloat1" (pr-str (@e1 :name)))
                    (swap! e1 assoc-in [:gravity] [ 0 e/normal-gravity 0])
                  )))
              ))))))

;;------------------------------------------------
;;GAME CAMERA-------------------------------------
;;------------------------------------------------
(defn camera-x-check [x]
  (if (and (< x level-width) (> x 0)) true false))

(defn camera-y-check [y]
  (if (and (< y level-height) true) true false))

(defn update-camera-coords [camera x y]
  (set! (.-x (.-position @camera)) (if (camera-x-check x)
                                     (* -1 (- x (+ (/ camera/camera-width 3) 50)))
                                     (.-x (.-position @camera))))
  (set! (.-y (.-position @camera)) (if (camera-y-check y)
                                    (* -1 (- y (+ (/ camera/camera-height 3) 125)))
                                    (.-y (.-position @camera))))
)

(defn update-camera [camera entities]
  (doseq [e entities]
    (when (= (e/entity-atom->component-val e :name) :player)
      (update-camera-coords camera (nth (@e :position) 0) (nth (@e :position) 1)))))


;;------------------------------------------------
;;SAVE/LOAD---------------------------------------
;;------------------------------------------------

(def serial-data (atom nil))
(def load-data (atom nil))

(defn save-to-local-db [objname data] ;saves the object name and the data to local storage
  (.setItem js/localStorage objname data))

(defn serialize [entities]
  (doseq [e entities]
      (reset! serial-data @e) ;loops through and copies entities into serial-data
      (swap! serial-data dissoc :ref :sprite :stage :actions :tiling-sprite :on-stage :container) ;takes out complex data
      ;(js/alert (pr-str @serial-data))
      (save-to-local-db (pr-str (e/entity-atom->component-val e :name)) @serial-data))) ;save to local database

(defn deserialize [entities]
   (doseq [e entities]
           (do ;everything executes together
             (reset! load-data (reader/read-string (.getItem js/localStorage (pr-str (e/entity-atom->component-val e :name))))) ;read back from local database
             (if (not= nil (get-in @load-data [:position])) (swap! e assoc-in [:position] (get-in @load-data [:position]))) ;assigns the position from load-data back into object
             (if (not= nil (get-in @load-data [:gravity])) (swap! e assoc-in [:gravity] (get-in @load-data [:gravity]))) ;If not equal to nil, get data.
             (if (not= nil (get-in @load-data [:friction])) (swap! e assoc-in [:friction] (get-in @load-data [:friction]))) ;If it's equal to nil, then that object never had that data so no need to assign it.
             (if (not= nil (get-in @load-data [:velocity])) (swap! e assoc-in [:velocity] (get-in @load-data [:velocity]))) ;swaps the current position with the position from the data from local storage IF NOT NIL!
             (if (not= nil (get-in @load-data [:player-input])) (swap! e assoc-in [:player-input] (get-in @load-data [:player-input])))
             (if (not= nil (get-in @load-data [:items])) (swap! e assoc-in [:items] (get-in @load-data [:items])))
             (if (not= nil (get-in @load-data [:acceleration])) (swap! e assoc-in [:acceleration] (get-in @load-data [:acceleration])))
             (if (not= nil (get-in @load-data [:collidable])) (swap! e assoc-in [:collidable] (get-in @load-data [:collidable])))
             (if (not= nil (get-in @load-data [:create-ref])) (swap! e assoc-in [:create-ref] (get-in @load-data [:create-ref])))
             ;(if (not= nil (get-in @load-data [:scale])) (swap! e assoc-in [:scale] (get-in @load-data [:scale])))
             (if (not= nil (get-in @load-data [:can-jump])) (swap! e assoc-in [:can-jump] (get-in @load-data [:can-jump])))
             (if (not= nil (get-in @load-data [:anchor])) (swap! e assoc-in [:anchor] (get-in @load-data [:anchor])))
             (if (not= nil (get-in @load-data [:holding])) (swap! e assoc-in [:holding] (get-in @load-data [:holding])))
             (if (not= nil (get-in @load-data [:climbing])) (swap! e assoc-in [:climbing] (get-in @load-data [:climbing]))))))
