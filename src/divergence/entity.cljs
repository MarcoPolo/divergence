(ns divergence.entity
  (:require [divergence.component :as c]
            [divergence.renderer :as renderer]
            [divergence.camera :as camera]))

;;-------------------------------------------------
;;Global Entity Properties-------------------------
;;-------------------------------------------------
(def normal-gravity 0.4)

;;-------------------------------------------------
;;Texture Definitions------------------------------
;;-------------------------------------------------
(def pr1 :divergence.textures/playerright1)
(def pr2 :divergence.textures/playerright2)
(def pr3 :divergence.textures/playerright3)
(def pr4 :divergence.textures/playerright4)

(def pl1 :divergence.textures/playerleft1)
(def pl2 :divergence.textures/playerleft2)
(def pl3 :divergence.textures/playerleft3)
(def pl4 :divergence.textures/playerleft4)

(def pj1 :divergence.textures/playerJump1)
(def pj2 :divergence.textures/playerJump2)
(def pj3 :divergence.textures/playerJump3)
(def pj4 :divergence.textures/playerJump4)

(def pf :divergence.textures/playerfront)
(def pb :divergence.textures/playerback)

(def blockTexture :divergence.textures/block)
(def boxTexture :divergence.textures/box)
(def goalTexture :divergence.textures/goal)
(def bgTexture :divergence.textures/bg)

(def ropeTexture :divergence.textures/rope)
(def keyTexture :divergence.textures/key)
(def pushButtonTexture :divergence.textures/push-button)
(def doorClosedTexture :divergence.textures/door-closed)
(def doorOpenTexture :divergence.textures/door-open)
(def treasureChestTexture :divergence.textures/treasure-chest)
(def flowerTexture :divergence.textures/flower)

(def candleATexture :divergence.textures/candleA)
(def candleBTexture :divergence.textures/candleB)

(def shipTexture :divergence.textures/ship)

(def starTileTextureA :divergence.textures/starTileA)
(def starTileTextureB :divergence.textures/starTileB)
(def starTileTextureC :divergence.textures/starTileC)
(def starTileTextureD :divergence.textures/starTileD)
(def starTileTextureE :divergence.textures/starTileE)
(def starTileTextureF :divergence.textures/starTileF)
(def starTileTexturePrime :divergence.textures/starTilePrime)

(def metalTileTextureA :divergence.textures/metalTileA)
(def metalTileTextureB :divergence.textures/metalTileB)
(def metalTileTextureC :divergence.textures/metalTileC)

(def groundTileTextureA :divergence.textures/groundTileA)
(def groundTileTextureB :divergence.textures/groundTileB)
(def groundTileTextureC :divergence.textures/groundTileC)

(def oceanTileTextureA :divergence.textures/oceanTileA)
(def oceanTileTextureB :divergence.textures/oceanTileB)
(def oceanTileTextureC :divergence.textures/oceanTileC)

(def chocolateTileTextureA :divergence.textures/chocolateTileA)
(def chocolateTileTextureB :divergence.textures/chocolateTileB)
(def chocolateTileTextureC :divergence.textures/chocolateTileC)
(def chocolateTileTextureD :divergence.textures/chocolateTileD)
(def chocolateTileTextureE :divergence.textures/chocolateTileE)
(def chocolateTileTextureF :divergence.textures/chocolateTileF)
(def chocolateTileTextureG :divergence.textures/chocolateTileG)
(def chocolateTileTextureH :divergence.textures/chocolateTileH)
(def chocolateTileTextureI :divergence.textures/chocolateTileI)
(def chocolateTileTextureJ :divergence.textures/chocolateTileJ)

(def backgroundOneTexture :divergence.textures/backgroundOne)
(def backgroundTwoTexture :divergence.textures/backgroundTwo)
(def backgroundThreeTexture :divergence.textures/backgroundThree)
(def backgroundFourTexture :divergence.textures/backgroundFour)
(def backgroundFiveTexture :divergence.textures/backgroundFive)

(def portalOneTexture :divergence.textures/portalOne)
(def portalTwoTexture :divergence.textures/portalTwo)
(def portalThreeTexture :divergence.textures/portalThree)

(def catTextureA :divergence.textures/catA)
(def catTextureB :divergence.textures/catB)
(def catTextureC :divergence.textures/catC)

