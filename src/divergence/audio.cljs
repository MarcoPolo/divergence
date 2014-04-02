(ns divergence.audio)

(def jumpSound (js/buzz.sound. "assets/sounds/fins__jumping.wav"))

(def sounds {
             :jump jumpSound
             })

(defn play-sound [key]
  (let [sound (sounds key)]
    (. sound load)
    (. sound play)
  ))
