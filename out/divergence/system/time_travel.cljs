(ns divergence.system.time-travel
  (:require [divergence.entity :as e]
            [divergence.timeviz :as timeviz]
            [divergence.renderer :as renderer]
            [divergence.system :as s]))

(def rewind-speed 1)

(defn reverse-time [timestream [timeline time-left-in-timeline] rewind-time]
  (if (> time-left-in-timeline rewind-time)
    [timeline (- time-left-in-timeline rewind-time)]
    (let [[prev-timeline prev-time] (get-in timestream [timeline 0 :prev-node])]
      (reverse-time timestream [prev-timeline prev-time] (- rewind-time time-left-in-timeline)))))

(defn create-divergent-entity [time-event-node]
  (let [non-player (-> (e/non-player renderer/stage)
                       (assoc-in [:normal :divergent :current-node] time-event-node))
        [normal-e-atom unique-e-atom] (e/register-entity! non-player)]
    (s/create-ref [unique-e-atom])
    (s/to-stage @renderer/container [unique-e-atom])
    (s/position [normal-e-atom])
    (s/anchor [normal-e-atom])
    (s/scale [normal-e-atom])))

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
    (create-divergent-entity current-node)))

(defn fork-entity
  "Fork the entity into another timeline, if a fork is found"
  [timestream entities])


(defn tick-forward
  [timestream entities]
  (doseq [e entities
          :let [{:keys [current-node time-name]} (:divergent @e)
                future-node (update-in current-node [1] inc)
                future-value-path (conj future-node :value time-name)
                future-state (get-in @timestream future-value-path)
                n (:name @(@e/entity-atom->unique-entity-atom e))]]

    (timeviz/draw-time-node [(first future-node) (+ (second future-node) (timeviz/find-time-offset @timestream (first future-node)))])

    ;; If a time event exists in this future state, we'll reset! the entity to that value
    ;; Otherwise we'll write the current value of the entity into the timestream
    (if future-state
      ;; There is a future state, so let's check if there are forks too
      (if-let [forks (get-in @timestream (conj future-node :forks))]
        (do
          (reset! e future-state)
          (doseq [fork forks]
            ;; The fork represents the timeline number of the fork
            ;; All timelines start at 0 so we need to create a divergent
            ;; entity at [fork-timeline 0]
            (create-divergent-entity [fork 0])))
        ;; There are no forks, so we can just update the current entity
        (reset! e future-state))
      ;; Now check if the person is a player of not
      (if (= :player n)
        (do
          ;; add a blank time-event if there isn't a time-event in there already
          (swap! timestream update-in future-node (fnil identity {}))

          (swap! e assoc-in [:divergent :current-node] future-node)
          (swap! timestream assoc-in future-value-path @e))
        (do
          ;; We've reached the end of the timeline for a non-player, we must destroy them
          (e/destroy-entity! e))))))

(defn tick-backwards
  [timestream entities]
  (doseq [e entities
          :let [{:keys [current-node time-name]} (:divergent @e)
                unique-e (@e/entity-atom->unique-entity-atom e)
                [current-timeline time-in-timeline] current-node
                past-node (reverse-time @timestream current-node rewind-speed)
                past-state (get-in @timestream (conj past-node :value time-name))]]

    ;; Draw the node
    (timeviz/draw-time-node [(first past-node) (+ (second past-node) (timeviz/find-time-offset @timestream (first past-node)))]
                            0xCA2F2F)

    ;; Check if we need to destory the entity
    (if (and (<= time-in-timeline rewind-speed)
             (= :non-player (:name @unique-e)))
      ;; Destroy entity
      (e/destroy-entity! e)
      ;; Reset! the entity
      (reset! e past-state))))

(defn animate-timetravel-backwards
  []
  (aset renderer/stage "filters" (clj->js [renderer/blur renderer/twist])))

(defn clear-animations
  []
  (aset renderer/stage "filters" nil))

(defn time-travel
  "Entry function for traveling through time forward and backwards"
  [timestream divergent-entities player-entity]
  (let [normal-player-entity (@e/unique-entity-atom->entity-atom player-entity)
        actions (@normal-player-entity :actions)
        traveling-back? (actions :travel-back)
        traveled-back? (get-in @player-entity [:player-time-traveler :traveled-back?])]

    ;; We need to create a new timeline for the player in this case
    (when (and (not traveling-back?) traveled-back?)
      (swap! player-entity assoc-in [:player-time-traveler :traveled-back?] false)
      (create-new-timeline timestream normal-player-entity))

    (if traveling-back?
      ;; we are traveling back in time, so lets call tick-backwards
      (do
        (animate-timetravel-backwards)
        (tick-backwards timestream divergent-entities)
        (swap! player-entity assoc-in [:player-time-traveler :traveled-back?] true))
      ;; Else we are going forward
      (do
        (clear-animations)
        (tick-forward timestream divergent-entities)))))


