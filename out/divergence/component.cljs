(ns divergence.component)

;;------------------------------------------------
;;Component Defns
;;------------------------------------------------

;;base map for components, added to this
(defn component [name attributes]
  "Simple returns a hashmap of the name and attributes"
  {:name name
   :attr attributes})

;;singular, non-parallax
(defn sprite [texture]
  (component :sprite
             {:texture texture}))

;;parallax, repeats
(defn tiling-sprite [texture]
  (component :tiling-sprite
             {:texture texture}))

;;add to rendering stage
(defn on-stage [stage]
  (component :stage stage))

(defn position [x y rot]
  (component :position
             [x y rot]))

(defn friction [f]
  (component :friction [f]))

;;sets where the (0,0) position of entity is within dims
(defn anchor [x y]
  (component :anchor
             {:x x :y y}))

(defn scale [x y]
  (component :scale
             {:x-scale x :y-scale y}))

;;an identifier
(defn named [n]
  (component :name n))

(defn gravity
  "Gravity settings should be:
   [x-acceleration y-acceleration rot-acceleration]"
  [gravity-settings]
  (component :gravity gravity-settings))

;;broad category for entity
(defn entity-type [entity-type]
  (component :type entity-type))

;;trajectory of entity
(defn move-path [path]
  (component :path path))

(defn path-loop [loop?]
  (component :path-loop loop?))

;;effects are defined in system
(defn effect [number]
  (component :effect number))

;;------------------------------------------------
;;Component Defs
;;------------------------------------------------

(def cleared (component :cleared false))

;;starting point of trajectory, currently must be divisible by 2
(def path-index
  (component :path-index 0))

(def path-direction
  (component :direction false))

;;flag value
(def items
  (component :items 0))

;;name of item held by entity
(defn holding? [itemName]
  (component :holding itemName))

;;marks for sprite creation
(def create-ref
  "Create a reference to the PIXI object"
  (component :create-ref true))

(def player-input
  (component :player-input true))

(def has-actions
  (component :actions #{}))

(def movable
  (component :velocity [0 0 0]))

(def pushable
  (component :pushable true))

(defn text [string style]
  (component :text
             {:string string
              :style style}))

(defn position [x y rot]
  (component :position
             [x y rot]))

;;Pass in a :key of what needs to be done/held to pass the goal
(defn win-condition [condition]
  (component :win-condition condition))

(def fps-counter
  (component :fps-counter true))

(def collidable
  (component :collidable true))

(def collision-trigger
  (component :collision-trigger true))

(def accelerates
  (component :acceleration [0 0 0]))

;;jump flag
(def can-jump
  (component :can-jump 1))

;;climb flag
(def can-climb
  (component :can-climb 1))

(def climbing
  (component :climbing 0))

(def pushing
  (component :pushing false))

(def button-pushed
  (component :button-pushed false))

(def button-pushed-box-fall
  (component :button-pushed-box-fall 0))

(def time-based-state
  "Anything whose state (e.g. position, velocity...) changes based of time"
  (component :time-base-state true))

(defn unique
  "A wrapper for anything that is unique to the entity instance, and can't be transferred"
  [component]
  (with-meta component {:category :unique}))

;;------------------------------------------------
;; Time Travel Stuff
;;------------------------------------------------
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

