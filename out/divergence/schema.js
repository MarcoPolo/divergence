// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
/**
* Represents a unique point in time in a timestream
*/
divergence.schema.time_event_node = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.named.call(null,schema.core.Num,"The Timeline Number"),schema.core.named.call(null,schema.core.Num,"The event number in this timeline")], null);
divergence.schema.time_event = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev-node","prev-node",4421093582),schema.core.named.call(null,divergence.schema.time_event_node,"A reference to the previous node, possibly across timelines"),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.PersistentArrayMap.fromArray([schema.core.named.call(null,schema.core.Keyword,"A time unique name"),schema.core.named.call(null,schema.core.Any,"The value of the entity at that point in time")], true, false),new cljs.core.Keyword(null,"forks","forks",1111523171),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.named.call(null,schema.core.Num,"The Timeline Number of any forking timelines")], null)], null);
/**
* A sequence of time events. The position in the sequence is the event's time-event-node
*/
divergence.schema.timeline = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.schema.time_event], null);
/**
* A sequence of timelines
*/
divergence.schema.timestream = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.schema.timeline], null);
/**
* This will probably get refactored away
*/
divergence.schema.timestream_wrapper = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"prev-node","prev-node",4421093582),divergence.schema.time_event_node,new cljs.core.Keyword(null,"timeline","timeline",3232221107),schema.core.named.call(null,schema.core.Num,"The current timeline we are on"),new cljs.core.Keyword(null,"traveled-back","traveled-back",2676770925),schema.core.named.call(null,schema.core.Bool,"Wheter we have traveled back in time"),new cljs.core.Keyword(null,"timestream","timestream",2723317759),divergence.schema.timestream], null);

//# sourceMappingURL=schema.js.map