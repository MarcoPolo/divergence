(ns divergence.schema
  "The schemas certain constructs"
  (:require [schema.core :as s]))

(def time-event-node
  "Represents a unique point in time in a timestream"
  [(s/named s/Num "The Timeline Number") (s/named s/Num "The event number in this timeline")])

(def time-event
  {:prev-node (s/named time-event-node "A reference to the previous node, possibly across timelines")
   :value {(s/named s/Keyword "A time unique name") (s/named s/Any "The value of the entity at that point in time")}
   :forks [(s/named s/Num "The Timeline Number of any forking timelines")]})

(def timeline
  "A sequence of time events. The position in the sequence is the event's time-event-node"
  [time-event])

(def timestream
  "A sequence of timelines"
  [timeline])

(def timestream-wrapper
  "This will probably get refactored away"
  {:prev-node time-event-node
   :timeline (s/named s/Num "The current timeline we are on")
   :traveled-back (s/named s/Bool "Wheter we have traveled back in time")
   :timestream timestream})
