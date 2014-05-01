(ns divergence.entity.enemies
  (:require [divergence.entity :as e]
            [divergence.textures :as textures]
            ))


(defn cljs-to-js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings."
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.strobj (reduce (fn [m [k v]]
               (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))

;;------------------------------------------------
;;PATH DEFINITIONS--------------------------------
;;------------------------------------------------

;;the path definitions are to follow [[vx1 vy1] [vx2 vy2] [vx3 vy3] ...]
;;then loop back, so they should be loopable patterns
;;vx and vy are acceleration for x and y. This is so the enemy can move various speeds
;;during their route

(def normal-path [2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0, 2 0])

(def updown-path [0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2, 0 2])

(def bounce-path [])

;;map holding move paths
(def move-paths {
                 :normal normal-path
                 :bounce bounce-path
                 :updown updown-path
                 })

;;------------------------------------------------
;;EFFECT DEFINITIONS------------------------------
;;------------------------------------------------

;;define what effect the enemy has here
;;effects are only applicable to the player
;;function structure is being defined, not sure how to implement this yet

(defn enemy-effect-one [player enemy]
  (set! (.-textures (e/entity-atom->ref player)) (cljs-to-js (map textures/textures e/catAnimation)))
  )

(defn enemy-effect-two [player enemy]
  (set! (.-textures (e/entity-atom->ref player)) (cljs-to-js (map textures/textures e/batAnimation)))
  (let [{[x y rot] :position} @player]
    (swap! player assoc-in [:position] [(- x 200) y rot]))
  )

(defn enemy-effect-three [player enemy]
  (let [{[x y rot] :position} @player]
    (swap! player assoc-in [:position] [(- x 200) y rot]))
  )

(defn enemy-effect-four [player enemy]
  (set! (.-textures (e/entity-atom->ref player)) (cljs-to-js (map textures/textures e/catAnimation)))
  (let [{[x y rot] :position} @player]
    (swap! player assoc-in [:position] [(- x 200) y rot]))
  )

(def effect-map {
                 0 enemy-effect-three
                 1 enemy-effect-one
                 2 enemy-effect-two
                 3 enemy-effect-four
                 4 enemy-effect-two
                 })

(defn effects [player enemy]
  ((effect-map (@enemy :effect)) player enemy))
;;------------------------------------------------
;;ENEMY DEFINITIONS-------------------------------
;;------------------------------------------------

;;organization - enemy entities should be passed their move paths here
(def flappy-straight (partial e/enemy 1 1 [e/enemyATextureRight] normal-path 0 false))
(def flappy (partial e/enemy 1 1 [e/enemyATextureRight] normal-path 0 true))
(def flappy2 (partial e/enemy 1 1 [e/enemyATextureRight] updown-path 0 true))
(def flappy3 (partial e/enemy 1 1 [e/enemyATextureRight] normal-path 2 true))
(def flappy4 (partial e/enemy 1 1 [e/enemyATextureRight] updown-path 2 true))
(def flappy5 (partial e/enemy 1 1 [e/enemyATextureRight] normal-path 2 false))
(def shark (partial e/enemy 0.3 0.3 [e/enemyBTextureLeft] normal-path 3 true))
(def shark2 (partial e/enemy 0.3 0.3 [e/enemyBTextureRight] normal-path 3 false))
