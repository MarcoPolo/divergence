(ns divergence.timeviz
  "Responsible for showing timelines")

(enable-console-print!)

(def renderer (js/PIXI.autoDetectRenderer. 800 200))

(.appendChild
 (js/document.getElementById "timestream-viz")
 (.-view renderer))

(def stage (js/PIXI.Stage. 0x181818))

(def graphics (js/PIXI.Graphics.))
(.addChild stage graphics)

(.clear graphics)

(.render renderer stage)

(println "hey")

(set! js/foo "hey")

(def offset-cache (atom {}))

(defn find-time-offset [timestream origin-timeline-number]
  (if (= origin-timeline-number 0)
    0
    (if-let [offset (@offset-cache origin-timeline-number)]
      offset
      (let [prev-node (get-in timestream [origin-timeline-number 0 :prev-node])
            prev-timeline (first prev-node)
            prev-time (second prev-node)
            offset (+ prev-time (find-time-offset timestream prev-timeline))]
        (swap! offset-cache assoc origin-timeline-number offset)
        offset))))

(defn normalize-timeline
  "Add an offset to timelines so that times match across timelines"
  [timestream timeline]
  (let [first-node (-> timeline first :prev-node)
        nodes (rest (map :prev-node timeline))
        timeline-number (ffirst nodes)]
    ;; Check if there is even a timeline difference between the first and second node
    (if (= (ffirst nodes) (first first-node))
      nodes
      (map #(update-in % [1] (partial + (find-time-offset timestream timeline-number))) nodes))))

(defn draw-time-node
  ([[timeline time-event] color]
   (when (= 0 (mod time-event 10))
     (.beginFill graphics color 1)
     (.drawCircle graphics (+ 20 time-event) (* 10 (+ 2 timeline)) 4)
     (.endFill graphics)))
  ([node]
   (draw-time-node node 0xffffff)))

(defn render-stage []
  (.render renderer stage))

(defn print-timestream [timestream]
  (.clear graphics)
  (doseq [timeline timestream
          time-event (take-nth 16 (normalize-timeline timestream timeline))]
    (draw-time-node time-event))
  (render-stage))

(comment
  (print-timestream (:timestream js/foo))

  (:timeline js/foo)
  (:prev-node js/foo)
  (:traveled-back js/foo)
  (keys (first (first (:timestream js/foo))))


  (keys (:timestream js/foo))

  (map :prev-node (nth (:timestream js/foo) 1))
  (map :prev-node (nth (:timestream js/foo) 2))
  (get-in (:timestream js/foo) [0 0 :prev-node 1])
  (get-in (:timestream js/foo) [1 0 :prev-node 1])
  (get-in (:timestream js/foo) [2 0 :prev-node 1])
  (get-in (:timestream js/foo) [3 0 :prev-node 1])
  (range 1 3)

  (reset! offset-cache {})
  offset-cache
  @offset-cache
  (find-time-offset (:timestream js/foo) 2) ;276



  (count :timestream)

  )
