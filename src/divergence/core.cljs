(ns divergence.core
  (:require [divergence.component :as c]
            [divergence.entity :as e]
            [divergence.system :as s]
            [divergence.leveleditor :as le]
            [goog.dom :as dom]))

(enable-console-print!)

(def renderer (js/PIXI.autoDetectRenderer. 800 600))
(js/document.body.appendChild (.-view renderer))

(def stage (atom (js/PIXI.Stage. 0x66FF99)))

(def entity->components
  "A map to an entity and a list of it's components"
  (atom {}))

(def component->entities
  "A map to a component and a list of entities that use it"
  (atom {}))

(def entity-count (atom 0))

(def animate-ref (atom nil) )

(defn register-entity! [entity]
  (let [entity-atom (atom entity)]
    (swap! entity->components assoc @entity-count entity-atom)
    (swap! entity-count inc)
    (doseq [[n component] entity]
      (swap! component->entities update-in [n] conj entity-atom))))


(defn entities [stage]
  [(e/bunny stage)
   (e/some-text stage)
   ;(e/vertical-full-block 0 -40 stage)
   ;(e/vertical-full-block 760 -40 stage)
   (e/regular-block 380 520 stage)
   (e/horizontal-full-block 0 560 stage)
   (e/box 300 300 stage)
   (e/goal 700 485 stage)
   (e/background stage)
   ])

(defn setup [entities]
  ;; Register all the entities in our maps
  (doseq [e entities] (register-entity! e))
  (let [c->e @component->entities]
    (s/create-ref (c->e :sprite))
    (s/create-tiling-ref (c->e :tiling-sprite))
    (s/create-text (c->e :text))
    (s/on-stage (c->e :stage))
    (s/position (c->e :position))
    (s/anchor (c->e :anchor))
    (s/scale (c->e :scale))))


(defn resetGame []
    (reset! component->entities {})
    (reset! entity->components {})
    (reset! entity-count 0)
    (reset! stage (js/PIXI.Stage. 0x66FF99))
    (setup (entities @stage))
    )

(defn savegame []
  (let [c->e @component->entities]
  (s/serialize (c->e :position)))
  )

(defn loadgame []
  (let [c->e @component->entities]
  (s/deserialize (c->e :position)))
  )

(defn animate []
  (let [c->e @component->entities]
    (.render renderer @stage)
    (s/player-input (c->e :player-input))
    (s/execute-actions (c->e :actions))
    (s/move-background (c->e :actions))
    (s/gravity (c->e :gravity))
    (s/movement-caps (c->e :velocity))
    (s/friction (c->e :acceleration))
    (s/accelerate (c->e :acceleration))
    (s/push (c->e :pushable) (c->e :player-input))
    (s/goal? (c->e :collidable) (c->e :player-input))
    (s/collide (c->e :collidable))
    (s/move (c->e :velocity))
    (s/position (c->e :position))
    (s/fps-counter (c->e :fps-counter))
    (js/requestAnimationFrame @animate-ref)))


(reset! animate-ref animate)

(setup (entities @stage))
(js/requestAnimationFrame @animate-ref)
