(ns divergence.core
  (:require [divergence.component :as c]
            [divergence.entity :as e]
            [divergence.entity.levels :as levels]
            [divergence.system :as s]
            [divergence.leveleditor :as le]
            [divergence.audio :as a]
            [goog.dom :as dom]
            [divergence.renderer :as renderer]
            [divergence.timeviz]
            [divergence.system.time-travel :as tt]))

(enable-console-print!)

;;DATA DECLARATIONS==============================================
(def renderer renderer/renderer)

(def stage (atom renderer/stage))


(def container renderer/container)
(def camera renderer/camera)

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

(defn setup [entities]
  ;; Register all the entities in our maps
  (doseq [e entities] (e/register-entity! e))
  (let [c->e e/component->entities]
    (s/create-ref (c->e :sprite))
    (s/create-tiling-ref (c->e :tiling-sprite))
    (s/create-text (c->e :text))

    (s/to-stage @container (c->e :stage))
    (s/add-camera @camera @container)
    (s/on-stage @stage @camera)
    (a/startBGM (deref s/current-level))
    (s/position (c->e :position))
    (s/anchor (c->e :anchor))
    (s/scale (c->e :scale))
    (s/set-width-height (c->e :collidable))))



(comment
(defn next-level []
  (when (not (= s/level s/current-level))
   (swap! s/curent-level inc))))


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
  (let [c->e e/component->entities]
  (s/serialize (c->e :position))))

(defn loadgame []
  (let [c->e e/component->entities]
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

    (s/set-width-height (c->e :collidable))

    (s/player-input (c->e :player-input))
    (s/climbing (c->e :position))
    (s/execute-actions (c->e :actions))
    (s/move-background (c->e :actions))
    (s/animations (c->e :sprite))

    (s/gravity (c->e :gravity))
    (s/movement-caps (c->e :velocity))
    (s/friction (c->e :acceleration))
    (s/accelerate (c->e :acceleration))
    (s/collide (c->e :collidable))

    (s/push (c->e :pushable) (c->e :player-input))
    (when (s/goal? (c->e :position) (c->e :type))

      ;; We need to remove all current entities on this stage
      (doseq [things-with-positions (c->e :position)]
        (e/destroy-entity! things-with-positions))



      ;; Then we need add all the entites for the next level
      (doseq [thing (levels/level-1 stage)]
        (e/register-entity! thing))

      )
    (s/move (c->e :velocity))
    (s/position (c->e :position))
    (s/fps-counter (c->e :fps-counter)) ;; FPS counter
    (divergence.timeviz/render-stage) ;; Time viz

    (s/update-camera container (c->e :position))
    (s/pick-drop-item (c->e :position))
    (reset! globalID (js/requestAnimationFrame @animate-ref))))

(defn debug-slow-down
  "A way to slow down the game for debugging"
  []
  (let [slow-down-factor 4
        cnt (atom 0)]
    (fn []
      (swap! cnt inc)
      (if (zero? (mod @cnt slow-down-factor))
        (animate)
        (js/requestAnimationFrame @animate-ref)))))



(reset! animate-ref animate)

;(reset! animate-ref (debug-slow-down))

(setup (levels/prologue @stage))

(js/requestAnimationFrame @animate-ref)
