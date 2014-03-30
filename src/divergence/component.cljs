(ns divergence.component)

(defn component [name attributes]
  "Simple returns a hashmap of the name and attributes"
  {:name name
   :attr attributes})

(defn sprite [texture]
  (component :sprite
             {:texture texture}))

(defn tiling-sprite [texture]
  (component :tiling-sprite
             {:texture texture}))

(defn on-stage [stage]
  (component :stage stage))

(defn position [x y rot]
  (component :position
             [x y rot]))

(defn friction [f]
  (component :friction [f]))

(defn anchor [x y]
  (component :anchor
             {:x x :y y}))

(defn scale [x y]
  (component :scale
             {:x-scale x :y-scale y}))

(defn named [n]
  (component :name n))

(def create-ref
  "Create a reference to the PIXI object"
  (component :create-ref true))

(def player-input
  (component :player-input true))

(def has-actions
  (component :actions #{}))

(def movable
  (component :velocity [0 0 0]))

(defn text [string style]
  (component :text
             {:string string
              :style style}))

(def fps-counter
  (component :fps-counter true))

(def collidable
  (component :collidable true))

(def accelerates
  (component :acceleration [0 0 0]))

(defn gravity
  "Gravity settings should be:
   [x-acceleration y-acceleration rot-acceleration]"
  [gravity-settings]
  (component :gravity gravity-settings))


(defn unique
  "A wrapper for anything that is unique to the entity instance, and can't be transferred"
  [component]
  (with-meta component {:category :unique}))


;; Time travel stuff

(defn time-based-state
  "Anything whose state (e.g. position, velocity...) changes based of time. You should name it so it is recognizable in the timestream"
  [name]
  (component :time-based-state name))

(defn timestream
  "stores time-based state"
  []
  (component :timestream []))

(defn divergent
  "Anything that exists in a divergent timeline.
   It needs a unique name that represents that item across time.
   name should be a :keyword"
  [time-name]
  (component :divergent {:timeline 0
                         :prev-node [0 0]
                         :current-node [0 0]
                         :time-name time-name}))

(defn player-time-traveler
  "The difference here is that the player has the ability to create
   alternate timelines"
  []
  (component :player-time-traveler {:traveled-back? false})
  #_(-> (divergent :player)
      (assoc :name :player-time-traveler)
      (update-in [:attr] assoc :traveling-back false)))


(comment

  (divergent)
  (player-time-traveler)

  (timestream)
  )
