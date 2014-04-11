(ns divergence.renderer)

(def container (atom (js/PIXI.DisplayObjectContainer.)))
(def camera (atom (js/PIXI.DisplayObjectContainer.)))

(def stage (js/PIXI.Stage. 0x181818))
(def renderer (js/PIXI.autoDetectRenderer. 800 600))

(.appendChild
 (js/document.getElementById "game-container")
 (.-view renderer))

