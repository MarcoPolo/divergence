(ns divergence.entity.levels
  (:require [divergence.entity :as e]
            [divergence.component :as c]
            [divergence.renderer :as renderer]
            [divergence.camera :as camera]))


;; The prologue level definition
(defn prologue [stage]
  [(e/timestream)
   (e/some-text stage)
   (e/goal 100 350 stage)
   (e/metalTileC -100 560 :t1 stage)

   ;;test
   (e/box :box 150 -1000 stage)
   (e/rope-block 300 300 stage)

   (e/metalTileB 0 560 :t2 stage)
   (e/metalTileA 100 560 :t3 stage)
   (e/metalTileB 200 520 :t4 stage)
   (e/metalTileC 300 480 :t5 stage)
   (e/metalTileB 400 440 :t6 stage)
   (e/metalTileC 500 440 :t7 stage)
   (e/metalTileA 600 440 :t8 stage)
   (e/metalTileB 700 440 :t9 stage)
   (e/metalTileA 600 340 :t10 stage)
   ;(e/box :box 600 140 stage)
   (e/metalTileA 800 260 :t11 stage)
   ;(e/rope-block 750 0 stage)
   (e/metalTileB 900 440 :t12 stage)
   (e/metalTileC 1000 500 :t13 stage)
   (e/metalTileA 1100 440 :t14 stage)
   (e/metalTileB 1200 440 :t15 stage)
   (e/metalTileA 1400 440 :t16 stage)

   ;(e/vertical-full-block 0 -40 :b1 stage)
   ;(e/horizontal-full-block 0 560 :b3 stage)
   ;(e/horizontal-full-block 760 560 :b4 stage)
   (e/player stage)
   (e/backgroundOne stage)
   ])

;;level 1 definition
;;level1: player pushes button, door opens, and then can walk through portal
(defn levelone [stage]
  [(e/timestream)
   (e/some-text stage)
   (e/door-closed-block 1320 208 stage)
   ;(e/door-open-block 1320 208 stage)
   (e/goal 1320 240 stage)
   (e/groundTileC -100 530 :g1 stage)
   (e/groundTileB 0 530 :g2 stage)
   (e/groundTileA 100 530 :g3 stage)
   (e/groundTileB 200 530 :g4 stage)
   (e/groundTileC 300 530 :g5 stage)
   (e/groundTileB 400 530 :g6 stage)
   (e/groundTileC 500 530 :g7 stage)
   (e/groundTileA 600 530 :g8 stage)
   (e/groundTileB 700 530 :g9 stage)
   (e/push-button-block 750 400 stage)
   (e/groundTileC 1000 530 :g10 stage)
   (e/groundTileA 1100 450 :g11 stage)
   (e/groundTileB 1200 370 :g12 stage)
   (e/groundTileA 1300 290 :g13 stage)
   (e/player stage)
   (e/backgroundFour stage)
   ])

;;level 2 definition
(defn leveltwo [stage]
  [(e/timestream)
   (e/player stage)
   (e/goal 100 100 stage)

   (e/backgroundTwo stage)
   ])

(defn get-levels [number]
   (cond
    (= number 0) prologue
    (= number 1) levelone
    (= number 2) leveltwo))
