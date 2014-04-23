(ns divergence.entity.levels
  (:require [divergence.entity :as e]
            [divergence.component :as c]
            [divergence.renderer :as renderer]
            [divergence.camera :as camera]))


;; The prologue level definition
(defn prologue [stage]
  [(e/timestream)
   (e/some-text stage)
   (e/goal 300 400 stage)
   (e/vertical-full-block 0 -40 :b1 stage)
   (e/horizontal-full-block 0 560 :b3 stage)
   (e/horizontal-full-block 760 560 :b4 stage)
   (e/player stage)
   (e/backgroundOne stage)
   (e/horizontal-full-block 1540 560 :b5 stage)
   ])

;;level 1 definition
(defn level-1 [stage]
  [(e/timestream)
   (e/player stage)
   (e/some-text stage)
   (e/goal 100 100 stage)
   ])

;;level 2 definition
(defn level-2 [stage]
  [(e/timestream)
   (e/player stage)
   (e/goal 100 100 stage)
   ])

;;level hashmap
(def levels {:prologue prologue
             :one  level-1
             :two  level-2
             })

(def get-levels [number]
  (when (= number 0) :prologue)
  (when (= number 1) :one)
  (when (= number 2) :two))
