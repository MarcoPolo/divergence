(ns divergence.physics
  (:require [divergence.entity :as e]))

(defn colliding? [e1 e2]
  (let [{[x1 y1 _] :position {w1 :width h1 :height} :dimensions} e1
        {[x2 y2 _] :position {w2 :width h2 :height} :dimensions} e2]
    (js/physics.isColliding x1 y1 w1 h1
                            x2 y2 w2 h2)))
