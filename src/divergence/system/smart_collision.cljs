(ns divergence.system.smart-collision
  "A Better Collision detection")

;; Some arbitrary threshold for things that should be considered
;; for collision detection.
(def closeness-threshold 500)


(defn distance [x1 y1 x2 y2]
  (Math/sqrt
   (+
    (Math/pow (- x1 x2) 2)
    (Math/pow (- y1 y2) 2))))

(defn filter-things-close-to
  "Filter a list of entities to only things that are close to
   some center entity"
  [center-e entities]
  (let [{[center-x center-y _] :position} center-e]
    (remove
     (fn [{[other-x other-y _] :position}]
       (< closeness-threshold (distance center-x center-y other-x other-y)))
     entities)))

(filter-things-close-to {:position [10 10 0]} [{:position [10 20 0]} {:position [40 500 0]}])
(distance 10 10 40 500)
