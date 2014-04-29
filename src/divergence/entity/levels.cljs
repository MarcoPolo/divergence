(ns divergence.entity.levels
  (:require [divergence.entity :as e]
            [divergence.entity.enemies :as enemies]
            [divergence.component :as c]
            [divergence.renderer :as renderer]
            [divergence.camera :as camera]))


;;------------------------------------------------
;;LEVEL DEFINITIONS-------------------------------
;;------------------------------------------------

;;These level definitions are functions that pass arguments to each
;;entity in their local arrays. The arguments you need to pass in are defined in entity.cljs

(defn prologue [stage]
  [(e/timestream)
   (e/some-text stage)
   (e/goal 100 350 :nothing stage)
   (e/metalTileC -100 560 :t1 stage)
   (enemies/flappy 400 150 :flappy stage)
   (e/metalTileB 0 560 :t2 stage)
   (e/metalTileA 100 560 :t3 stage)
   (e/metalTileB 200 520 :t4 stage)
   (e/metalTileC 300 480 :t5 stage)
   (e/metalTileB 400 440 :t6 stage)
   (e/metalTileC 500 440 :t7 stage)
   (e/metalTileA 600 440 :t8 stage)
   (e/metalTileB 700 440 :t9 stage)
   (e/metalTileA 600 340 :t10 stage)
   (e/metalTileA 800 260 :t11 stage)
   (e/metalTileB 900 440 :t12 stage)
   (e/metalTileC 1000 500 :t13 stage)
   (e/metalTileA 1100 440 :t14 stage)
   (e/metalTileB 1200 440 :t15 stage)
   (e/metalTileA 1400 440 :t16 stage)

   (e/player stage)
   (e/backgroundOne stage)
   ])

;;level 1 definition
;;level1: player gets key, door opens, and then can walk through portal
(defn levelone [stage]
  [(e/timestream)
   (e/player stage)
   (e/some-text stage)
   (e/door 1320 430 stage)
   (e/goal 1350 470 :key stage)
   (e/starTilePrime -100 530 :s1 stage)
   (e/starTilePrime 0 430 :s2 stage)
   (e/starTilePrime 100 530 :s3 stage)
   (e/starTilePrime 200 430 :s4 stage)
   (e/starTilePrime 300 530 :s5 stage)
   (e/starTilePrime 500 530 :s7 stage)
   (e/starTilePrime 600 430 :s8 stage)
   (e/starTilePrime 700 530 :s9 stage)
   (e/key-block 630 418 stage)
   (e/starTilePrime 1000 530 :s10 stage)
   (e/starTilePrime 1100 530 :s11 stage)
   (e/starTilePrime 1200 530 :s12 stage)
   (e/starTilePrime 1400 530 :s13 stage)
   (e/backgroundTwo stage)
   ])

;;level 2 definition
;;level2: player pushes button, door opens, and then can walk through portal
(defn leveltwo [stage]
  [(e/timestream)
   (e/some-text stage)
   (e/door-atom 1320 208 stage)
   (e/goal 1350 255 :nothing stage)
   (e/groundTileC -100 530 :g1 stage)
   (e/groundTileB 0 530 :g2 stage)
   (e/groundTileA 100 530 :g3 stage)
   (e/groundTileB 200 530 :g4 stage)
   (e/groundTileC 300 530 :g5 stage)
   (e/groundTileB 400 530 :g6 stage)
   (e/groundTileC 500 530 :g7 stage)
   (e/groundTileA 600 530 :g8 stage)
   (e/groundTileB 700 530 :g9 stage)
   (e/push-button-block 750 500 stage)
   (e/groundTileC 1000 530 :g10 stage)
   (e/groundTileA 1100 450 :g11 stage)
   (e/groundTileB 1200 370 :g12 stage)
   (e/groundTileA 1300 290 :g13 stage)
   (e/player stage)
   (e/backgroundFour stage)
   ])

;;level 3 definition
;;level3: player pushes button, box falls down near portal so player can jump on box and then through the portal
(defn levelthree [stage]
  [(e/timestream)
   (e/some-text stage)
   (e/goal 1350 280 :nothing stage)
   (e/box :box2 150 -1000 stage)
   ;(e/box :box3 1300 400 stage)
   (e/oceanTileC -100 530 :o1 stage)
   (e/oceanTileB 0 530 :o2 stage)
   (e/oceanTileA 100 530 :o3 stage)
   (e/oceanTileB 200 530 :o4 stage)
   (e/oceanTileC 300 530 :o5 stage)
   (e/oceanTileB 400 530 :o6 stage)
   (e/oceanTileC 500 530 :o7 stage)
   (e/oceanTileA 600 530 :o8 stage)
   (e/oceanTileB 700 530 :o9 stage)
   (e/oceanTileC 500 320 :o10 stage)
   (e/push-button-box-fall-block 540 290 stage)
   (e/oceanTileC 1000 530 :o11 stage)
   (e/oceanTileA 1100 530 :o12 stage)
   (e/oceanTileB 1200 530 :o13 stage)
   (e/oceanTileA 1300 530 :o14 stage)
   (e/player stage)
   (e/backgroundFive stage)
   ])


;;level handler
(defn get-levels [number]
   (cond
    (= number 0) prologue
    (= number 1) levelone
    (= number 2) leveltwo
    (= number 3) levelthree))
