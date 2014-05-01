(ns divergence.renderer)

(def container (atom (js/PIXI.DisplayObjectContainer.)))
(def camera (atom (js/PIXI.DisplayObjectContainer.)))

(def stage (js/PIXI.Stage. 0xffffff))
(def renderer (js/PIXI.autoDetectRenderer. 800 450))

(def blur (js/PIXI.BlurFilter.))
(def twist (js/PIXI.TwistFilter.))

(aset twist "angle" .5)
(aset twist "radius" 1)

(.appendChild
 (js/document.getElementById "game-container")
 (.-view renderer))

