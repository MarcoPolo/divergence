(ns divergence.leveleditor
  (:require [divergence.component :as c]
            [divergence.entity :as e]))

;;DOM element for whatever
(def canvas (js/document.getElementById "game"))
;;===================================



;;Level editor stuff
(def current-entity (atom {}));;planning to use this to store the selected entity
(def tray-items []);;entity options here- will add to tray
(def lcamera [0 0])

;;setup
(defn setup [stage]
  (def lstage stage)
  (. js/console (log lstage))
  (def level nil))

(defn lreset []
  (def level nil))

;; (defn tray [x y stage]
;;   (e/entity [(c/named :tray)
;;              (c/sprite e/boxTexture);;temp graphic
;;              c/create-ref
;;              c/movable;;to allow sliding in and out from bottom corner
;;              ;;i.e. open/close level editor
;;              (c/position x y 0);;temp position
;;              (c/on-stage stage)
;;              (c/scale 1 1)
;;              (c/interactive? 1)
;;              ]))

;; ;;callback function for callback on click event for tray
;; (defn tray-out [mousedata]
;;   ;(. js/console (log "TEST"))
;;   )




;;click listener stuff
(defn parse-click [event]
	(let [coords (js/clickCoords event)]
    (. js/console (log "clicked " (.-x coords) ", " (.-y coords)))
    (swap! current-entity assoc-in [:position] [ (* (quot (- (.-x coords) (nth lcamera 0)) 50) 50) (* (quot (- (.-y coords) (nth lcamera 1)) 50) 50)  0])
    (def level @current-entity)
    ))


(defn set-click []
  (set! (.-onclick (js/document.getElementById "stage")) parse-click))
;;===================================



(defn selectentity [entity]
  (case entity
    "box" (def current-entity (atom (e/box 0 0 lstage)))
    "brickblock" (def current-entity (atom (e/block 1 1 0 0 lstage)))
    "floor" (def current-entity (atom (e/floor 0 0 lstage)))
    ))

(defn update-camera [camera]
  (def lcamera [(.-x (.-position @camera)) (.-y (.-position @camera))]))
