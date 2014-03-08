(ns divergence.leveleditor
  (:require [divergence.component :as c]
            [divergence.entity :as e]))

(def canvas (js/document.getElementById "game"))

(defn parse-click [event]
	(let [coords (js/clickCoords event)
		]
    (. js/console (log "clicked " (.-x coords) ", " (.-y coords)))
    ))


(defn set-click []
  (set! (.-onclick js/document) parse-click))
