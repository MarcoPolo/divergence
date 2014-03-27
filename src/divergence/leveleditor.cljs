(ns divergence.leveleditor
  (:require [divergence.component :as c]
            [divergence.entity :as e]))

;;DOM element for whatever
(def canvas (js/document.getElementById "game"))
;;===================================

;;click listener stuff
(defn parse-click [event]
	(let [coords (js/clickCoords event)]
    (. js/console (log "clicked " (.-x coords) ", " (.-y coords)))))

(defn set-click []
  (set! (.-onclick js/document) parse-click))
;;===================================

;;Level editor stuff
(def current-entity (atom {}));;planning to use this to store the selected entity
(def tray-items []);;entity options here- will add to tray

(defn tray [x y stage]
  (e/entity [(c/named :tray)
             (c/sprite e/boxTexture);;temp graphic
             c/create-ref
             c/movable;;to allow sliding in and out from bottom corner
             ;;i.e. open/close level editor
             (c/position x y 0);;temp position
             (c/on-stage stage)
             (c/scale 1 1)
             (c/interactive? 1)
             ]))

;;callback function for callback on click event for tray
(defn tray-out [mousedata]
  ;(. js/console (log "TEST"))
  )
