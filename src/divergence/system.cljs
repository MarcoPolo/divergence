(ns divergence.system
  (:require [divergence.physics :as phys]))

;;GLOBAL VALUES===============================================
(def camera-width 900)
(def camera-height 506)
(def level-width 3200)
(def level-height 506)

(defn as [entity k]
  (@entity k))


;;PHYSICS---------------------------------------------
(defn climbing? [player entities]
  (doseq [e entities
          :let [cond1 (phys/colliding? @player @e)
                cond2 (@e :can-climb)
               ]]
    (if (and cond1 cond2)
      (do
        (swap! player assoc-in [:climbing] 1)
        (swap! player assoc-in [:gravity] [0 0 0])
        (swap! player assoc-in [:acceleration] [0 -10 0])
        )
      (do
        (swap! player assoc-in [:climbing] 0)
        (swap! player assoc-in [:gravity] [0 0.2 0]))
      )))

(defn climbing [entities]
  (doseq [e entities]
    (when (= (@e :name) :player)
        (climbing? e entities))))

(defn move-entity [entity [x-speed y-speed rot-speed]]
  (update-in entity [:position]
             #(map (partial +) [x-speed y-speed rot-speed] %)))

(defn move [entities]
  (doseq [e entities]
    (let [{v :velocity ref :ref} @e]
      (swap! e move-entity v))))

(defn collide [entities]
  (let [es (map deref entities)]
    (doseq [e entities
            :when (not= (@e :velocity) [0 0 0])
            :let [{[x-v y-v rot-speed] :velocity} @e]]
      (let [x-future (move-entity @e [x-v 0 0])
            y-future (move-entity @e [0 y-v 0])]
        (when (< 1 (count (filter (partial phys/colliding? x-future) es)))
          (swap! e assoc-in [:velocity 0] 0))
        (when (< 1 (count (filter (partial phys/colliding? y-future) es)))
          (swap! e assoc-in [:velocity 1] 0)
          (swap! e assoc-in [:can-jump] 1))))))

(defn push [entities player]
  (doseq [p player]
    (when (not= (@p :velocity) [0 0 0])
      (let [{[x-v y-v rot-speed] :velocity} @p]
        (let [x-future (move-entity @p [x-v 0 0])
                y-future (move-entity @p [y-v 0 0])]
          (doseq [e entities]
            (when (phys/colliding? x-future @e)
              (swap! e assoc-in [:velocity 0] (* (compare x-v 0) 2)))))))))

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

(defn accelerate [entities]
  (doseq [e entities
          :let [{a :acceleration} @e]]
    (swap! e update-in [:velocity] #(mapv + a %))))

(defn gravity [entities]
  (doseq [e entities
          :let [{g :gravity} @e]]
    (swap! e update-in [:acceleration] #(mapv + g %))))

(defn anchor [entities]
  (doseq [e entities]
    (let [{:keys [x y]} (@e :anchor) {ref :ref} @e]
      (aset (.-anchor ref) "x" x)
      (aset (.-anchor ref) "y" y))))

(defn scale [entities]
  (doseq [e entities]
    (let [{{:keys [x-scale y-scale rot-speed]} :scale ref :ref} @e]
      (aset (.-scale ref) "x" x-scale)
      (aset (.-scale ref) "y" y-scale))))

(defn position [entities]
  (doseq [e entities]
    (let [{[x y rot] :position ref :ref} @e]
      (aset (.-position ref) "x" x)
      (aset (.-position ref) "y" y)
      (aset ref "rotation" rot))))


;;EVENT RESPONSES---------------------------------------------
(defn goal? [entities player]
  (doseq [p player]
    (when (not= (@p :velocity) [0 0 0])
      (let [{[x-v y-v rot-speed] :velocity} @p]
        (let [x-future (move-entity @p [x-v 0 0])
                y-future (move-entity @p [y-v 0 0])]
          (doseq [e entities]
            (when (and (phys/colliding? x-future @e) (= (@e :name) :goal))
              (. js/console (log "Win")))))))))


;;RENDERING---------------------------------------------
(defn create-ref [entities]
  (doseq [e entities]
    (swap! e assoc :ref (js/PIXI.Sprite. (-> @e :sprite :texture)))))

(defn create-tiling-ref [entities]
  (doseq [e entities]
    (swap! e assoc :ref (js/PIXI.TilingSprite. (-> @e :tiling-sprite :texture) level-width (* level-height 2)))))

(defn player-input [entities]
  (doseq [e entities]))

(defn add-camera [camera container]
  (.addChild camera container))

(defn to-stage [container entities]
  (doseq [e entities]
      (.addChild container (@e :ref))))

(defn on-stage [stage container]
  (.addChild stage container))

(defn create-text [entities]
  (doseq [e entities]
    (let [style (get-in @e [:text :style])
          text (get-in @e [:text :string])]
      (swap! e assoc :ref (js/PIXI.Text. text style)))))

(def fps-time (atom (.getTime (js/Date.))))

(defn fps-counter [entities]
  (doseq [e entities
          :let [ref (@e :ref)
                now (.getTime (js/Date.))]]
    (.setText ref (str "FPS: " (js/Math.round (/ 1000 (- now @fps-time))))))
  (reset! fps-time (.getTime (js/Date.))))


;;KEYLISTENER AND KEY EVENTS---------------------------------------------
(def code->key
  {32 :up
   37 :left
   38 :up
   39 :right
   40 :down})

(def key-inputs (atom #{}))

(aset js/document.body "onkeydown" (fn [e]
                                     (let [k (code->key (.-keyCode e))]
                                       (when k
                                         (swap! key-inputs conj k)))))

(aset js/document.body "onkeyup" (fn [e]
                                     (let [k (code->key (.-keyCode e))]
                                       (when k
                                         (swap! key-inputs disj k)))))

(defn player-input [entities]
  (doseq [e entities]
    (swap! e assoc-in [:actions] @key-inputs)))

(defn execute-actions [entities]
  (doseq [e entities
          :let [actions (@e :actions)
                [ax ay ar] (@e :acceleration)]]
    (when actions
      (when
        (actions :left)
        (swap! e assoc-in [:acceleration] [-3 0 0])
        (swap! e assoc-in [:climbing] 0) ;when pressing left, turn gravity back on and climb mode off
        (swap! e assoc-in [:gravity] [0 0.2 0]))
      (when
        (actions :right)
        (swap! e assoc-in [:acceleration] [3 0 0])
        (swap! e assoc-in [:climbing] 0) ;when pressing right, turn gravity back on and climb mode off
        (swap! e assoc-in [:gravity] [0 0.2 0]))
      (when
        (actions :down)
        (swap! e assoc-in [:acceleration] [0 1 0]))
      (when
        (and (= (@e :can-jump) 1) (actions :up))
        (swap! e assoc-in [:acceleration] [0 -4 0])
        (swap! e assoc-in [:can-jump] 0))

      (when (not-any? actions [:up :left :right :down])
        (swap! e assoc-in [:acceleration] [0 0 0])))))

(defn movement-caps [entities]
  (doseq [e entities]
    (let [actions (@e :actions)
          {[vx vy vr] :velocity
           [ax ay ar] :acceleration
           } @e
          ]
      (when (> vx 4) (swap! e assoc-in [:velocity] [5 vy vr]))
      (when (< vx -4) (swap! e assoc-in [:velocity] [-5 vy vr]))
      (when (and (< vy -4) (swap! e assoc-in [:velocity] [vx -4 vr]))))))

(defn move-background [entities]
  (doseq [e entities
          :let [actions (@e :actions)
                [x y r] (@e :position)
                ]]
    (when actions
      (when (and (actions :left) (= (@e :name) :player) (not (zero? (nth (@e :velocity) 0))))
        (doseq [e entities
                :let [actions (@e :actions)
                     [x y r] (@e :position)
                ]]
          (when  (= (@e :name) :bg) (swap! e assoc-in [:position] [(+ x 5) y r]))))
      (when (and (actions :right) (= (@e :name) :player) (not (zero? (nth (@e :velocity) 0))))
        (doseq [e entities
                :let [actions (@e :actions)
                     [x y r] (@e :position)
                ]]
          (when  (= (@e :name) :bg) (swap! e assoc-in [:position] [(- x 5) y r])))))))


(defn pick-up [entities]
  ())
(defn use-item [entities]
  ())

;;GAME CAMERA============================================
(defn camera-x-check [x]
  (if (< x level-width) true false))

(defn update-camera-coords [camera x y]
  (set! (.-x (.-position @camera)) (if (camera-x-check x)
                                     (* -1 (- x (/ camera-width 3)))
                                     (- x 0)))
  ;(set! (.-y (.-position @camera)) (- (@camera-coords :y) 50))
)

(defn update-camera [camera entities]
  (doseq [e entities]
    (when (= (@e :name) :player)
      (update-camera-coords camera (nth (@e :position) 0) (nth (@e :position) 1)))))


;;SAVE/LOAD---------------------------------------------

(def serial-data (atom ""))

(defn save-to-local-db [data]
  ;(js/alert @serial-data)
  (.setItem js/localStorage "dm" data))

(comment
  "Not sure what read-string refers to, but commenting out for now, since undeclared"
(defn serialize [entities]
  (doseq [e entities]
    (if (= ":bunny" (pr-str (@e :name)))
      (js/alert (dissoc @e :ref :sprite :stage)))))

(defn deserialize [entities]
  ;(js/alert @serial-data)
   (doseq [e entities
           :when (= :bunny (@e :name))]
     (reset! e (read-string (.getItem js/localStorage "dm")))))
)

(defn interactive "sets interactive to true for sprites" [entities]
  (doseq [e entities]

   (comment
     (let [interact (@e :interactive)]
      (when (interact)
        (.-setInteractive (e :ref) true)))
     )
    ))
