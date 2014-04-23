(ns divergence.audio
  )

;------------------------------
;Data Definitions
;------------------------------
(def jumpSound (js/buzz.sound. "assets/sounds/fins__jumping.wav"))
(def pickUpSound (js/buzz.sound. "assets/sounds/adriancalzon__pickup1.mp3"))
(def dropSound (js/buzz.sound. "assets/sounds/movingplaid_spray-can.wav"))
(def pushSound (js/buzz.sound. "assets/sounds/stanestane__push.wav"))
(def magicSound (js/buzz.sound. "assets/sounds/joe93barlow__protego.mp3"))
(def timeTravelSound (js/buzz.sound. "assets/sounds/timetravel.wav"))
(def bgm1 (js/buzz.sound. "assets/sounds/Mellowtron.mp3"))

(def sounds (atom {
             :jump      jumpSound
             :pickup    pickUpSound
             :drop      dropSound
             :push      pushSound
             :teleport  magicSound
             :time      timeTravelSound

             :bgm1      bgm1
             }))

;------------------------------
;Audio Functions
;------------------------------
(defn update-values [m f & args]
  (reduce (fn [r [k v]] (assoc r k (apply f v args))) {} m))

(defn play-sound [key]
  (let [sound (@sounds key)]
    (. sound load)
    (. sound play)
  ))

(defn play-bgm [key]
   (let [sound (@sounds key)]
   (.bind sound "ended" (fn [e] (. sound load) (. sound play)) false)
    (. sound load)
    (. sound play)
  ))

(defn startBGM [level]
  (when (= level 0) (play-bgm :bgm1))
    )


;------------------------------
;Volume Functions
;------------------------------
(defn decVolumeSub [sound]
  (. sound decreaseVolume))

(defn decVolume []
  (reset! sounds (update-values @sounds decVolumeSub)))


(defn incVolumeSub [sound]
  (. sound increaseVolume))
(defn incVolume []
  (reset! sounds (update-values @sounds incVolumeSub)))


(defn setVolumeSub [value sound]
  (. sound setVolume value))
(defn setVolume [value]
  (reset! sounds (update-values @sounds setVolumeSub value)))


(defn muteSub [sound]
  (. sound mute))
(defn mute []
  (reset! sounds (update-values @sounds muteSub)))


(defn unmuteSub [sound]
  (. sound unmute))
(defn unmute []
  (reset! sounds (update-values @sounds unmuteSub)))
