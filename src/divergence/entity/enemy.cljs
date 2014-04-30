(ns divergence.entity.enemies
  (:require [divergence.entity :as e]))

;;------------------------------------------------
;;PATH DEFINITIONS--------------------------------
;;------------------------------------------------

;;the path definitions are to follow [[vx1 vy1] [vx2 vy2] [vx3 vy3] ...]
;;then loop back, so they should be loopable patterns
;;vx and vy are acceleration for x and y. This is so the enemy can move various speeds
;;during their route

(def normal-path [2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0])

(def bounce-path [])

;;map holding move paths
(def move-paths {
                 :normal normal-path
                 :bounce bounce-path
                 })

;;------------------------------------------------
;;EFFECT DEFINITIONS------------------------------
;;------------------------------------------------

;;define what effect the enemy has here
;;effects are only applicable to the player
;;function structure is being defined, not sure how to implement this yet

(defn enemy-effect-one [player enemies]
  ())


;;------------------------------------------------
;;ENEMY DEFINITIONS-------------------------------
;;------------------------------------------------

;;organization - enemy entities should be passed their move paths here
(def flappy (partial e/enemy 1 1 [e/enemyATextureRight] normal-path 0))