(def batTextureA :divergence.textures/batA)
(def batTextureB :divergence.textures/batB)

(def cupcakeTextureA :divergence.textures/cupcakeA)
(def cupcakeTextureB :divergence.textures/cupcakeB)
(def cupcakeTextureC :divergence.textures/cupcakeC)

(def donutTextureA :divergence.textures/donutA)
(def donutTextureB :divergence.textures/donutB)
(def donutTextureC :divergence.textures/donutC)
(def donutTextureD :divergence.textures/donutD)
(def donutTextureE :divergence.textures/donutE)

(def enemyATextureRight :divergence.textures/enemyRight1)
(def enemyATextureLeft :divergence.textures/enemyLeft1)
(def enemyBTextureRight :divergence.textures/enemyRight2)
(def enemyBTextureLeft :divergence.textures/enemyLeft2)

(def jumpAnimationRight [pj1 pj2])
(def jumpAnimationLeft [pj3 pj4])
(def walkAnimationRight [pr1 pr2 pr3 pr4])
(def walkAnimationLeft [pl1 pl2 pl3 pl4])

(def catAnimation [catTextureA catTextureB catTextureC])

(def batAnimation [batTextureA batTextureB])

(def cupcakeAnimation [cupcakeTextureA cupcakeTextureB cupcakeTextureC])

(def donutAnimation [donutTextureA donutTextureB donutTextureC donutTextureD donutTextureE])

;;-------------------------------------------------
;;Entity Methods-----------------------------------
;;-------------------------------------------------
(def entity->components
  "A map to an entity and a list of its components"
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
  (if-let [unique-atom (@entity-atom->unique-entity-atom e-atom)]
    (or
     (get @unique-atom component-keyword)
     (get @e-atom component-keyword))
    (get @e-atom component-keyword)))

(defn entity-atom->ref [e-atom]
  (entity-atom->component-val e-atom :ref))

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

;;-------------------------------------------------
;;Entity Definitions-------------------------------
;;-------------------------------------------------
(defn block [scale-x scale-y x y pname stage]
  (entity [(c/named pname)
           (c/unique (c/sprite [blockTexture]))
           (c/entity-type :tile)
           (c/position x y 0)
           (c/scale scale-x scale-y)
           c/collidable
           (c/friction 5)
           (c/on-stage stage)]))

(defn tile [scale-x scale-y texture x y pname stage]
  (entity [(c/named pname)
           (c/unique (c/sprite texture))
           (c/entity-type :tile)
           (c/position x y 0)
           (c/scale scale-x scale-y)
           c/collidable
           (c/friction 5)
           (c/on-stage stage)]))

(defn npc [scale-x scale-y texture effect x y pname move-path stage]
  (entity [(c/named pname)
           (c/unique (c/sprite [texture]))
           (c/entity-type :npc)
           (c/position x y 0)
           (c/scale scale-x scale-y)
           (c/friction 5)
           (c/on-stage stage)
           (c/move-path move-path)
           (c/effect effect)
           c/path-index
           c/create-ref
           c/accelerates
           c/movable
           ]))

(defn enemy [scale-x scale-y texture move-path effect loop? x y pname stage]
  (entity [(c/named pname)
           (c/unique (c/sprite texture))
           (c/entity-type :enemy)
           (c/position x y 0)
           (c/scale scale-x scale-y)
           (c/friction 5)
           (c/on-stage stage)
           (c/move-path move-path)
           (c/effect effect)
           (c/path-loop loop?)
           c/path-index
           c/path-direction
           c/create-ref
           c/collidable
           c/accelerates
           c/movable
           (c/gravity [0 normal-gravity 0])
           ;(c/divergent pname)
           ]))

(defn player [stage]
  (entity [(c/unique (c/named :player))
           (c/unique (c/sprite [pf]))
           (c/position (/ camera/camera-width 3) -450 0)
           (c/unique c/player-input)
           (c/unique (c/on-stage stage))
           (c/unique c/collision-trigger)
           c/has-actions
           c/movable
           (c/friction 1)
           (c/scale 0.5 0.5)
           (c/gravity [0 normal-gravity 0])
           (c/entity-type :player)
           (c/holding? :nothing)
           (c/anchor 0 0)
           c/items
           c/pushing
           c/collidable
           c/accelerates
           c/can-jump
           c/climbing
           c/cleared
           ;c/button-pushed
           ;c/button-pushed-box-fall

           (c/divergent :player)
           (c/unique (c/player-time-traveler))
           ]))

