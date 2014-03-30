(ns divergence.system.time-travel
  (:require [divergence.entity :as e]
            [divergence.timeviz :as timeviz]
            [divergence.renderer :as renderer]
            [divergence.system :as s]))

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
  (get-in @js/foo [0 28 :forks])
  (get-in @js/bar [:divergent :current-node])
  )

(defn create-divergent-entity [time-event-node]
  (let [e-id (e/register-entity! (e/non-player-bunny renderer/stage))
        entity (@e/entity->components e-id)]
    (s/create-ref [entity])
    (s/on-stage [entity])
    (s/position [entity])
    (s/anchor [entity])
    (s/scale [entity])
    (swap! entity assoc-in [:divergent :current-node] time-event-node)))

(defn create-new-timeline
  "This will create a new timeline with the prev-node where the current-node is"
  [timestream player-entity]
  (let [number-of-timelines (count @timestream)
        {:keys [current-node time-name]} (@player-entity :divergent)
        new-timeline-number number-of-timelines]

    ;; Create the new (empty) timeline
    (swap! timestream conj [])

    ;; Mark the fact that a fork has occured here
    (swap! timestream update-in (conj current-node :forks) (fnil conj []) new-timeline-number)

    ;; place the player on the new timeline
    (swap! player-entity assoc-in [:divergent :current-node] [new-timeline-number 0])

    ;; Create a reference to the prev node in the root node of the timeline
    (swap! timestream assoc-in [new-timeline-number 0 :prev-node] current-node)

    ;; Save the state of the player in the root node of this new timeline
    (swap! timestream assoc-in [new-timeline-number 0 :value time-name] @player-entity)

    ;; Create the divergent entity
    (create-divergent-entity current-node)
    ))

(defn fork-entity
  "Fork the entity into another timeline, if a fork is found"
  [timestream entities])

(def rewind-speed 1)

(comment
  ;(update-in [[]] [0 1] (fnil identity []))
  (get-in @js/bar js/foo)
  js/bar
  js/baz
  js/foo

  e/entities
  @(@e/entity->components 6)
  (set! js/foo (:ref @(@e/entity->components 6)))


  (update-in @js/bar [0 1 :value :player] {:foo :bar})
  (swap! js/bar update-in [0 1] (fnil identity [])))

(defn tick-forward
  [timestream entities]
  (doseq [e entities
          :let [{:keys [current-node time-name]} (:divergent @e)
                future-node (update-in current-node [1] inc)
                future-value-path (conj future-node :value time-name)
                future-state (get-in @timestream future-value-path)]]

    ;; TODO we need to check if there is even a time event in the future

    ;; If a time event exists in this future state, we'll reset! the entity to that value
    ;; Otherwise we'll write the current value of the entity into the timestream
    (if future-state
      (reset! e future-state)
      (do
        ;; add a blank time-event if there isn't a time-event in there already
        (swap! timestream update-in future-node (fnil identity {}))


        (swap! e assoc-in [:divergent :current-node] future-node)
        (swap! timestream assoc-in future-value-path @e)))))

(defn tick-backwards
  [timestream entities]
  (doseq [e entities
          :let [{:keys [current-node time-name]} (:divergent @e)
                [current-timeline time-in-timeline] current-node
                past-node (reverse-time @timestream current-node rewind-speed)
                past-state (get-in @timestream (conj past-node :value time-name))]]
    ;; Check if we need to destory the entity
    (if (< time-in-timeline rewind-speed)
      ;; Destroy entity
      (e/destroy-entity! e)
      ;; Reset! the entity
      (reset! e past-state))))


(defn time-travel
  "Entry function for traveling through time forward and backwards"
  [timestream divergent-entities player-entity]
  (let [actions (@(@e/unique-entity-atom->entity-atom player-entity) :actions)
        traveling-back? (actions :travel-back)
        traveled-back? (get-in @player-entity [:player-time-traveler :traveled-back?])]

    ;; We need to create a new timeline for the player in this case
    (when (and (not traveling-back?) traveled-back?)
      (swap! player-entity assoc-in [:player-time-traveler :traveled-back?] false)
      (create-new-timeline timestream player-entity))

    (if traveling-back?
      ;; we are traveling back in time, so lets call tick-backwards
      (do
        (tick-backwards timestream divergent-entities)
        (swap! player-entity assoc-in [:player-time-traveler :traveled-back?] true))
      ;; Else we are going forward
      (tick-forward timestream divergent-entities))))



(comment
  (def ts (atom (divergence.entity.entity [(divergence.component.timestream)])))
  (save-entities-to-timestream! ts [(atom {:foo 3 :bar 4})])
  (save-entities-to-timestream! ts [(atom {:foo 3 :bar 8})])
  (map deref [(atom {:foo 3 :bar 4})])
  ts
  )


