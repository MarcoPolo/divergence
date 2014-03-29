(ns divergence.core
  (:require [divergence.component :as c]
            [divergence.entity :as e]
            [divergence.system :as s]
            [divergence.leveleditor :as le]
            [goog.dom :as dom]
            [divergence.timeviz]
            [divergence.system.time-travel :as tt]))

(enable-console-print!)

;;DATA DECLARATIONS==============================================
(def renderer (js/PIXI.autoDetectRenderer. s/screen-width s/screen-height))
(.appendChild (js/document.getElementById "game-container") (.-view renderer))

(def stage (atom (js/PIXI.Stage. 0x66FF99)))

(def container (atom (js/PIXI.DisplayObjectContainer.)))
(def camera (atom (js/PIXI.DisplayObjectContainer.)))

(def entity->components
  "A map to an entity and a list of its components"
  (atom {}))

(def component->entities
  "A map to a component and a list of entities that use it"
  (atom {}))

(def entity-count (atom 0))

(def animate-ref (atom nil))

(def globalID (atom nil))


;;GAME SETUP====================================================

(defn register-entity! [entity]
  (let [entity-atom (atom entity)]
    (swap! entity->components assoc @entity-count entity-atom)
    (swap! entity-count inc)
    (doseq [[n component] entity]
      (swap! component->entities update-in [n] conj entity-atom))))

(defn entities [stage]
  [(e/player stage)
   (e/some-text stage)

   (e/rope-block 950 40 stage)
   (e/key-block 500 510 stage)

   (e/vertical-full-block 0 -40 :block1 stage)
   (e/horizontal-full-block 0 560 :block2 stage)
   (e/horizontal-full-block 800 560 :block3 stage)
   (e/vertical-full-block 1560 -40 :block4 stage)

   (e/regular-block 1000 520 :block5 stage)
   (e/regular-block 1000 460 :block6 stage)
   (e/regular-block 1000 420 :block7 stage)
   (e/regular-block 1000 360 :block8 stage)

   (e/box :box1 400 300 stage)
   (e/box :box2 400 100 stage)

   (e/goal 1300 485 stage)

   (e/background stage)

   #_(e/vertical-full-block 0 -40 stage)
   #_(e/vertical-full-block 760 -40 stage)
   #_(e/horizontal-full-block 0 560 stage)
   #_(e/timestream)
   (e/timestream)
   ])

(comment
(defn next-level []
  (when (not (= s/level s/current-level))
   (swap! s/curent-level inc))))

(defn setup [entities]
  ;; Register all the entities in our maps
  (doseq [e entities] (register-entity! e))
  (let [c->e @component->entities]
    (s/create-ref (c->e :sprite))
    (s/create-tiling-ref (c->e :tiling-sprite))
    (s/create-text (c->e :text))
    (s/animations (c->e :player-input))

    (s/to-stage @container (c->e :stage))
    (s/add-camera @camera @container)
    (s/on-stage @stage @camera)

    (s/position (c->e :position))
    (s/anchor (c->e :anchor))
    (s/scale (c->e :scale))

    ;; Setup the time travel
    (let [timestream (first (c->e :timestream))]
      (tt/save-entities-to-timestream! timestream [(@entity->components 0)])
      (swap! timestream assoc-in [:timestream :prev-node] [0 0]))

    ))

;;MASTER FEATURES=================================================

(defn resetGame []
    (reset! component->entities {})
    (reset! entity->components {})
    (reset! entity-count 0)
    (reset! stage (js/PIXI.Stage. 0x66FF99))
    (setup (entities @stage)))

(defn savegame []
  (let [c->e @component->entities]
  (s/serialize (c->e :position))))

(defn loadgame []
  (let [c->e @component->entities]
  (s/deserialize (c->e :position))))

(defn pause []
  (js/cancelAnimationFrame @globalID))

(defn resume []
  (js/requestAnimationFrame @animate-ref))

;;RENDERING============================================

(defn animate []
  (let [c->e @component->entities]
    (.render renderer stage)

    ;; Time travel
    (let [timestream (first (c->e :timestream))]
      ;; TODO fix this so it works for all entities, I'm just being lazy here
      (tt/time-tick timestream [(@entity->components 0)])

      )

    (s/player-input (c->e :player-input))
    (s/climbing (c->e :position))
    (s/execute-actions (c->e :actions))
    (s/move-background (c->e :actions))
    (s/gravity (c->e :gravity))
    (s/movement-caps (c->e :velocity))
    (s/friction (c->e :acceleration))
    (s/accelerate (c->e :acceleration))
    (s/push (c->e :pushable) (c->e :player-input))
    (s/goal? (c->e :position) (c->e :player-input))
    (s/collide (c->e :collidable))
    (s/move (c->e :velocity))
    (s/position (c->e :position))

    ;; FPS counter
    (s/fps-counter (c->e :fps-counter))

    ;; Time viz
    (divergence.timeviz/render-stage)

    (s/update-camera container (c->e :position))
    (s/pick-drop-item (c->e :position))
    (reset! globalID (js/requestAnimationFrame @animate-ref))))

(reset! animate-ref animate)

(setup (entities @stage))

(js/requestAnimationFrame @animate-ref)


(comment
  (@entity->components 0)

  (def timestream (get-in @(first (@component->entities :timestream)) [:timestream :timestream]))

  (get-in timestream [0 1598])
  (tt/reverse-time timestream 0 1598 1)


  (count (get-in @(first (@component->entities :timestream)) [:timestream :timestream 0]))
  (map :prev-node (get-in @(first (@component->entities :timestream)) [:timestream :timestream 536]))
 )