(defn non-player [stage]
  (-> (player stage)
      (update-in [:unique] dissoc :player-time-traveler :player-input)
      (update-in [:unique] assoc :name :non-player)))

(defn goal [x y win-condition stage]
  (entity [(c/named :goal)
           (c/entity-type :goal)
           (c/sprite [portalOneTexture portalTwoTexture portalThreeTexture])
           c/create-ref
           (c/win-condition win-condition)
           (c/position x y 0)
           (c/on-stage stage)
           (c/anchor 0.5 0.5)
           (c/scale 0.75 0.75)]))

(defn background [texture stage]
  (entity [(c/named :bg)
           (c/entity-type :bg)
           (c/sprite [texture])
           (c/tiling-sprite texture)
           (c/on-stage stage)
           c/has-actions
           (c/unique c/player-input)
           c/create-ref
           c/movable
           (c/position -900 -900 0)
           (c/scale 1 1)
           ]))

(def backgroundOne (partial background backgroundOneTexture))
(def backgroundTwo (partial background backgroundTwoTexture))
(def backgroundThree (partial background backgroundThreeTexture))
(def backgroundFour (partial background backgroundFourTexture))
(def backgroundFive (partial background backgroundFiveTexture))

(defn box [pname x y stage]
  (entity [(c/named pname)
           (c/entity-type :obstacle)
           (c/sprite [boxTexture])
           c/collision-trigger
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
           (c/scale 1 1)
           ]))

(defn boxfloat [pname x y stage]
  (entity [(c/named pname)
           (c/entity-type :obstacle)
           (c/sprite [boxTexture])
           c/collision-trigger
           c/create-ref
           c/accelerates
           c/movable
           c/has-actions
           c/pushable
           c/collidable
           (c/friction 1)
           (c/gravity [0 0 0])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 1 1)
           ]))

(def horizontal-full-block
  (partial block 4 .1))
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
           (c/scale 1 1)
           (c/anchor 0 0)
           c/create-ref
           c/can-climb
           ]))

(def starTileA (partial tile 1 1 [starTileTextureA]))
(def starTileB (partial tile 1 1 [starTileTextureB]))
(def starTileC (partial tile 1 1 [starTileTextureC]))
(def starTileD (partial tile 1 1 [starTileTextureD]))
(def starTileE (partial tile 1 1 [starTileTextureE]))
(def starTileF (partial tile 1 1 [starTileTextureF]))
(def starTilePrime (partial tile 1 1 [starTileTexturePrime]))

(def metalTileA (partial tile 1 1 [metalTileTextureA]))
(def metalTileB (partial tile 1 1 [metalTileTextureB]))
(def metalTileC (partial tile 1 1 [metalTileTextureC]))

(def groundTileA (partial tile 1 1 [groundTileTextureA]))
(def groundTileB (partial tile 1 1 [groundTileTextureB]))
(def groundTileC (partial tile 1 1 [groundTileTextureC]))

(def oceanTileA (partial tile 1 1 [oceanTileTextureA]))
(def oceanTileB (partial tile 1 1 [oceanTileTextureB]))
(def oceanTileC (partial tile 1 1 [oceanTileTextureC]))

(def chocolateTileA (partial tile 1 1 [chocolateTileTextureA]))
(def chocolateTileB (partial tile 1 1 [chocolateTileTextureB]))
(def chocolateTileC (partial tile 1 1 [chocolateTileTextureC]))
(def chocolateTileD (partial tile 1 1 [chocolateTileTextureD]))
(def chocolateTileE (partial tile 1 1 [chocolateTileTextureE]))
(def chocolateTileF (partial tile 1 1 [chocolateTileTextureF]))
(def chocolateTileG (partial tile 1 1 [chocolateTileTextureG]))
(def chocolateTileH (partial tile 1 1 [chocolateTileTextureH]))
(def chocolateTileI (partial tile 1 1 [chocolateTileTextureI]))
(def chocolateTileJ (partial tile 1 1 [chocolateTileTextureJ]))

(def candle (partial tile 1 1 [candleATexture candleBTexture]))

(def ship (partial tile 1 1 [shipTexture]))

(def cat (partial tile 1 1 catAnimation))

(def bat (partial tile 1 1 batAnimation))

