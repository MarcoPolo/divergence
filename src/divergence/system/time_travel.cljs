(ns divergence.system.time-travel
  (:require [divergence.entity :as e]
            [divergence.timeviz :as timeviz]))

(def sample-entity {:foo 0 :bar 1})

(def sample-timeline
  [[{:prev-node :origin :value sample-entity}
    {:prev-node [0 0] :value (update-in sample-entity [:foo] inc)}]])

(defn create-timestream [origin-entity]
  [[{:prev-node [0 1] :entity origin-entity}]])

(defn conj-to-timestream [timestream timeline prev-node value]
  (update-in timestream [timeline] (fnil conj []) {:prev-node prev-node :value value}))

(defn get-prev-node [timestream [timeline time]]
  (get-in timestream [timeline time :prev-node]))

(defn reverse-time [timestream [timeline time-left-in-timeline] rewind-time]
  (if (> time-left-in-timeline rewind-time)
    [timeline (- time-left-in-timeline rewind-time)]
    (let [[prev-timeline prev-time] (get-in timestream [timeline 0 :prev-node])]
      #_(println "prev node is" [prev-timeline prev-time])
      #_(println "rewind" rewind-time)
      (reverse-time timestream [prev-timeline prev-time] (- rewind-time time-left-in-timeline)))))

(defn end-node-in-time?
  "true if it's the last node on a timeline"
  [timestream [timeline time]]
  (>= time (dec (count (nth timestream timeline)))))

(def next-timeline (conj-to-timestream sample-timeline 1 [0 1] {:foo 3 :bar 5}))
(conj-to-timestream next-timeline 1 [1 0] {:foo 7 :bar 2})


(defn save-entities-to-timestream! [timestream-entity entities]
  (let [{:keys [prev-node timeline timestream]} (:timestream @timestream-entity)]

    (let [ time-offset (timeviz/find-time-offset timestream (first prev-node))]
      #_(println "Printing at " prev-node)
      (timeviz/draw-time-node [(first prev-node) (+ time-offset (second prev-node))])
      #_(timeviz/render-stage))
    ;(timeviz/print-timestream (get-in @timestream-entity [:timestream :timestream]))


    ;; We've traveled back in time so we need to create a new timeline
    (when (get-in @timestream-entity [:timestream :traveled-back])

      #_(println "Entity: " (get-in timestream prev-node))


      (swap! timestream-entity assoc-in [:timestream :traveled-back] false)
      (swap! timestream-entity assoc-in [:timestream :prev-node] [(inc timeline) 0])
      (swap! timestream-entity update-in [:timestream :timeline] inc)
      ;; TODO create a new entity that lives on the other timeline
      (println (keys (:timestream @timestream-entity)))
      (println (keys @timestream-entity))
      )
    (let [{:keys [timestream timeline traveled-back]} (:timestream @timestream-entity)]
      (swap! timestream-entity
             assoc-in [:timestream :timestream]
             (conj-to-timestream timestream timeline prev-node (mapv deref entities))))))

(defn update-prev-node! [timestream-entity]
  (swap! timestream-entity update-in [:timestream :prev-node 1] inc))

(defn travel-back-in-time [timestream-entity player-entity]
  ;;TODO fix this so it isn't just looking at the player entity
  ;;TODO fix so we update more than just the player
  (let [actions (@player-entity :actions)]
    (when (actions :shift)
      ;; Reverse time
      (let [{:keys [timestream timeline prev-node]} (:timestream @timestream-entity)
            time (count (timestream timeline))
            time-flux-capacitor-value 1
            base-node (reverse-time timestream prev-node time-flux-capacitor-value)
            old-entity (first (:value (get-in timestream base-node)))
            time-offset (timeviz/find-time-offset timestream (first base-node))]

        (timeviz/draw-time-node [(first base-node) (+ time-offset (second base-node) )] 0xCA2F2F)
        #_(timeviz/render-stage)

        (set! js/foo (:timestream @timestream-entity))

        (when old-entity
          (reset! player-entity old-entity)
          (swap! timestream-entity assoc-in [:timestream :traveled-back] true)
          (swap! timestream-entity assoc-in [:timestream :prev-node] base-node))))))

(defn time-tick [timestream entities]
  (let [actions (@(first entities) :actions)]
    (travel-back-in-time timestream (first entities))
    (when (not (actions :shift))
      (save-entities-to-timestream! timestream entities)
      (update-prev-node! timestream))
    ))


(defn time-tick-divergent-entities
  "This will simple update the time of the divergent entities.
   The difference between this and th other time tick, is that this
   does not modify the timestream."
  [timestream entities]
  #_(doseq [e entities
          :let [{:keys [timeline prev-node]} (:divergent @e)
                new-entity (first (:value (get-in timestream [])))]]
    ;; Update the plaer
    ;; TODO
    #_(swap! e )))

(defn update-divergent-entities
  "This will do the actual update to the values of divergent entities"
  [timestream entities]
  (doseq [e entities
          :let [{:keys [timeline prev-node]} (:divergent @e)]]
    ;; Update the player
    #_(swap! e )))

(comment
  (def ts (atom (divergence.entity.entity [(divergence.component.timestream)])))
  (save-entities-to-timestream! ts [(atom {:foo 3 :bar 4})])
  (save-entities-to-timestream! ts [(atom {:foo 3 :bar 8})])
  (map deref [(atom {:foo 3 :bar 4})])
  ts
  )


