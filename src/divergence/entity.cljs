(ns divergence.entity
  (:require [divergence.component :as c]
            [divergence.renderer :as renderer]))

(def entity->components
  "A map to an entity and a list of it's components"
  (atom {}))

(def normal-component->entities
  "A map to a component and a list of entities that use it"
  (atom {}))

(def entity-atom->unique-entity-atom
  (atom {}))

(def unique-entity-atom->entity-atom
  (atom {}))

(def unique-component->entities (atom {}))

(defn component->entities [component]
  (let [part1 (or (@normal-component->entities component) [])
        part2 (or (@unique-component->entities component) [])]
    (concat part1 part2)))

(defn entity-atom->component-val [e-atom component-keyword]
  (if-let [component-atom (@entity-atom->unique-entity-atom e-atom)]
    (or
     (get @component-atom component-keyword)
     (get @e-atom component-keyword))
    ;; if it isn't there we'll just try the ref at the entity
    (get @e-atom component-keyword)))

(defn entity-atom->ref [e-atom]
  (entity-atom->component-val e-atom :ref))

;; I'm lazy
(def e-atom->c-val entity-atom->component-val )

(def entity-count (atom 0))

(defn entity [components]
  (reduce
   (fn [acc component]
     (let [category (get (meta component) :category :normal)]
       (assoc-in acc [category (:name component)] (:attr component))))
   {}
   components))

(comment
  js/k
  js/l
  (get @(@entity-atom->unique-entity-atom js/l) :ref)
  (entity-atom->ref js/l)
  js/l
  @(@unique-entity-atom->entity-atom js/l)

  (entity-atom->ref js/l)
  entity->components

  (bunny :foo)
  unique-entity->component

  (component->entities :position)
  (first (@unique-component->entities :position))
  (first (@normal-component->entities :divergent))
  js/l
  (divergence.system/player-input (unique-component->entities ))
  (unique-entity->component )

  (bunny :foo)

  (block 0 0 1 1 :foo)
  (non-player-bunny :foo)

  (reduce #(or %1 %2) [[:foo :baz] nil])
  (component->entities :sprite)

  )

(defn bunny [stage]
  (entity [(c/named :bunny)
           (c/unique (c/sprite :divergence.textures/bunny))
           (c/unique c/player-input)
           (c/unique (c/on-stage stage))
           c/has-actions
           c/movable
           (c/position 90 50 0)
           (c/friction 1)
           c/collidable
           (c/scale 1 1)
           c/accelerates
           (c/gravity [0 .2 0])
           (c/divergent :player)
           (c/unique (c/player-time-traveler))]))

(defn non-player-bunny [stage]
  (-> (bunny stage)
      (update-in [:unique]dissoc :player-time-traveler :player-input)))


(defn block [scale-x scale-y x y stage]
  (entity [(c/named :block)
           (c/unique (c/sprite :divergence.textures/block))
           (c/position x y 0)
           (c/scale scale-x scale-y)
           c/collidable
           (c/friction 5)
           (c/on-stage stage)]))

(def horizontal-full-block
  (partial block 2 .1))

(def vertical-full-block
  (partial block .1 1.5))

(defn some-text [stage]
  (entity [(c/named :fps-counter)
           (c/unique (c/text "Hello World" #js {:font "20px Arial" :fill "white"}))
           (c/position 20 10 0)
           c/fps-counter
           (c/on-stage stage)]))

(defn timestream []
  (entity [(c/timestream)]))


(defn register-entity! [entity]
  (let [unique-components (:unique entity)
        normal-components (:normal entity)
        unique-entity-atom (atom unique-components)
        entity-atom (atom normal-components)]
    (swap! entity->components assoc @entity-count entity-atom)
    (swap! entity-count inc)
    (doseq [[n component] normal-components]
      (swap! normal-component->entities update-in [n] conj entity-atom))

    ;; Now register the unique components
    (swap! entity-atom->unique-entity-atom assoc entity-atom unique-entity-atom)
    (swap! unique-entity-atom->entity-atom assoc unique-entity-atom entity-atom)
    (doseq [[n component] unique-components]
      (swap! unique-component->entities update-in [n] conj unique-entity-atom))

    ;; return the normal-entity-atom and unique-entity-atom
    [entity-atom unique-entity-atom]))

(defn destroy-entity! [entity]
  ;; TODO implement this
  (println "I want to destroy an entity!")

  ;; remove from the stage
  (let [unique-atom (@entity-atom->unique-entity-atom entity)
        stage (:stage @unique-atom)]
    (.removeChild stage (:ref @unique-atom))

    ;; Remove from our internal hashmap
    #_(swap! normal-component->entities dissoc )
    ))

(def entities
  [(bunny renderer/stage)
   (some-text renderer/stage)
   (vertical-full-block 0 -40 renderer/stage)
   (vertical-full-block 760 -40 renderer/stage)
   (horizontal-full-block 0 560 renderer/stage)
   (timestream)])