(def cupcake (partial tile 1 1 cupcakeAnimation))

(def donut (partial tile 1 1 donutAnimation))

(defn some-text [stage]
  (entity [(c/named :fps-counter)
           (c/unique (c/text "Hello World" #js {:font "20px Courier New" :fill "white"}))
           (c/position 20 10 0)
           c/fps-counter
           (c/on-stage stage)]))

(defn tutorial-text [text x y path loop? stage]
  (entity [(c/named :tutorial-text)
           (c/entity-type :text)
           (c/unique (c/text text #js {:font "16px Calibri" :fill "white"}))
           (c/position x y 0)
           (c/on-stage stage)
           (c/move-path path)
           (c/path-loop loop?)
           c/path-index
           c/movable
           c/path-direction]))

(defn key-block [x y stage]
  (entity [(c/named :key)
           (c/entity-type :item)
           (c/sprite [keyTexture])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.5 0.5)
           c/create-ref
           c/movable
           ;c/accelerates
           ;c/collidable
           ;(c/gravity [0 normal-gravity 0])
           ]))

(defn push-button-block [x y stage]
  (entity [(c/named :push-button)
           (c/entity-type :button)
           (c/sprite [pushButtonTexture])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.5 0.5)
           c/create-ref
           c/movable
           ;c/accelerates
           ;c/collidable
           ;(c/gravity [0 0.01 0])
           c/button-pushed
           ]))

(defn door [x y stage]
  (entity [(c/named :door-oc)
           (c/entity-type :door)
           (c/sprite [doorClosedTexture])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.7 0.7)
           c/create-ref
           c/gravity
           ]))

(defn push-button-box-fall-block [x y stage]
  (entity [(c/named :push-button-box-fall)
           (c/entity-type :button-fall)
           (c/sprite [pushButtonTexture])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.5 0.5)
           c/create-ref
           (c/gravity [0 normal-gravity 0])
           ]))

(defn treasure-chest-block [x y stage]
  (entity [(c/named :treasure-chest)
           (c/entity-type :button-fall)
           (c/sprite [treasureChestTexture])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.6 0.6)
           c/create-ref
           (c/gravity [0 normal-gravity 0])
           c/button-pushed
           ]))

(defn donut-block [x y stage]
  (entity [(c/named :donut-animation)
           (c/entity-type :donut)
           (c/sprite donutAnimation)
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.1 0.1)
           c/create-ref
           (c/gravity [0 normal-gravity 0])
           ]))

(defn cupcake-block [x y stage]
  (entity [(c/named :cupcake-animation)
           (c/entity-type :cupcake)
           (c/sprite cupcakeAnimation)
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.1 0.1)
           c/create-ref
           (c/gravity [0 normal-gravity 0])
           ]))

(defn flower-block [x y stage]
  (entity [(c/named :flower)
           (c/entity-type :button-fall)
           (c/sprite [flowerTexture])
           (c/position x y 0)
           (c/on-stage stage)
           (c/scale 0.6 0.6)
           c/create-ref
           (c/gravity [0 normal-gravity 0])
           c/button-pushed
           ]))

;;-------------------------------------------------
;;Entity-timestream Methods------------------------
;;-------------------------------------------------
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
  ;; remove from the stage
  (let [unique-atom (@entity-atom->unique-entity-atom entity)
        container (:container @unique-atom)
        unique-keys (keys @unique-atom)
        normal-keys (keys @entity)
        ref (entity-atom->ref entity)]

    (when (not-any? nil? @entity) (.removeChild (.-parent ref) ref))
    ;(.removeChild container (:ref @unique-atom))

    ;; Remove the item from the unique-entity->component
    (swap! entity->components dissoc entity)

    ;; remove the entity from the lists
    (doseq [k normal-keys]
      (swap! normal-component->entities update-in [k] #(remove (partial = entity) %)))
    (doseq [k unique-keys]
      (swap! unique-component->entities update-in [k] #(remove (partial = unique-atom) %)))

    ;; remove mappings
    (swap! entity-atom->unique-entity-atom dissoc entity)
    (swap! unique-entity-atom->entity-atom dissoc entity)))

(defn filter-entities [component-name entities]
  (filter
   (fn [e] (entity-atom->component-val e component-name))
   entities))

;;-------------------------------------------------
;;Entity Group Definitions-------------------------
;;-------------------------------------------------
