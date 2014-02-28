(ns divergence.system.time-travel)

(def sample-entity {:foo 0 :bar 1})

(def sample-timeline
  [[{:prev-node :origin :value sample-entity}
    {:prev-node [0 0] :value (update-in sample-entity [:foo] inc)}]])

(defn create-timestream [origin-entity]
  [[{:prev-node :origin :entity origin-entity}]])

(defn conj-to-timestream [timestream timeline prev-node value]
  (update-in timestream [timeline] (fnil conj []) {:prev-node prev-node :value value}))

(defn get-prev-node [timestream [timeline time]]
  (get-in timestream [timeline time :prev-node]))

(defn reverse-time [timestream [timeline time-left-in-timeline] rewind-time]
  (if (> time-left-in-timeline rewind-time)
    [timeline (- time-left-in-timeline rewind-time)]
    (let [[prev-timeline prev-time] (get-in timestream [timeline 0 :prev-node])]
      (println "prev node is" [prev-timeline prev-time])
      (println "rewind" rewind-time)
      (reverse-time timestream [prev-timeline prev-time] (- rewind-time time-left-in-timeline)))))

(defn end-node-in-time?
  "true if it's the last node on a timeline"
  [timestream [timeline time]]
  (>= time (dec (count (nth timestream timeline)))))

(def next-timeline (conj-to-timestream sample-timeline 1 [0 1] {:foo 3 :bar 5}))
(conj-to-timestream next-timeline 1 [1 0] {:foo 7 :bar 2})


(defn save-entities-to-timestream! [timestream-entity entities]
  (let [{:keys [prev-node timeline]} (:timestream @timestream-entity)]
    ;; We've traveled back in time so we need to create a new timeline
    (when (get-in @timestream-entity [:timestream :traveled-back])
      (swap! timestream-entity assoc-in [:timestream :traveled-back] false)
      (swap! timestream-entity assoc-in [:timestream :prev-node] [(inc timeline) 0])
      (swap! timestream-entity update-in [:timestream :timeline] inc)
      ;; TODO create a new entity that lives on the other timeline
      )
    (let [{:keys [timestream timeline traveled-back]} (:timestream @timestream-entity)]
      (swap! timestream-entity
             assoc-in [:timestream :timestream]
             (conj-to-timestream timestream timeline prev-node (mapv deref entities))))))

(defn update-prev-node! [timestream-entity]
  (swap! timestream-entity update-in [:timestream :prev-node 1] inc))

(def once (atom true))

(js/setInterval #(reset! once true) 500)

(defn travel-back-in-time [timestream-entity player-entity]
  ;;TODO fix this so it isn't just looking at the player entity
  ;;TODO fix so we update more than just the player
  (let [actions (@player-entity :actions)]
    (when (and (actions :shift) @once)
      #_(reset! once false)
      ;; Reverse time
      (let [{:keys [timestream timeline prev-node]} (:timestream @timestream-entity)
            time (count (timestream timeline))
            time-flux-capacitor-value 1
            base-node (reverse-time timestream prev-node time-flux-capacitor-value)
            old-entity (first (:value (get-in timestream base-node)))]
        (println "timeline is" timeline)
        (println "time is" timeline)
        (println "prev-node is" prev-node)
        (println "base node is" base-node)

        (when old-entity
          (reset! player-entity old-entity)
          (swap! timestream-entity assoc-in [:timestream :traveled-back] true)
          #_(swap! timestream-entity assoc-in [:timestream :timeline] (first base-node))
          #_(swap! timestream-entity assoc-in [:timestream :time] (second base-node))
          #_(swap! timestream-entity assoc-in [:timestream :timestream (inc timeline)] [{:prev-node ((get-in timestream base-node) :prev-node) :value [old-entity]}])
          (swap! timestream-entity assoc-in [:timestream :prev-node] base-node))
        ))))

(defn time-tick [timestream entities]
  (let [actions (@(first entities) :actions)]
    (travel-back-in-time timestream (first entities))
    (when (not (actions :shift))
      (save-entities-to-timestream! timestream entities)
      (update-prev-node! timestream))
    ))

(comment
  (def ts (atom (divergence.entity.entity [(divergence.component.timestream)])))
  (save-entities-to-timestream! ts [(atom {:foo 3 :bar 4})])
  (save-entities-to-timestream! ts [(atom {:foo 3 :bar 8})])
  (map deref [(atom {:foo 3 :bar 4})])
  ts
  )


