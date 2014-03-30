(ns divergence.entity
  (:require [divergence.component :as c]
            [divergence.renderer :as renderer]
            [divergence.camera :as camera]))

(def normal-gravity 0.2)

(def playerTexture :divergence.textures/player)
(def blockTexture :divergence.textures/block)
(def boxTexture :divergence.textures/box)
(def goalTexture :divergence.textures/goal)
(def bgTexture :divergence.textures/bg)
(def ropeTexture :divergence.textures/rope)
(def keyTexture :divergence.textures/key)

(def jumpAnimation [playerTexture playerTexture])
(def climbAnimation [playerTexture playerTexture playerTexture])
(def pushAnimation [playerTexture playerTexture])

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
>>>>>>> tons of work on time travel

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

  (reduce #(or %1 %2) [[:foo :baz] nil])
  (component->entities :sprite)

  )

(defn player [stage]
  (entity [(c/named :player)
           (c/unique (c/sprite [:divergence.textures/bunny]))
           (c/position (/ camera/camera-width 3) (/ camera/camera-height 3) 0)
           (c/unique c/player-input)
           (c/unique (c/on-stage stage))
           c/has-actions
           c/movable
           (c/friction 1)
           (c/scale 0.4 0.4)
           (c/gravity [0 normal-gravity 0])
           (c/entity-type :player)
           (c/holding? :nothing)
           c/items
           c/collidable

           c/accelerates
           c/can-jump
           c/climbing
           ]))

(defn goal [x y stage]
  (entity [(c/named :goal)
           (c/entity-type :goal)
           (c/sprite [goalTexture])
           c/create-ref
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 2 2)]))

(defn background [stage]
  (entity [(c/named :bg)
           (c/entity-type :bg)
           (c/sprite [bgTexture])
           (c/tiling-sprite bgTexture)
           (c/on-stage stage)
           c/has-actions
           c/player-input
           c/create-ref
           c/movable
           (c/position -500 0 0)
           (c/scale 1 1)
           ]))

(defn block [scale-x scale-y x y pname stage]
  (entity [(c/named pname)
           ;(c/sprite [blockTexture])
           (c/sprite [:divergence.textures/block])
           (c/entity-type :tile)
           c/create-ref
=======
           (c/gravity [0 .02 0])
           (c/divergent :player)
           (c/unique (c/player-time-traveler))]))


(defn non-player-bunny [stage]
  (-> (bunny stage)
      (dissoc :player-time-traveler :player-input)))


(defn block [scale-x scale-y x y stage]
  (entity [(c/named :block)
           (c/unique (c/sprite :divergence.textures/block))
>>>>>>> tons of work on time travel
           (c/position x y 0)
           (c/scale scale-x scale-y)
           c/collidable
           (c/friction 5)
           (c/on-stage stage)]))


(defn box [pname x y stage]
  (entity [(c/named pname)
           (c/entity-type :obstacle)
           (c/sprite [boxTexture])
           c/create-ref
           c/accelerates
           c/movable
           c/has-actions
           c/pushable
           c/collidable
           (c/friction 1)
           (c/gravity [0 normal-gravity 0])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale .5 .5)
           ]))

(def horizontal-full-block
  (partial block 2 .1))

(def vertical-full-block
  (partial block .1 1.5))

(def regular-block
  (partial block .1 .1))

(defn rope-block [x y stage]
  (entity [(c/named :rope)
           (c/entity-type :tool)
           (c/sprite [ropeTexture])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.5 5)
           c/create-ref
           c/can-climb
           ]))

(defn some-text [stage]
  (entity [(c/named :fps-counter)
           (c/unique (c/text "Hello World" #js {:font "20px Arial" :fill "white"}))
           (c/position 20 10 0)
           c/fps-counter
           (c/on-stage stage)]))

(defn key-block [x y stage]
  (entity [(c/named :key)
           (c/entity-type :item)
           (c/sprite [keyTexture])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.5 0.5)
           c/create-ref
           c/gravity
           ]))

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
    (dec @entity-count)

    ;; Now register the unique components
    (swap! entity-atom->unique-entity-atom assoc entity-atom unique-entity-atom)
    (swap! unique-entity-atom->entity-atom assoc unique-entity-atom entity-atom)
    (doseq [[n component] unique-components]
      (swap! unique-component->entities update-in [n] conj unique-entity-atom))))

(defn destroy-entity [entity]
  ;; TODO implement this
  (println "I want to destroy an entity!")
  )

(def entities
  [(bunny renderer/stage)
   (some-text renderer/stage)
   (vertical-full-block 0 -40 renderer/stage)
   (vertical-full-block 760 -40 renderer/stage)
   (horizontal-full-block 0 560 renderer/stage)
   (timestream)])
