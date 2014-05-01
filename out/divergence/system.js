// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.system');
goog.require('cljs.core');
goog.require('divergence.physics');
goog.require('divergence.entity.enemies');
goog.require('divergence.textures');
goog.require('divergence.camera');
goog.require('cljs.reader');
goog.require('divergence.system.smart_collision');
goog.require('divergence.system.smart_collision');
goog.require('divergence.audio');
goog.require('divergence.system.conditions');
goog.require('divergence.physics');
goog.require('divergence.camera');
goog.require('divergence.audio');
goog.require('cljs.reader');
goog.require('divergence.entity');
goog.require('divergence.entity.enemies');
goog.require('divergence.entity');
goog.require('divergence.textures');
goog.require('divergence.system.conditions');
divergence.system.level_width = 5400;
divergence.system.level_height = 3600;
divergence.system.current_level = cljs.core.atom.call(null,0);
divergence.system.as = (function as(entity,k){return cljs.core.deref.call(null,entity).call(null,k);
});
divergence.system.pause = cljs.core.atom.call(null,0);
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
divergence.system.cljs_to_js = (function cljs_to_js(x){if(typeof x === 'string')
{return x;
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__18333){var vec__18334 = p__18333;var k = cljs.core.nth.call(null,vec__18334,0,null);var v = cljs.core.nth.call(null,vec__18334,1,null);return cljs.core.assoc.call(null,m,cljs.core.clj__GT_js.call(null,k),cljs.core.clj__GT_js.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,x).strobj();
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,cljs.core.clj__GT_js,x));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
}
}
});
divergence.system.climbing_QMARK_ = (function climbing_QMARK_(player,entities){var seq__18341 = cljs.core.seq.call(null,entities);var chunk__18343 = null;var count__18344 = 0;var i__18345 = 0;while(true){
if((i__18345 < count__18344))
{var e = cljs.core._nth.call(null,chunk__18343,i__18345);var cond1_18347 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-climb","can-climb",4237636074)),1);var sprite_18348 = divergence.entity.entity_atom__GT_ref.call(null,player);if(cond1_18347)
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,cljs.core.deref.call(null,player),cljs.core.deref.call(null,e))))
{cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),1);
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-5,0], null));
sprite_18348.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
} else
{}
} else
{cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
}
{
var G__18349 = seq__18341;
var G__18350 = chunk__18343;
var G__18351 = count__18344;
var G__18352 = (i__18345 + 1);
seq__18341 = G__18349;
chunk__18343 = G__18350;
count__18344 = G__18351;
i__18345 = G__18352;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18341);if(temp__4092__auto__)
{var seq__18341__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18341__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18341__$1);{
var G__18353 = cljs.core.chunk_rest.call(null,seq__18341__$1);
var G__18354 = c__4150__auto__;
var G__18355 = cljs.core.count.call(null,c__4150__auto__);
var G__18356 = 0;
seq__18341 = G__18353;
chunk__18343 = G__18354;
count__18344 = G__18355;
i__18345 = G__18356;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18341__$1);var cond1_18357 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-climb","can-climb",4237636074)),1);var sprite_18358 = divergence.entity.entity_atom__GT_ref.call(null,player);if(cond1_18357)
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,cljs.core.deref.call(null,player),cljs.core.deref.call(null,e))))
{cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),1);
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-5,0], null));
sprite_18358.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
} else
{}
} else
{cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
}
{
var G__18359 = cljs.core.next.call(null,seq__18341__$1);
var G__18360 = null;
var G__18361 = 0;
var G__18362 = 0;
seq__18341 = G__18359;
chunk__18343 = G__18360;
count__18344 = G__18361;
i__18345 = G__18362;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.climbing = (function climbing(entities){var seq__18369 = cljs.core.seq.call(null,entities);var chunk__18371 = null;var count__18372 = 0;var i__18373 = 0;while(true){
if((i__18373 < count__18372))
{var e = cljs.core._nth.call(null,chunk__18371,i__18373);var e_type_18375 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_18375,new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.system.climbing_QMARK_.call(null,e,entities);
} else
{}
{
var G__18376 = seq__18369;
var G__18377 = chunk__18371;
var G__18378 = count__18372;
var G__18379 = (i__18373 + 1);
seq__18369 = G__18376;
chunk__18371 = G__18377;
count__18372 = G__18378;
i__18373 = G__18379;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18369);if(temp__4092__auto__)
{var seq__18369__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18369__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18369__$1);{
var G__18380 = cljs.core.chunk_rest.call(null,seq__18369__$1);
var G__18381 = c__4150__auto__;
var G__18382 = cljs.core.count.call(null,c__4150__auto__);
var G__18383 = 0;
seq__18369 = G__18380;
chunk__18371 = G__18381;
count__18372 = G__18382;
i__18373 = G__18383;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18369__$1);var e_type_18384 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_18384,new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.system.climbing_QMARK_.call(null,e,entities);
} else
{}
{
var G__18385 = cljs.core.next.call(null,seq__18369__$1);
var G__18386 = null;
var G__18387 = 0;
var G__18388 = 0;
seq__18369 = G__18385;
chunk__18371 = G__18386;
count__18372 = G__18387;
i__18373 = G__18388;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.move_entity = (function move_entity(entity,p__18390){var vec__18392 = p__18390;var x_speed = cljs.core.nth.call(null,vec__18392,0,null);var y_speed = cljs.core.nth.call(null,vec__18392,1,null);var rot_speed = cljs.core.nth.call(null,vec__18392,2,null);return cljs.core.update_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),(function (p1__18389_SHARP_){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_speed,y_speed,rot_speed], null),p1__18389_SHARP_);
}));
});
divergence.system.move = (function move(entities){var seq__18399 = cljs.core.seq.call(null,entities);var chunk__18400 = null;var count__18401 = 0;var i__18402 = 0;while(true){
if((i__18402 < count__18401))
{var e = cljs.core._nth.call(null,chunk__18400,i__18402);var map__18403_18405 = cljs.core.deref.call(null,e);var map__18403_18406__$1 = ((cljs.core.seq_QMARK_.call(null,map__18403_18405))?cljs.core.apply.call(null,cljs.core.hash_map,map__18403_18405):map__18403_18405);var v_18407 = cljs.core.get.call(null,map__18403_18406__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));cljs.core.swap_BANG_.call(null,e,divergence.system.move_entity,v_18407);
{
var G__18408 = seq__18399;
var G__18409 = chunk__18400;
var G__18410 = count__18401;
var G__18411 = (i__18402 + 1);
seq__18399 = G__18408;
chunk__18400 = G__18409;
count__18401 = G__18410;
i__18402 = G__18411;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18399);if(temp__4092__auto__)
{var seq__18399__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18399__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18399__$1);{
var G__18412 = cljs.core.chunk_rest.call(null,seq__18399__$1);
var G__18413 = c__4150__auto__;
var G__18414 = cljs.core.count.call(null,c__4150__auto__);
var G__18415 = 0;
seq__18399 = G__18412;
chunk__18400 = G__18413;
count__18401 = G__18414;
i__18402 = G__18415;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18399__$1);var map__18404_18416 = cljs.core.deref.call(null,e);var map__18404_18417__$1 = ((cljs.core.seq_QMARK_.call(null,map__18404_18416))?cljs.core.apply.call(null,cljs.core.hash_map,map__18404_18416):map__18404_18416);var v_18418 = cljs.core.get.call(null,map__18404_18417__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));cljs.core.swap_BANG_.call(null,e,divergence.system.move_entity,v_18418);
{
var G__18419 = cljs.core.next.call(null,seq__18399__$1);
var G__18420 = null;
var G__18421 = 0;
var G__18422 = 0;
seq__18399 = G__18419;
chunk__18400 = G__18420;
count__18401 = G__18421;
i__18402 = G__18422;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.set_width_height = (function set_width_height(entities){var seq__18431 = cljs.core.seq.call(null,entities);var chunk__18434 = null;var count__18435 = 0;var i__18436 = 0;while(true){
if((i__18436 < count__18435))
{var e = cljs.core._nth.call(null,chunk__18434,i__18436);var ref = divergence.entity.entity_atom__GT_ref.call(null,e);var not_nil = !((ref == null));if(not_nil)
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),new cljs.core.Keyword(null,"width","width",1127031096)], null),ref.width);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),new cljs.core.Keyword(null,"height","height",4087841945)], null),ref.height);
{
var G__18439 = seq__18431;
var G__18440 = chunk__18434;
var G__18441 = count__18435;
var G__18442 = (i__18436 + 1);
seq__18431 = G__18439;
chunk__18434 = G__18440;
count__18435 = G__18441;
i__18436 = G__18442;
continue;
}
} else
{{
var G__18443 = seq__18431;
var G__18444 = chunk__18434;
var G__18445 = count__18435;
var G__18446 = (i__18436 + 1);
seq__18431 = G__18443;
chunk__18434 = G__18444;
count__18435 = G__18445;
i__18436 = G__18446;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18431);if(temp__4092__auto__)
{var seq__18431__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18431__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18431__$1);{
var G__18447 = cljs.core.chunk_rest.call(null,seq__18431__$1);
var G__18448 = c__4150__auto__;
var G__18449 = cljs.core.count.call(null,c__4150__auto__);
var G__18450 = 0;
seq__18431 = G__18447;
chunk__18434 = G__18448;
count__18435 = G__18449;
i__18436 = G__18450;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18431__$1);var ref = divergence.entity.entity_atom__GT_ref.call(null,e);var not_nil = !((ref == null));if(not_nil)
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),new cljs.core.Keyword(null,"width","width",1127031096)], null),ref.width);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),new cljs.core.Keyword(null,"height","height",4087841945)], null),ref.height);
{
var G__18451 = cljs.core.next.call(null,seq__18431__$1);
var G__18452 = null;
var G__18453 = 0;
var G__18454 = 0;
seq__18431 = G__18451;
chunk__18434 = G__18452;
count__18435 = G__18453;
i__18436 = G__18454;
continue;
}
} else
{{
var G__18455 = cljs.core.next.call(null,seq__18431__$1);
var G__18456 = null;
var G__18457 = 0;
var G__18458 = 0;
seq__18431 = G__18455;
chunk__18434 = G__18456;
count__18435 = G__18457;
i__18436 = G__18458;
continue;
}
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.collide = (function collide(entities){var seq__18471 = cljs.core.seq.call(null,divergence.entity.filter_entities.call(null,new cljs.core.Keyword(null,"collision-trigger","collision-trigger",1837179279),entities));var chunk__18474 = null;var count__18475 = 0;var i__18476 = 0;while(true){
if((i__18476 < count__18475))
{var e = cljs.core._nth.call(null,chunk__18474,i__18476);if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{return and__3396__auto__;
}
})()))
{var other_es_18483 = divergence.system.smart_collision.filter_things_close_to.call(null,cljs.core.deref.call(null,e),cljs.core.map.call(null,cljs.core.deref,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([e], true),entities)));var map__18479_18484 = cljs.core.deref.call(null,e);var map__18479_18485__$1 = ((cljs.core.seq_QMARK_.call(null,map__18479_18484))?cljs.core.apply.call(null,cljs.core.hash_map,map__18479_18484):map__18479_18484);var vec__18480_18486 = cljs.core.get.call(null,map__18479_18485__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_18487 = cljs.core.nth.call(null,vec__18480_18486,0,null);var y_v_18488 = cljs.core.nth.call(null,vec__18480_18486,1,null);var rot_speed_18489 = cljs.core.nth.call(null,vec__18480_18486,2,null);var x_future_18490 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_v_18487,0,0], null));var y_future_18491 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,y_v_18488,0], null));if((cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,divergence.physics.colliding_QMARK_,x_future_18490),other_es_18483)) > 0))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),0);
} else
{}
if((cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,divergence.physics.colliding_QMARK_,y_future_18491),other_es_18483)) > 0))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),1], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),1);
} else
{}
{
var G__18492 = seq__18471;
var G__18493 = chunk__18474;
var G__18494 = count__18475;
var G__18495 = (i__18476 + 1);
seq__18471 = G__18492;
chunk__18474 = G__18493;
count__18475 = G__18494;
i__18476 = G__18495;
continue;
}
} else
{{
var G__18496 = seq__18471;
var G__18497 = chunk__18474;
var G__18498 = count__18475;
var G__18499 = (i__18476 + 1);
seq__18471 = G__18496;
chunk__18474 = G__18497;
count__18475 = G__18498;
i__18476 = G__18499;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18471);if(temp__4092__auto__)
{var seq__18471__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18471__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18471__$1);{
var G__18500 = cljs.core.chunk_rest.call(null,seq__18471__$1);
var G__18501 = c__4150__auto__;
var G__18502 = cljs.core.count.call(null,c__4150__auto__);
var G__18503 = 0;
seq__18471 = G__18500;
chunk__18474 = G__18501;
count__18475 = G__18502;
i__18476 = G__18503;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18471__$1);if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{return and__3396__auto__;
}
})()))
{var other_es_18504 = divergence.system.smart_collision.filter_things_close_to.call(null,cljs.core.deref.call(null,e),cljs.core.map.call(null,cljs.core.deref,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([e], true),entities)));var map__18481_18505 = cljs.core.deref.call(null,e);var map__18481_18506__$1 = ((cljs.core.seq_QMARK_.call(null,map__18481_18505))?cljs.core.apply.call(null,cljs.core.hash_map,map__18481_18505):map__18481_18505);var vec__18482_18507 = cljs.core.get.call(null,map__18481_18506__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_18508 = cljs.core.nth.call(null,vec__18482_18507,0,null);var y_v_18509 = cljs.core.nth.call(null,vec__18482_18507,1,null);var rot_speed_18510 = cljs.core.nth.call(null,vec__18482_18507,2,null);var x_future_18511 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_v_18508,0,0], null));var y_future_18512 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,y_v_18509,0], null));if((cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,divergence.physics.colliding_QMARK_,x_future_18511),other_es_18504)) > 0))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),0);
} else
{}
if((cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,divergence.physics.colliding_QMARK_,y_future_18512),other_es_18504)) > 0))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),1], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),1);
} else
{}
{
var G__18513 = cljs.core.next.call(null,seq__18471__$1);
var G__18514 = null;
var G__18515 = 0;
var G__18516 = 0;
seq__18471 = G__18513;
chunk__18474 = G__18514;
count__18475 = G__18515;
i__18476 = G__18516;
continue;
}
} else
{{
var G__18517 = cljs.core.next.call(null,seq__18471__$1);
var G__18518 = null;
var G__18519 = 0;
var G__18520 = 0;
seq__18471 = G__18517;
chunk__18474 = G__18518;
count__18475 = G__18519;
i__18476 = G__18520;
continue;
}
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.push = (function push(entities,player){var seq__18537 = cljs.core.seq.call(null,player);var chunk__18540 = null;var count__18541 = 0;var i__18542 = 0;while(true){
if((i__18542 < count__18541))
{var p = cljs.core._nth.call(null,chunk__18540,i__18542);if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675)))
{var actions_18553 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var direction_18554 = cljs.core.atom.call(null,0);if(cljs.core.truth_(actions_18553))
{if(cljs.core.truth_(actions_18553.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.reset_BANG_.call(null,direction_18554,-2);
} else
{}
if(cljs.core.truth_(actions_18553.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.reset_BANG_.call(null,direction_18554,2);
} else
{}
} else
{}
var x_v_18555 = cljs.core.deref.call(null,direction_18554);var x_future_18556 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_v_18555,0,0], null));var seq__18545_18557 = cljs.core.seq.call(null,entities);var chunk__18546_18558 = null;var count__18547_18559 = 0;var i__18548_18560 = 0;while(true){
if((i__18548_18560 < count__18547_18559))
{var e_18561 = cljs.core._nth.call(null,chunk__18546_18558,i__18548_18560);if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,x_future_18556,cljs.core.deref.call(null,e_18561))))
{cljs.core.swap_BANG_.call(null,e_18561,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),x_v_18555);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pushing","pushing",794119674),true);
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"push","push",1017356940));
} else
{}
{
var G__18562 = seq__18545_18557;
var G__18563 = chunk__18546_18558;
var G__18564 = count__18547_18559;
var G__18565 = (i__18548_18560 + 1);
seq__18545_18557 = G__18562;
chunk__18546_18558 = G__18563;
count__18547_18559 = G__18564;
i__18548_18560 = G__18565;
continue;
}
} else
{var temp__4092__auto___18566 = cljs.core.seq.call(null,seq__18545_18557);if(temp__4092__auto___18566)
{var seq__18545_18567__$1 = temp__4092__auto___18566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18545_18567__$1))
{var c__4150__auto___18568 = cljs.core.chunk_first.call(null,seq__18545_18567__$1);{
var G__18569 = cljs.core.chunk_rest.call(null,seq__18545_18567__$1);
var G__18570 = c__4150__auto___18568;
var G__18571 = cljs.core.count.call(null,c__4150__auto___18568);
var G__18572 = 0;
seq__18545_18557 = G__18569;
chunk__18546_18558 = G__18570;
count__18547_18559 = G__18571;
i__18548_18560 = G__18572;
continue;
}
} else
{var e_18573 = cljs.core.first.call(null,seq__18545_18567__$1);if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,x_future_18556,cljs.core.deref.call(null,e_18573))))
{cljs.core.swap_BANG_.call(null,e_18573,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),x_v_18555);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pushing","pushing",794119674),true);
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"push","push",1017356940));
} else
{}
{
var G__18574 = cljs.core.next.call(null,seq__18545_18567__$1);
var G__18575 = null;
var G__18576 = 0;
var G__18577 = 0;
seq__18545_18557 = G__18574;
chunk__18546_18558 = G__18575;
count__18547_18559 = G__18576;
i__18548_18560 = G__18577;
continue;
}
}
} else
{}
}
break;
}
{
var G__18578 = seq__18537;
var G__18579 = chunk__18540;
var G__18580 = count__18541;
var G__18581 = (i__18542 + 1);
seq__18537 = G__18578;
chunk__18540 = G__18579;
count__18541 = G__18580;
i__18542 = G__18581;
continue;
}
} else
{{
var G__18582 = seq__18537;
var G__18583 = chunk__18540;
var G__18584 = count__18541;
var G__18585 = (i__18542 + 1);
seq__18537 = G__18582;
chunk__18540 = G__18583;
count__18541 = G__18584;
i__18542 = G__18585;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18537);if(temp__4092__auto__)
{var seq__18537__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18537__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18537__$1);{
var G__18586 = cljs.core.chunk_rest.call(null,seq__18537__$1);
var G__18587 = c__4150__auto__;
var G__18588 = cljs.core.count.call(null,c__4150__auto__);
var G__18589 = 0;
seq__18537 = G__18586;
chunk__18540 = G__18587;
count__18541 = G__18588;
i__18542 = G__18589;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__18537__$1);if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675)))
{var actions_18590 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var direction_18591 = cljs.core.atom.call(null,0);if(cljs.core.truth_(actions_18590))
{if(cljs.core.truth_(actions_18590.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.reset_BANG_.call(null,direction_18591,-2);
} else
{}
if(cljs.core.truth_(actions_18590.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.reset_BANG_.call(null,direction_18591,2);
} else
{}
} else
{}
var x_v_18592 = cljs.core.deref.call(null,direction_18591);var x_future_18593 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_v_18592,0,0], null));var seq__18549_18594 = cljs.core.seq.call(null,entities);var chunk__18550_18595 = null;var count__18551_18596 = 0;var i__18552_18597 = 0;while(true){
if((i__18552_18597 < count__18551_18596))
{var e_18598 = cljs.core._nth.call(null,chunk__18550_18595,i__18552_18597);if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,x_future_18593,cljs.core.deref.call(null,e_18598))))
{cljs.core.swap_BANG_.call(null,e_18598,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),x_v_18592);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pushing","pushing",794119674),true);
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"push","push",1017356940));
} else
{}
{
var G__18599 = seq__18549_18594;
var G__18600 = chunk__18550_18595;
var G__18601 = count__18551_18596;
var G__18602 = (i__18552_18597 + 1);
seq__18549_18594 = G__18599;
chunk__18550_18595 = G__18600;
count__18551_18596 = G__18601;
i__18552_18597 = G__18602;
continue;
}
} else
{var temp__4092__auto___18603__$1 = cljs.core.seq.call(null,seq__18549_18594);if(temp__4092__auto___18603__$1)
{var seq__18549_18604__$1 = temp__4092__auto___18603__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18549_18604__$1))
{var c__4150__auto___18605 = cljs.core.chunk_first.call(null,seq__18549_18604__$1);{
var G__18606 = cljs.core.chunk_rest.call(null,seq__18549_18604__$1);
var G__18607 = c__4150__auto___18605;
var G__18608 = cljs.core.count.call(null,c__4150__auto___18605);
var G__18609 = 0;
seq__18549_18594 = G__18606;
chunk__18550_18595 = G__18607;
count__18551_18596 = G__18608;
i__18552_18597 = G__18609;
continue;
}
} else
{var e_18610 = cljs.core.first.call(null,seq__18549_18604__$1);if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,x_future_18593,cljs.core.deref.call(null,e_18610))))
{cljs.core.swap_BANG_.call(null,e_18610,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),x_v_18592);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pushing","pushing",794119674),true);
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"push","push",1017356940));
} else
{}
{
var G__18611 = cljs.core.next.call(null,seq__18549_18604__$1);
var G__18612 = null;
var G__18613 = 0;
var G__18614 = 0;
seq__18549_18594 = G__18611;
chunk__18550_18595 = G__18612;
count__18551_18596 = G__18613;
i__18552_18597 = G__18614;
continue;
}
}
} else
{}
}
break;
}
{
var G__18615 = cljs.core.next.call(null,seq__18537__$1);
var G__18616 = null;
var G__18617 = 0;
var G__18618 = 0;
seq__18537 = G__18615;
chunk__18540 = G__18616;
count__18541 = G__18617;
i__18542 = G__18618;
continue;
}
} else
{{
var G__18619 = cljs.core.next.call(null,seq__18537__$1);
var G__18620 = null;
var G__18621 = 0;
var G__18622 = 0;
seq__18537 = G__18619;
chunk__18540 = G__18620;
count__18541 = G__18621;
i__18542 = G__18622;
continue;
}
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.friction = (function friction(entities){var seq__18635 = cljs.core.seq.call(null,entities);var chunk__18636 = null;var count__18637 = 0;var i__18638 = 0;while(true){
if((i__18638 < count__18637))
{var e = cljs.core._nth.call(null,chunk__18636,i__18638);var map__18639_18647 = cljs.core.deref.call(null,e);var map__18639_18648__$1 = ((cljs.core.seq_QMARK_.call(null,map__18639_18647))?cljs.core.apply.call(null,cljs.core.hash_map,map__18639_18647):map__18639_18647);var vec__18640_18649 = cljs.core.get.call(null,map__18639_18648__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var vx_18650 = cljs.core.nth.call(null,vec__18640_18649,0,null);var vy_18651 = cljs.core.nth.call(null,vec__18640_18649,1,null);var vr_18652 = cljs.core.nth.call(null,vec__18640_18649,2,null);var vec__18641_18653 = cljs.core.get.call(null,map__18639_18648__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_18654 = cljs.core.nth.call(null,vec__18641_18653,0,null);var ay_18655 = cljs.core.nth.call(null,vec__18641_18653,1,null);var ar_18656 = cljs.core.nth.call(null,vec__18641_18653,2,null);var vec__18642_18657 = cljs.core.get.call(null,map__18639_18648__$1,new cljs.core.Keyword(null,"friction","friction",3884153452));var f_18658 = cljs.core.nth.call(null,vec__18642_18657,0,null);var actions_18659 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));if((cljs.core.not_EQ_.call(null,0,vx_18650)) && (cljs.core.empty_QMARK_.call(null,actions_18659)))
{if(((vx_18650 <= -0.5)) || ((vx_18650 >= 0.5)))
{if((vx_18650 <= -0.5))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((vx_18650 / vx_18650) * f_18658),ay_18655,ar_18656], null));
} else
{}
if((vx_18650 >= 0.5))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((vx_18650 / vx_18650) * f_18658) * -1),ay_18655,ar_18656], null));
} else
{}
} else
{}
if(((vx_18650 > -0.5)) && ((vx_18650 < 0.5)))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vx_18650 * -1),ay_18655,ar_18656], null));
} else
{}
} else
{}
{
var G__18660 = seq__18635;
var G__18661 = chunk__18636;
var G__18662 = count__18637;
var G__18663 = (i__18638 + 1);
seq__18635 = G__18660;
chunk__18636 = G__18661;
count__18637 = G__18662;
i__18638 = G__18663;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18635);if(temp__4092__auto__)
{var seq__18635__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18635__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18635__$1);{
var G__18664 = cljs.core.chunk_rest.call(null,seq__18635__$1);
var G__18665 = c__4150__auto__;
var G__18666 = cljs.core.count.call(null,c__4150__auto__);
var G__18667 = 0;
seq__18635 = G__18664;
chunk__18636 = G__18665;
count__18637 = G__18666;
i__18638 = G__18667;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18635__$1);var map__18643_18668 = cljs.core.deref.call(null,e);var map__18643_18669__$1 = ((cljs.core.seq_QMARK_.call(null,map__18643_18668))?cljs.core.apply.call(null,cljs.core.hash_map,map__18643_18668):map__18643_18668);var vec__18644_18670 = cljs.core.get.call(null,map__18643_18669__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var vx_18671 = cljs.core.nth.call(null,vec__18644_18670,0,null);var vy_18672 = cljs.core.nth.call(null,vec__18644_18670,1,null);var vr_18673 = cljs.core.nth.call(null,vec__18644_18670,2,null);var vec__18645_18674 = cljs.core.get.call(null,map__18643_18669__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_18675 = cljs.core.nth.call(null,vec__18645_18674,0,null);var ay_18676 = cljs.core.nth.call(null,vec__18645_18674,1,null);var ar_18677 = cljs.core.nth.call(null,vec__18645_18674,2,null);var vec__18646_18678 = cljs.core.get.call(null,map__18643_18669__$1,new cljs.core.Keyword(null,"friction","friction",3884153452));var f_18679 = cljs.core.nth.call(null,vec__18646_18678,0,null);var actions_18680 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));if((cljs.core.not_EQ_.call(null,0,vx_18671)) && (cljs.core.empty_QMARK_.call(null,actions_18680)))
{if(((vx_18671 <= -0.5)) || ((vx_18671 >= 0.5)))
{if((vx_18671 <= -0.5))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((vx_18671 / vx_18671) * f_18679),ay_18676,ar_18677], null));
} else
{}
if((vx_18671 >= 0.5))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((vx_18671 / vx_18671) * f_18679) * -1),ay_18676,ar_18677], null));
} else
{}
} else
{}
if(((vx_18671 > -0.5)) && ((vx_18671 < 0.5)))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vx_18671 * -1),ay_18676,ar_18677], null));
} else
{}
} else
{}
{
var G__18681 = cljs.core.next.call(null,seq__18635__$1);
var G__18682 = null;
var G__18683 = 0;
var G__18684 = 0;
seq__18635 = G__18681;
chunk__18636 = G__18682;
count__18637 = G__18683;
i__18638 = G__18684;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.accelerate = (function accelerate(entities){var seq__18694 = cljs.core.seq.call(null,entities);var chunk__18696 = null;var count__18697 = 0;var i__18698 = 0;while(true){
if((i__18698 < count__18697))
{var e = cljs.core._nth.call(null,chunk__18696,i__18698);var map__18700_18702 = cljs.core.deref.call(null,e);var map__18700_18703__$1 = ((cljs.core.seq_QMARK_.call(null,map__18700_18702))?cljs.core.apply.call(null,cljs.core.hash_map,map__18700_18702):map__18700_18702);var a_18704 = cljs.core.get.call(null,map__18700_18703__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));cljs.core.swap_BANG_.call(null,e,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),((function (seq__18694,chunk__18696,count__18697,i__18698,map__18700_18702,map__18700_18703__$1,a_18704,e){
return (function (p1__18685_SHARP_){return cljs.core.mapv.call(null,cljs.core._PLUS_,a_18704,p1__18685_SHARP_);
});})(seq__18694,chunk__18696,count__18697,i__18698,map__18700_18702,map__18700_18703__$1,a_18704,e))
);
{
var G__18705 = seq__18694;
var G__18706 = chunk__18696;
var G__18707 = count__18697;
var G__18708 = (i__18698 + 1);
seq__18694 = G__18705;
chunk__18696 = G__18706;
count__18697 = G__18707;
i__18698 = G__18708;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18694);if(temp__4092__auto__)
{var seq__18694__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18694__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18694__$1);{
var G__18709 = cljs.core.chunk_rest.call(null,seq__18694__$1);
var G__18710 = c__4150__auto__;
var G__18711 = cljs.core.count.call(null,c__4150__auto__);
var G__18712 = 0;
seq__18694 = G__18709;
chunk__18696 = G__18710;
count__18697 = G__18711;
i__18698 = G__18712;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18694__$1);var map__18701_18713 = cljs.core.deref.call(null,e);var map__18701_18714__$1 = ((cljs.core.seq_QMARK_.call(null,map__18701_18713))?cljs.core.apply.call(null,cljs.core.hash_map,map__18701_18713):map__18701_18713);var a_18715 = cljs.core.get.call(null,map__18701_18714__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));cljs.core.swap_BANG_.call(null,e,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),((function (seq__18694,chunk__18696,count__18697,i__18698,map__18701_18713,map__18701_18714__$1,a_18715,e,seq__18694__$1,temp__4092__auto__){
return (function (p1__18685_SHARP_){return cljs.core.mapv.call(null,cljs.core._PLUS_,a_18715,p1__18685_SHARP_);
});})(seq__18694,chunk__18696,count__18697,i__18698,map__18701_18713,map__18701_18714__$1,a_18715,e,seq__18694__$1,temp__4092__auto__))
);
{
var G__18716 = cljs.core.next.call(null,seq__18694__$1);
var G__18717 = null;
var G__18718 = 0;
var G__18719 = 0;
seq__18694 = G__18716;
chunk__18696 = G__18717;
count__18697 = G__18718;
i__18698 = G__18719;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.gravity = (function gravity(entities){var seq__18729 = cljs.core.seq.call(null,entities);var chunk__18731 = null;var count__18732 = 0;var i__18733 = 0;while(true){
if((i__18733 < count__18732))
{var e = cljs.core._nth.call(null,chunk__18731,i__18733);var map__18735_18737 = cljs.core.deref.call(null,e);var map__18735_18738__$1 = ((cljs.core.seq_QMARK_.call(null,map__18735_18737))?cljs.core.apply.call(null,cljs.core.hash_map,map__18735_18737):map__18735_18737);var g_18739 = cljs.core.get.call(null,map__18735_18738__$1,new cljs.core.Keyword(null,"gravity","gravity",1294427584));cljs.core.swap_BANG_.call(null,e,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),((function (seq__18729,chunk__18731,count__18732,i__18733,map__18735_18737,map__18735_18738__$1,g_18739,e){
return (function (p1__18720_SHARP_){return cljs.core.mapv.call(null,cljs.core._PLUS_,g_18739,p1__18720_SHARP_);
});})(seq__18729,chunk__18731,count__18732,i__18733,map__18735_18737,map__18735_18738__$1,g_18739,e))
);
{
var G__18740 = seq__18729;
var G__18741 = chunk__18731;
var G__18742 = count__18732;
var G__18743 = (i__18733 + 1);
seq__18729 = G__18740;
chunk__18731 = G__18741;
count__18732 = G__18742;
i__18733 = G__18743;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18729);if(temp__4092__auto__)
{var seq__18729__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18729__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18729__$1);{
var G__18744 = cljs.core.chunk_rest.call(null,seq__18729__$1);
var G__18745 = c__4150__auto__;
var G__18746 = cljs.core.count.call(null,c__4150__auto__);
var G__18747 = 0;
seq__18729 = G__18744;
chunk__18731 = G__18745;
count__18732 = G__18746;
i__18733 = G__18747;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18729__$1);var map__18736_18748 = cljs.core.deref.call(null,e);var map__18736_18749__$1 = ((cljs.core.seq_QMARK_.call(null,map__18736_18748))?cljs.core.apply.call(null,cljs.core.hash_map,map__18736_18748):map__18736_18748);var g_18750 = cljs.core.get.call(null,map__18736_18749__$1,new cljs.core.Keyword(null,"gravity","gravity",1294427584));cljs.core.swap_BANG_.call(null,e,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),((function (seq__18729,chunk__18731,count__18732,i__18733,map__18736_18748,map__18736_18749__$1,g_18750,e,seq__18729__$1,temp__4092__auto__){
return (function (p1__18720_SHARP_){return cljs.core.mapv.call(null,cljs.core._PLUS_,g_18750,p1__18720_SHARP_);
});})(seq__18729,chunk__18731,count__18732,i__18733,map__18736_18748,map__18736_18749__$1,g_18750,e,seq__18729__$1,temp__4092__auto__))
);
{
var G__18751 = cljs.core.next.call(null,seq__18729__$1);
var G__18752 = null;
var G__18753 = 0;
var G__18754 = 0;
seq__18729 = G__18751;
chunk__18731 = G__18752;
count__18732 = G__18753;
i__18733 = G__18754;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.anchor = (function anchor(entities){var seq__18761 = cljs.core.seq.call(null,entities);var chunk__18762 = null;var count__18763 = 0;var i__18764 = 0;while(true){
if((i__18764 < count__18763))
{var e = cljs.core._nth.call(null,chunk__18762,i__18764);var map__18765_18767 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"anchor","anchor",3895572007));var map__18765_18768__$1 = ((cljs.core.seq_QMARK_.call(null,map__18765_18767))?cljs.core.apply.call(null,cljs.core.hash_map,map__18765_18767):map__18765_18767);var y_18769 = cljs.core.get.call(null,map__18765_18768__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x_18770 = cljs.core.get.call(null,map__18765_18768__$1,new cljs.core.Keyword(null,"x","x",1013904362));var ref_18771 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_18771.anchor["x"] = x_18770);
(ref_18771.anchor["y"] = y_18769);
{
var G__18772 = seq__18761;
var G__18773 = chunk__18762;
var G__18774 = count__18763;
var G__18775 = (i__18764 + 1);
seq__18761 = G__18772;
chunk__18762 = G__18773;
count__18763 = G__18774;
i__18764 = G__18775;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18761);if(temp__4092__auto__)
{var seq__18761__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18761__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18761__$1);{
var G__18776 = cljs.core.chunk_rest.call(null,seq__18761__$1);
var G__18777 = c__4150__auto__;
var G__18778 = cljs.core.count.call(null,c__4150__auto__);
var G__18779 = 0;
seq__18761 = G__18776;
chunk__18762 = G__18777;
count__18763 = G__18778;
i__18764 = G__18779;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18761__$1);var map__18766_18780 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"anchor","anchor",3895572007));var map__18766_18781__$1 = ((cljs.core.seq_QMARK_.call(null,map__18766_18780))?cljs.core.apply.call(null,cljs.core.hash_map,map__18766_18780):map__18766_18780);var y_18782 = cljs.core.get.call(null,map__18766_18781__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x_18783 = cljs.core.get.call(null,map__18766_18781__$1,new cljs.core.Keyword(null,"x","x",1013904362));var ref_18784 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_18784.anchor["x"] = x_18783);
(ref_18784.anchor["y"] = y_18782);
{
var G__18785 = cljs.core.next.call(null,seq__18761__$1);
var G__18786 = null;
var G__18787 = 0;
var G__18788 = 0;
seq__18761 = G__18785;
chunk__18762 = G__18786;
count__18763 = G__18787;
i__18764 = G__18788;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.scale = (function scale(entities){var seq__18797 = cljs.core.seq.call(null,entities);var chunk__18798 = null;var count__18799 = 0;var i__18800 = 0;while(true){
if((i__18800 < count__18799))
{var e = cljs.core._nth.call(null,chunk__18798,i__18800);var map__18801_18805 = cljs.core.deref.call(null,e);var map__18801_18806__$1 = ((cljs.core.seq_QMARK_.call(null,map__18801_18805))?cljs.core.apply.call(null,cljs.core.hash_map,map__18801_18805):map__18801_18805);var map__18802_18807 = cljs.core.get.call(null,map__18801_18806__$1,new cljs.core.Keyword(null,"scale","scale",1123155132));var map__18802_18808__$1 = ((cljs.core.seq_QMARK_.call(null,map__18802_18807))?cljs.core.apply.call(null,cljs.core.hash_map,map__18802_18807):map__18802_18807);var rot_speed_18809 = cljs.core.get.call(null,map__18802_18808__$1,new cljs.core.Keyword(null,"rot-speed","rot-speed",2570110019));var y_scale_18810 = cljs.core.get.call(null,map__18802_18808__$1,new cljs.core.Keyword(null,"y-scale","y-scale",2425229928));var x_scale_18811 = cljs.core.get.call(null,map__18802_18808__$1,new cljs.core.Keyword(null,"x-scale","x-scale",1537726247));var ref_18812 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_18812.scale["x"] = x_scale_18811);
(ref_18812.scale["y"] = y_scale_18810);
{
var G__18813 = seq__18797;
var G__18814 = chunk__18798;
var G__18815 = count__18799;
var G__18816 = (i__18800 + 1);
seq__18797 = G__18813;
chunk__18798 = G__18814;
count__18799 = G__18815;
i__18800 = G__18816;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18797);if(temp__4092__auto__)
{var seq__18797__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18797__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18797__$1);{
var G__18817 = cljs.core.chunk_rest.call(null,seq__18797__$1);
var G__18818 = c__4150__auto__;
var G__18819 = cljs.core.count.call(null,c__4150__auto__);
var G__18820 = 0;
seq__18797 = G__18817;
chunk__18798 = G__18818;
count__18799 = G__18819;
i__18800 = G__18820;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18797__$1);var map__18803_18821 = cljs.core.deref.call(null,e);var map__18803_18822__$1 = ((cljs.core.seq_QMARK_.call(null,map__18803_18821))?cljs.core.apply.call(null,cljs.core.hash_map,map__18803_18821):map__18803_18821);var map__18804_18823 = cljs.core.get.call(null,map__18803_18822__$1,new cljs.core.Keyword(null,"scale","scale",1123155132));var map__18804_18824__$1 = ((cljs.core.seq_QMARK_.call(null,map__18804_18823))?cljs.core.apply.call(null,cljs.core.hash_map,map__18804_18823):map__18804_18823);var rot_speed_18825 = cljs.core.get.call(null,map__18804_18824__$1,new cljs.core.Keyword(null,"rot-speed","rot-speed",2570110019));var y_scale_18826 = cljs.core.get.call(null,map__18804_18824__$1,new cljs.core.Keyword(null,"y-scale","y-scale",2425229928));var x_scale_18827 = cljs.core.get.call(null,map__18804_18824__$1,new cljs.core.Keyword(null,"x-scale","x-scale",1537726247));var ref_18828 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_18828.scale["x"] = x_scale_18827);
(ref_18828.scale["y"] = y_scale_18826);
{
var G__18829 = cljs.core.next.call(null,seq__18797__$1);
var G__18830 = null;
var G__18831 = 0;
var G__18832 = 0;
seq__18797 = G__18829;
chunk__18798 = G__18830;
count__18799 = G__18831;
i__18800 = G__18832;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.position = (function position(entities){var seq__18841 = cljs.core.seq.call(null,entities);var chunk__18842 = null;var count__18843 = 0;var i__18844 = 0;while(true){
if((i__18844 < count__18843))
{var e = cljs.core._nth.call(null,chunk__18842,i__18844);var map__18845_18849 = cljs.core.deref.call(null,e);var map__18845_18850__$1 = ((cljs.core.seq_QMARK_.call(null,map__18845_18849))?cljs.core.apply.call(null,cljs.core.hash_map,map__18845_18849):map__18845_18849);var vec__18846_18851 = cljs.core.get.call(null,map__18845_18850__$1,new cljs.core.Keyword(null,"position","position",1761709211));var x_18852 = cljs.core.nth.call(null,vec__18846_18851,0,null);var y_18853 = cljs.core.nth.call(null,vec__18846_18851,1,null);var rot_18854 = cljs.core.nth.call(null,vec__18846_18851,2,null);var ref_18855 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_18855.position["x"] = x_18852);
(ref_18855.position["y"] = y_18853);
(ref_18855["rotation"] = rot_18854);
{
var G__18856 = seq__18841;
var G__18857 = chunk__18842;
var G__18858 = count__18843;
var G__18859 = (i__18844 + 1);
seq__18841 = G__18856;
chunk__18842 = G__18857;
count__18843 = G__18858;
i__18844 = G__18859;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18841);if(temp__4092__auto__)
{var seq__18841__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18841__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18841__$1);{
var G__18860 = cljs.core.chunk_rest.call(null,seq__18841__$1);
var G__18861 = c__4150__auto__;
var G__18862 = cljs.core.count.call(null,c__4150__auto__);
var G__18863 = 0;
seq__18841 = G__18860;
chunk__18842 = G__18861;
count__18843 = G__18862;
i__18844 = G__18863;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18841__$1);var map__18847_18864 = cljs.core.deref.call(null,e);var map__18847_18865__$1 = ((cljs.core.seq_QMARK_.call(null,map__18847_18864))?cljs.core.apply.call(null,cljs.core.hash_map,map__18847_18864):map__18847_18864);var vec__18848_18866 = cljs.core.get.call(null,map__18847_18865__$1,new cljs.core.Keyword(null,"position","position",1761709211));var x_18867 = cljs.core.nth.call(null,vec__18848_18866,0,null);var y_18868 = cljs.core.nth.call(null,vec__18848_18866,1,null);var rot_18869 = cljs.core.nth.call(null,vec__18848_18866,2,null);var ref_18870 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_18870.position["x"] = x_18867);
(ref_18870.position["y"] = y_18868);
(ref_18870["rotation"] = rot_18869);
{
var G__18871 = cljs.core.next.call(null,seq__18841__$1);
var G__18872 = null;
var G__18873 = 0;
var G__18874 = 0;
seq__18841 = G__18871;
chunk__18842 = G__18872;
count__18843 = G__18873;
i__18844 = G__18874;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.play_time_travel = (function play_time_travel(entities){var seq__18881 = cljs.core.seq.call(null,entities);var chunk__18883 = null;var count__18884 = 0;var i__18885 = 0;while(true){
if((i__18885 < count__18884))
{var e = cljs.core._nth.call(null,chunk__18883,i__18885);var actions_18887 = new cljs.core.Keyword(null,"actions","actions",4147068015).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var prev_actions_18888 = new cljs.core.Keyword(null,"prev-actions","prev-actions",2648235733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));if(cljs.core.truth_((function (){var and__3396__auto__ = actions_18887.call(null,new cljs.core.Keyword(null,"travel-back","travel-back",642120492));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not.call(null,prev_actions_18888.call(null,new cljs.core.Keyword(null,"travel-back","travel-back",642120492)));
} else
{return and__3396__auto__;
}
})()))
{divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"time","time",1017464383));
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"prev-actions","prev-actions",2648235733),actions_18887);
{
var G__18889 = seq__18881;
var G__18890 = chunk__18883;
var G__18891 = count__18884;
var G__18892 = (i__18885 + 1);
seq__18881 = G__18889;
chunk__18883 = G__18890;
count__18884 = G__18891;
i__18885 = G__18892;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18881);if(temp__4092__auto__)
{var seq__18881__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18881__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18881__$1);{
var G__18893 = cljs.core.chunk_rest.call(null,seq__18881__$1);
var G__18894 = c__4150__auto__;
var G__18895 = cljs.core.count.call(null,c__4150__auto__);
var G__18896 = 0;
seq__18881 = G__18893;
chunk__18883 = G__18894;
count__18884 = G__18895;
i__18885 = G__18896;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18881__$1);var actions_18897 = new cljs.core.Keyword(null,"actions","actions",4147068015).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var prev_actions_18898 = new cljs.core.Keyword(null,"prev-actions","prev-actions",2648235733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));if(cljs.core.truth_((function (){var and__3396__auto__ = actions_18897.call(null,new cljs.core.Keyword(null,"travel-back","travel-back",642120492));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not.call(null,prev_actions_18898.call(null,new cljs.core.Keyword(null,"travel-back","travel-back",642120492)));
} else
{return and__3396__auto__;
}
})()))
{divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"time","time",1017464383));
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"prev-actions","prev-actions",2648235733),actions_18897);
{
var G__18899 = cljs.core.next.call(null,seq__18881__$1);
var G__18900 = null;
var G__18901 = 0;
var G__18902 = 0;
seq__18881 = G__18899;
chunk__18883 = G__18900;
count__18884 = G__18901;
i__18885 = G__18902;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.fetch_current_path = (function fetch_current_path(entity){var e = cljs.core.deref.call(null,entity);var index = e.call(null,new cljs.core.Keyword(null,"path-index","path-index",752100508));var dir = e.call(null,new cljs.core.Keyword(null,"direction","direction",4346280689));var loop_QMARK_ = e.call(null,new cljs.core.Keyword(null,"path-loop","path-loop",589907646));var path = e.call(null,new cljs.core.Keyword(null,"path","path",1017337751));var vx = cljs.core.nth.call(null,path,index);var vy = cljs.core.nth.call(null,path,(index + 1));if(cljs.core.truth_((function (){var and__3396__auto__ = dir;if(cljs.core.truth_(and__3396__auto__))
{return loop_QMARK_;
} else
{return and__3396__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1 * vx),(-1 * vy)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null);
}
});
divergence.system.index_check = (function index_check(entity){var index = cljs.core.deref.call(null,entity).call(null,new cljs.core.Keyword(null,"path-index","path-index",752100508));var size = (cljs.core.count.call(null,cljs.core.deref.call(null,entity).call(null,new cljs.core.Keyword(null,"path","path",1017337751))) / 2);if((cljs.core.compare.call(null,index,size) > -1))
{cljs.core.swap_BANG_.call(null,entity,cljs.core.assoc,new cljs.core.Keyword(null,"path-index","path-index",752100508),0);
return cljs.core.swap_BANG_.call(null,entity,cljs.core.assoc,new cljs.core.Keyword(null,"direction","direction",4346280689),cljs.core.not.call(null,cljs.core.deref.call(null,entity).call(null,new cljs.core.Keyword(null,"direction","direction",4346280689))));
} else
{return null;
}
});
/**
* This function is meant to execute move-paths of npcs
*/
divergence.system.execute_entities = (function execute_entities(entities){var seq__18911 = cljs.core.seq.call(null,entities);var chunk__18914 = null;var count__18915 = 0;var i__18916 = 0;while(true){
if((i__18916 < count__18915))
{var e = cljs.core._nth.call(null,chunk__18914,i__18916);var cond1 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"npc","npc",1014013523));var cond2 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond3 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"text","text",1017460895));if((cond1) || (cond2) || (cond3))
{divergence.system.index_check.call(null,e);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),divergence.system.fetch_current_path.call(null,e));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"path-index","path-index",752100508),(cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"path-index","path-index",752100508)) + 2));
{
var G__18919 = seq__18911;
var G__18920 = chunk__18914;
var G__18921 = count__18915;
var G__18922 = (i__18916 + 1);
seq__18911 = G__18919;
chunk__18914 = G__18920;
count__18915 = G__18921;
i__18916 = G__18922;
continue;
}
} else
{{
var G__18923 = seq__18911;
var G__18924 = chunk__18914;
var G__18925 = count__18915;
var G__18926 = (i__18916 + 1);
seq__18911 = G__18923;
chunk__18914 = G__18924;
count__18915 = G__18925;
i__18916 = G__18926;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18911);if(temp__4092__auto__)
{var seq__18911__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18911__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18911__$1);{
var G__18927 = cljs.core.chunk_rest.call(null,seq__18911__$1);
var G__18928 = c__4150__auto__;
var G__18929 = cljs.core.count.call(null,c__4150__auto__);
var G__18930 = 0;
seq__18911 = G__18927;
chunk__18914 = G__18928;
count__18915 = G__18929;
i__18916 = G__18930;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__18911__$1);var cond1 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"npc","npc",1014013523));var cond2 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond3 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"text","text",1017460895));if((cond1) || (cond2) || (cond3))
{divergence.system.index_check.call(null,e);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),divergence.system.fetch_current_path.call(null,e));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"path-index","path-index",752100508),(cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"path-index","path-index",752100508)) + 2));
{
var G__18931 = cljs.core.next.call(null,seq__18911__$1);
var G__18932 = null;
var G__18933 = 0;
var G__18934 = 0;
seq__18911 = G__18931;
chunk__18914 = G__18932;
count__18915 = G__18933;
i__18916 = G__18934;
continue;
}
} else
{{
var G__18935 = cljs.core.next.call(null,seq__18911__$1);
var G__18936 = null;
var G__18937 = 0;
var G__18938 = 0;
seq__18911 = G__18935;
chunk__18914 = G__18936;
count__18915 = G__18937;
i__18916 = G__18938;
continue;
}
}
}
} else
{return null;
}
}
break;
}
});
/**
* Apply effects here with map of functions in enemy
*/
divergence.system.execute_effects = (function execute_effects(player,entities){var seq__18963 = cljs.core.seq.call(null,player);var chunk__18964 = null;var count__18965 = 0;var i__18966 = 0;while(true){
if((i__18966 < count__18965))
{var p = cljs.core._nth.call(null,chunk__18964,i__18966);var seq__18967_18987 = cljs.core.seq.call(null,entities);var chunk__18970_18988 = null;var count__18971_18989 = 0;var i__18972_18990 = 0;while(true){
if((i__18972_18990 < count__18971_18989))
{var e_18991 = cljs.core._nth.call(null,chunk__18970_18988,i__18972_18990);var vec__18975_18992 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_18993 = cljs.core.nth.call(null,vec__18975_18992,0,null);var y_v_18994 = cljs.core.nth.call(null,vec__18975_18992,1,null);var rot_speed_18995 = cljs.core.nth.call(null,vec__18975_18992,2,null);var px_18996 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_v_18993 * 3),0,0], null));var py_18997 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(y_v_18994 * 3),0], null));var cond3_18998 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e_18991).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond4_18999 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675));if((cond3_18998) && (cond4_18999))
{if(cljs.core.truth_((function (){var or__3408__auto__ = divergence.physics.colliding_QMARK_.call(null,py_18997,cljs.core.deref.call(null,e_18991));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return divergence.physics.colliding_QMARK_.call(null,px_18996,cljs.core.deref.call(null,e_18991));
}
})()))
{divergence.entity.enemies.effects.call(null,p,e_18991);
} else
{}
{
var G__19000 = seq__18967_18987;
var G__19001 = chunk__18970_18988;
var G__19002 = count__18971_18989;
var G__19003 = (i__18972_18990 + 1);
seq__18967_18987 = G__19000;
chunk__18970_18988 = G__19001;
count__18971_18989 = G__19002;
i__18972_18990 = G__19003;
continue;
}
} else
{{
var G__19004 = seq__18967_18987;
var G__19005 = chunk__18970_18988;
var G__19006 = count__18971_18989;
var G__19007 = (i__18972_18990 + 1);
seq__18967_18987 = G__19004;
chunk__18970_18988 = G__19005;
count__18971_18989 = G__19006;
i__18972_18990 = G__19007;
continue;
}
}
} else
{var temp__4092__auto___19008 = cljs.core.seq.call(null,seq__18967_18987);if(temp__4092__auto___19008)
{var seq__18967_19009__$1 = temp__4092__auto___19008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18967_19009__$1))
{var c__4150__auto___19010 = cljs.core.chunk_first.call(null,seq__18967_19009__$1);{
var G__19011 = cljs.core.chunk_rest.call(null,seq__18967_19009__$1);
var G__19012 = c__4150__auto___19010;
var G__19013 = cljs.core.count.call(null,c__4150__auto___19010);
var G__19014 = 0;
seq__18967_18987 = G__19011;
chunk__18970_18988 = G__19012;
count__18971_18989 = G__19013;
i__18972_18990 = G__19014;
continue;
}
} else
{var e_19015 = cljs.core.first.call(null,seq__18967_19009__$1);var vec__18976_19016 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_19017 = cljs.core.nth.call(null,vec__18976_19016,0,null);var y_v_19018 = cljs.core.nth.call(null,vec__18976_19016,1,null);var rot_speed_19019 = cljs.core.nth.call(null,vec__18976_19016,2,null);var px_19020 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_v_19017 * 3),0,0], null));var py_19021 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(y_v_19018 * 3),0], null));var cond3_19022 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e_19015).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond4_19023 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675));if((cond3_19022) && (cond4_19023))
{if(cljs.core.truth_((function (){var or__3408__auto__ = divergence.physics.colliding_QMARK_.call(null,py_19021,cljs.core.deref.call(null,e_19015));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return divergence.physics.colliding_QMARK_.call(null,px_19020,cljs.core.deref.call(null,e_19015));
}
})()))
{divergence.entity.enemies.effects.call(null,p,e_19015);
} else
{}
{
var G__19024 = cljs.core.next.call(null,seq__18967_19009__$1);
var G__19025 = null;
var G__19026 = 0;
var G__19027 = 0;
seq__18967_18987 = G__19024;
chunk__18970_18988 = G__19025;
count__18971_18989 = G__19026;
i__18972_18990 = G__19027;
continue;
}
} else
{{
var G__19028 = cljs.core.next.call(null,seq__18967_19009__$1);
var G__19029 = null;
var G__19030 = 0;
var G__19031 = 0;
seq__18967_18987 = G__19028;
chunk__18970_18988 = G__19029;
count__18971_18989 = G__19030;
i__18972_18990 = G__19031;
continue;
}
}
}
} else
{}
}
break;
}
{
var G__19032 = seq__18963;
var G__19033 = chunk__18964;
var G__19034 = count__18965;
var G__19035 = (i__18966 + 1);
seq__18963 = G__19032;
chunk__18964 = G__19033;
count__18965 = G__19034;
i__18966 = G__19035;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18963);if(temp__4092__auto__)
{var seq__18963__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18963__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__18963__$1);{
var G__19036 = cljs.core.chunk_rest.call(null,seq__18963__$1);
var G__19037 = c__4150__auto__;
var G__19038 = cljs.core.count.call(null,c__4150__auto__);
var G__19039 = 0;
seq__18963 = G__19036;
chunk__18964 = G__19037;
count__18965 = G__19038;
i__18966 = G__19039;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__18963__$1);var seq__18977_19040 = cljs.core.seq.call(null,entities);var chunk__18980_19041 = null;var count__18981_19042 = 0;var i__18982_19043 = 0;while(true){
if((i__18982_19043 < count__18981_19042))
{var e_19044 = cljs.core._nth.call(null,chunk__18980_19041,i__18982_19043);var vec__18985_19045 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_19046 = cljs.core.nth.call(null,vec__18985_19045,0,null);var y_v_19047 = cljs.core.nth.call(null,vec__18985_19045,1,null);var rot_speed_19048 = cljs.core.nth.call(null,vec__18985_19045,2,null);var px_19049 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_v_19046 * 3),0,0], null));var py_19050 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(y_v_19047 * 3),0], null));var cond3_19051 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e_19044).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond4_19052 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675));if((cond3_19051) && (cond4_19052))
{if(cljs.core.truth_((function (){var or__3408__auto__ = divergence.physics.colliding_QMARK_.call(null,py_19050,cljs.core.deref.call(null,e_19044));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return divergence.physics.colliding_QMARK_.call(null,px_19049,cljs.core.deref.call(null,e_19044));
}
})()))
{divergence.entity.enemies.effects.call(null,p,e_19044);
} else
{}
{
var G__19053 = seq__18977_19040;
var G__19054 = chunk__18980_19041;
var G__19055 = count__18981_19042;
var G__19056 = (i__18982_19043 + 1);
seq__18977_19040 = G__19053;
chunk__18980_19041 = G__19054;
count__18981_19042 = G__19055;
i__18982_19043 = G__19056;
continue;
}
} else
{{
var G__19057 = seq__18977_19040;
var G__19058 = chunk__18980_19041;
var G__19059 = count__18981_19042;
var G__19060 = (i__18982_19043 + 1);
seq__18977_19040 = G__19057;
chunk__18980_19041 = G__19058;
count__18981_19042 = G__19059;
i__18982_19043 = G__19060;
continue;
}
}
} else
{var temp__4092__auto___19061__$1 = cljs.core.seq.call(null,seq__18977_19040);if(temp__4092__auto___19061__$1)
{var seq__18977_19062__$1 = temp__4092__auto___19061__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18977_19062__$1))
{var c__4150__auto___19063 = cljs.core.chunk_first.call(null,seq__18977_19062__$1);{
var G__19064 = cljs.core.chunk_rest.call(null,seq__18977_19062__$1);
var G__19065 = c__4150__auto___19063;
var G__19066 = cljs.core.count.call(null,c__4150__auto___19063);
var G__19067 = 0;
seq__18977_19040 = G__19064;
chunk__18980_19041 = G__19065;
count__18981_19042 = G__19066;
i__18982_19043 = G__19067;
continue;
}
} else
{var e_19068 = cljs.core.first.call(null,seq__18977_19062__$1);var vec__18986_19069 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_19070 = cljs.core.nth.call(null,vec__18986_19069,0,null);var y_v_19071 = cljs.core.nth.call(null,vec__18986_19069,1,null);var rot_speed_19072 = cljs.core.nth.call(null,vec__18986_19069,2,null);var px_19073 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_v_19070 * 3),0,0], null));var py_19074 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(y_v_19071 * 3),0], null));var cond3_19075 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e_19068).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond4_19076 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675));if((cond3_19075) && (cond4_19076))
{if(cljs.core.truth_((function (){var or__3408__auto__ = divergence.physics.colliding_QMARK_.call(null,py_19074,cljs.core.deref.call(null,e_19068));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return divergence.physics.colliding_QMARK_.call(null,px_19073,cljs.core.deref.call(null,e_19068));
}
})()))
{divergence.entity.enemies.effects.call(null,p,e_19068);
} else
{}
{
var G__19077 = cljs.core.next.call(null,seq__18977_19062__$1);
var G__19078 = null;
var G__19079 = 0;
var G__19080 = 0;
seq__18977_19040 = G__19077;
chunk__18980_19041 = G__19078;
count__18981_19042 = G__19079;
i__18982_19043 = G__19080;
continue;
}
} else
{{
var G__19081 = cljs.core.next.call(null,seq__18977_19062__$1);
var G__19082 = null;
var G__19083 = 0;
var G__19084 = 0;
seq__18977_19040 = G__19081;
chunk__18980_19041 = G__19082;
count__18981_19042 = G__19083;
i__18982_19043 = G__19084;
continue;
}
}
}
} else
{}
}
break;
}
{
var G__19085 = cljs.core.next.call(null,seq__18963__$1);
var G__19086 = null;
var G__19087 = 0;
var G__19088 = 0;
seq__18963 = G__19085;
chunk__18964 = G__19086;
count__18965 = G__19087;
i__18966 = G__19088;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.next_level = (function next_level(){return cljs.core.swap_BANG_.call(null,divergence.system.current_level,cljs.core.inc);
});
divergence.system.has_item_QMARK_ = (function has_item_QMARK_(player,itemName){var item = divergence.entity.entity_atom__GT_component_val.call(null,player,new cljs.core.Keyword(null,"holding","holding",2105666101));if(cljs.core._EQ_.call(null,item,itemName))
{return true;
} else
{return false;
}
});
divergence.system.goal_QMARK_ = (function goal_QMARK_(entities,player){if(cljs.core._EQ_.call(null,cljs.core.rand_int.call(null,5),0))
{return cljs.core.first.call(null,(function (){var iter__4119__auto__ = (function iter__19095(s__19096){return (new cljs.core.LazySeq(null,(function (){var s__19096__$1 = s__19096;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19096__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var p = cljs.core.first.call(null,xs__4579__auto__);var iterys__4115__auto__ = ((function (s__19096__$1,p,xs__4579__auto__,temp__4092__auto__){
return (function iter__19097(s__19098){return (new cljs.core.LazySeq(null,((function (s__19096__$1,p,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__19098__$1 = s__19098;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__19098__$1);if(temp__4092__auto____$1)
{var s__19098__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19098__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__19098__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__19100 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__19099 = 0;while(true){
if((i__19099 < size__4118__auto__))
{var e = cljs.core._nth.call(null,c__4117__auto__,i__19099);var p_type = divergence.entity.entity_atom__GT_component_val.call(null,p,new cljs.core.Keyword(null,"type","type",1017479852));var e_name = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949));var win_cond = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"win-condition","win-condition",4211796956));var cond1 = divergence.system.conditions.conditions.call(null,cljs.core.deref.call(null,divergence.system.current_level)).call(null,p);var cond2 = cljs.core._EQ_.call(null,e_name,new cljs.core.Keyword(null,"goal","goal",1017082501));var cond3 = cljs.core._EQ_.call(null,p_type,new cljs.core.Keyword(null,"player","player",4323118675));var cond4 = divergence.system.has_item_QMARK_.call(null,p,win_cond);var en = e;if(cljs.core.truth_((function (){var and__3396__auto__ = cond1;if(cljs.core.truth_(and__3396__auto__))
{return (cond2) && (cond3) && (cond4);
} else
{return and__3396__auto__;
}
})()))
{cljs.core.chunk_append.call(null,b__19100,(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,cljs.core.deref.call(null,p),cljs.core.deref.call(null,en)))?true:null));
{
var G__19101 = (i__19099 + 1);
i__19099 = G__19101;
continue;
}
} else
{{
var G__19102 = (i__19099 + 1);
i__19099 = G__19102;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19100),iter__19097.call(null,cljs.core.chunk_rest.call(null,s__19098__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19100),null);
}
} else
{var e = cljs.core.first.call(null,s__19098__$2);var p_type = divergence.entity.entity_atom__GT_component_val.call(null,p,new cljs.core.Keyword(null,"type","type",1017479852));var e_name = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949));var win_cond = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"win-condition","win-condition",4211796956));var cond1 = divergence.system.conditions.conditions.call(null,cljs.core.deref.call(null,divergence.system.current_level)).call(null,p);var cond2 = cljs.core._EQ_.call(null,e_name,new cljs.core.Keyword(null,"goal","goal",1017082501));var cond3 = cljs.core._EQ_.call(null,p_type,new cljs.core.Keyword(null,"player","player",4323118675));var cond4 = divergence.system.has_item_QMARK_.call(null,p,win_cond);var en = e;if(cljs.core.truth_((function (){var and__3396__auto__ = cond1;if(cljs.core.truth_(and__3396__auto__))
{return (cond2) && (cond3) && (cond4);
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.cons.call(null,(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,cljs.core.deref.call(null,p),cljs.core.deref.call(null,en)))?true:null),iter__19097.call(null,cljs.core.rest.call(null,s__19098__$2)));
} else
{{
var G__19103 = cljs.core.rest.call(null,s__19098__$2);
s__19098__$1 = G__19103;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__19096__$1,p,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__19096__$1,p,xs__4579__auto__,temp__4092__auto__))
;var fs__4116__auto__ = cljs.core.seq.call(null,iterys__4115__auto__.call(null,entities));if(fs__4116__auto__)
{return cljs.core.concat.call(null,fs__4116__auto__,iter__19095.call(null,cljs.core.rest.call(null,s__19096__$1)));
} else
{{
var G__19104 = cljs.core.rest.call(null,s__19096__$1);
s__19096__$1 = G__19104;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,player);
})());
} else
{return null;
}
});
divergence.system.create_ref = (function create_ref(entities){var seq__19109 = cljs.core.seq.call(null,entities);var chunk__19110 = null;var count__19111 = 0;var i__19112 = 0;while(true){
if((i__19112 < count__19111))
{var e = cljs.core._nth.call(null,chunk__19110,i__19112);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.MovieClip(divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.Keyword(null,"texture","texture",3891054733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",4413191735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e))))))));
{
var G__19113 = seq__19109;
var G__19114 = chunk__19110;
var G__19115 = count__19111;
var G__19116 = (i__19112 + 1);
seq__19109 = G__19113;
chunk__19110 = G__19114;
count__19111 = G__19115;
i__19112 = G__19116;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19109);if(temp__4092__auto__)
{var seq__19109__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19109__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19109__$1);{
var G__19117 = cljs.core.chunk_rest.call(null,seq__19109__$1);
var G__19118 = c__4150__auto__;
var G__19119 = cljs.core.count.call(null,c__4150__auto__);
var G__19120 = 0;
seq__19109 = G__19117;
chunk__19110 = G__19118;
count__19111 = G__19119;
i__19112 = G__19120;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__19109__$1);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.MovieClip(divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.Keyword(null,"texture","texture",3891054733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",4413191735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e))))))));
{
var G__19121 = cljs.core.next.call(null,seq__19109__$1);
var G__19122 = null;
var G__19123 = 0;
var G__19124 = 0;
seq__19109 = G__19121;
chunk__19110 = G__19122;
count__19111 = G__19123;
i__19112 = G__19124;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.create_tiling_ref = (function create_tiling_ref(entities){var seq__19129 = cljs.core.seq.call(null,entities);var chunk__19130 = null;var count__19131 = 0;var i__19132 = 0;while(true){
if((i__19132 < count__19131))
{var e = cljs.core._nth.call(null,chunk__19130,i__19132);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.TilingSprite(divergence.textures.textures.call(null,new cljs.core.Keyword(null,"texture","texture",3891054733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e)))),(divergence.system.level_width * 2),(divergence.system.level_height * 2))));
{
var G__19133 = seq__19129;
var G__19134 = chunk__19130;
var G__19135 = count__19131;
var G__19136 = (i__19132 + 1);
seq__19129 = G__19133;
chunk__19130 = G__19134;
count__19131 = G__19135;
i__19132 = G__19136;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19129);if(temp__4092__auto__)
{var seq__19129__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19129__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19129__$1);{
var G__19137 = cljs.core.chunk_rest.call(null,seq__19129__$1);
var G__19138 = c__4150__auto__;
var G__19139 = cljs.core.count.call(null,c__4150__auto__);
var G__19140 = 0;
seq__19129 = G__19137;
chunk__19130 = G__19138;
count__19131 = G__19139;
i__19132 = G__19140;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__19129__$1);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.TilingSprite(divergence.textures.textures.call(null,new cljs.core.Keyword(null,"texture","texture",3891054733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e)))),(divergence.system.level_width * 2),(divergence.system.level_height * 2))));
{
var G__19141 = cljs.core.next.call(null,seq__19129__$1);
var G__19142 = null;
var G__19143 = 0;
var G__19144 = 0;
seq__19129 = G__19141;
chunk__19130 = G__19142;
count__19131 = G__19143;
i__19132 = G__19144;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.add_camera = (function add_camera(camera,container){return camera.addChild(container);
});
divergence.system.to_stage = (function to_stage(container,entities){var seq__19151 = cljs.core.seq.call(null,entities);var chunk__19153 = null;var count__19154 = 0;var i__19155 = 0;while(true){
if((i__19155 < count__19154))
{var e = cljs.core._nth.call(null,chunk__19153,i__19155);var ref_19157 = divergence.entity.entity_atom__GT_ref.call(null,e);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"container","container",602947571),container);
container.addChild(ref_19157);
{
var G__19158 = seq__19151;
var G__19159 = chunk__19153;
var G__19160 = count__19154;
var G__19161 = (i__19155 + 1);
seq__19151 = G__19158;
chunk__19153 = G__19159;
count__19154 = G__19160;
i__19155 = G__19161;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19151);if(temp__4092__auto__)
{var seq__19151__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19151__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19151__$1);{
var G__19162 = cljs.core.chunk_rest.call(null,seq__19151__$1);
var G__19163 = c__4150__auto__;
var G__19164 = cljs.core.count.call(null,c__4150__auto__);
var G__19165 = 0;
seq__19151 = G__19162;
chunk__19153 = G__19163;
count__19154 = G__19164;
i__19155 = G__19165;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__19151__$1);var ref_19166 = divergence.entity.entity_atom__GT_ref.call(null,e);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"container","container",602947571),container);
container.addChild(ref_19166);
{
var G__19167 = cljs.core.next.call(null,seq__19151__$1);
var G__19168 = null;
var G__19169 = 0;
var G__19170 = 0;
seq__19151 = G__19167;
chunk__19153 = G__19168;
count__19154 = G__19169;
i__19155 = G__19170;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.on_stage = (function on_stage(stage,container){return stage.addChild(container);
});
divergence.system.create_text = (function create_text(entities){var seq__19175 = cljs.core.seq.call(null,entities);var chunk__19176 = null;var count__19177 = 0;var i__19178 = 0;while(true){
if((i__19178 < count__19177))
{var e = cljs.core._nth.call(null,chunk__19176,i__19178);var style_19179 = cljs.core.get_in.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"style","style",1123684643)], null));var text_19180 = cljs.core.get_in.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"string","string",4416885635)], null));var ref_19181 = divergence.entity.entity_atom__GT_ref.call(null,e);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.Text(text_19180,style_19179)));
{
var G__19182 = seq__19175;
var G__19183 = chunk__19176;
var G__19184 = count__19177;
var G__19185 = (i__19178 + 1);
seq__19175 = G__19182;
chunk__19176 = G__19183;
count__19177 = G__19184;
i__19178 = G__19185;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19175);if(temp__4092__auto__)
{var seq__19175__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19175__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19175__$1);{
var G__19186 = cljs.core.chunk_rest.call(null,seq__19175__$1);
var G__19187 = c__4150__auto__;
var G__19188 = cljs.core.count.call(null,c__4150__auto__);
var G__19189 = 0;
seq__19175 = G__19186;
chunk__19176 = G__19187;
count__19177 = G__19188;
i__19178 = G__19189;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__19175__$1);var style_19190 = cljs.core.get_in.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"style","style",1123684643)], null));var text_19191 = cljs.core.get_in.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"string","string",4416885635)], null));var ref_19192 = divergence.entity.entity_atom__GT_ref.call(null,e);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.Text(text_19191,style_19190)));
{
var G__19193 = cljs.core.next.call(null,seq__19175__$1);
var G__19194 = null;
var G__19195 = 0;
var G__19196 = 0;
seq__19175 = G__19193;
chunk__19176 = G__19194;
count__19177 = G__19195;
i__19178 = G__19196;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.fps_time = cljs.core.atom.call(null,(new Date()).getTime());
divergence.system.fps_counter = (function fps_counter(entities){var seq__19203_19209 = cljs.core.seq.call(null,entities);var chunk__19205_19210 = null;var count__19206_19211 = 0;var i__19207_19212 = 0;while(true){
if((i__19207_19212 < count__19206_19211))
{var e_19213 = cljs.core._nth.call(null,chunk__19205_19210,i__19207_19212);var ref_19214 = divergence.entity.entity_atom__GT_ref.call(null,e_19213);var now_19215 = (new Date()).getTime();ref_19214.setText([cljs.core.str("FPS: "),cljs.core.str(Math.round((1000 / (now_19215 - cljs.core.deref.call(null,divergence.system.fps_time)))))].join(''));
{
var G__19216 = seq__19203_19209;
var G__19217 = chunk__19205_19210;
var G__19218 = count__19206_19211;
var G__19219 = (i__19207_19212 + 1);
seq__19203_19209 = G__19216;
chunk__19205_19210 = G__19217;
count__19206_19211 = G__19218;
i__19207_19212 = G__19219;
continue;
}
} else
{var temp__4092__auto___19220 = cljs.core.seq.call(null,seq__19203_19209);if(temp__4092__auto___19220)
{var seq__19203_19221__$1 = temp__4092__auto___19220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19203_19221__$1))
{var c__4150__auto___19222 = cljs.core.chunk_first.call(null,seq__19203_19221__$1);{
var G__19223 = cljs.core.chunk_rest.call(null,seq__19203_19221__$1);
var G__19224 = c__4150__auto___19222;
var G__19225 = cljs.core.count.call(null,c__4150__auto___19222);
var G__19226 = 0;
seq__19203_19209 = G__19223;
chunk__19205_19210 = G__19224;
count__19206_19211 = G__19225;
i__19207_19212 = G__19226;
continue;
}
} else
{var e_19227 = cljs.core.first.call(null,seq__19203_19221__$1);var ref_19228 = divergence.entity.entity_atom__GT_ref.call(null,e_19227);var now_19229 = (new Date()).getTime();ref_19228.setText([cljs.core.str("FPS: "),cljs.core.str(Math.round((1000 / (now_19229 - cljs.core.deref.call(null,divergence.system.fps_time)))))].join(''));
{
var G__19230 = cljs.core.next.call(null,seq__19203_19221__$1);
var G__19231 = null;
var G__19232 = 0;
var G__19233 = 0;
seq__19203_19209 = G__19230;
chunk__19205_19210 = G__19231;
count__19206_19211 = G__19232;
i__19207_19212 = G__19233;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.reset_BANG_.call(null,divergence.system.fps_time,(new Date()).getTime());
});
divergence.system.animations = (function animations(entities){var seq__19240 = cljs.core.seq.call(null,entities);var chunk__19242 = null;var count__19243 = 0;var i__19244 = 0;while(true){
if((i__19244 < count__19243))
{var e = cljs.core._nth.call(null,chunk__19242,i__19244);var sprite_19246 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"ref","ref",1014017029));sprite_19246.animationSpeed = 0.15;
sprite_19246.loop = true;
sprite_19246.playing = true;
{
var G__19247 = seq__19240;
var G__19248 = chunk__19242;
var G__19249 = count__19243;
var G__19250 = (i__19244 + 1);
seq__19240 = G__19247;
chunk__19242 = G__19248;
count__19243 = G__19249;
i__19244 = G__19250;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19240);if(temp__4092__auto__)
{var seq__19240__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19240__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19240__$1);{
var G__19251 = cljs.core.chunk_rest.call(null,seq__19240__$1);
var G__19252 = c__4150__auto__;
var G__19253 = cljs.core.count.call(null,c__4150__auto__);
var G__19254 = 0;
seq__19240 = G__19251;
chunk__19242 = G__19252;
count__19243 = G__19253;
i__19244 = G__19254;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__19240__$1);var sprite_19255 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"ref","ref",1014017029));sprite_19255.animationSpeed = 0.15;
sprite_19255.loop = true;
sprite_19255.playing = true;
{
var G__19256 = cljs.core.next.call(null,seq__19240__$1);
var G__19257 = null;
var G__19258 = 0;
var G__19259 = 0;
seq__19240 = G__19256;
chunk__19242 = G__19257;
count__19243 = G__19258;
i__19244 = G__19259;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.code__GT_key = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([32,65,68,37,38,39,40,16,80,83,86,87],[new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"travel-back","travel-back",642120492),new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"down","down",1016993812),new cljs.core.Keyword(null,"item","item",1017147013),new cljs.core.Keyword(null,"up","up",1013907981)]));
divergence.system.key_inputs = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
(document.body["onkeydown"] = (function (e){var k = cljs.core.deref.call(null,divergence.system.code__GT_key).call(null,e.keyCode);if(cljs.core.truth_(k))
{e.preventDefault();
return cljs.core.swap_BANG_.call(null,divergence.system.key_inputs,cljs.core.conj,k);
} else
{return null;
}
}));
(document.body["onkeyup"] = (function (e){var k = cljs.core.deref.call(null,divergence.system.code__GT_key).call(null,e.keyCode);if(cljs.core.truth_(k))
{e.preventDefault();
return cljs.core.swap_BANG_.call(null,divergence.system.key_inputs,cljs.core.disj,k);
} else
{return null;
}
}));
divergence.system.player_input = (function player_input(entities){var seq__19264 = cljs.core.seq.call(null,entities);var chunk__19265 = null;var count__19266 = 0;var i__19267 = 0;while(true){
if((i__19267 < count__19266))
{var e = cljs.core._nth.call(null,chunk__19265,i__19267);cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,divergence.entity.unique_entity_atom__GT_entity_atom).call(null,e),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",4147068015)], null),cljs.core.deref.call(null,divergence.system.key_inputs));
{
var G__19268 = seq__19264;
var G__19269 = chunk__19265;
var G__19270 = count__19266;
var G__19271 = (i__19267 + 1);
seq__19264 = G__19268;
chunk__19265 = G__19269;
count__19266 = G__19270;
i__19267 = G__19271;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19264);if(temp__4092__auto__)
{var seq__19264__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19264__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19264__$1);{
var G__19272 = cljs.core.chunk_rest.call(null,seq__19264__$1);
var G__19273 = c__4150__auto__;
var G__19274 = cljs.core.count.call(null,c__4150__auto__);
var G__19275 = 0;
seq__19264 = G__19272;
chunk__19265 = G__19273;
count__19266 = G__19274;
i__19267 = G__19275;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__19264__$1);cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,divergence.entity.unique_entity_atom__GT_entity_atom).call(null,e),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",4147068015)], null),cljs.core.deref.call(null,divergence.system.key_inputs));
{
var G__19276 = cljs.core.next.call(null,seq__19264__$1);
var G__19277 = null;
var G__19278 = 0;
var G__19279 = 0;
seq__19264 = G__19276;
chunk__19265 = G__19277;
count__19266 = G__19278;
i__19267 = G__19279;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.execute_actions = (function execute_actions(entities){var seq__19288 = cljs.core.seq.call(null,entities);var chunk__19290 = null;var count__19291 = 0;var i__19292 = 0;while(true){
if((i__19292 < count__19291))
{var e = cljs.core._nth.call(null,chunk__19290,i__19292);var actions_19296 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__19294_19297 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_19298 = cljs.core.nth.call(null,vec__19294_19297,0,null);var ay_19299 = cljs.core.nth.call(null,vec__19294_19297,1,null);var ar_19300 = cljs.core.nth.call(null,vec__19294_19297,2,null);var sprite_19301 = divergence.entity.entity_atom__GT_ref.call(null,e);if(cljs.core.truth_(actions_19296.call(null,new cljs.core.Keyword(null,"item","item",1017147013))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),1);
} else
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),0);
}
if(cljs.core.truth_(actions_19296))
{if(cljs.core.truth_(actions_19296.call(null,new cljs.core.Keyword(null,"p","p",1013904354))))
{ShowMenu();
pause();
} else
{}
if(cljs.core.truth_(actions_19296.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3,0,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0.2,0], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),0))
{sprite_19301.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationLeft));
} else
{sprite_19301.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.walkAnimationLeft));
}
} else
{}
if(cljs.core.truth_(actions_19296.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,0,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0.2,0], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),0))
{sprite_19301.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
} else
{sprite_19301.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.walkAnimationRight));
}
} else
{}
if(cljs.core.truth_(actions_19296.call(null,new cljs.core.Keyword(null,"down","down",1016993812))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,0], null));
} else
{}
if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),1);if(and__3396__auto__)
{return actions_19296.call(null,new cljs.core.Keyword(null,"up","up",1013907981));
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"jump","jump",1017178016));
sprite_19301.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
sprite_19301.playing = true;
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-6.5,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),0);
} else
{}
if(cljs.core.not_any_QMARK_.call(null,actions_19296,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"down","down",1016993812)], null)))
{if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{sprite_19301.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pf], null)));
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{}
} else
{}
{
var G__19302 = seq__19288;
var G__19303 = chunk__19290;
var G__19304 = count__19291;
var G__19305 = (i__19292 + 1);
seq__19288 = G__19302;
chunk__19290 = G__19303;
count__19291 = G__19304;
i__19292 = G__19305;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19288);if(temp__4092__auto__)
{var seq__19288__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19288__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19288__$1);{
var G__19306 = cljs.core.chunk_rest.call(null,seq__19288__$1);
var G__19307 = c__4150__auto__;
var G__19308 = cljs.core.count.call(null,c__4150__auto__);
var G__19309 = 0;
seq__19288 = G__19306;
chunk__19290 = G__19307;
count__19291 = G__19308;
i__19292 = G__19309;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__19288__$1);var actions_19310 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__19295_19311 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_19312 = cljs.core.nth.call(null,vec__19295_19311,0,null);var ay_19313 = cljs.core.nth.call(null,vec__19295_19311,1,null);var ar_19314 = cljs.core.nth.call(null,vec__19295_19311,2,null);var sprite_19315 = divergence.entity.entity_atom__GT_ref.call(null,e);if(cljs.core.truth_(actions_19310.call(null,new cljs.core.Keyword(null,"item","item",1017147013))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),1);
} else
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),0);
}
if(cljs.core.truth_(actions_19310))
{if(cljs.core.truth_(actions_19310.call(null,new cljs.core.Keyword(null,"p","p",1013904354))))
{ShowMenu();
pause();
} else
{}
if(cljs.core.truth_(actions_19310.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3,0,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0.2,0], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),0))
{sprite_19315.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationLeft));
} else
{sprite_19315.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.walkAnimationLeft));
}
} else
{}
if(cljs.core.truth_(actions_19310.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,0,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0.2,0], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),0))
{sprite_19315.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
} else
{sprite_19315.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.walkAnimationRight));
}
} else
{}
if(cljs.core.truth_(actions_19310.call(null,new cljs.core.Keyword(null,"down","down",1016993812))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,0], null));
} else
{}
if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),1);if(and__3396__auto__)
{return actions_19310.call(null,new cljs.core.Keyword(null,"up","up",1013907981));
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"jump","jump",1017178016));
sprite_19315.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
sprite_19315.playing = true;
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-6.5,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),0);
} else
{}
if(cljs.core.not_any_QMARK_.call(null,actions_19310,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"down","down",1016993812)], null)))
{if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{sprite_19315.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pf], null)));
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{}
} else
{}
{
var G__19316 = cljs.core.next.call(null,seq__19288__$1);
var G__19317 = null;
var G__19318 = 0;
var G__19319 = 0;
seq__19288 = G__19316;
chunk__19290 = G__19317;
count__19291 = G__19318;
i__19292 = G__19319;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* Change code->key mapping
*/
divergence.system.change_key_code = (function change_key_code(keyCode,newKeyCode){var value = cljs.core.deref.call(null,divergence.system.code__GT_key).call(null,keyCode);cljs.core.swap_BANG_.call(null,divergence.system.code__GT_key,cljs.core.dissoc,keyCode);
return cljs.core.swap_BANG_.call(null,divergence.system.code__GT_key,cljs.core.assoc,newKeyCode,value);
});
divergence.system.movement_caps = (function movement_caps(entities){var seq__19330 = cljs.core.seq.call(null,entities);var chunk__19331 = null;var count__19332 = 0;var i__19333 = 0;while(true){
if((i__19333 < count__19332))
{var e = cljs.core._nth.call(null,chunk__19331,i__19333);var actions_19340 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"actions","actions",4147068015));var map__19334_19341 = cljs.core.deref.call(null,e);var map__19334_19342__$1 = ((cljs.core.seq_QMARK_.call(null,map__19334_19341))?cljs.core.apply.call(null,cljs.core.hash_map,map__19334_19341):map__19334_19341);var vec__19335_19343 = cljs.core.get.call(null,map__19334_19342__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var vx_19344 = cljs.core.nth.call(null,vec__19335_19343,0,null);var vy_19345 = cljs.core.nth.call(null,vec__19335_19343,1,null);var vr_19346 = cljs.core.nth.call(null,vec__19335_19343,2,null);var vec__19336_19347 = cljs.core.get.call(null,map__19334_19342__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_19348 = cljs.core.nth.call(null,vec__19336_19347,0,null);var ay_19349 = cljs.core.nth.call(null,vec__19336_19347,1,null);var ar_19350 = cljs.core.nth.call(null,vec__19336_19347,2,null);if((vx_19344 > 4))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,vy_19345,vr_19346], null));
} else
{}
if((vx_19344 < -4))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-5,vy_19345,vr_19346], null));
} else
{}
if(cljs.core.truth_((function (){var and__3396__auto__ = (vy_19345 < -4);if(and__3396__auto__)
{return cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx_19344,-4,vr_19346], null));
} else
{return and__3396__auto__;
}
})()))
{} else
{}
{
var G__19351 = seq__19330;
var G__19352 = chunk__19331;
var G__19353 = count__19332;
var G__19354 = (i__19333 + 1);
seq__19330 = G__19351;
chunk__19331 = G__19352;
count__19332 = G__19353;
i__19333 = G__19354;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19330);if(temp__4092__auto__)
{var seq__19330__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19330__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19330__$1);{
var G__19355 = cljs.core.chunk_rest.call(null,seq__19330__$1);
var G__19356 = c__4150__auto__;
var G__19357 = cljs.core.count.call(null,c__4150__auto__);
var G__19358 = 0;
seq__19330 = G__19355;
chunk__19331 = G__19356;
count__19332 = G__19357;
i__19333 = G__19358;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__19330__$1);var actions_19359 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"actions","actions",4147068015));var map__19337_19360 = cljs.core.deref.call(null,e);var map__19337_19361__$1 = ((cljs.core.seq_QMARK_.call(null,map__19337_19360))?cljs.core.apply.call(null,cljs.core.hash_map,map__19337_19360):map__19337_19360);var vec__19338_19362 = cljs.core.get.call(null,map__19337_19361__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var vx_19363 = cljs.core.nth.call(null,vec__19338_19362,0,null);var vy_19364 = cljs.core.nth.call(null,vec__19338_19362,1,null);var vr_19365 = cljs.core.nth.call(null,vec__19338_19362,2,null);var vec__19339_19366 = cljs.core.get.call(null,map__19337_19361__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_19367 = cljs.core.nth.call(null,vec__19339_19366,0,null);var ay_19368 = cljs.core.nth.call(null,vec__19339_19366,1,null);var ar_19369 = cljs.core.nth.call(null,vec__19339_19366,2,null);if((vx_19363 > 4))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,vy_19364,vr_19365], null));
} else
{}
if((vx_19363 < -4))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-5,vy_19364,vr_19365], null));
} else
{}
if(cljs.core.truth_((function (){var and__3396__auto__ = (vy_19364 < -4);if(and__3396__auto__)
{return cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx_19363,-4,vr_19365], null));
} else
{return and__3396__auto__;
}
})()))
{} else
{}
{
var G__19370 = cljs.core.next.call(null,seq__19330__$1);
var G__19371 = null;
var G__19372 = 0;
var G__19373 = 0;
seq__19330 = G__19370;
chunk__19331 = G__19371;
count__19332 = G__19372;
i__19333 = G__19373;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.move_background = (function move_background(player,entities){var seq__19400 = cljs.core.seq.call(null,player);var chunk__19402 = null;var count__19403 = 0;var i__19404 = 0;while(true){
if((i__19404 < count__19403))
{var p = cljs.core._nth.call(null,chunk__19402,i__19404);if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{return and__3396__auto__;
}
})()))
{var seq__19406_19426 = cljs.core.seq.call(null,entities);var chunk__19409_19427 = null;var count__19410_19428 = 0;var i__19411_19429 = 0;while(true){
if((i__19411_19429 < count__19410_19428))
{var e_19430 = cljs.core._nth.call(null,chunk__19409_19427,i__19411_19429);var actions_19431 = cljs.core.deref.call(null,e_19430).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__19414_19432 = cljs.core.deref.call(null,e_19430).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_19433 = cljs.core.nth.call(null,vec__19414_19432,0,null);var y_19434 = cljs.core.nth.call(null,vec__19414_19432,1,null);var r_19435 = cljs.core.nth.call(null,vec__19414_19432,2,null);var e_type_19436 = divergence.entity.entity_atom__GT_component_val.call(null,e_19430,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_19436,new cljs.core.Keyword(null,"move-bg","move-bg",2257424179)))
{if(cljs.core.truth_(actions_19431.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e_19430,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_19433 + 10),y_19434,r_19435], null));
} else
{if(cljs.core.truth_(actions_19431.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e_19430,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_19433 - 10),y_19434,r_19435], null));
} else
{}
}
{
var G__19437 = seq__19406_19426;
var G__19438 = chunk__19409_19427;
var G__19439 = count__19410_19428;
var G__19440 = (i__19411_19429 + 1);
seq__19406_19426 = G__19437;
chunk__19409_19427 = G__19438;
count__19410_19428 = G__19439;
i__19411_19429 = G__19440;
continue;
}
} else
{{
var G__19441 = seq__19406_19426;
var G__19442 = chunk__19409_19427;
var G__19443 = count__19410_19428;
var G__19444 = (i__19411_19429 + 1);
seq__19406_19426 = G__19441;
chunk__19409_19427 = G__19442;
count__19410_19428 = G__19443;
i__19411_19429 = G__19444;
continue;
}
}
} else
{var temp__4092__auto___19445 = cljs.core.seq.call(null,seq__19406_19426);if(temp__4092__auto___19445)
{var seq__19406_19446__$1 = temp__4092__auto___19445;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19406_19446__$1))
{var c__4150__auto___19447 = cljs.core.chunk_first.call(null,seq__19406_19446__$1);{
var G__19448 = cljs.core.chunk_rest.call(null,seq__19406_19446__$1);
var G__19449 = c__4150__auto___19447;
var G__19450 = cljs.core.count.call(null,c__4150__auto___19447);
var G__19451 = 0;
seq__19406_19426 = G__19448;
chunk__19409_19427 = G__19449;
count__19410_19428 = G__19450;
i__19411_19429 = G__19451;
continue;
}
} else
{var e_19452 = cljs.core.first.call(null,seq__19406_19446__$1);var actions_19453 = cljs.core.deref.call(null,e_19452).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__19415_19454 = cljs.core.deref.call(null,e_19452).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_19455 = cljs.core.nth.call(null,vec__19415_19454,0,null);var y_19456 = cljs.core.nth.call(null,vec__19415_19454,1,null);var r_19457 = cljs.core.nth.call(null,vec__19415_19454,2,null);var e_type_19458 = divergence.entity.entity_atom__GT_component_val.call(null,e_19452,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_19458,new cljs.core.Keyword(null,"move-bg","move-bg",2257424179)))
{if(cljs.core.truth_(actions_19453.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e_19452,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_19455 + 10),y_19456,r_19457], null));
} else
{if(cljs.core.truth_(actions_19453.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e_19452,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_19455 - 10),y_19456,r_19457], null));
} else
{}
}
{
var G__19459 = cljs.core.next.call(null,seq__19406_19446__$1);
var G__19460 = null;
var G__19461 = 0;
var G__19462 = 0;
seq__19406_19426 = G__19459;
chunk__19409_19427 = G__19460;
count__19410_19428 = G__19461;
i__19411_19429 = G__19462;
continue;
}
} else
{{
var G__19463 = cljs.core.next.call(null,seq__19406_19446__$1);
var G__19464 = null;
var G__19465 = 0;
var G__19466 = 0;
seq__19406_19426 = G__19463;
chunk__19409_19427 = G__19464;
count__19410_19428 = G__19465;
i__19411_19429 = G__19466;
continue;
}
}
}
} else
{}
}
break;
}
{
var G__19467 = seq__19400;
var G__19468 = chunk__19402;
var G__19469 = count__19403;
var G__19470 = (i__19404 + 1);
seq__19400 = G__19467;
chunk__19402 = G__19468;
count__19403 = G__19469;
i__19404 = G__19470;
continue;
}
} else
{{
var G__19471 = seq__19400;
var G__19472 = chunk__19402;
var G__19473 = count__19403;
var G__19474 = (i__19404 + 1);
seq__19400 = G__19471;
chunk__19402 = G__19472;
count__19403 = G__19473;
i__19404 = G__19474;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19400);if(temp__4092__auto__)
{var seq__19400__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19400__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19400__$1);{
var G__19475 = cljs.core.chunk_rest.call(null,seq__19400__$1);
var G__19476 = c__4150__auto__;
var G__19477 = cljs.core.count.call(null,c__4150__auto__);
var G__19478 = 0;
seq__19400 = G__19475;
chunk__19402 = G__19476;
count__19403 = G__19477;
i__19404 = G__19478;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__19400__$1);if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{return and__3396__auto__;
}
})()))
{var seq__19416_19479 = cljs.core.seq.call(null,entities);var chunk__19419_19480 = null;var count__19420_19481 = 0;var i__19421_19482 = 0;while(true){
if((i__19421_19482 < count__19420_19481))
{var e_19483 = cljs.core._nth.call(null,chunk__19419_19480,i__19421_19482);var actions_19484 = cljs.core.deref.call(null,e_19483).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__19424_19485 = cljs.core.deref.call(null,e_19483).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_19486 = cljs.core.nth.call(null,vec__19424_19485,0,null);var y_19487 = cljs.core.nth.call(null,vec__19424_19485,1,null);var r_19488 = cljs.core.nth.call(null,vec__19424_19485,2,null);var e_type_19489 = divergence.entity.entity_atom__GT_component_val.call(null,e_19483,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_19489,new cljs.core.Keyword(null,"move-bg","move-bg",2257424179)))
{if(cljs.core.truth_(actions_19484.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e_19483,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_19486 + 10),y_19487,r_19488], null));
} else
{if(cljs.core.truth_(actions_19484.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e_19483,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_19486 - 10),y_19487,r_19488], null));
} else
{}
}
{
var G__19490 = seq__19416_19479;
var G__19491 = chunk__19419_19480;
var G__19492 = count__19420_19481;
var G__19493 = (i__19421_19482 + 1);
seq__19416_19479 = G__19490;
chunk__19419_19480 = G__19491;
count__19420_19481 = G__19492;
i__19421_19482 = G__19493;
continue;
}
} else
{{
var G__19494 = seq__19416_19479;
var G__19495 = chunk__19419_19480;
var G__19496 = count__19420_19481;
var G__19497 = (i__19421_19482 + 1);
seq__19416_19479 = G__19494;
chunk__19419_19480 = G__19495;
count__19420_19481 = G__19496;
i__19421_19482 = G__19497;
continue;
}
}
} else
{var temp__4092__auto___19498__$1 = cljs.core.seq.call(null,seq__19416_19479);if(temp__4092__auto___19498__$1)
{var seq__19416_19499__$1 = temp__4092__auto___19498__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19416_19499__$1))
{var c__4150__auto___19500 = cljs.core.chunk_first.call(null,seq__19416_19499__$1);{
var G__19501 = cljs.core.chunk_rest.call(null,seq__19416_19499__$1);
var G__19502 = c__4150__auto___19500;
var G__19503 = cljs.core.count.call(null,c__4150__auto___19500);
var G__19504 = 0;
seq__19416_19479 = G__19501;
chunk__19419_19480 = G__19502;
count__19420_19481 = G__19503;
i__19421_19482 = G__19504;
continue;
}
} else
{var e_19505 = cljs.core.first.call(null,seq__19416_19499__$1);var actions_19506 = cljs.core.deref.call(null,e_19505).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__19425_19507 = cljs.core.deref.call(null,e_19505).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_19508 = cljs.core.nth.call(null,vec__19425_19507,0,null);var y_19509 = cljs.core.nth.call(null,vec__19425_19507,1,null);var r_19510 = cljs.core.nth.call(null,vec__19425_19507,2,null);var e_type_19511 = divergence.entity.entity_atom__GT_component_val.call(null,e_19505,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_19511,new cljs.core.Keyword(null,"move-bg","move-bg",2257424179)))
{if(cljs.core.truth_(actions_19506.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e_19505,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_19508 + 10),y_19509,r_19510], null));
} else
{if(cljs.core.truth_(actions_19506.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e_19505,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_19508 - 10),y_19509,r_19510], null));
} else
{}
}
{
var G__19512 = cljs.core.next.call(null,seq__19416_19499__$1);
var G__19513 = null;
var G__19514 = 0;
var G__19515 = 0;
seq__19416_19479 = G__19512;
chunk__19419_19480 = G__19513;
count__19420_19481 = G__19514;
i__19421_19482 = G__19515;
continue;
}
} else
{{
var G__19516 = cljs.core.next.call(null,seq__19416_19499__$1);
var G__19517 = null;
var G__19518 = 0;
var G__19519 = 0;
seq__19416_19479 = G__19516;
chunk__19419_19480 = G__19517;
count__19420_19481 = G__19518;
i__19421_19482 = G__19519;
continue;
}
}
}
} else
{}
}
break;
}
{
var G__19520 = cljs.core.next.call(null,seq__19400__$1);
var G__19521 = null;
var G__19522 = 0;
var G__19523 = 0;
seq__19400 = G__19520;
chunk__19402 = G__19521;
count__19403 = G__19522;
i__19404 = G__19523;
continue;
}
} else
{{
var G__19524 = cljs.core.next.call(null,seq__19400__$1);
var G__19525 = null;
var G__19526 = 0;
var G__19527 = 0;
seq__19400 = G__19524;
chunk__19402 = G__19525;
count__19403 = G__19526;
i__19404 = G__19527;
continue;
}
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.pick_drop_item = (function pick_drop_item(entities){var seq__19548 = cljs.core.seq.call(null,entities);var chunk__19550 = null;var count__19551 = 0;var i__19552 = 0;while(true){
if((i__19552 < count__19551))
{var e = cljs.core._nth.call(null,chunk__19550,i__19552);var e_type_19568 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_19568,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_19569 = e;var actions_19570 = cljs.core.deref.call(null,p_19569).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__19554_19571 = cljs.core.deref.call(null,p_19569).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_19572 = cljs.core.nth.call(null,vec__19554_19571,0,null);var y_19573 = cljs.core.nth.call(null,vec__19554_19571,1,null);var r_19574 = cljs.core.nth.call(null,vec__19554_19571,2,null);var seq__19555_19575 = cljs.core.seq.call(null,entities);var chunk__19557_19576 = null;var count__19558_19577 = 0;var i__19559_19578 = 0;while(true){
if((i__19559_19578 < count__19558_19577))
{var en_19579 = cljs.core._nth.call(null,chunk__19557_19576,i__19559_19578);var item_19580 = cljs.core.deref.call(null,en_19579);var item_name_19581 = divergence.entity.entity_atom__GT_component_val.call(null,en_19579,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_19580.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"item","item",1017147013)))
{if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p_19569).call(null,new cljs.core.Keyword(null,"items","items",1114430258)),1);if(and__3396__auto__)
{return divergence.physics.colliding_QMARK_.call(null,item_19580,cljs.core.deref.call(null,p_19569));
} else
{return and__3396__auto__;
}
})()))
{divergence.entity.entity_atom__GT_ref.call(null,en_19579).visible = false;
cljs.core.swap_BANG_.call(null,p_19569,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),item_name_19581);
var pheight_19582 = divergence.entity.entity_atom__GT_ref.call(null,p_19569).height;var iheight_19583 = divergence.entity.entity_atom__GT_ref.call(null,en_19579).height;cljs.core.swap_BANG_.call(null,en_19579,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_19572,(y_19573 + (pheight_19582 - iheight_19583)),r_19574], null));
cljs.core.println.call(null,divergence.entity.entity_atom__GT_component_val.call(null,p_19569,new cljs.core.Keyword(null,"holding","holding",2105666101)));
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"pickup","pickup",4320394734));
} else
{}
} else
{}
{
var G__19584 = seq__19555_19575;
var G__19585 = chunk__19557_19576;
var G__19586 = count__19558_19577;
var G__19587 = (i__19559_19578 + 1);
seq__19555_19575 = G__19584;
chunk__19557_19576 = G__19585;
count__19558_19577 = G__19586;
i__19559_19578 = G__19587;
continue;
}
} else
{var temp__4092__auto___19588 = cljs.core.seq.call(null,seq__19555_19575);if(temp__4092__auto___19588)
{var seq__19555_19589__$1 = temp__4092__auto___19588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19555_19589__$1))
{var c__4150__auto___19590 = cljs.core.chunk_first.call(null,seq__19555_19589__$1);{
var G__19591 = cljs.core.chunk_rest.call(null,seq__19555_19589__$1);
var G__19592 = c__4150__auto___19590;
var G__19593 = cljs.core.count.call(null,c__4150__auto___19590);
var G__19594 = 0;
seq__19555_19575 = G__19591;
chunk__19557_19576 = G__19592;
count__19558_19577 = G__19593;
i__19559_19578 = G__19594;
continue;
}
} else
{var en_19595 = cljs.core.first.call(null,seq__19555_19589__$1);var item_19596 = cljs.core.deref.call(null,en_19595);var item_name_19597 = divergence.entity.entity_atom__GT_component_val.call(null,en_19595,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_19596.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"item","item",1017147013)))
{if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p_19569).call(null,new cljs.core.Keyword(null,"items","items",1114430258)),1);if(and__3396__auto__)
{return divergence.physics.colliding_QMARK_.call(null,item_19596,cljs.core.deref.call(null,p_19569));
} else
{return and__3396__auto__;
}
})()))
{divergence.entity.entity_atom__GT_ref.call(null,en_19595).visible = false;
cljs.core.swap_BANG_.call(null,p_19569,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),item_name_19597);
var pheight_19598 = divergence.entity.entity_atom__GT_ref.call(null,p_19569).height;var iheight_19599 = divergence.entity.entity_atom__GT_ref.call(null,en_19595).height;cljs.core.swap_BANG_.call(null,en_19595,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_19572,(y_19573 + (pheight_19598 - iheight_19599)),r_19574], null));
cljs.core.println.call(null,divergence.entity.entity_atom__GT_component_val.call(null,p_19569,new cljs.core.Keyword(null,"holding","holding",2105666101)));
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"pickup","pickup",4320394734));
} else
{}
} else
{}
{
var G__19600 = cljs.core.next.call(null,seq__19555_19589__$1);
var G__19601 = null;
var G__19602 = 0;
var G__19603 = 0;
seq__19555_19575 = G__19600;
chunk__19557_19576 = G__19601;
count__19558_19577 = G__19602;
i__19559_19578 = G__19603;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__19604 = seq__19548;
var G__19605 = chunk__19550;
var G__19606 = count__19551;
var G__19607 = (i__19552 + 1);
seq__19548 = G__19604;
chunk__19550 = G__19605;
count__19551 = G__19606;
i__19552 = G__19607;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19548);if(temp__4092__auto__)
{var seq__19548__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19548__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19548__$1);{
var G__19608 = cljs.core.chunk_rest.call(null,seq__19548__$1);
var G__19609 = c__4150__auto__;
var G__19610 = cljs.core.count.call(null,c__4150__auto__);
var G__19611 = 0;
seq__19548 = G__19608;
chunk__19550 = G__19609;
count__19551 = G__19610;
i__19552 = G__19611;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__19548__$1);var e_type_19612 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_19612,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_19613 = e;var actions_19614 = cljs.core.deref.call(null,p_19613).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__19561_19615 = cljs.core.deref.call(null,p_19613).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_19616 = cljs.core.nth.call(null,vec__19561_19615,0,null);var y_19617 = cljs.core.nth.call(null,vec__19561_19615,1,null);var r_19618 = cljs.core.nth.call(null,vec__19561_19615,2,null);var seq__19562_19619 = cljs.core.seq.call(null,entities);var chunk__19564_19620 = null;var count__19565_19621 = 0;var i__19566_19622 = 0;while(true){
if((i__19566_19622 < count__19565_19621))
{var en_19623 = cljs.core._nth.call(null,chunk__19564_19620,i__19566_19622);var item_19624 = cljs.core.deref.call(null,en_19623);var item_name_19625 = divergence.entity.entity_atom__GT_component_val.call(null,en_19623,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_19624.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"item","item",1017147013)))
{if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p_19613).call(null,new cljs.core.Keyword(null,"items","items",1114430258)),1);if(and__3396__auto__)
{return divergence.physics.colliding_QMARK_.call(null,item_19624,cljs.core.deref.call(null,p_19613));
} else
{return and__3396__auto__;
}
})()))
{divergence.entity.entity_atom__GT_ref.call(null,en_19623).visible = false;
cljs.core.swap_BANG_.call(null,p_19613,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),item_name_19625);
var pheight_19626 = divergence.entity.entity_atom__GT_ref.call(null,p_19613).height;var iheight_19627 = divergence.entity.entity_atom__GT_ref.call(null,en_19623).height;cljs.core.swap_BANG_.call(null,en_19623,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_19616,(y_19617 + (pheight_19626 - iheight_19627)),r_19618], null));
cljs.core.println.call(null,divergence.entity.entity_atom__GT_component_val.call(null,p_19613,new cljs.core.Keyword(null,"holding","holding",2105666101)));
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"pickup","pickup",4320394734));
} else
{}
} else
{}
{
var G__19628 = seq__19562_19619;
var G__19629 = chunk__19564_19620;
var G__19630 = count__19565_19621;
var G__19631 = (i__19566_19622 + 1);
seq__19562_19619 = G__19628;
chunk__19564_19620 = G__19629;
count__19565_19621 = G__19630;
i__19566_19622 = G__19631;
continue;
}
} else
{var temp__4092__auto___19632__$1 = cljs.core.seq.call(null,seq__19562_19619);if(temp__4092__auto___19632__$1)
{var seq__19562_19633__$1 = temp__4092__auto___19632__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19562_19633__$1))
{var c__4150__auto___19634 = cljs.core.chunk_first.call(null,seq__19562_19633__$1);{
var G__19635 = cljs.core.chunk_rest.call(null,seq__19562_19633__$1);
var G__19636 = c__4150__auto___19634;
var G__19637 = cljs.core.count.call(null,c__4150__auto___19634);
var G__19638 = 0;
seq__19562_19619 = G__19635;
chunk__19564_19620 = G__19636;
count__19565_19621 = G__19637;
i__19566_19622 = G__19638;
continue;
}
} else
{var en_19639 = cljs.core.first.call(null,seq__19562_19633__$1);var item_19640 = cljs.core.deref.call(null,en_19639);var item_name_19641 = divergence.entity.entity_atom__GT_component_val.call(null,en_19639,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_19640.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"item","item",1017147013)))
{if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p_19613).call(null,new cljs.core.Keyword(null,"items","items",1114430258)),1);if(and__3396__auto__)
{return divergence.physics.colliding_QMARK_.call(null,item_19640,cljs.core.deref.call(null,p_19613));
} else
{return and__3396__auto__;
}
})()))
{divergence.entity.entity_atom__GT_ref.call(null,en_19639).visible = false;
cljs.core.swap_BANG_.call(null,p_19613,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),item_name_19641);
var pheight_19642 = divergence.entity.entity_atom__GT_ref.call(null,p_19613).height;var iheight_19643 = divergence.entity.entity_atom__GT_ref.call(null,en_19639).height;cljs.core.swap_BANG_.call(null,en_19639,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_19616,(y_19617 + (pheight_19642 - iheight_19643)),r_19618], null));
cljs.core.println.call(null,divergence.entity.entity_atom__GT_component_val.call(null,p_19613,new cljs.core.Keyword(null,"holding","holding",2105666101)));
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"pickup","pickup",4320394734));
} else
{}
} else
{}
{
var G__19644 = cljs.core.next.call(null,seq__19562_19633__$1);
var G__19645 = null;
var G__19646 = 0;
var G__19647 = 0;
seq__19562_19619 = G__19644;
chunk__19564_19620 = G__19645;
count__19565_19621 = G__19646;
i__19566_19622 = G__19647;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__19648 = cljs.core.next.call(null,seq__19548__$1);
var G__19649 = null;
var G__19650 = 0;
var G__19651 = 0;
seq__19548 = G__19648;
chunk__19550 = G__19649;
count__19551 = G__19650;
i__19552 = G__19651;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.hit_button = (function hit_button(player,entities){var seq__19704 = cljs.core.seq.call(null,player);var chunk__19707 = null;var count__19708 = 0;var i__19709 = 0;while(true){
if((i__19709 < count__19708))
{var pl = cljs.core._nth.call(null,chunk__19707,i__19709);var p_type = divergence.entity.entity_atom__GT_component_val.call(null,pl,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,p_type,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_19756 = pl;var actions_19757 = cljs.core.deref.call(null,p_19756).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var seq__19712_19758 = cljs.core.seq.call(null,entities);var chunk__19714_19759 = null;var count__19715_19760 = 0;var i__19716_19761 = 0;while(true){
if((i__19716_19761 < count__19715_19760))
{var en_19762 = cljs.core._nth.call(null,chunk__19714_19759,i__19716_19761);var item_19763 = cljs.core.deref.call(null,en_19762);var item_name_19764 = divergence.entity.entity_atom__GT_component_val.call(null,en_19762,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_19763.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button","button",3931183780)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_19763,cljs.core.deref.call(null,p_19756))))
{cljs.core.swap_BANG_.call(null,en_19762,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-pushed","button-pushed",911964070)], null),true);
cljs.core.swap_BANG_.call(null,p_19756,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cleared","cleared",1870681886)], null),true);
var seq__19718_19765 = cljs.core.seq.call(null,entities);var chunk__19721_19766 = null;var count__19722_19767 = 0;var i__19723_19768 = 0;while(true){
if((i__19723_19768 < count__19722_19767))
{var x_19769 = cljs.core._nth.call(null,chunk__19721_19766,i__19723_19768);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_19769,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_19770 = divergence.entity.entity_atom__GT_ref.call(null,x_19769);sprite_19770.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__19771 = seq__19718_19765;
var G__19772 = chunk__19721_19766;
var G__19773 = count__19722_19767;
var G__19774 = (i__19723_19768 + 1);
seq__19718_19765 = G__19771;
chunk__19721_19766 = G__19772;
count__19722_19767 = G__19773;
i__19723_19768 = G__19774;
continue;
}
} else
{{
var G__19775 = seq__19718_19765;
var G__19776 = chunk__19721_19766;
var G__19777 = count__19722_19767;
var G__19778 = (i__19723_19768 + 1);
seq__19718_19765 = G__19775;
chunk__19721_19766 = G__19776;
count__19722_19767 = G__19777;
i__19723_19768 = G__19778;
continue;
}
}
} else
{var temp__4092__auto___19779 = cljs.core.seq.call(null,seq__19718_19765);if(temp__4092__auto___19779)
{var seq__19718_19780__$1 = temp__4092__auto___19779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19718_19780__$1))
{var c__4150__auto___19781 = cljs.core.chunk_first.call(null,seq__19718_19780__$1);{
var G__19782 = cljs.core.chunk_rest.call(null,seq__19718_19780__$1);
var G__19783 = c__4150__auto___19781;
var G__19784 = cljs.core.count.call(null,c__4150__auto___19781);
var G__19785 = 0;
seq__19718_19765 = G__19782;
chunk__19721_19766 = G__19783;
count__19722_19767 = G__19784;
i__19723_19768 = G__19785;
continue;
}
} else
{var x_19786 = cljs.core.first.call(null,seq__19718_19780__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_19786,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_19787 = divergence.entity.entity_atom__GT_ref.call(null,x_19786);sprite_19787.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__19788 = cljs.core.next.call(null,seq__19718_19780__$1);
var G__19789 = null;
var G__19790 = 0;
var G__19791 = 0;
seq__19718_19765 = G__19788;
chunk__19721_19766 = G__19789;
count__19722_19767 = G__19790;
i__19723_19768 = G__19791;
continue;
}
} else
{{
var G__19792 = cljs.core.next.call(null,seq__19718_19780__$1);
var G__19793 = null;
var G__19794 = 0;
var G__19795 = 0;
seq__19718_19765 = G__19792;
chunk__19721_19766 = G__19793;
count__19722_19767 = G__19794;
i__19723_19768 = G__19795;
continue;
}
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__19796 = seq__19712_19758;
var G__19797 = chunk__19714_19759;
var G__19798 = count__19715_19760;
var G__19799 = (i__19716_19761 + 1);
seq__19712_19758 = G__19796;
chunk__19714_19759 = G__19797;
count__19715_19760 = G__19798;
i__19716_19761 = G__19799;
continue;
}
} else
{var temp__4092__auto___19800 = cljs.core.seq.call(null,seq__19712_19758);if(temp__4092__auto___19800)
{var seq__19712_19801__$1 = temp__4092__auto___19800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19712_19801__$1))
{var c__4150__auto___19802 = cljs.core.chunk_first.call(null,seq__19712_19801__$1);{
var G__19803 = cljs.core.chunk_rest.call(null,seq__19712_19801__$1);
var G__19804 = c__4150__auto___19802;
var G__19805 = cljs.core.count.call(null,c__4150__auto___19802);
var G__19806 = 0;
seq__19712_19758 = G__19803;
chunk__19714_19759 = G__19804;
count__19715_19760 = G__19805;
i__19716_19761 = G__19806;
continue;
}
} else
{var en_19807 = cljs.core.first.call(null,seq__19712_19801__$1);var item_19808 = cljs.core.deref.call(null,en_19807);var item_name_19809 = divergence.entity.entity_atom__GT_component_val.call(null,en_19807,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_19808.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button","button",3931183780)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_19808,cljs.core.deref.call(null,p_19756))))
{cljs.core.swap_BANG_.call(null,en_19807,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-pushed","button-pushed",911964070)], null),true);
cljs.core.swap_BANG_.call(null,p_19756,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cleared","cleared",1870681886)], null),true);
var seq__19726_19810 = cljs.core.seq.call(null,entities);var chunk__19729_19811 = null;var count__19730_19812 = 0;var i__19731_19813 = 0;while(true){
if((i__19731_19813 < count__19730_19812))
{var x_19814 = cljs.core._nth.call(null,chunk__19729_19811,i__19731_19813);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_19814,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_19815 = divergence.entity.entity_atom__GT_ref.call(null,x_19814);sprite_19815.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__19816 = seq__19726_19810;
var G__19817 = chunk__19729_19811;
var G__19818 = count__19730_19812;
var G__19819 = (i__19731_19813 + 1);
seq__19726_19810 = G__19816;
chunk__19729_19811 = G__19817;
count__19730_19812 = G__19818;
i__19731_19813 = G__19819;
continue;
}
} else
{{
var G__19820 = seq__19726_19810;
var G__19821 = chunk__19729_19811;
var G__19822 = count__19730_19812;
var G__19823 = (i__19731_19813 + 1);
seq__19726_19810 = G__19820;
chunk__19729_19811 = G__19821;
count__19730_19812 = G__19822;
i__19731_19813 = G__19823;
continue;
}
}
} else
{var temp__4092__auto___19824__$1 = cljs.core.seq.call(null,seq__19726_19810);if(temp__4092__auto___19824__$1)
{var seq__19726_19825__$1 = temp__4092__auto___19824__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19726_19825__$1))
{var c__4150__auto___19826 = cljs.core.chunk_first.call(null,seq__19726_19825__$1);{
var G__19827 = cljs.core.chunk_rest.call(null,seq__19726_19825__$1);
var G__19828 = c__4150__auto___19826;
var G__19829 = cljs.core.count.call(null,c__4150__auto___19826);
var G__19830 = 0;
seq__19726_19810 = G__19827;
chunk__19729_19811 = G__19828;
count__19730_19812 = G__19829;
i__19731_19813 = G__19830;
continue;
}
} else
{var x_19831 = cljs.core.first.call(null,seq__19726_19825__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_19831,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_19832 = divergence.entity.entity_atom__GT_ref.call(null,x_19831);sprite_19832.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__19833 = cljs.core.next.call(null,seq__19726_19825__$1);
var G__19834 = null;
var G__19835 = 0;
var G__19836 = 0;
seq__19726_19810 = G__19833;
chunk__19729_19811 = G__19834;
count__19730_19812 = G__19835;
i__19731_19813 = G__19836;
continue;
}
} else
{{
var G__19837 = cljs.core.next.call(null,seq__19726_19825__$1);
var G__19838 = null;
var G__19839 = 0;
var G__19840 = 0;
seq__19726_19810 = G__19837;
chunk__19729_19811 = G__19838;
count__19730_19812 = G__19839;
i__19731_19813 = G__19840;
continue;
}
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__19841 = cljs.core.next.call(null,seq__19712_19801__$1);
var G__19842 = null;
var G__19843 = 0;
var G__19844 = 0;
seq__19712_19758 = G__19841;
chunk__19714_19759 = G__19842;
count__19715_19760 = G__19843;
i__19716_19761 = G__19844;
continue;
}
}
} else
{}
}
break;
}
{
var G__19845 = seq__19704;
var G__19846 = chunk__19707;
var G__19847 = count__19708;
var G__19848 = (i__19709 + 1);
seq__19704 = G__19845;
chunk__19707 = G__19846;
count__19708 = G__19847;
i__19709 = G__19848;
continue;
}
} else
{{
var G__19849 = seq__19704;
var G__19850 = chunk__19707;
var G__19851 = count__19708;
var G__19852 = (i__19709 + 1);
seq__19704 = G__19849;
chunk__19707 = G__19850;
count__19708 = G__19851;
i__19709 = G__19852;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19704);if(temp__4092__auto__)
{var seq__19704__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19704__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19704__$1);{
var G__19853 = cljs.core.chunk_rest.call(null,seq__19704__$1);
var G__19854 = c__4150__auto__;
var G__19855 = cljs.core.count.call(null,c__4150__auto__);
var G__19856 = 0;
seq__19704 = G__19853;
chunk__19707 = G__19854;
count__19708 = G__19855;
i__19709 = G__19856;
continue;
}
} else
{var pl = cljs.core.first.call(null,seq__19704__$1);var p_type = divergence.entity.entity_atom__GT_component_val.call(null,pl,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,p_type,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_19857 = pl;var actions_19858 = cljs.core.deref.call(null,p_19857).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var seq__19734_19859 = cljs.core.seq.call(null,entities);var chunk__19736_19860 = null;var count__19737_19861 = 0;var i__19738_19862 = 0;while(true){
if((i__19738_19862 < count__19737_19861))
{var en_19863 = cljs.core._nth.call(null,chunk__19736_19860,i__19738_19862);var item_19864 = cljs.core.deref.call(null,en_19863);var item_name_19865 = divergence.entity.entity_atom__GT_component_val.call(null,en_19863,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_19864.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button","button",3931183780)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_19864,cljs.core.deref.call(null,p_19857))))
{cljs.core.swap_BANG_.call(null,en_19863,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-pushed","button-pushed",911964070)], null),true);
cljs.core.swap_BANG_.call(null,p_19857,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cleared","cleared",1870681886)], null),true);
var seq__19740_19866 = cljs.core.seq.call(null,entities);var chunk__19743_19867 = null;var count__19744_19868 = 0;var i__19745_19869 = 0;while(true){
if((i__19745_19869 < count__19744_19868))
{var x_19870 = cljs.core._nth.call(null,chunk__19743_19867,i__19745_19869);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_19870,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_19871 = divergence.entity.entity_atom__GT_ref.call(null,x_19870);sprite_19871.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__19872 = seq__19740_19866;
var G__19873 = chunk__19743_19867;
var G__19874 = count__19744_19868;
var G__19875 = (i__19745_19869 + 1);
seq__19740_19866 = G__19872;
chunk__19743_19867 = G__19873;
count__19744_19868 = G__19874;
i__19745_19869 = G__19875;
continue;
}
} else
{{
var G__19876 = seq__19740_19866;
var G__19877 = chunk__19743_19867;
var G__19878 = count__19744_19868;
var G__19879 = (i__19745_19869 + 1);
seq__19740_19866 = G__19876;
chunk__19743_19867 = G__19877;
count__19744_19868 = G__19878;
i__19745_19869 = G__19879;
continue;
}
}
} else
{var temp__4092__auto___19880__$1 = cljs.core.seq.call(null,seq__19740_19866);if(temp__4092__auto___19880__$1)
{var seq__19740_19881__$1 = temp__4092__auto___19880__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19740_19881__$1))
{var c__4150__auto___19882 = cljs.core.chunk_first.call(null,seq__19740_19881__$1);{
var G__19883 = cljs.core.chunk_rest.call(null,seq__19740_19881__$1);
var G__19884 = c__4150__auto___19882;
var G__19885 = cljs.core.count.call(null,c__4150__auto___19882);
var G__19886 = 0;
seq__19740_19866 = G__19883;
chunk__19743_19867 = G__19884;
count__19744_19868 = G__19885;
i__19745_19869 = G__19886;
continue;
}
} else
{var x_19887 = cljs.core.first.call(null,seq__19740_19881__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_19887,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_19888 = divergence.entity.entity_atom__GT_ref.call(null,x_19887);sprite_19888.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__19889 = cljs.core.next.call(null,seq__19740_19881__$1);
var G__19890 = null;
var G__19891 = 0;
var G__19892 = 0;
seq__19740_19866 = G__19889;
chunk__19743_19867 = G__19890;
count__19744_19868 = G__19891;
i__19745_19869 = G__19892;
continue;
}
} else
{{
var G__19893 = cljs.core.next.call(null,seq__19740_19881__$1);
var G__19894 = null;
var G__19895 = 0;
var G__19896 = 0;
seq__19740_19866 = G__19893;
chunk__19743_19867 = G__19894;
count__19744_19868 = G__19895;
i__19745_19869 = G__19896;
continue;
}
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__19897 = seq__19734_19859;
var G__19898 = chunk__19736_19860;
var G__19899 = count__19737_19861;
var G__19900 = (i__19738_19862 + 1);
seq__19734_19859 = G__19897;
chunk__19736_19860 = G__19898;
count__19737_19861 = G__19899;
i__19738_19862 = G__19900;
continue;
}
} else
{var temp__4092__auto___19901__$1 = cljs.core.seq.call(null,seq__19734_19859);if(temp__4092__auto___19901__$1)
{var seq__19734_19902__$1 = temp__4092__auto___19901__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19734_19902__$1))
{var c__4150__auto___19903 = cljs.core.chunk_first.call(null,seq__19734_19902__$1);{
var G__19904 = cljs.core.chunk_rest.call(null,seq__19734_19902__$1);
var G__19905 = c__4150__auto___19903;
var G__19906 = cljs.core.count.call(null,c__4150__auto___19903);
var G__19907 = 0;
seq__19734_19859 = G__19904;
chunk__19736_19860 = G__19905;
count__19737_19861 = G__19906;
i__19738_19862 = G__19907;
continue;
}
} else
{var en_19908 = cljs.core.first.call(null,seq__19734_19902__$1);var item_19909 = cljs.core.deref.call(null,en_19908);var item_name_19910 = divergence.entity.entity_atom__GT_component_val.call(null,en_19908,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_19909.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button","button",3931183780)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_19909,cljs.core.deref.call(null,p_19857))))
{cljs.core.swap_BANG_.call(null,en_19908,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-pushed","button-pushed",911964070)], null),true);
cljs.core.swap_BANG_.call(null,p_19857,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cleared","cleared",1870681886)], null),true);
var seq__19748_19911 = cljs.core.seq.call(null,entities);var chunk__19751_19912 = null;var count__19752_19913 = 0;var i__19753_19914 = 0;while(true){
if((i__19753_19914 < count__19752_19913))
{var x_19915 = cljs.core._nth.call(null,chunk__19751_19912,i__19753_19914);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_19915,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_19916 = divergence.entity.entity_atom__GT_ref.call(null,x_19915);sprite_19916.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__19917 = seq__19748_19911;
var G__19918 = chunk__19751_19912;
var G__19919 = count__19752_19913;
var G__19920 = (i__19753_19914 + 1);
seq__19748_19911 = G__19917;
chunk__19751_19912 = G__19918;
count__19752_19913 = G__19919;
i__19753_19914 = G__19920;
continue;
}
} else
{{
var G__19921 = seq__19748_19911;
var G__19922 = chunk__19751_19912;
var G__19923 = count__19752_19913;
var G__19924 = (i__19753_19914 + 1);
seq__19748_19911 = G__19921;
chunk__19751_19912 = G__19922;
count__19752_19913 = G__19923;
i__19753_19914 = G__19924;
continue;
}
}
} else
{var temp__4092__auto___19925__$2 = cljs.core.seq.call(null,seq__19748_19911);if(temp__4092__auto___19925__$2)
{var seq__19748_19926__$1 = temp__4092__auto___19925__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19748_19926__$1))
{var c__4150__auto___19927 = cljs.core.chunk_first.call(null,seq__19748_19926__$1);{
var G__19928 = cljs.core.chunk_rest.call(null,seq__19748_19926__$1);
var G__19929 = c__4150__auto___19927;
var G__19930 = cljs.core.count.call(null,c__4150__auto___19927);
var G__19931 = 0;
seq__19748_19911 = G__19928;
chunk__19751_19912 = G__19929;
count__19752_19913 = G__19930;
i__19753_19914 = G__19931;
continue;
}
} else
{var x_19932 = cljs.core.first.call(null,seq__19748_19926__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_19932,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_19933 = divergence.entity.entity_atom__GT_ref.call(null,x_19932);sprite_19933.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__19934 = cljs.core.next.call(null,seq__19748_19926__$1);
var G__19935 = null;
var G__19936 = 0;
var G__19937 = 0;
seq__19748_19911 = G__19934;
chunk__19751_19912 = G__19935;
count__19752_19913 = G__19936;
i__19753_19914 = G__19937;
continue;
}
} else
{{
var G__19938 = cljs.core.next.call(null,seq__19748_19926__$1);
var G__19939 = null;
var G__19940 = 0;
var G__19941 = 0;
seq__19748_19911 = G__19938;
chunk__19751_19912 = G__19939;
count__19752_19913 = G__19940;
i__19753_19914 = G__19941;
continue;
}
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__19942 = cljs.core.next.call(null,seq__19734_19902__$1);
var G__19943 = null;
var G__19944 = 0;
var G__19945 = 0;
seq__19734_19859 = G__19942;
chunk__19736_19860 = G__19943;
count__19737_19861 = G__19944;
i__19738_19862 = G__19945;
continue;
}
}
} else
{}
}
break;
}
{
var G__19946 = cljs.core.next.call(null,seq__19704__$1);
var G__19947 = null;
var G__19948 = 0;
var G__19949 = 0;
seq__19704 = G__19946;
chunk__19707 = G__19947;
count__19708 = G__19948;
i__19709 = G__19949;
continue;
}
} else
{{
var G__19950 = cljs.core.next.call(null,seq__19704__$1);
var G__19951 = null;
var G__19952 = 0;
var G__19953 = 0;
seq__19704 = G__19950;
chunk__19707 = G__19951;
count__19708 = G__19952;
i__19709 = G__19953;
continue;
}
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.hit_button_box_fall = (function hit_button_box_fall(player,entities){var seq__19990 = cljs.core.seq.call(null,player);var chunk__19992 = null;var count__19993 = 0;var i__19994 = 0;while(true){
if((i__19994 < count__19993))
{var pl = cljs.core._nth.call(null,chunk__19992,i__19994);var e_type_20026 = divergence.entity.entity_atom__GT_component_val.call(null,pl,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_20026,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_20027 = pl;var actions_20028 = cljs.core.deref.call(null,p_20027).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__19996_20029 = cljs.core.deref.call(null,p_20027).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_20030 = cljs.core.nth.call(null,vec__19996_20029,0,null);var y_20031 = cljs.core.nth.call(null,vec__19996_20029,1,null);var r_20032 = cljs.core.nth.call(null,vec__19996_20029,2,null);var seq__19997_20033 = cljs.core.seq.call(null,entities);var chunk__19999_20034 = null;var count__20000_20035 = 0;var i__20001_20036 = 0;while(true){
if((i__20001_20036 < count__20000_20035))
{var en_20037 = cljs.core._nth.call(null,chunk__19999_20034,i__20001_20036);var item_20038 = cljs.core.deref.call(null,en_20037);var item_name_20039 = divergence.entity.entity_atom__GT_component_val.call(null,en_20037,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_20038.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_20038,cljs.core.deref.call(null,p_20027))))
{var seq__20003_20040 = cljs.core.seq.call(null,entities);var chunk__20004_20041 = null;var count__20005_20042 = 0;var i__20006_20043 = 0;while(true){
if((i__20006_20043 < count__20005_20042))
{var e1_20044 = cljs.core._nth.call(null,chunk__20004_20041,i__20006_20043);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_20044).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_20044,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__20045 = seq__20003_20040;
var G__20046 = chunk__20004_20041;
var G__20047 = count__20005_20042;
var G__20048 = (i__20006_20043 + 1);
seq__20003_20040 = G__20045;
chunk__20004_20041 = G__20046;
count__20005_20042 = G__20047;
i__20006_20043 = G__20048;
continue;
}
} else
{var temp__4092__auto___20049 = cljs.core.seq.call(null,seq__20003_20040);if(temp__4092__auto___20049)
{var seq__20003_20050__$1 = temp__4092__auto___20049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20003_20050__$1))
{var c__4150__auto___20051 = cljs.core.chunk_first.call(null,seq__20003_20050__$1);{
var G__20052 = cljs.core.chunk_rest.call(null,seq__20003_20050__$1);
var G__20053 = c__4150__auto___20051;
var G__20054 = cljs.core.count.call(null,c__4150__auto___20051);
var G__20055 = 0;
seq__20003_20040 = G__20052;
chunk__20004_20041 = G__20053;
count__20005_20042 = G__20054;
i__20006_20043 = G__20055;
continue;
}
} else
{var e1_20056 = cljs.core.first.call(null,seq__20003_20050__$1);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_20056).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_20056,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__20057 = cljs.core.next.call(null,seq__20003_20050__$1);
var G__20058 = null;
var G__20059 = 0;
var G__20060 = 0;
seq__20003_20040 = G__20057;
chunk__20004_20041 = G__20058;
count__20005_20042 = G__20059;
i__20006_20043 = G__20060;
continue;
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__20061 = seq__19997_20033;
var G__20062 = chunk__19999_20034;
var G__20063 = count__20000_20035;
var G__20064 = (i__20001_20036 + 1);
seq__19997_20033 = G__20061;
chunk__19999_20034 = G__20062;
count__20000_20035 = G__20063;
i__20001_20036 = G__20064;
continue;
}
} else
{var temp__4092__auto___20065 = cljs.core.seq.call(null,seq__19997_20033);if(temp__4092__auto___20065)
{var seq__19997_20066__$1 = temp__4092__auto___20065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19997_20066__$1))
{var c__4150__auto___20067 = cljs.core.chunk_first.call(null,seq__19997_20066__$1);{
var G__20068 = cljs.core.chunk_rest.call(null,seq__19997_20066__$1);
var G__20069 = c__4150__auto___20067;
var G__20070 = cljs.core.count.call(null,c__4150__auto___20067);
var G__20071 = 0;
seq__19997_20033 = G__20068;
chunk__19999_20034 = G__20069;
count__20000_20035 = G__20070;
i__20001_20036 = G__20071;
continue;
}
} else
{var en_20072 = cljs.core.first.call(null,seq__19997_20066__$1);var item_20073 = cljs.core.deref.call(null,en_20072);var item_name_20074 = divergence.entity.entity_atom__GT_component_val.call(null,en_20072,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_20073.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_20073,cljs.core.deref.call(null,p_20027))))
{var seq__20007_20075 = cljs.core.seq.call(null,entities);var chunk__20008_20076 = null;var count__20009_20077 = 0;var i__20010_20078 = 0;while(true){
if((i__20010_20078 < count__20009_20077))
{var e1_20079 = cljs.core._nth.call(null,chunk__20008_20076,i__20010_20078);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_20079).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_20079,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__20080 = seq__20007_20075;
var G__20081 = chunk__20008_20076;
var G__20082 = count__20009_20077;
var G__20083 = (i__20010_20078 + 1);
seq__20007_20075 = G__20080;
chunk__20008_20076 = G__20081;
count__20009_20077 = G__20082;
i__20010_20078 = G__20083;
continue;
}
} else
{var temp__4092__auto___20084__$1 = cljs.core.seq.call(null,seq__20007_20075);if(temp__4092__auto___20084__$1)
{var seq__20007_20085__$1 = temp__4092__auto___20084__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20007_20085__$1))
{var c__4150__auto___20086 = cljs.core.chunk_first.call(null,seq__20007_20085__$1);{
var G__20087 = cljs.core.chunk_rest.call(null,seq__20007_20085__$1);
var G__20088 = c__4150__auto___20086;
var G__20089 = cljs.core.count.call(null,c__4150__auto___20086);
var G__20090 = 0;
seq__20007_20075 = G__20087;
chunk__20008_20076 = G__20088;
count__20009_20077 = G__20089;
i__20010_20078 = G__20090;
continue;
}
} else
{var e1_20091 = cljs.core.first.call(null,seq__20007_20085__$1);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_20091).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_20091,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__20092 = cljs.core.next.call(null,seq__20007_20085__$1);
var G__20093 = null;
var G__20094 = 0;
var G__20095 = 0;
seq__20007_20075 = G__20092;
chunk__20008_20076 = G__20093;
count__20009_20077 = G__20094;
i__20010_20078 = G__20095;
continue;
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__20096 = cljs.core.next.call(null,seq__19997_20066__$1);
var G__20097 = null;
var G__20098 = 0;
var G__20099 = 0;
seq__19997_20033 = G__20096;
chunk__19999_20034 = G__20097;
count__20000_20035 = G__20098;
i__20001_20036 = G__20099;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__20100 = seq__19990;
var G__20101 = chunk__19992;
var G__20102 = count__19993;
var G__20103 = (i__19994 + 1);
seq__19990 = G__20100;
chunk__19992 = G__20101;
count__19993 = G__20102;
i__19994 = G__20103;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19990);if(temp__4092__auto__)
{var seq__19990__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19990__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__19990__$1);{
var G__20104 = cljs.core.chunk_rest.call(null,seq__19990__$1);
var G__20105 = c__4150__auto__;
var G__20106 = cljs.core.count.call(null,c__4150__auto__);
var G__20107 = 0;
seq__19990 = G__20104;
chunk__19992 = G__20105;
count__19993 = G__20106;
i__19994 = G__20107;
continue;
}
} else
{var pl = cljs.core.first.call(null,seq__19990__$1);var e_type_20108 = divergence.entity.entity_atom__GT_component_val.call(null,pl,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_20108,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_20109 = pl;var actions_20110 = cljs.core.deref.call(null,p_20109).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__20011_20111 = cljs.core.deref.call(null,p_20109).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_20112 = cljs.core.nth.call(null,vec__20011_20111,0,null);var y_20113 = cljs.core.nth.call(null,vec__20011_20111,1,null);var r_20114 = cljs.core.nth.call(null,vec__20011_20111,2,null);var seq__20012_20115 = cljs.core.seq.call(null,entities);var chunk__20014_20116 = null;var count__20015_20117 = 0;var i__20016_20118 = 0;while(true){
if((i__20016_20118 < count__20015_20117))
{var en_20119 = cljs.core._nth.call(null,chunk__20014_20116,i__20016_20118);var item_20120 = cljs.core.deref.call(null,en_20119);var item_name_20121 = divergence.entity.entity_atom__GT_component_val.call(null,en_20119,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_20120.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_20120,cljs.core.deref.call(null,p_20109))))
{var seq__20018_20122 = cljs.core.seq.call(null,entities);var chunk__20019_20123 = null;var count__20020_20124 = 0;var i__20021_20125 = 0;while(true){
if((i__20021_20125 < count__20020_20124))
{var e1_20126 = cljs.core._nth.call(null,chunk__20019_20123,i__20021_20125);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_20126).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_20126,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__20127 = seq__20018_20122;
var G__20128 = chunk__20019_20123;
var G__20129 = count__20020_20124;
var G__20130 = (i__20021_20125 + 1);
seq__20018_20122 = G__20127;
chunk__20019_20123 = G__20128;
count__20020_20124 = G__20129;
i__20021_20125 = G__20130;
continue;
}
} else
{var temp__4092__auto___20131__$1 = cljs.core.seq.call(null,seq__20018_20122);if(temp__4092__auto___20131__$1)
{var seq__20018_20132__$1 = temp__4092__auto___20131__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20018_20132__$1))
{var c__4150__auto___20133 = cljs.core.chunk_first.call(null,seq__20018_20132__$1);{
var G__20134 = cljs.core.chunk_rest.call(null,seq__20018_20132__$1);
var G__20135 = c__4150__auto___20133;
var G__20136 = cljs.core.count.call(null,c__4150__auto___20133);
var G__20137 = 0;
seq__20018_20122 = G__20134;
chunk__20019_20123 = G__20135;
count__20020_20124 = G__20136;
i__20021_20125 = G__20137;
continue;
}
} else
{var e1_20138 = cljs.core.first.call(null,seq__20018_20132__$1);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_20138).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_20138,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__20139 = cljs.core.next.call(null,seq__20018_20132__$1);
var G__20140 = null;
var G__20141 = 0;
var G__20142 = 0;
seq__20018_20122 = G__20139;
chunk__20019_20123 = G__20140;
count__20020_20124 = G__20141;
i__20021_20125 = G__20142;
continue;
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__20143 = seq__20012_20115;
var G__20144 = chunk__20014_20116;
var G__20145 = count__20015_20117;
var G__20146 = (i__20016_20118 + 1);
seq__20012_20115 = G__20143;
chunk__20014_20116 = G__20144;
count__20015_20117 = G__20145;
i__20016_20118 = G__20146;
continue;
}
} else
{var temp__4092__auto___20147__$1 = cljs.core.seq.call(null,seq__20012_20115);if(temp__4092__auto___20147__$1)
{var seq__20012_20148__$1 = temp__4092__auto___20147__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20012_20148__$1))
{var c__4150__auto___20149 = cljs.core.chunk_first.call(null,seq__20012_20148__$1);{
var G__20150 = cljs.core.chunk_rest.call(null,seq__20012_20148__$1);
var G__20151 = c__4150__auto___20149;
var G__20152 = cljs.core.count.call(null,c__4150__auto___20149);
var G__20153 = 0;
seq__20012_20115 = G__20150;
chunk__20014_20116 = G__20151;
count__20015_20117 = G__20152;
i__20016_20118 = G__20153;
continue;
}
} else
{var en_20154 = cljs.core.first.call(null,seq__20012_20148__$1);var item_20155 = cljs.core.deref.call(null,en_20154);var item_name_20156 = divergence.entity.entity_atom__GT_component_val.call(null,en_20154,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_20155.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_20155,cljs.core.deref.call(null,p_20109))))
{var seq__20022_20157 = cljs.core.seq.call(null,entities);var chunk__20023_20158 = null;var count__20024_20159 = 0;var i__20025_20160 = 0;while(true){
if((i__20025_20160 < count__20024_20159))
{var e1_20161 = cljs.core._nth.call(null,chunk__20023_20158,i__20025_20160);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_20161).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_20161,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__20162 = seq__20022_20157;
var G__20163 = chunk__20023_20158;
var G__20164 = count__20024_20159;
var G__20165 = (i__20025_20160 + 1);
seq__20022_20157 = G__20162;
chunk__20023_20158 = G__20163;
count__20024_20159 = G__20164;
i__20025_20160 = G__20165;
continue;
}
} else
{var temp__4092__auto___20166__$2 = cljs.core.seq.call(null,seq__20022_20157);if(temp__4092__auto___20166__$2)
{var seq__20022_20167__$1 = temp__4092__auto___20166__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20022_20167__$1))
{var c__4150__auto___20168 = cljs.core.chunk_first.call(null,seq__20022_20167__$1);{
var G__20169 = cljs.core.chunk_rest.call(null,seq__20022_20167__$1);
var G__20170 = c__4150__auto___20168;
var G__20171 = cljs.core.count.call(null,c__4150__auto___20168);
var G__20172 = 0;
seq__20022_20157 = G__20169;
chunk__20023_20158 = G__20170;
count__20024_20159 = G__20171;
i__20025_20160 = G__20172;
continue;
}
} else
{var e1_20173 = cljs.core.first.call(null,seq__20022_20167__$1);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_20173).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_20173,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__20174 = cljs.core.next.call(null,seq__20022_20167__$1);
var G__20175 = null;
var G__20176 = 0;
var G__20177 = 0;
seq__20022_20157 = G__20174;
chunk__20023_20158 = G__20175;
count__20024_20159 = G__20176;
i__20025_20160 = G__20177;
continue;
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__20178 = cljs.core.next.call(null,seq__20012_20148__$1);
var G__20179 = null;
var G__20180 = 0;
var G__20181 = 0;
seq__20012_20115 = G__20178;
chunk__20014_20116 = G__20179;
count__20015_20117 = G__20180;
i__20016_20118 = G__20181;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__20182 = cljs.core.next.call(null,seq__19990__$1);
var G__20183 = null;
var G__20184 = 0;
var G__20185 = 0;
seq__19990 = G__20182;
chunk__19992 = G__20183;
count__19993 = G__20184;
i__19994 = G__20185;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.camera_x_check = (function camera_x_check(x){if(((x < divergence.system.level_width)) && ((x > 0)))
{return true;
} else
{return false;
}
});
divergence.system.camera_y_check = (function camera_y_check(y){if(((y < divergence.system.level_height)) && (true))
{return true;
} else
{return false;
}
});
divergence.system.update_camera_coords = (function update_camera_coords(camera,x,y){cljs.core.deref.call(null,camera).position.x = ((divergence.system.camera_x_check.call(null,x))?(-1 * (x - ((divergence.camera.camera_width / 3) + 50))):cljs.core.deref.call(null,camera).position.x);
return cljs.core.deref.call(null,camera).position.y = ((divergence.system.camera_y_check.call(null,y))?(-1 * (y - ((divergence.camera.camera_height / 3) + 125))):cljs.core.deref.call(null,camera).position.y);
});
divergence.system.update_camera = (function update_camera(camera,entities){var seq__20190 = cljs.core.seq.call(null,entities);var chunk__20191 = null;var count__20192 = 0;var i__20193 = 0;while(true){
if((i__20193 < count__20192))
{var e = cljs.core._nth.call(null,chunk__20191,i__20193);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.system.update_camera_coords.call(null,camera,cljs.core.nth.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"position","position",1761709211)),0),cljs.core.nth.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"position","position",1761709211)),1));
} else
{}
{
var G__20194 = seq__20190;
var G__20195 = chunk__20191;
var G__20196 = count__20192;
var G__20197 = (i__20193 + 1);
seq__20190 = G__20194;
chunk__20191 = G__20195;
count__20192 = G__20196;
i__20193 = G__20197;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20190);if(temp__4092__auto__)
{var seq__20190__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20190__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__20190__$1);{
var G__20198 = cljs.core.chunk_rest.call(null,seq__20190__$1);
var G__20199 = c__4150__auto__;
var G__20200 = cljs.core.count.call(null,c__4150__auto__);
var G__20201 = 0;
seq__20190 = G__20198;
chunk__20191 = G__20199;
count__20192 = G__20200;
i__20193 = G__20201;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__20190__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.system.update_camera_coords.call(null,camera,cljs.core.nth.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"position","position",1761709211)),0),cljs.core.nth.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"position","position",1761709211)),1));
} else
{}
{
var G__20202 = cljs.core.next.call(null,seq__20190__$1);
var G__20203 = null;
var G__20204 = 0;
var G__20205 = 0;
seq__20190 = G__20202;
chunk__20191 = G__20203;
count__20192 = G__20204;
i__20193 = G__20205;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.serial_data = cljs.core.atom.call(null,null);
divergence.system.load_data = cljs.core.atom.call(null,null);
divergence.system.save_to_local_db = (function save_to_local_db(objname,data){return localStorage.setItem(objname,data);
});
divergence.system.serialize = (function serialize(entities){var seq__20210 = cljs.core.seq.call(null,entities);var chunk__20211 = null;var count__20212 = 0;var i__20213 = 0;while(true){
if((i__20213 < count__20212))
{var e = cljs.core._nth.call(null,chunk__20211,i__20213);cljs.core.reset_BANG_.call(null,divergence.system.serial_data,cljs.core.deref.call(null,e));
cljs.core.swap_BANG_.call(null,divergence.system.serial_data,cljs.core.dissoc,new cljs.core.Keyword(null,"ref","ref",1014017029),new cljs.core.Keyword(null,"sprite","sprite",4413191735),new cljs.core.Keyword(null,"stage","stage",1123661424),new cljs.core.Keyword(null,"actions","actions",4147068015),new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641),new cljs.core.Keyword(null,"on-stage","on-stage",1431549186),new cljs.core.Keyword(null,"container","container",602947571));
divergence.system.save_to_local_db.call(null,cljs.core.pr_str.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949))),cljs.core.deref.call(null,divergence.system.serial_data));
{
var G__20214 = seq__20210;
var G__20215 = chunk__20211;
var G__20216 = count__20212;
var G__20217 = (i__20213 + 1);
seq__20210 = G__20214;
chunk__20211 = G__20215;
count__20212 = G__20216;
i__20213 = G__20217;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20210);if(temp__4092__auto__)
{var seq__20210__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20210__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__20210__$1);{
var G__20218 = cljs.core.chunk_rest.call(null,seq__20210__$1);
var G__20219 = c__4150__auto__;
var G__20220 = cljs.core.count.call(null,c__4150__auto__);
var G__20221 = 0;
seq__20210 = G__20218;
chunk__20211 = G__20219;
count__20212 = G__20220;
i__20213 = G__20221;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__20210__$1);cljs.core.reset_BANG_.call(null,divergence.system.serial_data,cljs.core.deref.call(null,e));
cljs.core.swap_BANG_.call(null,divergence.system.serial_data,cljs.core.dissoc,new cljs.core.Keyword(null,"ref","ref",1014017029),new cljs.core.Keyword(null,"sprite","sprite",4413191735),new cljs.core.Keyword(null,"stage","stage",1123661424),new cljs.core.Keyword(null,"actions","actions",4147068015),new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641),new cljs.core.Keyword(null,"on-stage","on-stage",1431549186),new cljs.core.Keyword(null,"container","container",602947571));
divergence.system.save_to_local_db.call(null,cljs.core.pr_str.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949))),cljs.core.deref.call(null,divergence.system.serial_data));
{
var G__20222 = cljs.core.next.call(null,seq__20210__$1);
var G__20223 = null;
var G__20224 = 0;
var G__20225 = 0;
seq__20210 = G__20222;
chunk__20211 = G__20223;
count__20212 = G__20224;
i__20213 = G__20225;
continue;
}
}
} else
{return null;
}
}
break;
}
});
divergence.system.deserialize = (function deserialize(entities){var seq__20230 = cljs.core.seq.call(null,entities);var chunk__20231 = null;var count__20232 = 0;var i__20233 = 0;while(true){
if((i__20233 < count__20232))
{var e = cljs.core._nth.call(null,chunk__20231,i__20233);cljs.core.reset_BANG_.call(null,divergence.system.load_data,cljs.reader.read_string.call(null,localStorage.getItem(cljs.core.pr_str.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949))))));
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friction","friction",3884153452)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friction","friction",3884153452)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friction","friction",3884153452)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-input","player-input",3958476112)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-input","player-input",3958476112)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-input","player-input",3958476112)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",3682426451)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",3682426451)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",3682426451)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-ref","create-ref",2381964212)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-ref","create-ref",2381964212)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-ref","create-ref",2381964212)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",3895572007)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",3895572007)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",3895572007)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null)));
} else
{}
{
var G__20234 = seq__20230;
var G__20235 = chunk__20231;
var G__20236 = count__20232;
var G__20237 = (i__20233 + 1);
seq__20230 = G__20234;
chunk__20231 = G__20235;
count__20232 = G__20236;
i__20233 = G__20237;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20230);if(temp__4092__auto__)
{var seq__20230__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20230__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__20230__$1);{
var G__20238 = cljs.core.chunk_rest.call(null,seq__20230__$1);
var G__20239 = c__4150__auto__;
var G__20240 = cljs.core.count.call(null,c__4150__auto__);
var G__20241 = 0;
seq__20230 = G__20238;
chunk__20231 = G__20239;
count__20232 = G__20240;
i__20233 = G__20241;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__20230__$1);cljs.core.reset_BANG_.call(null,divergence.system.load_data,cljs.reader.read_string.call(null,localStorage.getItem(cljs.core.pr_str.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949))))));
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friction","friction",3884153452)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friction","friction",3884153452)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friction","friction",3884153452)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-input","player-input",3958476112)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-input","player-input",3958476112)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-input","player-input",3958476112)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",3682426451)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",3682426451)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collidable","collidable",3682426451)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-ref","create-ref",2381964212)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-ref","create-ref",2381964212)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-ref","create-ref",2381964212)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",3895572007)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",3895572007)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",3895572007)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null)));
} else
{}
if(cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,divergence.system.load_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null)));
} else
{}
{
var G__20242 = cljs.core.next.call(null,seq__20230__$1);
var G__20243 = null;
var G__20244 = 0;
var G__20245 = 0;
seq__20230 = G__20242;
chunk__20231 = G__20243;
count__20232 = G__20244;
i__20233 = G__20245;
continue;
}
}
} else
{return null;
}
}
break;
}
});

//# sourceMappingURL=system.js.map