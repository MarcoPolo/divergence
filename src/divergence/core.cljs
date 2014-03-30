(ns divergence.core
  (:require [divergence.component :as c]
            [divergence.entity :as e]
            [divergence.system :as s]
            [divergence.system.time-travel :as tt]
            [divergence.renderer :as renderer]
            [divergence.timeviz]
            [divergence.schema]))

(enable-console-print!)

(def animate-ref (atom nil) )

(defn setup [entities]
  ;; Register all the entities in our maps
  (doseq [e entities] (e/register-entity! e))
  (let [c->e e/component->entities]
    (s/create-ref (c->e :sprite))
    (s/create-tiling-ref (c->e :tiling-sprite))
    (s/create-text (c->e :text))
    (s/on-stage (c->e :stage))
    (s/position (c->e :position))
    (s/anchor (c->e :anchor))
    (s/scale (c->e :scale))
    (s/set-width-height (c->e :collidable))

    ;; Setup the time travel
    #_(let [timestream (first (c->e :timestream))]
      (tt/save-entities-to-timestream! timestream [(@entity->components 0)])
      (swap! timestream assoc-in [:timestream :prev-node] [0 0]))

    ))

(def timestream (atom [[{:prev-node [0 0]}]]))

;(get-in js/k [0 0])

(defn animate []
  (let [c->e e/component->entities]
    (.render renderer/renderer renderer/stage)

    ;; Time travel
    #_(let [timestream (first (c->e :timestream))]
      ;; TODO fix this so it works for all entities, I'm just being lazy here
      (tt/time-tick timestream [(@entity->components 0)])

      )

    (tt/time-travel timestream (c->e :divergent) (first (c->e :player-time-traveler)))

    (s/player-input (c->e :player-input))
    (s/execute-actions (c->e :actions))
    (s/gravity (c->e :gravity))
    (s/movement-caps (c->e :velocity))
    (s/friction (c->e :acceleration))
    (s/accelerate (c->e :acceleration))
    (s/move (c->e :velocity))
    (s/position (c->e :position))

    ;; set width/height
    (s/set-width-height (c->e :collidable))

    (s/collide (c->e :collidable))

    ;; FPS counter
    (s/fps-counter (c->e :fps-counter))

    ;; Time viz
    (divergence.timeviz/render-stage)

    (js/requestAnimationFrame @animate-ref)))


(reset! animate-ref animate)

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
