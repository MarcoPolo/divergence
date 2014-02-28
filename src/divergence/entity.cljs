(ns divergence.entity
  (:require [divergence.component :as c]))


(defn entity [components]
  (reduce
   (fn [acc component]
     (assoc acc (:name component) (:attr component)))
   {}
   components))


(defn bunny [stage]
  (entity [(c/named :bunny)
           (c/sprite :divergence.textures/bunny)
           c/create-ref
           c/player-input
           c/has-actions
           c/movable
           (c/position 90 50 0)
           (c/on-stage stage)
           (c/friction 1)
           c/collidable
           (c/scale 1 1)
           c/accelerates
           (c/gravity [0 .2 0])
           ]))

(defn block [scale-x scale-y x y stage]
  (entity [(c/named :block)
           (c/sprite :divergence.textures/block)
           c/create-ref
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
           (c/text "Hello World" #js {:font "20px Arial" :fill "black"})
           (c/position 20 10 0)
           c/fps-counter
           (c/on-stage stage)]))

(defn timestream []
  (entity [(c/timestream)]))
