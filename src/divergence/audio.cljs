(ns divergence.audio
  ;(:require [divergence.system :as s])
  )

(def jumpSound (js/buzz.sound. "assets/sounds/fins__jumping.wav"))
(def pickUpSound (js/buzz.sound. "assets/sounds/adriancalzon__pickup1.mp3"))
(def pushSound (js/buzz.sound. "assets/sounds/stanestane__push.wav"))
(def bgm1 (js/buzz.sound. "Mellowtron.mp3"))
(def bgm2 (js/buzz.sound. "Pamgaea.mp3"))

(def sounds {
             :jump    jumpSound
             :pickup  pickUpSound
             :push    pushSound

             :bgm1    bgm1
             :bgm2    bgm2
             })

(defn play-sound [key]
  (let [sound (sounds key)]
    (. sound load)
    (. sound play)
  ))

;;use this in core, may need adjustments
(defn startBGM [level]
  (case (level)
    0 (play-sound :bgm1)
    1 (play-sound :bgm2)
    ))
