(ns divergence.renderer)

(def stage (js/PIXI.Stage. 0x181818))
(def renderer (js/PIXI.autoDetectRenderer. 800 600))

(.appendChild
 (js/document.getElementById "game-container")
 (.-view renderer))

