// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.system.smart_collision');
goog.require('cljs.core');
divergence.system.smart_collision.closeness_threshold = 500;
divergence.system.smart_collision.distance = (function distance(x1,y1,x2,y2){return Math.sqrt.call(null,(Math.pow.call(null,(x1 - x2),2) + Math.pow.call(null,(y1 - y2),2)));
});
/**
* Filter a list of entities to only things that are close to
* some center entity
*/
divergence.system.smart_collision.filter_things_close_to = (function filter_things_close_to(center_e,entities){var map__7025 = center_e;var map__7025__$1 = ((cljs.core.seq_QMARK_.call(null,map__7025))?cljs.core.apply.call(null,cljs.core.hash_map,map__7025):map__7025);var vec__7026 = cljs.core.get.call(null,map__7025__$1,new cljs.core.Keyword(null,"position","position",1761709211));var center_x = cljs.core.nth.call(null,vec__7026,0,null);var center_y = cljs.core.nth.call(null,vec__7026,1,null);var _ = cljs.core.nth.call(null,vec__7026,2,null);return cljs.core.remove.call(null,(function (p__7027){var map__7028 = p__7027;var map__7028__$1 = ((cljs.core.seq_QMARK_.call(null,map__7028))?cljs.core.apply.call(null,cljs.core.hash_map,map__7028):map__7028);var vec__7029 = cljs.core.get.call(null,map__7028__$1,new cljs.core.Keyword(null,"position","position",1761709211));var other_x = cljs.core.nth.call(null,vec__7029,0,null);var other_y = cljs.core.nth.call(null,vec__7029,1,null);var ___$1 = cljs.core.nth.call(null,vec__7029,2,null);return (divergence.system.smart_collision.closeness_threshold < divergence.system.smart_collision.distance.call(null,center_x,center_y,other_x,other_y));
}),entities);
});
divergence.system.smart_collision.filter_things_close_to.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,10,0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [10,20,0], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [40,500,0], null)], null)], null));
divergence.system.smart_collision.distance.call(null,10,10,40,500);

//# sourceMappingURL=smart_collision.js.map