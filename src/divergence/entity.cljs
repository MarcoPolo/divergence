(ns divergence.entity
  (:require [divergence.component :as c]
            [divergence.system :as s]))

(def normal-gravity 0.2)

(def playerTexture (js/PIXI.Texture.fromImage "assets/img/player.png"))
(def blockTexture (js/PIXI.Texture.fromImage "assets/img/Brick_Block.png"))
(def boxTexture (js/PIXI.Texture.fromImage "assets/img/box.png"))
(def goalTexture (js/PIXI.Texture.fromImage "assets/img/door.png"))
(def bgTexture (js/PIXI.Texture.fromImage "assets/img/background.png"))
(def ropeTexture (js/PIXI.Texture.fromImage "assets/img/rope.png"))
(def keyTexture (js/PIXI.Texture.fromImage "assets/img/key.png"))

(def textures [playerTexture blockTexture boxTexture])

(defn entity [components]
  (reduce
   (fn [acc component]
     (assoc acc (:name component) (:attr component)))
   {}
   components))


(defn player [stage]
  (entity [(c/named :player)
           (c/sprite textures)
           (c/position (/ s/camera-width 3) (/ s/camera-height 3) 0)
           (c/on-stage stage)
           (c/friction 1)
           (c/scale 0.4 0.4)
           (c/gravity [0 normal-gravity 0])
           (c/entity-type :player)
           (c/holding? :nothing)
           c/items
           c/collidable
           c/create-ref
           c/player-input
           c/has-actions
           c/movable
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
           (c/sprite [blockTexture])
           (c/entity-type :tile)
           c/create-ref
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
           (c/text "Hello World" #js {:font "20px Arial" :fill "white"})
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
