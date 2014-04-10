(ns divergence.core
  (:require [divergence.component :as c]
            [divergence.entity :as e]
            [divergence.system :as s]
            [divergence.leveleditor :as le]
            [goog.dom :as dom]
            [divergence.renderer :as renderer]
            [divergence.timeviz]
            [divergence.system.time-travel :as tt]))

(enable-console-print!)

;;DATA DECLARATIONS==============================================
(def renderer renderer/renderer)

(def stage (atom renderer/stage))


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

(def timestream (atom [[{:prev-node [0 0]}]]))


;;GAME SETUP====================================================

(defn register-entity! [entity]
  (let [entity-atom (atom entity)]
    (swap! entity->components assoc @entity-count entity-atom)
    (swap! entity-count inc)
    (doseq [[n component] entity]
      (swap! component->entities update-in [n] conj entity-atom))))

(comment
(defn next-level []
  (when (not (= s/level s/current-level))
   (swap! s/curent-level inc))))

(defn setup [entities]
  ;; Register all the entities in our maps
  (doseq [e entities] (e/register-entity! e))
  (let [c->e e/component->entities]
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
    (s/set-width-height (c->e :collidable))))


;;MASTER FEATURES=================================================

(defn resetGame []
    (reset! component->entities {})
    (reset! entity->components {})
    (reset! entity-count 0)
    (reset! stage (js/PIXI.Stage. 0x66FF99))
    (setup e/entities))

;;Initial timestream
(def timestream (atom [[{:prev-node [0 0]}]]))

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
  (let [c->e e/component->entities]

    (.render renderer/renderer renderer/stage)

    (tt/time-travel timestream (c->e :divergent) (first (c->e :player-time-traveler)))

    ;; set width/height
    (s/set-width-height (c->e :collidable))

    (s/player-input (c->e :player-input))
    (s/climbing (c->e :position))
    (s/execute-actions (c->e :actions))
    (s/move-background (c->e :actions))

    (s/gravity (c->e :gravity))
    (s/movement-caps (c->e :velocity))
    (s/friction (c->e :acceleration))
    (s/accelerate (c->e :acceleration))
    (s/collide (c->e :collidable))

    (s/push (c->e :pushable) (c->e :player-input))
    (s/goal? (c->e :position) (c->e :player-input))
    (s/move (c->e :velocity))
    (s/position (c->e :position))


    ;; FPS counter
    (s/fps-counter (c->e :fps-counter))

    ;; Time viz
    (divergence.timeviz/render-stage)

    (s/update-camera container (c->e :position))
    (s/pick-drop-item (c->e :position))
    (reset! globalID (js/requestAnimationFrame @animate-ref))))

(defn debug-slow-down
  "A way to slow down the game for debugging"
  []
  (let [slow-down-factor 2
        cnt (atom 0)]
    (fn []
      (swap! cnt inc)
      (if (zero? (mod @cnt slow-down-factor))
        (animate)
        (js/requestAnimationFrame @animate-ref)))))


#_(reset! animate-ref animate)

(reset! animate-ref (debug-slow-down))

(setup e/entities)

(js/requestAnimationFrame @animate-ref)


(comment
  (@entity->components 0)

  (def timestream (get-in @(first (@component->entities :timestream)) [:timestream :timestream]))

  (get-in timestream [0 1598])
  (tt/reverse-time timestream 0 1598 1)


  (count (get-in @(first (@component->entities :timestream)) [:timestream :timestream 0]))
  (map :prev-node (get-in @(first (@component->entities :timestream)) [:timestream :timestream 536]))
 )
