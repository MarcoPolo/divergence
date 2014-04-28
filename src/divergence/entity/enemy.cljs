(ns divergence.entity.enemies
  (:require [divergence.entity :as e]))

;;------------------------------------------------
;;PATH DEFINITIONS--------------------------------
;;------------------------------------------------

;;the path definitions are to follow [[ax1 ay1] [ax2 ay2] [ax3 ay3] ...]
;;then loop back, so they should be loopable patterns
;;ax and ay are acceleration for x and y. This is so the enemy can move various speeds
;;during their route

(def normal-path [])

(def bounce-path [])

;;map holding move paths
(def move-paths {
                 :normal normal-path
                 :bounce bounce-path
                 })

;;------------------------------------------------
;;ENEMY DEFINITIONS-------------------------------
;;------------------------------------------------

;;organization - enemy entities should be passed their move paths here
