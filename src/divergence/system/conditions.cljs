(ns divergence.system.conditions)

;;-----------------------------------
;;Condition Functions
;;-----------------------------------
(defn no-condition [entity]
  true)

(defn button-condition [entity]
  (if (@entity :cleared)
    true
    false))

;;map to condition functions
(def conditions-map {
                 0 no-condition
                 1 no-condition
                 2 button-condition
                 })

(defn conditions
  "Add some logic here later"
  [level]
  (conditions-map level))


