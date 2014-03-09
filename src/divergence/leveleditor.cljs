(ns divergence.leveleditor
  (:require [divergence.component :as c]
            [divergence.entity :as e]))

(def canvas (js/document.getElementById "game"))

(defn parse-click [event]
	(let [coords (js/clickCoords event)]
    (. js/console (log "clicked " (.-x coords) ", " (.-y coords)))))

(defn set-click []
  (set! (.-onclick js/document) parse-click))

(def current-entity (atom {}))
(def tray-items [e/bunnyTexture e/blockTexture e/boxTexture])

(def graphics (js/PIXI.Graphics))

(defn tray [x y stage]
  (e/entity [(c/named :tray)
             (c/sprite e/boxTexture)
             c/create-ref
             c/movable
             (c/position x y 0)
             (c/on-stage stage)
             (c/scale 1 1)
             (c/interactive? true)
             ]))

(defn lolol []
  (js/println "hover"))

(defn tray-out [entities]
  (doseq [e entities]
    (when (= :tray (@e :name))
        (comment .-mouseover (e :ref) lolol)
    )))

;(defn slide-out [entity]
;  (swap! entity assoc-in [:position] [-100 -100 0]))
