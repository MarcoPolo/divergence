(ns divergence.entity.levels
  (:require [divergence.entity :as e]
            [divergence.component :as c]
            [divergence.renderer :as renderer]
            [divergence.camera :as camera]))


;; The prologue level definition
(defn prologue [stage]
  [(e/timestream)
   (e/player stage)
   (e/some-text stage)
   (e/goal 150 0 stage)
   (e/vertical-full-block 0 -40 :b1 stage)
   (e/horizontal-full-block 0 560 :b3 stage)
   (e/horizontal-full-block 760 560 :b4 stage)
   (e/backgroundOne stage)
   (e/horizontal-full-block 1540 560 :b5 stage)
   ])

;;level 1 definition
(defn levelOne [stage]
  [(e/timestream)
   (e/player stage)
   (e/goal 100 100 stage)
   ])

;;level 2 definition
(defn levelTwo [stage]
  [(e/timestream)
   (e/player stage)
   (e/goal 100 100 stage)

   ])
