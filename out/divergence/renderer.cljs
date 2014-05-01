(ns divergence.renderer)

(def container (atom (js/PIXI.DisplayObjectContainer.)))
(def camera (atom (js/PIXI.DisplayObjectContainer.)))

(def stage (js/PIXI.Stage. 0xffffff))
(def renderer (js/PIXI.autoDetectRenderer. 800 450))

(.appendChild
 (js/document.getElementById "game-container")
 (.-view renderer))

