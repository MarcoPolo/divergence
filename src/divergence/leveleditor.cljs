(ns divergence.leveleditor
  (:require [divergence.component :as c]
            [divergence.entity :as e]))

(def canvas (js/document.getElementById "game"))

(defn parse-click [event]
	(let [cx (.-pageX event)
		  cy (.-pageY event)
		  left-offset (- (.-offsetLeft event) (.-scrollLeft event))
		  top-offset (- (.-offsetTop event) (.-scrollTop event))
		  x (- cx left-offset)
		  y (- cy top-offset)
		  ;height (.height canvas)
		  ;width (.width canvas)
		]
    (. js/console (log "clicked " x ", " y ""))
    ))


(defn set-click []
  (set! (.-onclick js/document) parse-click))
