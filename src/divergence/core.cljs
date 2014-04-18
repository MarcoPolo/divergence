(ns divergence.core
  (:require [divergence.component :as c]
            [divergence.entity :as e]
            [divergence.system :as s]
            [divergence.leveleditor :as le]
            [goog.dom :as dom]))

(enable-console-print!)

;;DATA DECLARATIONS==============================================
(def renderer (js/PIXI.autoDetectRenderer. s/screen-width s/screen-height))
(aset (.-view renderer) "id" "stage")
(js/document.body.appendChild (.-view renderer))

(def stage (atom (js/PIXI.Stage. 0x66FF99 true)))

(def container (atom (js/PIXI.DisplayObjectContainer.)))
(def camera (atom (js/PIXI.DisplayObjectContainer.)))

(def entity->components
  "A map to an entity and a list of it's components"
  (atom {}))

(def component->entities
  "A map to a component and a list of entities that use it"
  (atom {}))

(def entity-count (atom 0))

(def animate-ref (atom nil))

;;GAME SETUP====================================================
(defn register-entity! [entity]
  (let [entity-atom (atom entity)]
    (swap! entity->components assoc @entity-count entity-atom)
    (swap! entity-count inc)
    (doseq [[n component] entity]
      (swap! component->entities update-in [n] conj entity-atom))))

(def entity-list)

(defn entities [stage]
  [;(le/tray 0 0 stage)
   (e/player stage)
   (e/some-text stage)

   (e/background stage)
   ])

(defn setup [entities]
  ;; Register all the entities in our maps
  (doseq [e entities] (register-entity! e))
  (let [c->e @component->entities]
    (s/create-ref (c->e :sprite))
    (s/create-tiling-ref (c->e :tiling-sprite))
    (s/create-text (c->e :text))

    (s/to-stage @container (c->e :stage))
    (s/add-camera @camera @container)
    (s/on-stage @stage @camera)

    (s/position (c->e :position))
    (s/anchor (c->e :anchor))
    (s/scale (c->e :scale))))

(defn updatex [entities]
  (doseq [e entities]
    (when (= (@e :name) :player)
      (def entity-list (cons (e/player2 stage (nth (@e :position) 0) (nth (@e :position) 1)) (rest entity-list)))
      )))


;;MASTER FEATURES=================================================

(defn resetGame []
    (reset! component->entities {})
    (reset! entity->components {})
    (reset! entity-count 0)
    (reset! stage (js/PIXI.Stage. 0x66FF99))
    (def entity-list (entities @stage))
    (setup entity-list))

(defn savegame []
  (let [c->e @component->entities]
  (s/serialize (c->e :position))))

(defn loadgame []
  (let [c->e @component->entities]
  (s/deserialize (c->e :position))))


;;RENDERING LOOP============================================
(defn animate []
  (let [c->e @component->entities]
    (.render renderer @stage)
    (when (not (nil? le/level))
      (updatex (c->e :position))
      (def entity-list (reverse (cons (first (reverse entity-list)) (cons le/level (rest (reverse entity-list))))))
      (reset! component->entities {})
      (reset! entity->components {})
      (reset! entity-count 0)
      (reset! stage (js/PIXI.Stage. 0x66FF99))
      (setup entity-list)
      ;(s/logx (c->e :position))
      (le/lreset))
    (s/player-input (c->e :player-input))
     ;(s/climbing (c->e :position))
     (s/execute-actions (c->e :actions))
     (s/move-background (c->e :actions))

     (s/interactive (c->e :sprite));;sets interactive property for sprites

     ;(s/gravity (c->e :gravity))
     (s/movement-caps (c->e :velocity))
     (s/friction (c->e :acceleration))
     (s/accelerate (c->e :acceleration))
     ;(s/push (c->e :pushable) (c->e :player-input))
     ;(s/goal? (c->e :collidable) (c->e :player-input))
     ;(s/collide (c->e :collidable))
     (s/move (c->e :velocity))
     (s/position (c->e :position))
    (s/fps-counter (c->e :fps-counter))
    (s/update-camera container (c->e :position))
    (le/update-camera container)
    (js/requestAnimationFrame @animate-ref)))


(reset! animate-ref animate)
(le/setup stage)
(le/set-click)
(def entity-list (entities @stage))
(setup entity-list)
(js/requestAnimationFrame @animate-ref)
