(ns divergence.system.smart-collision
  "A Better Collision detection")

;; Some arbitrary threshold for things that should be considered
;; for collision detection.
(def closeness-threshold 50)


(defn filter-things-close-to
  "Filter a list of entities to only things that are close to
   some center entity"
  [center-e entities])

