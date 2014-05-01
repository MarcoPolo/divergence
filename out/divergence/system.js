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
{return cljs.core.reduce.call(null,(function (m,p__7199){var vec__7200 = p__7199;var k = cljs.core.nth.call(null,vec__7200,0,null);var v = cljs.core.nth.call(null,vec__7200,1,null);return cljs.core.assoc.call(null,m,cljs.core.clj__GT_js.call(null,k),cljs.core.clj__GT_js.call(null,v));
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
divergence.system.climbing_QMARK_ = (function climbing_QMARK_(player,entities){var seq__7207 = cljs.core.seq.call(null,entities);var chunk__7209 = null;var count__7210 = 0;var i__7211 = 0;while(true){
if((i__7211 < count__7210))
{var e = cljs.core._nth.call(null,chunk__7209,i__7211);var cond1_7213 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-climb","can-climb",4237636074)),1);var sprite_7214 = divergence.entity.entity_atom__GT_ref.call(null,player);if(cond1_7213)
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,cljs.core.deref.call(null,player),cljs.core.deref.call(null,e))))
{cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),1);
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-5,0], null));
sprite_7214.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
} else
{}
} else
{cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
}
{
var G__7215 = seq__7207;
var G__7216 = chunk__7209;
var G__7217 = count__7210;
var G__7218 = (i__7211 + 1);
seq__7207 = G__7215;
chunk__7209 = G__7216;
count__7210 = G__7217;
i__7211 = G__7218;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7207);if(temp__4092__auto__)
{var seq__7207__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7207__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7207__$1);{
var G__7219 = cljs.core.chunk_rest.call(null,seq__7207__$1);
var G__7220 = c__4150__auto__;
var G__7221 = cljs.core.count.call(null,c__4150__auto__);
var G__7222 = 0;
seq__7207 = G__7219;
chunk__7209 = G__7220;
count__7210 = G__7221;
i__7211 = G__7222;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7207__$1);var cond1_7223 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-climb","can-climb",4237636074)),1);var sprite_7224 = divergence.entity.entity_atom__GT_ref.call(null,player);if(cond1_7223)
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,cljs.core.deref.call(null,player),cljs.core.deref.call(null,e))))
{cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),1);
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-5,0], null));
sprite_7224.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
} else
{}
} else
{cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
}
{
var G__7225 = cljs.core.next.call(null,seq__7207__$1);
var G__7226 = null;
var G__7227 = 0;
var G__7228 = 0;
seq__7207 = G__7225;
chunk__7209 = G__7226;
count__7210 = G__7227;
i__7211 = G__7228;
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
divergence.system.climbing = (function climbing(entities){var seq__7235 = cljs.core.seq.call(null,entities);var chunk__7237 = null;var count__7238 = 0;var i__7239 = 0;while(true){
if((i__7239 < count__7238))
{var e = cljs.core._nth.call(null,chunk__7237,i__7239);var e_type_7241 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_7241,new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.system.climbing_QMARK_.call(null,e,entities);
} else
{}
{
var G__7242 = seq__7235;
var G__7243 = chunk__7237;
var G__7244 = count__7238;
var G__7245 = (i__7239 + 1);
seq__7235 = G__7242;
chunk__7237 = G__7243;
count__7238 = G__7244;
i__7239 = G__7245;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7235);if(temp__4092__auto__)
{var seq__7235__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7235__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7235__$1);{
var G__7246 = cljs.core.chunk_rest.call(null,seq__7235__$1);
var G__7247 = c__4150__auto__;
var G__7248 = cljs.core.count.call(null,c__4150__auto__);
var G__7249 = 0;
seq__7235 = G__7246;
chunk__7237 = G__7247;
count__7238 = G__7248;
i__7239 = G__7249;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7235__$1);var e_type_7250 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_7250,new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.system.climbing_QMARK_.call(null,e,entities);
} else
{}
{
var G__7251 = cljs.core.next.call(null,seq__7235__$1);
var G__7252 = null;
var G__7253 = 0;
var G__7254 = 0;
seq__7235 = G__7251;
chunk__7237 = G__7252;
count__7238 = G__7253;
i__7239 = G__7254;
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
divergence.system.move_entity = (function move_entity(entity,p__7256){var vec__7258 = p__7256;var x_speed = cljs.core.nth.call(null,vec__7258,0,null);var y_speed = cljs.core.nth.call(null,vec__7258,1,null);var rot_speed = cljs.core.nth.call(null,vec__7258,2,null);return cljs.core.update_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),(function (p1__7255_SHARP_){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_speed,y_speed,rot_speed], null),p1__7255_SHARP_);
}));
});
divergence.system.move = (function move(entities){var seq__7265 = cljs.core.seq.call(null,entities);var chunk__7266 = null;var count__7267 = 0;var i__7268 = 0;while(true){
if((i__7268 < count__7267))
{var e = cljs.core._nth.call(null,chunk__7266,i__7268);var map__7269_7271 = cljs.core.deref.call(null,e);var map__7269_7272__$1 = ((cljs.core.seq_QMARK_.call(null,map__7269_7271))?cljs.core.apply.call(null,cljs.core.hash_map,map__7269_7271):map__7269_7271);var v_7273 = cljs.core.get.call(null,map__7269_7272__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));cljs.core.swap_BANG_.call(null,e,divergence.system.move_entity,v_7273);
{
var G__7274 = seq__7265;
var G__7275 = chunk__7266;
var G__7276 = count__7267;
var G__7277 = (i__7268 + 1);
seq__7265 = G__7274;
chunk__7266 = G__7275;
count__7267 = G__7276;
i__7268 = G__7277;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7265);if(temp__4092__auto__)
{var seq__7265__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7265__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7265__$1);{
var G__7278 = cljs.core.chunk_rest.call(null,seq__7265__$1);
var G__7279 = c__4150__auto__;
var G__7280 = cljs.core.count.call(null,c__4150__auto__);
var G__7281 = 0;
seq__7265 = G__7278;
chunk__7266 = G__7279;
count__7267 = G__7280;
i__7268 = G__7281;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7265__$1);var map__7270_7282 = cljs.core.deref.call(null,e);var map__7270_7283__$1 = ((cljs.core.seq_QMARK_.call(null,map__7270_7282))?cljs.core.apply.call(null,cljs.core.hash_map,map__7270_7282):map__7270_7282);var v_7284 = cljs.core.get.call(null,map__7270_7283__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));cljs.core.swap_BANG_.call(null,e,divergence.system.move_entity,v_7284);
{
var G__7285 = cljs.core.next.call(null,seq__7265__$1);
var G__7286 = null;
var G__7287 = 0;
var G__7288 = 0;
seq__7265 = G__7285;
chunk__7266 = G__7286;
count__7267 = G__7287;
i__7268 = G__7288;
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
divergence.system.set_width_height = (function set_width_height(entities){var seq__7297 = cljs.core.seq.call(null,entities);var chunk__7300 = null;var count__7301 = 0;var i__7302 = 0;while(true){
if((i__7302 < count__7301))
{var e = cljs.core._nth.call(null,chunk__7300,i__7302);var ref = divergence.entity.entity_atom__GT_ref.call(null,e);var not_nil = !((ref == null));if(not_nil)
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),new cljs.core.Keyword(null,"width","width",1127031096)], null),ref.width);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),new cljs.core.Keyword(null,"height","height",4087841945)], null),ref.height);
{
var G__7305 = seq__7297;
var G__7306 = chunk__7300;
var G__7307 = count__7301;
var G__7308 = (i__7302 + 1);
seq__7297 = G__7305;
chunk__7300 = G__7306;
count__7301 = G__7307;
i__7302 = G__7308;
continue;
}
} else
{{
var G__7309 = seq__7297;
var G__7310 = chunk__7300;
var G__7311 = count__7301;
var G__7312 = (i__7302 + 1);
seq__7297 = G__7309;
chunk__7300 = G__7310;
count__7301 = G__7311;
i__7302 = G__7312;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7297);if(temp__4092__auto__)
{var seq__7297__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7297__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7297__$1);{
var G__7313 = cljs.core.chunk_rest.call(null,seq__7297__$1);
var G__7314 = c__4150__auto__;
var G__7315 = cljs.core.count.call(null,c__4150__auto__);
var G__7316 = 0;
seq__7297 = G__7313;
chunk__7300 = G__7314;
count__7301 = G__7315;
i__7302 = G__7316;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7297__$1);var ref = divergence.entity.entity_atom__GT_ref.call(null,e);var not_nil = !((ref == null));if(not_nil)
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),new cljs.core.Keyword(null,"width","width",1127031096)], null),ref.width);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),new cljs.core.Keyword(null,"height","height",4087841945)], null),ref.height);
{
var G__7317 = cljs.core.next.call(null,seq__7297__$1);
var G__7318 = null;
var G__7319 = 0;
var G__7320 = 0;
seq__7297 = G__7317;
chunk__7300 = G__7318;
count__7301 = G__7319;
i__7302 = G__7320;
continue;
}
} else
{{
var G__7321 = cljs.core.next.call(null,seq__7297__$1);
var G__7322 = null;
var G__7323 = 0;
var G__7324 = 0;
seq__7297 = G__7321;
chunk__7300 = G__7322;
count__7301 = G__7323;
i__7302 = G__7324;
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
divergence.system.collide = (function collide(entities){var seq__7337 = cljs.core.seq.call(null,divergence.entity.filter_entities.call(null,new cljs.core.Keyword(null,"collision-trigger","collision-trigger",1837179279),entities));var chunk__7340 = null;var count__7341 = 0;var i__7342 = 0;while(true){
if((i__7342 < count__7341))
{var e = cljs.core._nth.call(null,chunk__7340,i__7342);if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{return and__3396__auto__;
}
})()))
{var other_es_7349 = divergence.system.smart_collision.filter_things_close_to.call(null,cljs.core.deref.call(null,e),cljs.core.map.call(null,cljs.core.deref,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([e], true),entities)));var map__7345_7350 = cljs.core.deref.call(null,e);var map__7345_7351__$1 = ((cljs.core.seq_QMARK_.call(null,map__7345_7350))?cljs.core.apply.call(null,cljs.core.hash_map,map__7345_7350):map__7345_7350);var vec__7346_7352 = cljs.core.get.call(null,map__7345_7351__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_7353 = cljs.core.nth.call(null,vec__7346_7352,0,null);var y_v_7354 = cljs.core.nth.call(null,vec__7346_7352,1,null);var rot_speed_7355 = cljs.core.nth.call(null,vec__7346_7352,2,null);var x_future_7356 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_v_7353,0,0], null));var y_future_7357 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,y_v_7354,0], null));if((cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,divergence.physics.colliding_QMARK_,x_future_7356),other_es_7349)) > 0))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),0);
} else
{}
if((cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,divergence.physics.colliding_QMARK_,y_future_7357),other_es_7349)) > 0))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),1], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),1);
} else
{}
{
var G__7358 = seq__7337;
var G__7359 = chunk__7340;
var G__7360 = count__7341;
var G__7361 = (i__7342 + 1);
seq__7337 = G__7358;
chunk__7340 = G__7359;
count__7341 = G__7360;
i__7342 = G__7361;
continue;
}
} else
{{
var G__7362 = seq__7337;
var G__7363 = chunk__7340;
var G__7364 = count__7341;
var G__7365 = (i__7342 + 1);
seq__7337 = G__7362;
chunk__7340 = G__7363;
count__7341 = G__7364;
i__7342 = G__7365;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7337);if(temp__4092__auto__)
{var seq__7337__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7337__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7337__$1);{
var G__7366 = cljs.core.chunk_rest.call(null,seq__7337__$1);
var G__7367 = c__4150__auto__;
var G__7368 = cljs.core.count.call(null,c__4150__auto__);
var G__7369 = 0;
seq__7337 = G__7366;
chunk__7340 = G__7367;
count__7341 = G__7368;
i__7342 = G__7369;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7337__$1);if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{return and__3396__auto__;
}
})()))
{var other_es_7370 = divergence.system.smart_collision.filter_things_close_to.call(null,cljs.core.deref.call(null,e),cljs.core.map.call(null,cljs.core.deref,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([e], true),entities)));var map__7347_7371 = cljs.core.deref.call(null,e);var map__7347_7372__$1 = ((cljs.core.seq_QMARK_.call(null,map__7347_7371))?cljs.core.apply.call(null,cljs.core.hash_map,map__7347_7371):map__7347_7371);var vec__7348_7373 = cljs.core.get.call(null,map__7347_7372__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_7374 = cljs.core.nth.call(null,vec__7348_7373,0,null);var y_v_7375 = cljs.core.nth.call(null,vec__7348_7373,1,null);var rot_speed_7376 = cljs.core.nth.call(null,vec__7348_7373,2,null);var x_future_7377 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_v_7374,0,0], null));var y_future_7378 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,y_v_7375,0], null));if((cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,divergence.physics.colliding_QMARK_,x_future_7377),other_es_7370)) > 0))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),0);
} else
{}
if((cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,divergence.physics.colliding_QMARK_,y_future_7378),other_es_7370)) > 0))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),1], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),1);
} else
{}
{
var G__7379 = cljs.core.next.call(null,seq__7337__$1);
var G__7380 = null;
var G__7381 = 0;
var G__7382 = 0;
seq__7337 = G__7379;
chunk__7340 = G__7380;
count__7341 = G__7381;
i__7342 = G__7382;
continue;
}
} else
{{
var G__7383 = cljs.core.next.call(null,seq__7337__$1);
var G__7384 = null;
var G__7385 = 0;
var G__7386 = 0;
seq__7337 = G__7383;
chunk__7340 = G__7384;
count__7341 = G__7385;
i__7342 = G__7386;
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
divergence.system.push = (function push(entities,player){var seq__7403 = cljs.core.seq.call(null,player);var chunk__7406 = null;var count__7407 = 0;var i__7408 = 0;while(true){
if((i__7408 < count__7407))
{var p = cljs.core._nth.call(null,chunk__7406,i__7408);if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675)))
{var actions_7419 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var direction_7420 = cljs.core.atom.call(null,0);if(cljs.core.truth_(actions_7419))
{if(cljs.core.truth_(actions_7419.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.reset_BANG_.call(null,direction_7420,-2);
} else
{}
if(cljs.core.truth_(actions_7419.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.reset_BANG_.call(null,direction_7420,2);
} else
{}
} else
{}
var x_v_7421 = cljs.core.deref.call(null,direction_7420);var x_future_7422 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_v_7421,0,0], null));var seq__7411_7423 = cljs.core.seq.call(null,entities);var chunk__7412_7424 = null;var count__7413_7425 = 0;var i__7414_7426 = 0;while(true){
if((i__7414_7426 < count__7413_7425))
{var e_7427 = cljs.core._nth.call(null,chunk__7412_7424,i__7414_7426);if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,x_future_7422,cljs.core.deref.call(null,e_7427))))
{cljs.core.swap_BANG_.call(null,e_7427,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),x_v_7421);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pushing","pushing",794119674),true);
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"push","push",1017356940));
} else
{}
{
var G__7428 = seq__7411_7423;
var G__7429 = chunk__7412_7424;
var G__7430 = count__7413_7425;
var G__7431 = (i__7414_7426 + 1);
seq__7411_7423 = G__7428;
chunk__7412_7424 = G__7429;
count__7413_7425 = G__7430;
i__7414_7426 = G__7431;
continue;
}
} else
{var temp__4092__auto___7432 = cljs.core.seq.call(null,seq__7411_7423);if(temp__4092__auto___7432)
{var seq__7411_7433__$1 = temp__4092__auto___7432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7411_7433__$1))
{var c__4150__auto___7434 = cljs.core.chunk_first.call(null,seq__7411_7433__$1);{
var G__7435 = cljs.core.chunk_rest.call(null,seq__7411_7433__$1);
var G__7436 = c__4150__auto___7434;
var G__7437 = cljs.core.count.call(null,c__4150__auto___7434);
var G__7438 = 0;
seq__7411_7423 = G__7435;
chunk__7412_7424 = G__7436;
count__7413_7425 = G__7437;
i__7414_7426 = G__7438;
continue;
}
} else
{var e_7439 = cljs.core.first.call(null,seq__7411_7433__$1);if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,x_future_7422,cljs.core.deref.call(null,e_7439))))
{cljs.core.swap_BANG_.call(null,e_7439,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),x_v_7421);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pushing","pushing",794119674),true);
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"push","push",1017356940));
} else
{}
{
var G__7440 = cljs.core.next.call(null,seq__7411_7433__$1);
var G__7441 = null;
var G__7442 = 0;
var G__7443 = 0;
seq__7411_7423 = G__7440;
chunk__7412_7424 = G__7441;
count__7413_7425 = G__7442;
i__7414_7426 = G__7443;
continue;
}
}
} else
{}
}
break;
}
{
var G__7444 = seq__7403;
var G__7445 = chunk__7406;
var G__7446 = count__7407;
var G__7447 = (i__7408 + 1);
seq__7403 = G__7444;
chunk__7406 = G__7445;
count__7407 = G__7446;
i__7408 = G__7447;
continue;
}
} else
{{
var G__7448 = seq__7403;
var G__7449 = chunk__7406;
var G__7450 = count__7407;
var G__7451 = (i__7408 + 1);
seq__7403 = G__7448;
chunk__7406 = G__7449;
count__7407 = G__7450;
i__7408 = G__7451;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7403);if(temp__4092__auto__)
{var seq__7403__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7403__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7403__$1);{
var G__7452 = cljs.core.chunk_rest.call(null,seq__7403__$1);
var G__7453 = c__4150__auto__;
var G__7454 = cljs.core.count.call(null,c__4150__auto__);
var G__7455 = 0;
seq__7403 = G__7452;
chunk__7406 = G__7453;
count__7407 = G__7454;
i__7408 = G__7455;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__7403__$1);if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675)))
{var actions_7456 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var direction_7457 = cljs.core.atom.call(null,0);if(cljs.core.truth_(actions_7456))
{if(cljs.core.truth_(actions_7456.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.reset_BANG_.call(null,direction_7457,-2);
} else
{}
if(cljs.core.truth_(actions_7456.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.reset_BANG_.call(null,direction_7457,2);
} else
{}
} else
{}
var x_v_7458 = cljs.core.deref.call(null,direction_7457);var x_future_7459 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_v_7458,0,0], null));var seq__7415_7460 = cljs.core.seq.call(null,entities);var chunk__7416_7461 = null;var count__7417_7462 = 0;var i__7418_7463 = 0;while(true){
if((i__7418_7463 < count__7417_7462))
{var e_7464 = cljs.core._nth.call(null,chunk__7416_7461,i__7418_7463);if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,x_future_7459,cljs.core.deref.call(null,e_7464))))
{cljs.core.swap_BANG_.call(null,e_7464,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),x_v_7458);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pushing","pushing",794119674),true);
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"push","push",1017356940));
} else
{}
{
var G__7465 = seq__7415_7460;
var G__7466 = chunk__7416_7461;
var G__7467 = count__7417_7462;
var G__7468 = (i__7418_7463 + 1);
seq__7415_7460 = G__7465;
chunk__7416_7461 = G__7466;
count__7417_7462 = G__7467;
i__7418_7463 = G__7468;
continue;
}
} else
{var temp__4092__auto___7469__$1 = cljs.core.seq.call(null,seq__7415_7460);if(temp__4092__auto___7469__$1)
{var seq__7415_7470__$1 = temp__4092__auto___7469__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7415_7470__$1))
{var c__4150__auto___7471 = cljs.core.chunk_first.call(null,seq__7415_7470__$1);{
var G__7472 = cljs.core.chunk_rest.call(null,seq__7415_7470__$1);
var G__7473 = c__4150__auto___7471;
var G__7474 = cljs.core.count.call(null,c__4150__auto___7471);
var G__7475 = 0;
seq__7415_7460 = G__7472;
chunk__7416_7461 = G__7473;
count__7417_7462 = G__7474;
i__7418_7463 = G__7475;
continue;
}
} else
{var e_7476 = cljs.core.first.call(null,seq__7415_7470__$1);if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,x_future_7459,cljs.core.deref.call(null,e_7476))))
{cljs.core.swap_BANG_.call(null,e_7476,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199),0], null),x_v_7458);
cljs.core.swap_BANG_.call(null,p,cljs.core.assoc,new cljs.core.Keyword(null,"pushing","pushing",794119674),true);
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"push","push",1017356940));
} else
{}
{
var G__7477 = cljs.core.next.call(null,seq__7415_7470__$1);
var G__7478 = null;
var G__7479 = 0;
var G__7480 = 0;
seq__7415_7460 = G__7477;
chunk__7416_7461 = G__7478;
count__7417_7462 = G__7479;
i__7418_7463 = G__7480;
continue;
}
}
} else
{}
}
break;
}
{
var G__7481 = cljs.core.next.call(null,seq__7403__$1);
var G__7482 = null;
var G__7483 = 0;
var G__7484 = 0;
seq__7403 = G__7481;
chunk__7406 = G__7482;
count__7407 = G__7483;
i__7408 = G__7484;
continue;
}
} else
{{
var G__7485 = cljs.core.next.call(null,seq__7403__$1);
var G__7486 = null;
var G__7487 = 0;
var G__7488 = 0;
seq__7403 = G__7485;
chunk__7406 = G__7486;
count__7407 = G__7487;
i__7408 = G__7488;
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
divergence.system.friction = (function friction(entities){var seq__7501 = cljs.core.seq.call(null,entities);var chunk__7502 = null;var count__7503 = 0;var i__7504 = 0;while(true){
if((i__7504 < count__7503))
{var e = cljs.core._nth.call(null,chunk__7502,i__7504);var map__7505_7513 = cljs.core.deref.call(null,e);var map__7505_7514__$1 = ((cljs.core.seq_QMARK_.call(null,map__7505_7513))?cljs.core.apply.call(null,cljs.core.hash_map,map__7505_7513):map__7505_7513);var vec__7506_7515 = cljs.core.get.call(null,map__7505_7514__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var vx_7516 = cljs.core.nth.call(null,vec__7506_7515,0,null);var vy_7517 = cljs.core.nth.call(null,vec__7506_7515,1,null);var vr_7518 = cljs.core.nth.call(null,vec__7506_7515,2,null);var vec__7507_7519 = cljs.core.get.call(null,map__7505_7514__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_7520 = cljs.core.nth.call(null,vec__7507_7519,0,null);var ay_7521 = cljs.core.nth.call(null,vec__7507_7519,1,null);var ar_7522 = cljs.core.nth.call(null,vec__7507_7519,2,null);var vec__7508_7523 = cljs.core.get.call(null,map__7505_7514__$1,new cljs.core.Keyword(null,"friction","friction",3884153452));var f_7524 = cljs.core.nth.call(null,vec__7508_7523,0,null);var actions_7525 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));if((cljs.core.not_EQ_.call(null,0,vx_7516)) && (cljs.core.empty_QMARK_.call(null,actions_7525)))
{if(((vx_7516 <= -0.5)) || ((vx_7516 >= 0.5)))
{if((vx_7516 <= -0.5))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((vx_7516 / vx_7516) * f_7524),ay_7521,ar_7522], null));
} else
{}
if((vx_7516 >= 0.5))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((vx_7516 / vx_7516) * f_7524) * -1),ay_7521,ar_7522], null));
} else
{}
} else
{}
if(((vx_7516 > -0.5)) && ((vx_7516 < 0.5)))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vx_7516 * -1),ay_7521,ar_7522], null));
} else
{}
} else
{}
{
var G__7526 = seq__7501;
var G__7527 = chunk__7502;
var G__7528 = count__7503;
var G__7529 = (i__7504 + 1);
seq__7501 = G__7526;
chunk__7502 = G__7527;
count__7503 = G__7528;
i__7504 = G__7529;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7501);if(temp__4092__auto__)
{var seq__7501__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7501__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7501__$1);{
var G__7530 = cljs.core.chunk_rest.call(null,seq__7501__$1);
var G__7531 = c__4150__auto__;
var G__7532 = cljs.core.count.call(null,c__4150__auto__);
var G__7533 = 0;
seq__7501 = G__7530;
chunk__7502 = G__7531;
count__7503 = G__7532;
i__7504 = G__7533;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7501__$1);var map__7509_7534 = cljs.core.deref.call(null,e);var map__7509_7535__$1 = ((cljs.core.seq_QMARK_.call(null,map__7509_7534))?cljs.core.apply.call(null,cljs.core.hash_map,map__7509_7534):map__7509_7534);var vec__7510_7536 = cljs.core.get.call(null,map__7509_7535__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var vx_7537 = cljs.core.nth.call(null,vec__7510_7536,0,null);var vy_7538 = cljs.core.nth.call(null,vec__7510_7536,1,null);var vr_7539 = cljs.core.nth.call(null,vec__7510_7536,2,null);var vec__7511_7540 = cljs.core.get.call(null,map__7509_7535__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_7541 = cljs.core.nth.call(null,vec__7511_7540,0,null);var ay_7542 = cljs.core.nth.call(null,vec__7511_7540,1,null);var ar_7543 = cljs.core.nth.call(null,vec__7511_7540,2,null);var vec__7512_7544 = cljs.core.get.call(null,map__7509_7535__$1,new cljs.core.Keyword(null,"friction","friction",3884153452));var f_7545 = cljs.core.nth.call(null,vec__7512_7544,0,null);var actions_7546 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));if((cljs.core.not_EQ_.call(null,0,vx_7537)) && (cljs.core.empty_QMARK_.call(null,actions_7546)))
{if(((vx_7537 <= -0.5)) || ((vx_7537 >= 0.5)))
{if((vx_7537 <= -0.5))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((vx_7537 / vx_7537) * f_7545),ay_7542,ar_7543], null));
} else
{}
if((vx_7537 >= 0.5))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((vx_7537 / vx_7537) * f_7545) * -1),ay_7542,ar_7543], null));
} else
{}
} else
{}
if(((vx_7537 > -0.5)) && ((vx_7537 < 0.5)))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vx_7537 * -1),ay_7542,ar_7543], null));
} else
{}
} else
{}
{
var G__7547 = cljs.core.next.call(null,seq__7501__$1);
var G__7548 = null;
var G__7549 = 0;
var G__7550 = 0;
seq__7501 = G__7547;
chunk__7502 = G__7548;
count__7503 = G__7549;
i__7504 = G__7550;
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
divergence.system.accelerate = (function accelerate(entities){var seq__7560 = cljs.core.seq.call(null,entities);var chunk__7562 = null;var count__7563 = 0;var i__7564 = 0;while(true){
if((i__7564 < count__7563))
{var e = cljs.core._nth.call(null,chunk__7562,i__7564);var map__7566_7568 = cljs.core.deref.call(null,e);var map__7566_7569__$1 = ((cljs.core.seq_QMARK_.call(null,map__7566_7568))?cljs.core.apply.call(null,cljs.core.hash_map,map__7566_7568):map__7566_7568);var a_7570 = cljs.core.get.call(null,map__7566_7569__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));cljs.core.swap_BANG_.call(null,e,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),((function (seq__7560,chunk__7562,count__7563,i__7564,map__7566_7568,map__7566_7569__$1,a_7570,e){
return (function (p1__7551_SHARP_){return cljs.core.mapv.call(null,cljs.core._PLUS_,a_7570,p1__7551_SHARP_);
});})(seq__7560,chunk__7562,count__7563,i__7564,map__7566_7568,map__7566_7569__$1,a_7570,e))
);
{
var G__7571 = seq__7560;
var G__7572 = chunk__7562;
var G__7573 = count__7563;
var G__7574 = (i__7564 + 1);
seq__7560 = G__7571;
chunk__7562 = G__7572;
count__7563 = G__7573;
i__7564 = G__7574;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7560);if(temp__4092__auto__)
{var seq__7560__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7560__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7560__$1);{
var G__7575 = cljs.core.chunk_rest.call(null,seq__7560__$1);
var G__7576 = c__4150__auto__;
var G__7577 = cljs.core.count.call(null,c__4150__auto__);
var G__7578 = 0;
seq__7560 = G__7575;
chunk__7562 = G__7576;
count__7563 = G__7577;
i__7564 = G__7578;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7560__$1);var map__7567_7579 = cljs.core.deref.call(null,e);var map__7567_7580__$1 = ((cljs.core.seq_QMARK_.call(null,map__7567_7579))?cljs.core.apply.call(null,cljs.core.hash_map,map__7567_7579):map__7567_7579);var a_7581 = cljs.core.get.call(null,map__7567_7580__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));cljs.core.swap_BANG_.call(null,e,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),((function (seq__7560,chunk__7562,count__7563,i__7564,map__7567_7579,map__7567_7580__$1,a_7581,e,seq__7560__$1,temp__4092__auto__){
return (function (p1__7551_SHARP_){return cljs.core.mapv.call(null,cljs.core._PLUS_,a_7581,p1__7551_SHARP_);
});})(seq__7560,chunk__7562,count__7563,i__7564,map__7567_7579,map__7567_7580__$1,a_7581,e,seq__7560__$1,temp__4092__auto__))
);
{
var G__7582 = cljs.core.next.call(null,seq__7560__$1);
var G__7583 = null;
var G__7584 = 0;
var G__7585 = 0;
seq__7560 = G__7582;
chunk__7562 = G__7583;
count__7563 = G__7584;
i__7564 = G__7585;
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
divergence.system.gravity = (function gravity(entities){var seq__7595 = cljs.core.seq.call(null,entities);var chunk__7597 = null;var count__7598 = 0;var i__7599 = 0;while(true){
if((i__7599 < count__7598))
{var e = cljs.core._nth.call(null,chunk__7597,i__7599);var map__7601_7603 = cljs.core.deref.call(null,e);var map__7601_7604__$1 = ((cljs.core.seq_QMARK_.call(null,map__7601_7603))?cljs.core.apply.call(null,cljs.core.hash_map,map__7601_7603):map__7601_7603);var g_7605 = cljs.core.get.call(null,map__7601_7604__$1,new cljs.core.Keyword(null,"gravity","gravity",1294427584));cljs.core.swap_BANG_.call(null,e,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),((function (seq__7595,chunk__7597,count__7598,i__7599,map__7601_7603,map__7601_7604__$1,g_7605,e){
return (function (p1__7586_SHARP_){return cljs.core.mapv.call(null,cljs.core._PLUS_,g_7605,p1__7586_SHARP_);
});})(seq__7595,chunk__7597,count__7598,i__7599,map__7601_7603,map__7601_7604__$1,g_7605,e))
);
{
var G__7606 = seq__7595;
var G__7607 = chunk__7597;
var G__7608 = count__7598;
var G__7609 = (i__7599 + 1);
seq__7595 = G__7606;
chunk__7597 = G__7607;
count__7598 = G__7608;
i__7599 = G__7609;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7595);if(temp__4092__auto__)
{var seq__7595__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7595__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7595__$1);{
var G__7610 = cljs.core.chunk_rest.call(null,seq__7595__$1);
var G__7611 = c__4150__auto__;
var G__7612 = cljs.core.count.call(null,c__4150__auto__);
var G__7613 = 0;
seq__7595 = G__7610;
chunk__7597 = G__7611;
count__7598 = G__7612;
i__7599 = G__7613;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7595__$1);var map__7602_7614 = cljs.core.deref.call(null,e);var map__7602_7615__$1 = ((cljs.core.seq_QMARK_.call(null,map__7602_7614))?cljs.core.apply.call(null,cljs.core.hash_map,map__7602_7614):map__7602_7614);var g_7616 = cljs.core.get.call(null,map__7602_7615__$1,new cljs.core.Keyword(null,"gravity","gravity",1294427584));cljs.core.swap_BANG_.call(null,e,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),((function (seq__7595,chunk__7597,count__7598,i__7599,map__7602_7614,map__7602_7615__$1,g_7616,e,seq__7595__$1,temp__4092__auto__){
return (function (p1__7586_SHARP_){return cljs.core.mapv.call(null,cljs.core._PLUS_,g_7616,p1__7586_SHARP_);
});})(seq__7595,chunk__7597,count__7598,i__7599,map__7602_7614,map__7602_7615__$1,g_7616,e,seq__7595__$1,temp__4092__auto__))
);
{
var G__7617 = cljs.core.next.call(null,seq__7595__$1);
var G__7618 = null;
var G__7619 = 0;
var G__7620 = 0;
seq__7595 = G__7617;
chunk__7597 = G__7618;
count__7598 = G__7619;
i__7599 = G__7620;
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
divergence.system.anchor = (function anchor(entities){var seq__7627 = cljs.core.seq.call(null,entities);var chunk__7628 = null;var count__7629 = 0;var i__7630 = 0;while(true){
if((i__7630 < count__7629))
{var e = cljs.core._nth.call(null,chunk__7628,i__7630);var map__7631_7633 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"anchor","anchor",3895572007));var map__7631_7634__$1 = ((cljs.core.seq_QMARK_.call(null,map__7631_7633))?cljs.core.apply.call(null,cljs.core.hash_map,map__7631_7633):map__7631_7633);var y_7635 = cljs.core.get.call(null,map__7631_7634__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x_7636 = cljs.core.get.call(null,map__7631_7634__$1,new cljs.core.Keyword(null,"x","x",1013904362));var ref_7637 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_7637.anchor["x"] = x_7636);
(ref_7637.anchor["y"] = y_7635);
{
var G__7638 = seq__7627;
var G__7639 = chunk__7628;
var G__7640 = count__7629;
var G__7641 = (i__7630 + 1);
seq__7627 = G__7638;
chunk__7628 = G__7639;
count__7629 = G__7640;
i__7630 = G__7641;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7627);if(temp__4092__auto__)
{var seq__7627__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7627__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7627__$1);{
var G__7642 = cljs.core.chunk_rest.call(null,seq__7627__$1);
var G__7643 = c__4150__auto__;
var G__7644 = cljs.core.count.call(null,c__4150__auto__);
var G__7645 = 0;
seq__7627 = G__7642;
chunk__7628 = G__7643;
count__7629 = G__7644;
i__7630 = G__7645;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7627__$1);var map__7632_7646 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"anchor","anchor",3895572007));var map__7632_7647__$1 = ((cljs.core.seq_QMARK_.call(null,map__7632_7646))?cljs.core.apply.call(null,cljs.core.hash_map,map__7632_7646):map__7632_7646);var y_7648 = cljs.core.get.call(null,map__7632_7647__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x_7649 = cljs.core.get.call(null,map__7632_7647__$1,new cljs.core.Keyword(null,"x","x",1013904362));var ref_7650 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_7650.anchor["x"] = x_7649);
(ref_7650.anchor["y"] = y_7648);
{
var G__7651 = cljs.core.next.call(null,seq__7627__$1);
var G__7652 = null;
var G__7653 = 0;
var G__7654 = 0;
seq__7627 = G__7651;
chunk__7628 = G__7652;
count__7629 = G__7653;
i__7630 = G__7654;
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
divergence.system.scale = (function scale(entities){var seq__7663 = cljs.core.seq.call(null,entities);var chunk__7664 = null;var count__7665 = 0;var i__7666 = 0;while(true){
if((i__7666 < count__7665))
{var e = cljs.core._nth.call(null,chunk__7664,i__7666);var map__7667_7671 = cljs.core.deref.call(null,e);var map__7667_7672__$1 = ((cljs.core.seq_QMARK_.call(null,map__7667_7671))?cljs.core.apply.call(null,cljs.core.hash_map,map__7667_7671):map__7667_7671);var map__7668_7673 = cljs.core.get.call(null,map__7667_7672__$1,new cljs.core.Keyword(null,"scale","scale",1123155132));var map__7668_7674__$1 = ((cljs.core.seq_QMARK_.call(null,map__7668_7673))?cljs.core.apply.call(null,cljs.core.hash_map,map__7668_7673):map__7668_7673);var rot_speed_7675 = cljs.core.get.call(null,map__7668_7674__$1,new cljs.core.Keyword(null,"rot-speed","rot-speed",2570110019));var y_scale_7676 = cljs.core.get.call(null,map__7668_7674__$1,new cljs.core.Keyword(null,"y-scale","y-scale",2425229928));var x_scale_7677 = cljs.core.get.call(null,map__7668_7674__$1,new cljs.core.Keyword(null,"x-scale","x-scale",1537726247));var ref_7678 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_7678.scale["x"] = x_scale_7677);
(ref_7678.scale["y"] = y_scale_7676);
{
var G__7679 = seq__7663;
var G__7680 = chunk__7664;
var G__7681 = count__7665;
var G__7682 = (i__7666 + 1);
seq__7663 = G__7679;
chunk__7664 = G__7680;
count__7665 = G__7681;
i__7666 = G__7682;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7663);if(temp__4092__auto__)
{var seq__7663__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7663__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7663__$1);{
var G__7683 = cljs.core.chunk_rest.call(null,seq__7663__$1);
var G__7684 = c__4150__auto__;
var G__7685 = cljs.core.count.call(null,c__4150__auto__);
var G__7686 = 0;
seq__7663 = G__7683;
chunk__7664 = G__7684;
count__7665 = G__7685;
i__7666 = G__7686;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7663__$1);var map__7669_7687 = cljs.core.deref.call(null,e);var map__7669_7688__$1 = ((cljs.core.seq_QMARK_.call(null,map__7669_7687))?cljs.core.apply.call(null,cljs.core.hash_map,map__7669_7687):map__7669_7687);var map__7670_7689 = cljs.core.get.call(null,map__7669_7688__$1,new cljs.core.Keyword(null,"scale","scale",1123155132));var map__7670_7690__$1 = ((cljs.core.seq_QMARK_.call(null,map__7670_7689))?cljs.core.apply.call(null,cljs.core.hash_map,map__7670_7689):map__7670_7689);var rot_speed_7691 = cljs.core.get.call(null,map__7670_7690__$1,new cljs.core.Keyword(null,"rot-speed","rot-speed",2570110019));var y_scale_7692 = cljs.core.get.call(null,map__7670_7690__$1,new cljs.core.Keyword(null,"y-scale","y-scale",2425229928));var x_scale_7693 = cljs.core.get.call(null,map__7670_7690__$1,new cljs.core.Keyword(null,"x-scale","x-scale",1537726247));var ref_7694 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_7694.scale["x"] = x_scale_7693);
(ref_7694.scale["y"] = y_scale_7692);
{
var G__7695 = cljs.core.next.call(null,seq__7663__$1);
var G__7696 = null;
var G__7697 = 0;
var G__7698 = 0;
seq__7663 = G__7695;
chunk__7664 = G__7696;
count__7665 = G__7697;
i__7666 = G__7698;
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
divergence.system.position = (function position(entities){var seq__7707 = cljs.core.seq.call(null,entities);var chunk__7708 = null;var count__7709 = 0;var i__7710 = 0;while(true){
if((i__7710 < count__7709))
{var e = cljs.core._nth.call(null,chunk__7708,i__7710);var map__7711_7715 = cljs.core.deref.call(null,e);var map__7711_7716__$1 = ((cljs.core.seq_QMARK_.call(null,map__7711_7715))?cljs.core.apply.call(null,cljs.core.hash_map,map__7711_7715):map__7711_7715);var vec__7712_7717 = cljs.core.get.call(null,map__7711_7716__$1,new cljs.core.Keyword(null,"position","position",1761709211));var x_7718 = cljs.core.nth.call(null,vec__7712_7717,0,null);var y_7719 = cljs.core.nth.call(null,vec__7712_7717,1,null);var rot_7720 = cljs.core.nth.call(null,vec__7712_7717,2,null);var ref_7721 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_7721.position["x"] = x_7718);
(ref_7721.position["y"] = y_7719);
(ref_7721["rotation"] = rot_7720);
{
var G__7722 = seq__7707;
var G__7723 = chunk__7708;
var G__7724 = count__7709;
var G__7725 = (i__7710 + 1);
seq__7707 = G__7722;
chunk__7708 = G__7723;
count__7709 = G__7724;
i__7710 = G__7725;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7707);if(temp__4092__auto__)
{var seq__7707__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7707__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7707__$1);{
var G__7726 = cljs.core.chunk_rest.call(null,seq__7707__$1);
var G__7727 = c__4150__auto__;
var G__7728 = cljs.core.count.call(null,c__4150__auto__);
var G__7729 = 0;
seq__7707 = G__7726;
chunk__7708 = G__7727;
count__7709 = G__7728;
i__7710 = G__7729;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7707__$1);var map__7713_7730 = cljs.core.deref.call(null,e);var map__7713_7731__$1 = ((cljs.core.seq_QMARK_.call(null,map__7713_7730))?cljs.core.apply.call(null,cljs.core.hash_map,map__7713_7730):map__7713_7730);var vec__7714_7732 = cljs.core.get.call(null,map__7713_7731__$1,new cljs.core.Keyword(null,"position","position",1761709211));var x_7733 = cljs.core.nth.call(null,vec__7714_7732,0,null);var y_7734 = cljs.core.nth.call(null,vec__7714_7732,1,null);var rot_7735 = cljs.core.nth.call(null,vec__7714_7732,2,null);var ref_7736 = divergence.entity.entity_atom__GT_ref.call(null,e);(ref_7736.position["x"] = x_7733);
(ref_7736.position["y"] = y_7734);
(ref_7736["rotation"] = rot_7735);
{
var G__7737 = cljs.core.next.call(null,seq__7707__$1);
var G__7738 = null;
var G__7739 = 0;
var G__7740 = 0;
seq__7707 = G__7737;
chunk__7708 = G__7738;
count__7709 = G__7739;
i__7710 = G__7740;
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
divergence.system.play_time_travel = (function play_time_travel(entities){var seq__7747 = cljs.core.seq.call(null,entities);var chunk__7749 = null;var count__7750 = 0;var i__7751 = 0;while(true){
if((i__7751 < count__7750))
{var e = cljs.core._nth.call(null,chunk__7749,i__7751);var actions_7753 = new cljs.core.Keyword(null,"actions","actions",4147068015).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var prev_actions_7754 = new cljs.core.Keyword(null,"prev-actions","prev-actions",2648235733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));if(cljs.core.truth_((function (){var and__3396__auto__ = actions_7753.call(null,new cljs.core.Keyword(null,"travel-back","travel-back",642120492));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not.call(null,prev_actions_7754.call(null,new cljs.core.Keyword(null,"travel-back","travel-back",642120492)));
} else
{return and__3396__auto__;
}
})()))
{divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"time","time",1017464383));
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"prev-actions","prev-actions",2648235733),actions_7753);
{
var G__7755 = seq__7747;
var G__7756 = chunk__7749;
var G__7757 = count__7750;
var G__7758 = (i__7751 + 1);
seq__7747 = G__7755;
chunk__7749 = G__7756;
count__7750 = G__7757;
i__7751 = G__7758;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7747);if(temp__4092__auto__)
{var seq__7747__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7747__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7747__$1);{
var G__7759 = cljs.core.chunk_rest.call(null,seq__7747__$1);
var G__7760 = c__4150__auto__;
var G__7761 = cljs.core.count.call(null,c__4150__auto__);
var G__7762 = 0;
seq__7747 = G__7759;
chunk__7749 = G__7760;
count__7750 = G__7761;
i__7751 = G__7762;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7747__$1);var actions_7763 = new cljs.core.Keyword(null,"actions","actions",4147068015).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var prev_actions_7764 = new cljs.core.Keyword(null,"prev-actions","prev-actions",2648235733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));if(cljs.core.truth_((function (){var and__3396__auto__ = actions_7763.call(null,new cljs.core.Keyword(null,"travel-back","travel-back",642120492));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not.call(null,prev_actions_7764.call(null,new cljs.core.Keyword(null,"travel-back","travel-back",642120492)));
} else
{return and__3396__auto__;
}
})()))
{divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"time","time",1017464383));
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"prev-actions","prev-actions",2648235733),actions_7763);
{
var G__7765 = cljs.core.next.call(null,seq__7747__$1);
var G__7766 = null;
var G__7767 = 0;
var G__7768 = 0;
seq__7747 = G__7765;
chunk__7749 = G__7766;
count__7750 = G__7767;
i__7751 = G__7768;
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
divergence.system.execute_entities = (function execute_entities(entities){var seq__7777 = cljs.core.seq.call(null,entities);var chunk__7780 = null;var count__7781 = 0;var i__7782 = 0;while(true){
if((i__7782 < count__7781))
{var e = cljs.core._nth.call(null,chunk__7780,i__7782);var cond1 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"npc","npc",1014013523));var cond2 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond3 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"text","text",1017460895));if((cond1) || (cond2) || (cond3))
{divergence.system.index_check.call(null,e);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),divergence.system.fetch_current_path.call(null,e));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"path-index","path-index",752100508),(cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"path-index","path-index",752100508)) + 2));
{
var G__7785 = seq__7777;
var G__7786 = chunk__7780;
var G__7787 = count__7781;
var G__7788 = (i__7782 + 1);
seq__7777 = G__7785;
chunk__7780 = G__7786;
count__7781 = G__7787;
i__7782 = G__7788;
continue;
}
} else
{{
var G__7789 = seq__7777;
var G__7790 = chunk__7780;
var G__7791 = count__7781;
var G__7792 = (i__7782 + 1);
seq__7777 = G__7789;
chunk__7780 = G__7790;
count__7781 = G__7791;
i__7782 = G__7792;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7777);if(temp__4092__auto__)
{var seq__7777__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7777__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7777__$1);{
var G__7793 = cljs.core.chunk_rest.call(null,seq__7777__$1);
var G__7794 = c__4150__auto__;
var G__7795 = cljs.core.count.call(null,c__4150__auto__);
var G__7796 = 0;
seq__7777 = G__7793;
chunk__7780 = G__7794;
count__7781 = G__7795;
i__7782 = G__7796;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7777__$1);var cond1 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"npc","npc",1014013523));var cond2 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond3 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"text","text",1017460895));if((cond1) || (cond2) || (cond3))
{divergence.system.index_check.call(null,e);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),divergence.system.fetch_current_path.call(null,e));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"path-index","path-index",752100508),(cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"path-index","path-index",752100508)) + 2));
{
var G__7797 = cljs.core.next.call(null,seq__7777__$1);
var G__7798 = null;
var G__7799 = 0;
var G__7800 = 0;
seq__7777 = G__7797;
chunk__7780 = G__7798;
count__7781 = G__7799;
i__7782 = G__7800;
continue;
}
} else
{{
var G__7801 = cljs.core.next.call(null,seq__7777__$1);
var G__7802 = null;
var G__7803 = 0;
var G__7804 = 0;
seq__7777 = G__7801;
chunk__7780 = G__7802;
count__7781 = G__7803;
i__7782 = G__7804;
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
divergence.system.execute_effects = (function execute_effects(player,entities){var seq__7829 = cljs.core.seq.call(null,player);var chunk__7830 = null;var count__7831 = 0;var i__7832 = 0;while(true){
if((i__7832 < count__7831))
{var p = cljs.core._nth.call(null,chunk__7830,i__7832);var seq__7833_7853 = cljs.core.seq.call(null,entities);var chunk__7836_7854 = null;var count__7837_7855 = 0;var i__7838_7856 = 0;while(true){
if((i__7838_7856 < count__7837_7855))
{var e_7857 = cljs.core._nth.call(null,chunk__7836_7854,i__7838_7856);var vec__7841_7858 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_7859 = cljs.core.nth.call(null,vec__7841_7858,0,null);var y_v_7860 = cljs.core.nth.call(null,vec__7841_7858,1,null);var rot_speed_7861 = cljs.core.nth.call(null,vec__7841_7858,2,null);var px_7862 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_v_7859 * 3),0,0], null));var py_7863 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(y_v_7860 * 3),0], null));var cond3_7864 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e_7857).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond4_7865 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675));if((cond3_7864) && (cond4_7865))
{if(cljs.core.truth_((function (){var or__3408__auto__ = divergence.physics.colliding_QMARK_.call(null,py_7863,cljs.core.deref.call(null,e_7857));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return divergence.physics.colliding_QMARK_.call(null,px_7862,cljs.core.deref.call(null,e_7857));
}
})()))
{divergence.entity.enemies.effects.call(null,p,e_7857);
} else
{}
{
var G__7866 = seq__7833_7853;
var G__7867 = chunk__7836_7854;
var G__7868 = count__7837_7855;
var G__7869 = (i__7838_7856 + 1);
seq__7833_7853 = G__7866;
chunk__7836_7854 = G__7867;
count__7837_7855 = G__7868;
i__7838_7856 = G__7869;
continue;
}
} else
{{
var G__7870 = seq__7833_7853;
var G__7871 = chunk__7836_7854;
var G__7872 = count__7837_7855;
var G__7873 = (i__7838_7856 + 1);
seq__7833_7853 = G__7870;
chunk__7836_7854 = G__7871;
count__7837_7855 = G__7872;
i__7838_7856 = G__7873;
continue;
}
}
} else
{var temp__4092__auto___7874 = cljs.core.seq.call(null,seq__7833_7853);if(temp__4092__auto___7874)
{var seq__7833_7875__$1 = temp__4092__auto___7874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7833_7875__$1))
{var c__4150__auto___7876 = cljs.core.chunk_first.call(null,seq__7833_7875__$1);{
var G__7877 = cljs.core.chunk_rest.call(null,seq__7833_7875__$1);
var G__7878 = c__4150__auto___7876;
var G__7879 = cljs.core.count.call(null,c__4150__auto___7876);
var G__7880 = 0;
seq__7833_7853 = G__7877;
chunk__7836_7854 = G__7878;
count__7837_7855 = G__7879;
i__7838_7856 = G__7880;
continue;
}
} else
{var e_7881 = cljs.core.first.call(null,seq__7833_7875__$1);var vec__7842_7882 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_7883 = cljs.core.nth.call(null,vec__7842_7882,0,null);var y_v_7884 = cljs.core.nth.call(null,vec__7842_7882,1,null);var rot_speed_7885 = cljs.core.nth.call(null,vec__7842_7882,2,null);var px_7886 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_v_7883 * 3),0,0], null));var py_7887 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(y_v_7884 * 3),0], null));var cond3_7888 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e_7881).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond4_7889 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675));if((cond3_7888) && (cond4_7889))
{if(cljs.core.truth_((function (){var or__3408__auto__ = divergence.physics.colliding_QMARK_.call(null,py_7887,cljs.core.deref.call(null,e_7881));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return divergence.physics.colliding_QMARK_.call(null,px_7886,cljs.core.deref.call(null,e_7881));
}
})()))
{divergence.entity.enemies.effects.call(null,p,e_7881);
} else
{}
{
var G__7890 = cljs.core.next.call(null,seq__7833_7875__$1);
var G__7891 = null;
var G__7892 = 0;
var G__7893 = 0;
seq__7833_7853 = G__7890;
chunk__7836_7854 = G__7891;
count__7837_7855 = G__7892;
i__7838_7856 = G__7893;
continue;
}
} else
{{
var G__7894 = cljs.core.next.call(null,seq__7833_7875__$1);
var G__7895 = null;
var G__7896 = 0;
var G__7897 = 0;
seq__7833_7853 = G__7894;
chunk__7836_7854 = G__7895;
count__7837_7855 = G__7896;
i__7838_7856 = G__7897;
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
var G__7898 = seq__7829;
var G__7899 = chunk__7830;
var G__7900 = count__7831;
var G__7901 = (i__7832 + 1);
seq__7829 = G__7898;
chunk__7830 = G__7899;
count__7831 = G__7900;
i__7832 = G__7901;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7829);if(temp__4092__auto__)
{var seq__7829__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7829__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7829__$1);{
var G__7902 = cljs.core.chunk_rest.call(null,seq__7829__$1);
var G__7903 = c__4150__auto__;
var G__7904 = cljs.core.count.call(null,c__4150__auto__);
var G__7905 = 0;
seq__7829 = G__7902;
chunk__7830 = G__7903;
count__7831 = G__7904;
i__7832 = G__7905;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__7829__$1);var seq__7843_7906 = cljs.core.seq.call(null,entities);var chunk__7846_7907 = null;var count__7847_7908 = 0;var i__7848_7909 = 0;while(true){
if((i__7848_7909 < count__7847_7908))
{var e_7910 = cljs.core._nth.call(null,chunk__7846_7907,i__7848_7909);var vec__7851_7911 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_7912 = cljs.core.nth.call(null,vec__7851_7911,0,null);var y_v_7913 = cljs.core.nth.call(null,vec__7851_7911,1,null);var rot_speed_7914 = cljs.core.nth.call(null,vec__7851_7911,2,null);var px_7915 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_v_7912 * 3),0,0], null));var py_7916 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(y_v_7913 * 3),0], null));var cond3_7917 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e_7910).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond4_7918 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675));if((cond3_7917) && (cond4_7918))
{if(cljs.core.truth_((function (){var or__3408__auto__ = divergence.physics.colliding_QMARK_.call(null,py_7916,cljs.core.deref.call(null,e_7910));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return divergence.physics.colliding_QMARK_.call(null,px_7915,cljs.core.deref.call(null,e_7910));
}
})()))
{divergence.entity.enemies.effects.call(null,p,e_7910);
} else
{}
{
var G__7919 = seq__7843_7906;
var G__7920 = chunk__7846_7907;
var G__7921 = count__7847_7908;
var G__7922 = (i__7848_7909 + 1);
seq__7843_7906 = G__7919;
chunk__7846_7907 = G__7920;
count__7847_7908 = G__7921;
i__7848_7909 = G__7922;
continue;
}
} else
{{
var G__7923 = seq__7843_7906;
var G__7924 = chunk__7846_7907;
var G__7925 = count__7847_7908;
var G__7926 = (i__7848_7909 + 1);
seq__7843_7906 = G__7923;
chunk__7846_7907 = G__7924;
count__7847_7908 = G__7925;
i__7848_7909 = G__7926;
continue;
}
}
} else
{var temp__4092__auto___7927__$1 = cljs.core.seq.call(null,seq__7843_7906);if(temp__4092__auto___7927__$1)
{var seq__7843_7928__$1 = temp__4092__auto___7927__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7843_7928__$1))
{var c__4150__auto___7929 = cljs.core.chunk_first.call(null,seq__7843_7928__$1);{
var G__7930 = cljs.core.chunk_rest.call(null,seq__7843_7928__$1);
var G__7931 = c__4150__auto___7929;
var G__7932 = cljs.core.count.call(null,c__4150__auto___7929);
var G__7933 = 0;
seq__7843_7906 = G__7930;
chunk__7846_7907 = G__7931;
count__7847_7908 = G__7932;
i__7848_7909 = G__7933;
continue;
}
} else
{var e_7934 = cljs.core.first.call(null,seq__7843_7928__$1);var vec__7852_7935 = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var x_v_7936 = cljs.core.nth.call(null,vec__7852_7935,0,null);var y_v_7937 = cljs.core.nth.call(null,vec__7852_7935,1,null);var rot_speed_7938 = cljs.core.nth.call(null,vec__7852_7935,2,null);var px_7939 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_v_7936 * 3),0,0], null));var py_7940 = divergence.system.move_entity.call(null,cljs.core.deref.call(null,p),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,(y_v_7937 * 3),0], null));var cond3_7941 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e_7934).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"enemy","enemy",1110557434));var cond4_7942 = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"player","player",4323118675));if((cond3_7941) && (cond4_7942))
{if(cljs.core.truth_((function (){var or__3408__auto__ = divergence.physics.colliding_QMARK_.call(null,py_7940,cljs.core.deref.call(null,e_7934));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return divergence.physics.colliding_QMARK_.call(null,px_7939,cljs.core.deref.call(null,e_7934));
}
})()))
{divergence.entity.enemies.effects.call(null,p,e_7934);
} else
{}
{
var G__7943 = cljs.core.next.call(null,seq__7843_7928__$1);
var G__7944 = null;
var G__7945 = 0;
var G__7946 = 0;
seq__7843_7906 = G__7943;
chunk__7846_7907 = G__7944;
count__7847_7908 = G__7945;
i__7848_7909 = G__7946;
continue;
}
} else
{{
var G__7947 = cljs.core.next.call(null,seq__7843_7928__$1);
var G__7948 = null;
var G__7949 = 0;
var G__7950 = 0;
seq__7843_7906 = G__7947;
chunk__7846_7907 = G__7948;
count__7847_7908 = G__7949;
i__7848_7909 = G__7950;
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
var G__7951 = cljs.core.next.call(null,seq__7829__$1);
var G__7952 = null;
var G__7953 = 0;
var G__7954 = 0;
seq__7829 = G__7951;
chunk__7830 = G__7952;
count__7831 = G__7953;
i__7832 = G__7954;
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
{return cljs.core.first.call(null,(function (){var iter__4119__auto__ = (function iter__7961(s__7962){return (new cljs.core.LazySeq(null,(function (){var s__7962__$1 = s__7962;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7962__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var p = cljs.core.first.call(null,xs__4579__auto__);var iterys__4115__auto__ = ((function (s__7962__$1,p,xs__4579__auto__,temp__4092__auto__){
return (function iter__7963(s__7964){return (new cljs.core.LazySeq(null,((function (s__7962__$1,p,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__7964__$1 = s__7964;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7964__$1);if(temp__4092__auto____$1)
{var s__7964__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7964__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__7964__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__7966 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__7965 = 0;while(true){
if((i__7965 < size__4118__auto__))
{var e = cljs.core._nth.call(null,c__4117__auto__,i__7965);var p_type = divergence.entity.entity_atom__GT_component_val.call(null,p,new cljs.core.Keyword(null,"type","type",1017479852));var e_name = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949));var win_cond = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"win-condition","win-condition",4211796956));var cond1 = divergence.system.conditions.conditions.call(null,cljs.core.deref.call(null,divergence.system.current_level)).call(null,p);var cond2 = cljs.core._EQ_.call(null,e_name,new cljs.core.Keyword(null,"goal","goal",1017082501));var cond3 = cljs.core._EQ_.call(null,p_type,new cljs.core.Keyword(null,"player","player",4323118675));var cond4 = divergence.system.has_item_QMARK_.call(null,p,win_cond);var en = e;if(cljs.core.truth_((function (){var and__3396__auto__ = cond1;if(cljs.core.truth_(and__3396__auto__))
{return (cond2) && (cond3) && (cond4);
} else
{return and__3396__auto__;
}
})()))
{cljs.core.chunk_append.call(null,b__7966,(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,cljs.core.deref.call(null,p),cljs.core.deref.call(null,en)))?true:null));
{
var G__7967 = (i__7965 + 1);
i__7965 = G__7967;
continue;
}
} else
{{
var G__7968 = (i__7965 + 1);
i__7965 = G__7968;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7966),iter__7963.call(null,cljs.core.chunk_rest.call(null,s__7964__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7966),null);
}
} else
{var e = cljs.core.first.call(null,s__7964__$2);var p_type = divergence.entity.entity_atom__GT_component_val.call(null,p,new cljs.core.Keyword(null,"type","type",1017479852));var e_name = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949));var win_cond = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"win-condition","win-condition",4211796956));var cond1 = divergence.system.conditions.conditions.call(null,cljs.core.deref.call(null,divergence.system.current_level)).call(null,p);var cond2 = cljs.core._EQ_.call(null,e_name,new cljs.core.Keyword(null,"goal","goal",1017082501));var cond3 = cljs.core._EQ_.call(null,p_type,new cljs.core.Keyword(null,"player","player",4323118675));var cond4 = divergence.system.has_item_QMARK_.call(null,p,win_cond);var en = e;if(cljs.core.truth_((function (){var and__3396__auto__ = cond1;if(cljs.core.truth_(and__3396__auto__))
{return (cond2) && (cond3) && (cond4);
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.cons.call(null,(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,cljs.core.deref.call(null,p),cljs.core.deref.call(null,en)))?true:null),iter__7963.call(null,cljs.core.rest.call(null,s__7964__$2)));
} else
{{
var G__7969 = cljs.core.rest.call(null,s__7964__$2);
s__7964__$1 = G__7969;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__7962__$1,p,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__7962__$1,p,xs__4579__auto__,temp__4092__auto__))
;var fs__4116__auto__ = cljs.core.seq.call(null,iterys__4115__auto__.call(null,entities));if(fs__4116__auto__)
{return cljs.core.concat.call(null,fs__4116__auto__,iter__7961.call(null,cljs.core.rest.call(null,s__7962__$1)));
} else
{{
var G__7970 = cljs.core.rest.call(null,s__7962__$1);
s__7962__$1 = G__7970;
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
divergence.system.create_ref = (function create_ref(entities){var seq__7975 = cljs.core.seq.call(null,entities);var chunk__7976 = null;var count__7977 = 0;var i__7978 = 0;while(true){
if((i__7978 < count__7977))
{var e = cljs.core._nth.call(null,chunk__7976,i__7978);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.MovieClip(divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.Keyword(null,"texture","texture",3891054733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",4413191735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e))))))));
{
var G__7979 = seq__7975;
var G__7980 = chunk__7976;
var G__7981 = count__7977;
var G__7982 = (i__7978 + 1);
seq__7975 = G__7979;
chunk__7976 = G__7980;
count__7977 = G__7981;
i__7978 = G__7982;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7975);if(temp__4092__auto__)
{var seq__7975__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7975__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7975__$1);{
var G__7983 = cljs.core.chunk_rest.call(null,seq__7975__$1);
var G__7984 = c__4150__auto__;
var G__7985 = cljs.core.count.call(null,c__4150__auto__);
var G__7986 = 0;
seq__7975 = G__7983;
chunk__7976 = G__7984;
count__7977 = G__7985;
i__7978 = G__7986;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7975__$1);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.MovieClip(divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.Keyword(null,"texture","texture",3891054733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sprite","sprite",4413191735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e))))))));
{
var G__7987 = cljs.core.next.call(null,seq__7975__$1);
var G__7988 = null;
var G__7989 = 0;
var G__7990 = 0;
seq__7975 = G__7987;
chunk__7976 = G__7988;
count__7977 = G__7989;
i__7978 = G__7990;
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
divergence.system.create_tiling_ref = (function create_tiling_ref(entities){var seq__7995 = cljs.core.seq.call(null,entities);var chunk__7996 = null;var count__7997 = 0;var i__7998 = 0;while(true){
if((i__7998 < count__7997))
{var e = cljs.core._nth.call(null,chunk__7996,i__7998);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.TilingSprite(divergence.textures.textures.call(null,new cljs.core.Keyword(null,"texture","texture",3891054733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e)))),(divergence.system.level_width * 2),(divergence.system.level_height * 2))));
{
var G__7999 = seq__7995;
var G__8000 = chunk__7996;
var G__8001 = count__7997;
var G__8002 = (i__7998 + 1);
seq__7995 = G__7999;
chunk__7996 = G__8000;
count__7997 = G__8001;
i__7998 = G__8002;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7995);if(temp__4092__auto__)
{var seq__7995__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7995__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7995__$1);{
var G__8003 = cljs.core.chunk_rest.call(null,seq__7995__$1);
var G__8004 = c__4150__auto__;
var G__8005 = cljs.core.count.call(null,c__4150__auto__);
var G__8006 = 0;
seq__7995 = G__8003;
chunk__7996 = G__8004;
count__7997 = G__8005;
i__7998 = G__8006;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7995__$1);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.TilingSprite(divergence.textures.textures.call(null,new cljs.core.Keyword(null,"texture","texture",3891054733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e)))),(divergence.system.level_width * 2),(divergence.system.level_height * 2))));
{
var G__8007 = cljs.core.next.call(null,seq__7995__$1);
var G__8008 = null;
var G__8009 = 0;
var G__8010 = 0;
seq__7995 = G__8007;
chunk__7996 = G__8008;
count__7997 = G__8009;
i__7998 = G__8010;
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
divergence.system.to_stage = (function to_stage(container,entities){var seq__8017 = cljs.core.seq.call(null,entities);var chunk__8019 = null;var count__8020 = 0;var i__8021 = 0;while(true){
if((i__8021 < count__8020))
{var e = cljs.core._nth.call(null,chunk__8019,i__8021);var ref_8023 = divergence.entity.entity_atom__GT_ref.call(null,e);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"container","container",602947571),container);
container.addChild(ref_8023);
{
var G__8024 = seq__8017;
var G__8025 = chunk__8019;
var G__8026 = count__8020;
var G__8027 = (i__8021 + 1);
seq__8017 = G__8024;
chunk__8019 = G__8025;
count__8020 = G__8026;
i__8021 = G__8027;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8017);if(temp__4092__auto__)
{var seq__8017__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8017__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8017__$1);{
var G__8028 = cljs.core.chunk_rest.call(null,seq__8017__$1);
var G__8029 = c__4150__auto__;
var G__8030 = cljs.core.count.call(null,c__4150__auto__);
var G__8031 = 0;
seq__8017 = G__8028;
chunk__8019 = G__8029;
count__8020 = G__8030;
i__8021 = G__8031;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8017__$1);var ref_8032 = divergence.entity.entity_atom__GT_ref.call(null,e);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"container","container",602947571),container);
container.addChild(ref_8032);
{
var G__8033 = cljs.core.next.call(null,seq__8017__$1);
var G__8034 = null;
var G__8035 = 0;
var G__8036 = 0;
seq__8017 = G__8033;
chunk__8019 = G__8034;
count__8020 = G__8035;
i__8021 = G__8036;
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
divergence.system.create_text = (function create_text(entities){var seq__8041 = cljs.core.seq.call(null,entities);var chunk__8042 = null;var count__8043 = 0;var i__8044 = 0;while(true){
if((i__8044 < count__8043))
{var e = cljs.core._nth.call(null,chunk__8042,i__8044);var style_8045 = cljs.core.get_in.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"style","style",1123684643)], null));var text_8046 = cljs.core.get_in.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"string","string",4416885635)], null));var ref_8047 = divergence.entity.entity_atom__GT_ref.call(null,e);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.Text(text_8046,style_8045)));
{
var G__8048 = seq__8041;
var G__8049 = chunk__8042;
var G__8050 = count__8043;
var G__8051 = (i__8044 + 1);
seq__8041 = G__8048;
chunk__8042 = G__8049;
count__8043 = G__8050;
i__8044 = G__8051;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8041);if(temp__4092__auto__)
{var seq__8041__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8041__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8041__$1);{
var G__8052 = cljs.core.chunk_rest.call(null,seq__8041__$1);
var G__8053 = c__4150__auto__;
var G__8054 = cljs.core.count.call(null,c__4150__auto__);
var G__8055 = 0;
seq__8041 = G__8052;
chunk__8042 = G__8053;
count__8043 = G__8054;
i__8044 = G__8055;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8041__$1);var style_8056 = cljs.core.get_in.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"style","style",1123684643)], null));var text_8057 = cljs.core.get_in.call(null,cljs.core.deref.call(null,e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"string","string",4416885635)], null));var ref_8058 = divergence.entity.entity_atom__GT_ref.call(null,e);cljs.core.swap_BANG_.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"ref","ref",1014017029),(new PIXI.Text(text_8057,style_8056)));
{
var G__8059 = cljs.core.next.call(null,seq__8041__$1);
var G__8060 = null;
var G__8061 = 0;
var G__8062 = 0;
seq__8041 = G__8059;
chunk__8042 = G__8060;
count__8043 = G__8061;
i__8044 = G__8062;
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
divergence.system.fps_counter = (function fps_counter(entities){var seq__8069_8075 = cljs.core.seq.call(null,entities);var chunk__8071_8076 = null;var count__8072_8077 = 0;var i__8073_8078 = 0;while(true){
if((i__8073_8078 < count__8072_8077))
{var e_8079 = cljs.core._nth.call(null,chunk__8071_8076,i__8073_8078);var ref_8080 = divergence.entity.entity_atom__GT_ref.call(null,e_8079);var now_8081 = (new Date()).getTime();ref_8080.setText([cljs.core.str("FPS: "),cljs.core.str(Math.round((1000 / (now_8081 - cljs.core.deref.call(null,divergence.system.fps_time)))))].join(''));
{
var G__8082 = seq__8069_8075;
var G__8083 = chunk__8071_8076;
var G__8084 = count__8072_8077;
var G__8085 = (i__8073_8078 + 1);
seq__8069_8075 = G__8082;
chunk__8071_8076 = G__8083;
count__8072_8077 = G__8084;
i__8073_8078 = G__8085;
continue;
}
} else
{var temp__4092__auto___8086 = cljs.core.seq.call(null,seq__8069_8075);if(temp__4092__auto___8086)
{var seq__8069_8087__$1 = temp__4092__auto___8086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8069_8087__$1))
{var c__4150__auto___8088 = cljs.core.chunk_first.call(null,seq__8069_8087__$1);{
var G__8089 = cljs.core.chunk_rest.call(null,seq__8069_8087__$1);
var G__8090 = c__4150__auto___8088;
var G__8091 = cljs.core.count.call(null,c__4150__auto___8088);
var G__8092 = 0;
seq__8069_8075 = G__8089;
chunk__8071_8076 = G__8090;
count__8072_8077 = G__8091;
i__8073_8078 = G__8092;
continue;
}
} else
{var e_8093 = cljs.core.first.call(null,seq__8069_8087__$1);var ref_8094 = divergence.entity.entity_atom__GT_ref.call(null,e_8093);var now_8095 = (new Date()).getTime();ref_8094.setText([cljs.core.str("FPS: "),cljs.core.str(Math.round((1000 / (now_8095 - cljs.core.deref.call(null,divergence.system.fps_time)))))].join(''));
{
var G__8096 = cljs.core.next.call(null,seq__8069_8087__$1);
var G__8097 = null;
var G__8098 = 0;
var G__8099 = 0;
seq__8069_8075 = G__8096;
chunk__8071_8076 = G__8097;
count__8072_8077 = G__8098;
i__8073_8078 = G__8099;
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
divergence.system.animations = (function animations(entities){var seq__8106 = cljs.core.seq.call(null,entities);var chunk__8108 = null;var count__8109 = 0;var i__8110 = 0;while(true){
if((i__8110 < count__8109))
{var e = cljs.core._nth.call(null,chunk__8108,i__8110);var sprite_8112 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"ref","ref",1014017029));sprite_8112.animationSpeed = 0.15;
sprite_8112.loop = true;
sprite_8112.playing = true;
{
var G__8113 = seq__8106;
var G__8114 = chunk__8108;
var G__8115 = count__8109;
var G__8116 = (i__8110 + 1);
seq__8106 = G__8113;
chunk__8108 = G__8114;
count__8109 = G__8115;
i__8110 = G__8116;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8106);if(temp__4092__auto__)
{var seq__8106__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8106__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8106__$1);{
var G__8117 = cljs.core.chunk_rest.call(null,seq__8106__$1);
var G__8118 = c__4150__auto__;
var G__8119 = cljs.core.count.call(null,c__4150__auto__);
var G__8120 = 0;
seq__8106 = G__8117;
chunk__8108 = G__8118;
count__8109 = G__8119;
i__8110 = G__8120;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8106__$1);var sprite_8121 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"ref","ref",1014017029));sprite_8121.animationSpeed = 0.15;
sprite_8121.loop = true;
sprite_8121.playing = true;
{
var G__8122 = cljs.core.next.call(null,seq__8106__$1);
var G__8123 = null;
var G__8124 = 0;
var G__8125 = 0;
seq__8106 = G__8122;
chunk__8108 = G__8123;
count__8109 = G__8124;
i__8110 = G__8125;
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
divergence.system.player_input = (function player_input(entities){var seq__8130 = cljs.core.seq.call(null,entities);var chunk__8131 = null;var count__8132 = 0;var i__8133 = 0;while(true){
if((i__8133 < count__8132))
{var e = cljs.core._nth.call(null,chunk__8131,i__8133);cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,divergence.entity.unique_entity_atom__GT_entity_atom).call(null,e),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",4147068015)], null),cljs.core.deref.call(null,divergence.system.key_inputs));
{
var G__8134 = seq__8130;
var G__8135 = chunk__8131;
var G__8136 = count__8132;
var G__8137 = (i__8133 + 1);
seq__8130 = G__8134;
chunk__8131 = G__8135;
count__8132 = G__8136;
i__8133 = G__8137;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8130);if(temp__4092__auto__)
{var seq__8130__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8130__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8130__$1);{
var G__8138 = cljs.core.chunk_rest.call(null,seq__8130__$1);
var G__8139 = c__4150__auto__;
var G__8140 = cljs.core.count.call(null,c__4150__auto__);
var G__8141 = 0;
seq__8130 = G__8138;
chunk__8131 = G__8139;
count__8132 = G__8140;
i__8133 = G__8141;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8130__$1);cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,divergence.entity.unique_entity_atom__GT_entity_atom).call(null,e),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",4147068015)], null),cljs.core.deref.call(null,divergence.system.key_inputs));
{
var G__8142 = cljs.core.next.call(null,seq__8130__$1);
var G__8143 = null;
var G__8144 = 0;
var G__8145 = 0;
seq__8130 = G__8142;
chunk__8131 = G__8143;
count__8132 = G__8144;
i__8133 = G__8145;
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
divergence.system.execute_actions = (function execute_actions(entities){var seq__8154 = cljs.core.seq.call(null,entities);var chunk__8156 = null;var count__8157 = 0;var i__8158 = 0;while(true){
if((i__8158 < count__8157))
{var e = cljs.core._nth.call(null,chunk__8156,i__8158);var actions_8162 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8160_8163 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_8164 = cljs.core.nth.call(null,vec__8160_8163,0,null);var ay_8165 = cljs.core.nth.call(null,vec__8160_8163,1,null);var ar_8166 = cljs.core.nth.call(null,vec__8160_8163,2,null);var sprite_8167 = divergence.entity.entity_atom__GT_ref.call(null,e);if(cljs.core.truth_(actions_8162.call(null,new cljs.core.Keyword(null,"item","item",1017147013))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),1);
} else
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),0);
}
if(cljs.core.truth_(actions_8162))
{if(cljs.core.truth_(actions_8162.call(null,new cljs.core.Keyword(null,"p","p",1013904354))))
{ShowMenu();
pause();
} else
{}
if(cljs.core.truth_(actions_8162.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3,0,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0.2,0], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),0))
{sprite_8167.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationLeft));
} else
{sprite_8167.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.walkAnimationLeft));
}
} else
{}
if(cljs.core.truth_(actions_8162.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,0,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0.2,0], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),0))
{sprite_8167.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
} else
{sprite_8167.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.walkAnimationRight));
}
} else
{}
if(cljs.core.truth_(actions_8162.call(null,new cljs.core.Keyword(null,"down","down",1016993812))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,0], null));
} else
{}
if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),1);if(and__3396__auto__)
{return actions_8162.call(null,new cljs.core.Keyword(null,"up","up",1013907981));
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"jump","jump",1017178016));
sprite_8167.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
sprite_8167.playing = true;
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-6.5,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),0);
} else
{}
if(cljs.core.not_any_QMARK_.call(null,actions_8162,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"down","down",1016993812)], null)))
{if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{sprite_8167.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pf], null)));
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{}
} else
{}
{
var G__8168 = seq__8154;
var G__8169 = chunk__8156;
var G__8170 = count__8157;
var G__8171 = (i__8158 + 1);
seq__8154 = G__8168;
chunk__8156 = G__8169;
count__8157 = G__8170;
i__8158 = G__8171;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8154);if(temp__4092__auto__)
{var seq__8154__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8154__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8154__$1);{
var G__8172 = cljs.core.chunk_rest.call(null,seq__8154__$1);
var G__8173 = c__4150__auto__;
var G__8174 = cljs.core.count.call(null,c__4150__auto__);
var G__8175 = 0;
seq__8154 = G__8172;
chunk__8156 = G__8173;
count__8157 = G__8174;
i__8158 = G__8175;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8154__$1);var actions_8176 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8161_8177 = cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_8178 = cljs.core.nth.call(null,vec__8161_8177,0,null);var ay_8179 = cljs.core.nth.call(null,vec__8161_8177,1,null);var ar_8180 = cljs.core.nth.call(null,vec__8161_8177,2,null);var sprite_8181 = divergence.entity.entity_atom__GT_ref.call(null,e);if(cljs.core.truth_(actions_8176.call(null,new cljs.core.Keyword(null,"item","item",1017147013))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),1);
} else
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),0);
}
if(cljs.core.truth_(actions_8176))
{if(cljs.core.truth_(actions_8176.call(null,new cljs.core.Keyword(null,"p","p",1013904354))))
{ShowMenu();
pause();
} else
{}
if(cljs.core.truth_(actions_8176.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3,0,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0.2,0], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),0))
{sprite_8181.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationLeft));
} else
{sprite_8181.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.walkAnimationLeft));
}
} else
{}
if(cljs.core.truth_(actions_8176.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,0,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climbing","climbing",1929333887)], null),0);
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0.2,0], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),0))
{sprite_8181.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
} else
{sprite_8181.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.walkAnimationRight));
}
} else
{}
if(cljs.core.truth_(actions_8176.call(null,new cljs.core.Keyword(null,"down","down",1016993812))))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,0], null));
} else
{}
if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237)),1);if(and__3396__auto__)
{return actions_8176.call(null,new cljs.core.Keyword(null,"up","up",1013907981));
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"jump","jump",1017178016));
sprite_8181.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.jumpAnimationRight));
sprite_8181.playing = true;
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-6.5,0], null));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-jump","can-jump",841018237)], null),0);
} else
{}
if(cljs.core.not_any_QMARK_.call(null,actions_8176,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",1013907981),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"down","down",1016993812)], null)))
{if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{sprite_8181.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pf], null)));
} else
{}
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acceleration","acceleration",746604530)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{}
} else
{}
{
var G__8182 = cljs.core.next.call(null,seq__8154__$1);
var G__8183 = null;
var G__8184 = 0;
var G__8185 = 0;
seq__8154 = G__8182;
chunk__8156 = G__8183;
count__8157 = G__8184;
i__8158 = G__8185;
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
divergence.system.movement_caps = (function movement_caps(entities){var seq__8196 = cljs.core.seq.call(null,entities);var chunk__8197 = null;var count__8198 = 0;var i__8199 = 0;while(true){
if((i__8199 < count__8198))
{var e = cljs.core._nth.call(null,chunk__8197,i__8199);var actions_8206 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"actions","actions",4147068015));var map__8200_8207 = cljs.core.deref.call(null,e);var map__8200_8208__$1 = ((cljs.core.seq_QMARK_.call(null,map__8200_8207))?cljs.core.apply.call(null,cljs.core.hash_map,map__8200_8207):map__8200_8207);var vec__8201_8209 = cljs.core.get.call(null,map__8200_8208__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var vx_8210 = cljs.core.nth.call(null,vec__8201_8209,0,null);var vy_8211 = cljs.core.nth.call(null,vec__8201_8209,1,null);var vr_8212 = cljs.core.nth.call(null,vec__8201_8209,2,null);var vec__8202_8213 = cljs.core.get.call(null,map__8200_8208__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_8214 = cljs.core.nth.call(null,vec__8202_8213,0,null);var ay_8215 = cljs.core.nth.call(null,vec__8202_8213,1,null);var ar_8216 = cljs.core.nth.call(null,vec__8202_8213,2,null);if((vx_8210 > 4))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,vy_8211,vr_8212], null));
} else
{}
if((vx_8210 < -4))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-5,vy_8211,vr_8212], null));
} else
{}
if(cljs.core.truth_((function (){var and__3396__auto__ = (vy_8211 < -4);if(and__3396__auto__)
{return cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx_8210,-4,vr_8212], null));
} else
{return and__3396__auto__;
}
})()))
{} else
{}
{
var G__8217 = seq__8196;
var G__8218 = chunk__8197;
var G__8219 = count__8198;
var G__8220 = (i__8199 + 1);
seq__8196 = G__8217;
chunk__8197 = G__8218;
count__8198 = G__8219;
i__8199 = G__8220;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8196);if(temp__4092__auto__)
{var seq__8196__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8196__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8196__$1);{
var G__8221 = cljs.core.chunk_rest.call(null,seq__8196__$1);
var G__8222 = c__4150__auto__;
var G__8223 = cljs.core.count.call(null,c__4150__auto__);
var G__8224 = 0;
seq__8196 = G__8221;
chunk__8197 = G__8222;
count__8198 = G__8223;
i__8199 = G__8224;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8196__$1);var actions_8225 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"actions","actions",4147068015));var map__8203_8226 = cljs.core.deref.call(null,e);var map__8203_8227__$1 = ((cljs.core.seq_QMARK_.call(null,map__8203_8226))?cljs.core.apply.call(null,cljs.core.hash_map,map__8203_8226):map__8203_8226);var vec__8204_8228 = cljs.core.get.call(null,map__8203_8227__$1,new cljs.core.Keyword(null,"velocity","velocity",3148165199));var vx_8229 = cljs.core.nth.call(null,vec__8204_8228,0,null);var vy_8230 = cljs.core.nth.call(null,vec__8204_8228,1,null);var vr_8231 = cljs.core.nth.call(null,vec__8204_8228,2,null);var vec__8205_8232 = cljs.core.get.call(null,map__8203_8227__$1,new cljs.core.Keyword(null,"acceleration","acceleration",746604530));var ax_8233 = cljs.core.nth.call(null,vec__8205_8232,0,null);var ay_8234 = cljs.core.nth.call(null,vec__8205_8232,1,null);var ar_8235 = cljs.core.nth.call(null,vec__8205_8232,2,null);if((vx_8229 > 4))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [5,vy_8230,vr_8231], null));
} else
{}
if((vx_8229 < -4))
{cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-5,vy_8230,vr_8231], null));
} else
{}
if(cljs.core.truth_((function (){var and__3396__auto__ = (vy_8230 < -4);if(and__3396__auto__)
{return cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",3148165199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx_8229,-4,vr_8231], null));
} else
{return and__3396__auto__;
}
})()))
{} else
{}
{
var G__8236 = cljs.core.next.call(null,seq__8196__$1);
var G__8237 = null;
var G__8238 = 0;
var G__8239 = 0;
seq__8196 = G__8236;
chunk__8197 = G__8237;
count__8198 = G__8238;
i__8199 = G__8239;
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
divergence.system.move_background = (function move_background(player,entities){var seq__8266 = cljs.core.seq.call(null,player);var chunk__8268 = null;var count__8269 = 0;var i__8270 = 0;while(true){
if((i__8270 < count__8269))
{var p = cljs.core._nth.call(null,chunk__8268,i__8270);if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{return and__3396__auto__;
}
})()))
{var seq__8272_8292 = cljs.core.seq.call(null,entities);var chunk__8275_8293 = null;var count__8276_8294 = 0;var i__8277_8295 = 0;while(true){
if((i__8277_8295 < count__8276_8294))
{var e_8296 = cljs.core._nth.call(null,chunk__8275_8293,i__8277_8295);var actions_8297 = cljs.core.deref.call(null,e_8296).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8280_8298 = cljs.core.deref.call(null,e_8296).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_8299 = cljs.core.nth.call(null,vec__8280_8298,0,null);var y_8300 = cljs.core.nth.call(null,vec__8280_8298,1,null);var r_8301 = cljs.core.nth.call(null,vec__8280_8298,2,null);var e_type_8302 = divergence.entity.entity_atom__GT_component_val.call(null,e_8296,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_8302,new cljs.core.Keyword(null,"move-bg","move-bg",2257424179)))
{if(cljs.core.truth_(actions_8297.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e_8296,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_8299 + 10),y_8300,r_8301], null));
} else
{if(cljs.core.truth_(actions_8297.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e_8296,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_8299 - 10),y_8300,r_8301], null));
} else
{}
}
{
var G__8303 = seq__8272_8292;
var G__8304 = chunk__8275_8293;
var G__8305 = count__8276_8294;
var G__8306 = (i__8277_8295 + 1);
seq__8272_8292 = G__8303;
chunk__8275_8293 = G__8304;
count__8276_8294 = G__8305;
i__8277_8295 = G__8306;
continue;
}
} else
{{
var G__8307 = seq__8272_8292;
var G__8308 = chunk__8275_8293;
var G__8309 = count__8276_8294;
var G__8310 = (i__8277_8295 + 1);
seq__8272_8292 = G__8307;
chunk__8275_8293 = G__8308;
count__8276_8294 = G__8309;
i__8277_8295 = G__8310;
continue;
}
}
} else
{var temp__4092__auto___8311 = cljs.core.seq.call(null,seq__8272_8292);if(temp__4092__auto___8311)
{var seq__8272_8312__$1 = temp__4092__auto___8311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8272_8312__$1))
{var c__4150__auto___8313 = cljs.core.chunk_first.call(null,seq__8272_8312__$1);{
var G__8314 = cljs.core.chunk_rest.call(null,seq__8272_8312__$1);
var G__8315 = c__4150__auto___8313;
var G__8316 = cljs.core.count.call(null,c__4150__auto___8313);
var G__8317 = 0;
seq__8272_8292 = G__8314;
chunk__8275_8293 = G__8315;
count__8276_8294 = G__8316;
i__8277_8295 = G__8317;
continue;
}
} else
{var e_8318 = cljs.core.first.call(null,seq__8272_8312__$1);var actions_8319 = cljs.core.deref.call(null,e_8318).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8281_8320 = cljs.core.deref.call(null,e_8318).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_8321 = cljs.core.nth.call(null,vec__8281_8320,0,null);var y_8322 = cljs.core.nth.call(null,vec__8281_8320,1,null);var r_8323 = cljs.core.nth.call(null,vec__8281_8320,2,null);var e_type_8324 = divergence.entity.entity_atom__GT_component_val.call(null,e_8318,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_8324,new cljs.core.Keyword(null,"move-bg","move-bg",2257424179)))
{if(cljs.core.truth_(actions_8319.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e_8318,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_8321 + 10),y_8322,r_8323], null));
} else
{if(cljs.core.truth_(actions_8319.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e_8318,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_8321 - 10),y_8322,r_8323], null));
} else
{}
}
{
var G__8325 = cljs.core.next.call(null,seq__8272_8312__$1);
var G__8326 = null;
var G__8327 = 0;
var G__8328 = 0;
seq__8272_8292 = G__8325;
chunk__8275_8293 = G__8326;
count__8276_8294 = G__8327;
i__8277_8295 = G__8328;
continue;
}
} else
{{
var G__8329 = cljs.core.next.call(null,seq__8272_8312__$1);
var G__8330 = null;
var G__8331 = 0;
var G__8332 = 0;
seq__8272_8292 = G__8329;
chunk__8275_8293 = G__8330;
count__8276_8294 = G__8331;
i__8277_8295 = G__8332;
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
var G__8333 = seq__8266;
var G__8334 = chunk__8268;
var G__8335 = count__8269;
var G__8336 = (i__8270 + 1);
seq__8266 = G__8333;
chunk__8268 = G__8334;
count__8269 = G__8335;
i__8270 = G__8336;
continue;
}
} else
{{
var G__8337 = seq__8266;
var G__8338 = chunk__8268;
var G__8339 = count__8269;
var G__8340 = (i__8270 + 1);
seq__8266 = G__8337;
chunk__8268 = G__8338;
count__8269 = G__8339;
i__8270 = G__8340;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8266);if(temp__4092__auto__)
{var seq__8266__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8266__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8266__$1);{
var G__8341 = cljs.core.chunk_rest.call(null,seq__8266__$1);
var G__8342 = c__4150__auto__;
var G__8343 = cljs.core.count.call(null,c__4150__auto__);
var G__8344 = 0;
seq__8266 = G__8341;
chunk__8268 = G__8342;
count__8269 = G__8343;
i__8270 = G__8344;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__8266__$1);if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199));if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,p).call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
} else
{return and__3396__auto__;
}
})()))
{var seq__8282_8345 = cljs.core.seq.call(null,entities);var chunk__8285_8346 = null;var count__8286_8347 = 0;var i__8287_8348 = 0;while(true){
if((i__8287_8348 < count__8286_8347))
{var e_8349 = cljs.core._nth.call(null,chunk__8285_8346,i__8287_8348);var actions_8350 = cljs.core.deref.call(null,e_8349).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8290_8351 = cljs.core.deref.call(null,e_8349).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_8352 = cljs.core.nth.call(null,vec__8290_8351,0,null);var y_8353 = cljs.core.nth.call(null,vec__8290_8351,1,null);var r_8354 = cljs.core.nth.call(null,vec__8290_8351,2,null);var e_type_8355 = divergence.entity.entity_atom__GT_component_val.call(null,e_8349,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_8355,new cljs.core.Keyword(null,"move-bg","move-bg",2257424179)))
{if(cljs.core.truth_(actions_8350.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e_8349,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_8352 + 10),y_8353,r_8354], null));
} else
{if(cljs.core.truth_(actions_8350.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e_8349,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_8352 - 10),y_8353,r_8354], null));
} else
{}
}
{
var G__8356 = seq__8282_8345;
var G__8357 = chunk__8285_8346;
var G__8358 = count__8286_8347;
var G__8359 = (i__8287_8348 + 1);
seq__8282_8345 = G__8356;
chunk__8285_8346 = G__8357;
count__8286_8347 = G__8358;
i__8287_8348 = G__8359;
continue;
}
} else
{{
var G__8360 = seq__8282_8345;
var G__8361 = chunk__8285_8346;
var G__8362 = count__8286_8347;
var G__8363 = (i__8287_8348 + 1);
seq__8282_8345 = G__8360;
chunk__8285_8346 = G__8361;
count__8286_8347 = G__8362;
i__8287_8348 = G__8363;
continue;
}
}
} else
{var temp__4092__auto___8364__$1 = cljs.core.seq.call(null,seq__8282_8345);if(temp__4092__auto___8364__$1)
{var seq__8282_8365__$1 = temp__4092__auto___8364__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8282_8365__$1))
{var c__4150__auto___8366 = cljs.core.chunk_first.call(null,seq__8282_8365__$1);{
var G__8367 = cljs.core.chunk_rest.call(null,seq__8282_8365__$1);
var G__8368 = c__4150__auto___8366;
var G__8369 = cljs.core.count.call(null,c__4150__auto___8366);
var G__8370 = 0;
seq__8282_8345 = G__8367;
chunk__8285_8346 = G__8368;
count__8286_8347 = G__8369;
i__8287_8348 = G__8370;
continue;
}
} else
{var e_8371 = cljs.core.first.call(null,seq__8282_8365__$1);var actions_8372 = cljs.core.deref.call(null,e_8371).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8291_8373 = cljs.core.deref.call(null,e_8371).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_8374 = cljs.core.nth.call(null,vec__8291_8373,0,null);var y_8375 = cljs.core.nth.call(null,vec__8291_8373,1,null);var r_8376 = cljs.core.nth.call(null,vec__8291_8373,2,null);var e_type_8377 = divergence.entity.entity_atom__GT_component_val.call(null,e_8371,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_8377,new cljs.core.Keyword(null,"move-bg","move-bg",2257424179)))
{if(cljs.core.truth_(actions_8372.call(null,new cljs.core.Keyword(null,"left","left",1017222009))))
{cljs.core.swap_BANG_.call(null,e_8371,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_8374 + 10),y_8375,r_8376], null));
} else
{if(cljs.core.truth_(actions_8372.call(null,new cljs.core.Keyword(null,"right","right",1122416014))))
{cljs.core.swap_BANG_.call(null,e_8371,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_8374 - 10),y_8375,r_8376], null));
} else
{}
}
{
var G__8378 = cljs.core.next.call(null,seq__8282_8365__$1);
var G__8379 = null;
var G__8380 = 0;
var G__8381 = 0;
seq__8282_8345 = G__8378;
chunk__8285_8346 = G__8379;
count__8286_8347 = G__8380;
i__8287_8348 = G__8381;
continue;
}
} else
{{
var G__8382 = cljs.core.next.call(null,seq__8282_8365__$1);
var G__8383 = null;
var G__8384 = 0;
var G__8385 = 0;
seq__8282_8345 = G__8382;
chunk__8285_8346 = G__8383;
count__8286_8347 = G__8384;
i__8287_8348 = G__8385;
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
var G__8386 = cljs.core.next.call(null,seq__8266__$1);
var G__8387 = null;
var G__8388 = 0;
var G__8389 = 0;
seq__8266 = G__8386;
chunk__8268 = G__8387;
count__8269 = G__8388;
i__8270 = G__8389;
continue;
}
} else
{{
var G__8390 = cljs.core.next.call(null,seq__8266__$1);
var G__8391 = null;
var G__8392 = 0;
var G__8393 = 0;
seq__8266 = G__8390;
chunk__8268 = G__8391;
count__8269 = G__8392;
i__8270 = G__8393;
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
divergence.system.pick_drop_item = (function pick_drop_item(entities){var seq__8414 = cljs.core.seq.call(null,entities);var chunk__8416 = null;var count__8417 = 0;var i__8418 = 0;while(true){
if((i__8418 < count__8417))
{var e = cljs.core._nth.call(null,chunk__8416,i__8418);var e_type_8434 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_8434,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_8435 = e;var actions_8436 = cljs.core.deref.call(null,p_8435).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8420_8437 = cljs.core.deref.call(null,p_8435).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_8438 = cljs.core.nth.call(null,vec__8420_8437,0,null);var y_8439 = cljs.core.nth.call(null,vec__8420_8437,1,null);var r_8440 = cljs.core.nth.call(null,vec__8420_8437,2,null);var seq__8421_8441 = cljs.core.seq.call(null,entities);var chunk__8423_8442 = null;var count__8424_8443 = 0;var i__8425_8444 = 0;while(true){
if((i__8425_8444 < count__8424_8443))
{var en_8445 = cljs.core._nth.call(null,chunk__8423_8442,i__8425_8444);var item_8446 = cljs.core.deref.call(null,en_8445);var item_name_8447 = divergence.entity.entity_atom__GT_component_val.call(null,en_8445,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8446.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"item","item",1017147013)))
{if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p_8435).call(null,new cljs.core.Keyword(null,"items","items",1114430258)),1);if(and__3396__auto__)
{return divergence.physics.colliding_QMARK_.call(null,item_8446,cljs.core.deref.call(null,p_8435));
} else
{return and__3396__auto__;
}
})()))
{divergence.entity.entity_atom__GT_ref.call(null,en_8445).visible = false;
cljs.core.swap_BANG_.call(null,p_8435,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),item_name_8447);
var pheight_8448 = divergence.entity.entity_atom__GT_ref.call(null,p_8435).height;var iheight_8449 = divergence.entity.entity_atom__GT_ref.call(null,en_8445).height;cljs.core.swap_BANG_.call(null,en_8445,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_8438,(y_8439 + (pheight_8448 - iheight_8449)),r_8440], null));
cljs.core.println.call(null,divergence.entity.entity_atom__GT_component_val.call(null,p_8435,new cljs.core.Keyword(null,"holding","holding",2105666101)));
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"pickup","pickup",4320394734));
} else
{}
} else
{}
{
var G__8450 = seq__8421_8441;
var G__8451 = chunk__8423_8442;
var G__8452 = count__8424_8443;
var G__8453 = (i__8425_8444 + 1);
seq__8421_8441 = G__8450;
chunk__8423_8442 = G__8451;
count__8424_8443 = G__8452;
i__8425_8444 = G__8453;
continue;
}
} else
{var temp__4092__auto___8454 = cljs.core.seq.call(null,seq__8421_8441);if(temp__4092__auto___8454)
{var seq__8421_8455__$1 = temp__4092__auto___8454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8421_8455__$1))
{var c__4150__auto___8456 = cljs.core.chunk_first.call(null,seq__8421_8455__$1);{
var G__8457 = cljs.core.chunk_rest.call(null,seq__8421_8455__$1);
var G__8458 = c__4150__auto___8456;
var G__8459 = cljs.core.count.call(null,c__4150__auto___8456);
var G__8460 = 0;
seq__8421_8441 = G__8457;
chunk__8423_8442 = G__8458;
count__8424_8443 = G__8459;
i__8425_8444 = G__8460;
continue;
}
} else
{var en_8461 = cljs.core.first.call(null,seq__8421_8455__$1);var item_8462 = cljs.core.deref.call(null,en_8461);var item_name_8463 = divergence.entity.entity_atom__GT_component_val.call(null,en_8461,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8462.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"item","item",1017147013)))
{if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p_8435).call(null,new cljs.core.Keyword(null,"items","items",1114430258)),1);if(and__3396__auto__)
{return divergence.physics.colliding_QMARK_.call(null,item_8462,cljs.core.deref.call(null,p_8435));
} else
{return and__3396__auto__;
}
})()))
{divergence.entity.entity_atom__GT_ref.call(null,en_8461).visible = false;
cljs.core.swap_BANG_.call(null,p_8435,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),item_name_8463);
var pheight_8464 = divergence.entity.entity_atom__GT_ref.call(null,p_8435).height;var iheight_8465 = divergence.entity.entity_atom__GT_ref.call(null,en_8461).height;cljs.core.swap_BANG_.call(null,en_8461,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_8438,(y_8439 + (pheight_8464 - iheight_8465)),r_8440], null));
cljs.core.println.call(null,divergence.entity.entity_atom__GT_component_val.call(null,p_8435,new cljs.core.Keyword(null,"holding","holding",2105666101)));
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"pickup","pickup",4320394734));
} else
{}
} else
{}
{
var G__8466 = cljs.core.next.call(null,seq__8421_8455__$1);
var G__8467 = null;
var G__8468 = 0;
var G__8469 = 0;
seq__8421_8441 = G__8466;
chunk__8423_8442 = G__8467;
count__8424_8443 = G__8468;
i__8425_8444 = G__8469;
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
var G__8470 = seq__8414;
var G__8471 = chunk__8416;
var G__8472 = count__8417;
var G__8473 = (i__8418 + 1);
seq__8414 = G__8470;
chunk__8416 = G__8471;
count__8417 = G__8472;
i__8418 = G__8473;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8414);if(temp__4092__auto__)
{var seq__8414__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8414__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8414__$1);{
var G__8474 = cljs.core.chunk_rest.call(null,seq__8414__$1);
var G__8475 = c__4150__auto__;
var G__8476 = cljs.core.count.call(null,c__4150__auto__);
var G__8477 = 0;
seq__8414 = G__8474;
chunk__8416 = G__8475;
count__8417 = G__8476;
i__8418 = G__8477;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8414__$1);var e_type_8478 = divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_8478,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_8479 = e;var actions_8480 = cljs.core.deref.call(null,p_8479).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8427_8481 = cljs.core.deref.call(null,p_8479).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_8482 = cljs.core.nth.call(null,vec__8427_8481,0,null);var y_8483 = cljs.core.nth.call(null,vec__8427_8481,1,null);var r_8484 = cljs.core.nth.call(null,vec__8427_8481,2,null);var seq__8428_8485 = cljs.core.seq.call(null,entities);var chunk__8430_8486 = null;var count__8431_8487 = 0;var i__8432_8488 = 0;while(true){
if((i__8432_8488 < count__8431_8487))
{var en_8489 = cljs.core._nth.call(null,chunk__8430_8486,i__8432_8488);var item_8490 = cljs.core.deref.call(null,en_8489);var item_name_8491 = divergence.entity.entity_atom__GT_component_val.call(null,en_8489,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8490.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"item","item",1017147013)))
{if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p_8479).call(null,new cljs.core.Keyword(null,"items","items",1114430258)),1);if(and__3396__auto__)
{return divergence.physics.colliding_QMARK_.call(null,item_8490,cljs.core.deref.call(null,p_8479));
} else
{return and__3396__auto__;
}
})()))
{divergence.entity.entity_atom__GT_ref.call(null,en_8489).visible = false;
cljs.core.swap_BANG_.call(null,p_8479,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),item_name_8491);
var pheight_8492 = divergence.entity.entity_atom__GT_ref.call(null,p_8479).height;var iheight_8493 = divergence.entity.entity_atom__GT_ref.call(null,en_8489).height;cljs.core.swap_BANG_.call(null,en_8489,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_8482,(y_8483 + (pheight_8492 - iheight_8493)),r_8484], null));
cljs.core.println.call(null,divergence.entity.entity_atom__GT_component_val.call(null,p_8479,new cljs.core.Keyword(null,"holding","holding",2105666101)));
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"pickup","pickup",4320394734));
} else
{}
} else
{}
{
var G__8494 = seq__8428_8485;
var G__8495 = chunk__8430_8486;
var G__8496 = count__8431_8487;
var G__8497 = (i__8432_8488 + 1);
seq__8428_8485 = G__8494;
chunk__8430_8486 = G__8495;
count__8431_8487 = G__8496;
i__8432_8488 = G__8497;
continue;
}
} else
{var temp__4092__auto___8498__$1 = cljs.core.seq.call(null,seq__8428_8485);if(temp__4092__auto___8498__$1)
{var seq__8428_8499__$1 = temp__4092__auto___8498__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8428_8499__$1))
{var c__4150__auto___8500 = cljs.core.chunk_first.call(null,seq__8428_8499__$1);{
var G__8501 = cljs.core.chunk_rest.call(null,seq__8428_8499__$1);
var G__8502 = c__4150__auto___8500;
var G__8503 = cljs.core.count.call(null,c__4150__auto___8500);
var G__8504 = 0;
seq__8428_8485 = G__8501;
chunk__8430_8486 = G__8502;
count__8431_8487 = G__8503;
i__8432_8488 = G__8504;
continue;
}
} else
{var en_8505 = cljs.core.first.call(null,seq__8428_8499__$1);var item_8506 = cljs.core.deref.call(null,en_8505);var item_name_8507 = divergence.entity.entity_atom__GT_component_val.call(null,en_8505,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8506.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"item","item",1017147013)))
{if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,p_8479).call(null,new cljs.core.Keyword(null,"items","items",1114430258)),1);if(and__3396__auto__)
{return divergence.physics.colliding_QMARK_.call(null,item_8506,cljs.core.deref.call(null,p_8479));
} else
{return and__3396__auto__;
}
})()))
{divergence.entity.entity_atom__GT_ref.call(null,en_8505).visible = false;
cljs.core.swap_BANG_.call(null,p_8479,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"holding","holding",2105666101)], null),item_name_8507);
var pheight_8508 = divergence.entity.entity_atom__GT_ref.call(null,p_8479).height;var iheight_8509 = divergence.entity.entity_atom__GT_ref.call(null,en_8505).height;cljs.core.swap_BANG_.call(null,en_8505,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_8482,(y_8483 + (pheight_8508 - iheight_8509)),r_8484], null));
cljs.core.println.call(null,divergence.entity.entity_atom__GT_component_val.call(null,p_8479,new cljs.core.Keyword(null,"holding","holding",2105666101)));
divergence.audio.play_sound.call(null,new cljs.core.Keyword(null,"pickup","pickup",4320394734));
} else
{}
} else
{}
{
var G__8510 = cljs.core.next.call(null,seq__8428_8499__$1);
var G__8511 = null;
var G__8512 = 0;
var G__8513 = 0;
seq__8428_8485 = G__8510;
chunk__8430_8486 = G__8511;
count__8431_8487 = G__8512;
i__8432_8488 = G__8513;
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
var G__8514 = cljs.core.next.call(null,seq__8414__$1);
var G__8515 = null;
var G__8516 = 0;
var G__8517 = 0;
seq__8414 = G__8514;
chunk__8416 = G__8515;
count__8417 = G__8516;
i__8418 = G__8517;
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
divergence.system.hit_button = (function hit_button(player,entities){var seq__8570 = cljs.core.seq.call(null,player);var chunk__8573 = null;var count__8574 = 0;var i__8575 = 0;while(true){
if((i__8575 < count__8574))
{var pl = cljs.core._nth.call(null,chunk__8573,i__8575);var p_type = divergence.entity.entity_atom__GT_component_val.call(null,pl,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,p_type,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_8622 = pl;var actions_8623 = cljs.core.deref.call(null,p_8622).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var seq__8578_8624 = cljs.core.seq.call(null,entities);var chunk__8580_8625 = null;var count__8581_8626 = 0;var i__8582_8627 = 0;while(true){
if((i__8582_8627 < count__8581_8626))
{var en_8628 = cljs.core._nth.call(null,chunk__8580_8625,i__8582_8627);var item_8629 = cljs.core.deref.call(null,en_8628);var item_name_8630 = divergence.entity.entity_atom__GT_component_val.call(null,en_8628,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8629.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button","button",3931183780)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_8629,cljs.core.deref.call(null,p_8622))))
{cljs.core.swap_BANG_.call(null,en_8628,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-pushed","button-pushed",911964070)], null),true);
cljs.core.swap_BANG_.call(null,p_8622,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cleared","cleared",1870681886)], null),true);
var seq__8584_8631 = cljs.core.seq.call(null,entities);var chunk__8587_8632 = null;var count__8588_8633 = 0;var i__8589_8634 = 0;while(true){
if((i__8589_8634 < count__8588_8633))
{var x_8635 = cljs.core._nth.call(null,chunk__8587_8632,i__8589_8634);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_8635,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_8636 = divergence.entity.entity_atom__GT_ref.call(null,x_8635);sprite_8636.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__8637 = seq__8584_8631;
var G__8638 = chunk__8587_8632;
var G__8639 = count__8588_8633;
var G__8640 = (i__8589_8634 + 1);
seq__8584_8631 = G__8637;
chunk__8587_8632 = G__8638;
count__8588_8633 = G__8639;
i__8589_8634 = G__8640;
continue;
}
} else
{{
var G__8641 = seq__8584_8631;
var G__8642 = chunk__8587_8632;
var G__8643 = count__8588_8633;
var G__8644 = (i__8589_8634 + 1);
seq__8584_8631 = G__8641;
chunk__8587_8632 = G__8642;
count__8588_8633 = G__8643;
i__8589_8634 = G__8644;
continue;
}
}
} else
{var temp__4092__auto___8645 = cljs.core.seq.call(null,seq__8584_8631);if(temp__4092__auto___8645)
{var seq__8584_8646__$1 = temp__4092__auto___8645;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8584_8646__$1))
{var c__4150__auto___8647 = cljs.core.chunk_first.call(null,seq__8584_8646__$1);{
var G__8648 = cljs.core.chunk_rest.call(null,seq__8584_8646__$1);
var G__8649 = c__4150__auto___8647;
var G__8650 = cljs.core.count.call(null,c__4150__auto___8647);
var G__8651 = 0;
seq__8584_8631 = G__8648;
chunk__8587_8632 = G__8649;
count__8588_8633 = G__8650;
i__8589_8634 = G__8651;
continue;
}
} else
{var x_8652 = cljs.core.first.call(null,seq__8584_8646__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_8652,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_8653 = divergence.entity.entity_atom__GT_ref.call(null,x_8652);sprite_8653.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__8654 = cljs.core.next.call(null,seq__8584_8646__$1);
var G__8655 = null;
var G__8656 = 0;
var G__8657 = 0;
seq__8584_8631 = G__8654;
chunk__8587_8632 = G__8655;
count__8588_8633 = G__8656;
i__8589_8634 = G__8657;
continue;
}
} else
{{
var G__8658 = cljs.core.next.call(null,seq__8584_8646__$1);
var G__8659 = null;
var G__8660 = 0;
var G__8661 = 0;
seq__8584_8631 = G__8658;
chunk__8587_8632 = G__8659;
count__8588_8633 = G__8660;
i__8589_8634 = G__8661;
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
var G__8662 = seq__8578_8624;
var G__8663 = chunk__8580_8625;
var G__8664 = count__8581_8626;
var G__8665 = (i__8582_8627 + 1);
seq__8578_8624 = G__8662;
chunk__8580_8625 = G__8663;
count__8581_8626 = G__8664;
i__8582_8627 = G__8665;
continue;
}
} else
{var temp__4092__auto___8666 = cljs.core.seq.call(null,seq__8578_8624);if(temp__4092__auto___8666)
{var seq__8578_8667__$1 = temp__4092__auto___8666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8578_8667__$1))
{var c__4150__auto___8668 = cljs.core.chunk_first.call(null,seq__8578_8667__$1);{
var G__8669 = cljs.core.chunk_rest.call(null,seq__8578_8667__$1);
var G__8670 = c__4150__auto___8668;
var G__8671 = cljs.core.count.call(null,c__4150__auto___8668);
var G__8672 = 0;
seq__8578_8624 = G__8669;
chunk__8580_8625 = G__8670;
count__8581_8626 = G__8671;
i__8582_8627 = G__8672;
continue;
}
} else
{var en_8673 = cljs.core.first.call(null,seq__8578_8667__$1);var item_8674 = cljs.core.deref.call(null,en_8673);var item_name_8675 = divergence.entity.entity_atom__GT_component_val.call(null,en_8673,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8674.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button","button",3931183780)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_8674,cljs.core.deref.call(null,p_8622))))
{cljs.core.swap_BANG_.call(null,en_8673,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-pushed","button-pushed",911964070)], null),true);
cljs.core.swap_BANG_.call(null,p_8622,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cleared","cleared",1870681886)], null),true);
var seq__8592_8676 = cljs.core.seq.call(null,entities);var chunk__8595_8677 = null;var count__8596_8678 = 0;var i__8597_8679 = 0;while(true){
if((i__8597_8679 < count__8596_8678))
{var x_8680 = cljs.core._nth.call(null,chunk__8595_8677,i__8597_8679);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_8680,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_8681 = divergence.entity.entity_atom__GT_ref.call(null,x_8680);sprite_8681.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__8682 = seq__8592_8676;
var G__8683 = chunk__8595_8677;
var G__8684 = count__8596_8678;
var G__8685 = (i__8597_8679 + 1);
seq__8592_8676 = G__8682;
chunk__8595_8677 = G__8683;
count__8596_8678 = G__8684;
i__8597_8679 = G__8685;
continue;
}
} else
{{
var G__8686 = seq__8592_8676;
var G__8687 = chunk__8595_8677;
var G__8688 = count__8596_8678;
var G__8689 = (i__8597_8679 + 1);
seq__8592_8676 = G__8686;
chunk__8595_8677 = G__8687;
count__8596_8678 = G__8688;
i__8597_8679 = G__8689;
continue;
}
}
} else
{var temp__4092__auto___8690__$1 = cljs.core.seq.call(null,seq__8592_8676);if(temp__4092__auto___8690__$1)
{var seq__8592_8691__$1 = temp__4092__auto___8690__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8592_8691__$1))
{var c__4150__auto___8692 = cljs.core.chunk_first.call(null,seq__8592_8691__$1);{
var G__8693 = cljs.core.chunk_rest.call(null,seq__8592_8691__$1);
var G__8694 = c__4150__auto___8692;
var G__8695 = cljs.core.count.call(null,c__4150__auto___8692);
var G__8696 = 0;
seq__8592_8676 = G__8693;
chunk__8595_8677 = G__8694;
count__8596_8678 = G__8695;
i__8597_8679 = G__8696;
continue;
}
} else
{var x_8697 = cljs.core.first.call(null,seq__8592_8691__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_8697,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_8698 = divergence.entity.entity_atom__GT_ref.call(null,x_8697);sprite_8698.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__8699 = cljs.core.next.call(null,seq__8592_8691__$1);
var G__8700 = null;
var G__8701 = 0;
var G__8702 = 0;
seq__8592_8676 = G__8699;
chunk__8595_8677 = G__8700;
count__8596_8678 = G__8701;
i__8597_8679 = G__8702;
continue;
}
} else
{{
var G__8703 = cljs.core.next.call(null,seq__8592_8691__$1);
var G__8704 = null;
var G__8705 = 0;
var G__8706 = 0;
seq__8592_8676 = G__8703;
chunk__8595_8677 = G__8704;
count__8596_8678 = G__8705;
i__8597_8679 = G__8706;
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
var G__8707 = cljs.core.next.call(null,seq__8578_8667__$1);
var G__8708 = null;
var G__8709 = 0;
var G__8710 = 0;
seq__8578_8624 = G__8707;
chunk__8580_8625 = G__8708;
count__8581_8626 = G__8709;
i__8582_8627 = G__8710;
continue;
}
}
} else
{}
}
break;
}
{
var G__8711 = seq__8570;
var G__8712 = chunk__8573;
var G__8713 = count__8574;
var G__8714 = (i__8575 + 1);
seq__8570 = G__8711;
chunk__8573 = G__8712;
count__8574 = G__8713;
i__8575 = G__8714;
continue;
}
} else
{{
var G__8715 = seq__8570;
var G__8716 = chunk__8573;
var G__8717 = count__8574;
var G__8718 = (i__8575 + 1);
seq__8570 = G__8715;
chunk__8573 = G__8716;
count__8574 = G__8717;
i__8575 = G__8718;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8570);if(temp__4092__auto__)
{var seq__8570__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8570__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8570__$1);{
var G__8719 = cljs.core.chunk_rest.call(null,seq__8570__$1);
var G__8720 = c__4150__auto__;
var G__8721 = cljs.core.count.call(null,c__4150__auto__);
var G__8722 = 0;
seq__8570 = G__8719;
chunk__8573 = G__8720;
count__8574 = G__8721;
i__8575 = G__8722;
continue;
}
} else
{var pl = cljs.core.first.call(null,seq__8570__$1);var p_type = divergence.entity.entity_atom__GT_component_val.call(null,pl,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,p_type,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_8723 = pl;var actions_8724 = cljs.core.deref.call(null,p_8723).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var seq__8600_8725 = cljs.core.seq.call(null,entities);var chunk__8602_8726 = null;var count__8603_8727 = 0;var i__8604_8728 = 0;while(true){
if((i__8604_8728 < count__8603_8727))
{var en_8729 = cljs.core._nth.call(null,chunk__8602_8726,i__8604_8728);var item_8730 = cljs.core.deref.call(null,en_8729);var item_name_8731 = divergence.entity.entity_atom__GT_component_val.call(null,en_8729,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8730.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button","button",3931183780)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_8730,cljs.core.deref.call(null,p_8723))))
{cljs.core.swap_BANG_.call(null,en_8729,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-pushed","button-pushed",911964070)], null),true);
cljs.core.swap_BANG_.call(null,p_8723,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cleared","cleared",1870681886)], null),true);
var seq__8606_8732 = cljs.core.seq.call(null,entities);var chunk__8609_8733 = null;var count__8610_8734 = 0;var i__8611_8735 = 0;while(true){
if((i__8611_8735 < count__8610_8734))
{var x_8736 = cljs.core._nth.call(null,chunk__8609_8733,i__8611_8735);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_8736,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_8737 = divergence.entity.entity_atom__GT_ref.call(null,x_8736);sprite_8737.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__8738 = seq__8606_8732;
var G__8739 = chunk__8609_8733;
var G__8740 = count__8610_8734;
var G__8741 = (i__8611_8735 + 1);
seq__8606_8732 = G__8738;
chunk__8609_8733 = G__8739;
count__8610_8734 = G__8740;
i__8611_8735 = G__8741;
continue;
}
} else
{{
var G__8742 = seq__8606_8732;
var G__8743 = chunk__8609_8733;
var G__8744 = count__8610_8734;
var G__8745 = (i__8611_8735 + 1);
seq__8606_8732 = G__8742;
chunk__8609_8733 = G__8743;
count__8610_8734 = G__8744;
i__8611_8735 = G__8745;
continue;
}
}
} else
{var temp__4092__auto___8746__$1 = cljs.core.seq.call(null,seq__8606_8732);if(temp__4092__auto___8746__$1)
{var seq__8606_8747__$1 = temp__4092__auto___8746__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8606_8747__$1))
{var c__4150__auto___8748 = cljs.core.chunk_first.call(null,seq__8606_8747__$1);{
var G__8749 = cljs.core.chunk_rest.call(null,seq__8606_8747__$1);
var G__8750 = c__4150__auto___8748;
var G__8751 = cljs.core.count.call(null,c__4150__auto___8748);
var G__8752 = 0;
seq__8606_8732 = G__8749;
chunk__8609_8733 = G__8750;
count__8610_8734 = G__8751;
i__8611_8735 = G__8752;
continue;
}
} else
{var x_8753 = cljs.core.first.call(null,seq__8606_8747__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_8753,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_8754 = divergence.entity.entity_atom__GT_ref.call(null,x_8753);sprite_8754.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__8755 = cljs.core.next.call(null,seq__8606_8747__$1);
var G__8756 = null;
var G__8757 = 0;
var G__8758 = 0;
seq__8606_8732 = G__8755;
chunk__8609_8733 = G__8756;
count__8610_8734 = G__8757;
i__8611_8735 = G__8758;
continue;
}
} else
{{
var G__8759 = cljs.core.next.call(null,seq__8606_8747__$1);
var G__8760 = null;
var G__8761 = 0;
var G__8762 = 0;
seq__8606_8732 = G__8759;
chunk__8609_8733 = G__8760;
count__8610_8734 = G__8761;
i__8611_8735 = G__8762;
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
var G__8763 = seq__8600_8725;
var G__8764 = chunk__8602_8726;
var G__8765 = count__8603_8727;
var G__8766 = (i__8604_8728 + 1);
seq__8600_8725 = G__8763;
chunk__8602_8726 = G__8764;
count__8603_8727 = G__8765;
i__8604_8728 = G__8766;
continue;
}
} else
{var temp__4092__auto___8767__$1 = cljs.core.seq.call(null,seq__8600_8725);if(temp__4092__auto___8767__$1)
{var seq__8600_8768__$1 = temp__4092__auto___8767__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8600_8768__$1))
{var c__4150__auto___8769 = cljs.core.chunk_first.call(null,seq__8600_8768__$1);{
var G__8770 = cljs.core.chunk_rest.call(null,seq__8600_8768__$1);
var G__8771 = c__4150__auto___8769;
var G__8772 = cljs.core.count.call(null,c__4150__auto___8769);
var G__8773 = 0;
seq__8600_8725 = G__8770;
chunk__8602_8726 = G__8771;
count__8603_8727 = G__8772;
i__8604_8728 = G__8773;
continue;
}
} else
{var en_8774 = cljs.core.first.call(null,seq__8600_8768__$1);var item_8775 = cljs.core.deref.call(null,en_8774);var item_name_8776 = divergence.entity.entity_atom__GT_component_val.call(null,en_8774,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8775.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button","button",3931183780)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_8775,cljs.core.deref.call(null,p_8723))))
{cljs.core.swap_BANG_.call(null,en_8774,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-pushed","button-pushed",911964070)], null),true);
cljs.core.swap_BANG_.call(null,p_8723,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cleared","cleared",1870681886)], null),true);
var seq__8614_8777 = cljs.core.seq.call(null,entities);var chunk__8617_8778 = null;var count__8618_8779 = 0;var i__8619_8780 = 0;while(true){
if((i__8619_8780 < count__8618_8779))
{var x_8781 = cljs.core._nth.call(null,chunk__8617_8778,i__8619_8780);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_8781,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_8782 = divergence.entity.entity_atom__GT_ref.call(null,x_8781);sprite_8782.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__8783 = seq__8614_8777;
var G__8784 = chunk__8617_8778;
var G__8785 = count__8618_8779;
var G__8786 = (i__8619_8780 + 1);
seq__8614_8777 = G__8783;
chunk__8617_8778 = G__8784;
count__8618_8779 = G__8785;
i__8619_8780 = G__8786;
continue;
}
} else
{{
var G__8787 = seq__8614_8777;
var G__8788 = chunk__8617_8778;
var G__8789 = count__8618_8779;
var G__8790 = (i__8619_8780 + 1);
seq__8614_8777 = G__8787;
chunk__8617_8778 = G__8788;
count__8618_8779 = G__8789;
i__8619_8780 = G__8790;
continue;
}
}
} else
{var temp__4092__auto___8791__$2 = cljs.core.seq.call(null,seq__8614_8777);if(temp__4092__auto___8791__$2)
{var seq__8614_8792__$1 = temp__4092__auto___8791__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8614_8792__$1))
{var c__4150__auto___8793 = cljs.core.chunk_first.call(null,seq__8614_8792__$1);{
var G__8794 = cljs.core.chunk_rest.call(null,seq__8614_8792__$1);
var G__8795 = c__4150__auto___8793;
var G__8796 = cljs.core.count.call(null,c__4150__auto___8793);
var G__8797 = 0;
seq__8614_8777 = G__8794;
chunk__8617_8778 = G__8795;
count__8618_8779 = G__8796;
i__8619_8780 = G__8797;
continue;
}
} else
{var x_8798 = cljs.core.first.call(null,seq__8614_8792__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,x_8798,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"door","door",1016993568)))
{var sprite_8799 = divergence.entity.entity_atom__GT_ref.call(null,x_8798);sprite_8799.textures = divergence.system.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorOpenTexture], null)));
{
var G__8800 = cljs.core.next.call(null,seq__8614_8792__$1);
var G__8801 = null;
var G__8802 = 0;
var G__8803 = 0;
seq__8614_8777 = G__8800;
chunk__8617_8778 = G__8801;
count__8618_8779 = G__8802;
i__8619_8780 = G__8803;
continue;
}
} else
{{
var G__8804 = cljs.core.next.call(null,seq__8614_8792__$1);
var G__8805 = null;
var G__8806 = 0;
var G__8807 = 0;
seq__8614_8777 = G__8804;
chunk__8617_8778 = G__8805;
count__8618_8779 = G__8806;
i__8619_8780 = G__8807;
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
var G__8808 = cljs.core.next.call(null,seq__8600_8768__$1);
var G__8809 = null;
var G__8810 = 0;
var G__8811 = 0;
seq__8600_8725 = G__8808;
chunk__8602_8726 = G__8809;
count__8603_8727 = G__8810;
i__8604_8728 = G__8811;
continue;
}
}
} else
{}
}
break;
}
{
var G__8812 = cljs.core.next.call(null,seq__8570__$1);
var G__8813 = null;
var G__8814 = 0;
var G__8815 = 0;
seq__8570 = G__8812;
chunk__8573 = G__8813;
count__8574 = G__8814;
i__8575 = G__8815;
continue;
}
} else
{{
var G__8816 = cljs.core.next.call(null,seq__8570__$1);
var G__8817 = null;
var G__8818 = 0;
var G__8819 = 0;
seq__8570 = G__8816;
chunk__8573 = G__8817;
count__8574 = G__8818;
i__8575 = G__8819;
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
divergence.system.hit_button_box_fall = (function hit_button_box_fall(player,entities){var seq__8856 = cljs.core.seq.call(null,player);var chunk__8858 = null;var count__8859 = 0;var i__8860 = 0;while(true){
if((i__8860 < count__8859))
{var pl = cljs.core._nth.call(null,chunk__8858,i__8860);var e_type_8892 = divergence.entity.entity_atom__GT_component_val.call(null,pl,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_8892,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_8893 = pl;var actions_8894 = cljs.core.deref.call(null,p_8893).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8862_8895 = cljs.core.deref.call(null,p_8893).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_8896 = cljs.core.nth.call(null,vec__8862_8895,0,null);var y_8897 = cljs.core.nth.call(null,vec__8862_8895,1,null);var r_8898 = cljs.core.nth.call(null,vec__8862_8895,2,null);var seq__8863_8899 = cljs.core.seq.call(null,entities);var chunk__8865_8900 = null;var count__8866_8901 = 0;var i__8867_8902 = 0;while(true){
if((i__8867_8902 < count__8866_8901))
{var en_8903 = cljs.core._nth.call(null,chunk__8865_8900,i__8867_8902);var item_8904 = cljs.core.deref.call(null,en_8903);var item_name_8905 = divergence.entity.entity_atom__GT_component_val.call(null,en_8903,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8904.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_8904,cljs.core.deref.call(null,p_8893))))
{var seq__8869_8906 = cljs.core.seq.call(null,entities);var chunk__8870_8907 = null;var count__8871_8908 = 0;var i__8872_8909 = 0;while(true){
if((i__8872_8909 < count__8871_8908))
{var e1_8910 = cljs.core._nth.call(null,chunk__8870_8907,i__8872_8909);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_8910).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_8910,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__8911 = seq__8869_8906;
var G__8912 = chunk__8870_8907;
var G__8913 = count__8871_8908;
var G__8914 = (i__8872_8909 + 1);
seq__8869_8906 = G__8911;
chunk__8870_8907 = G__8912;
count__8871_8908 = G__8913;
i__8872_8909 = G__8914;
continue;
}
} else
{var temp__4092__auto___8915 = cljs.core.seq.call(null,seq__8869_8906);if(temp__4092__auto___8915)
{var seq__8869_8916__$1 = temp__4092__auto___8915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8869_8916__$1))
{var c__4150__auto___8917 = cljs.core.chunk_first.call(null,seq__8869_8916__$1);{
var G__8918 = cljs.core.chunk_rest.call(null,seq__8869_8916__$1);
var G__8919 = c__4150__auto___8917;
var G__8920 = cljs.core.count.call(null,c__4150__auto___8917);
var G__8921 = 0;
seq__8869_8906 = G__8918;
chunk__8870_8907 = G__8919;
count__8871_8908 = G__8920;
i__8872_8909 = G__8921;
continue;
}
} else
{var e1_8922 = cljs.core.first.call(null,seq__8869_8916__$1);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_8922).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_8922,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__8923 = cljs.core.next.call(null,seq__8869_8916__$1);
var G__8924 = null;
var G__8925 = 0;
var G__8926 = 0;
seq__8869_8906 = G__8923;
chunk__8870_8907 = G__8924;
count__8871_8908 = G__8925;
i__8872_8909 = G__8926;
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
var G__8927 = seq__8863_8899;
var G__8928 = chunk__8865_8900;
var G__8929 = count__8866_8901;
var G__8930 = (i__8867_8902 + 1);
seq__8863_8899 = G__8927;
chunk__8865_8900 = G__8928;
count__8866_8901 = G__8929;
i__8867_8902 = G__8930;
continue;
}
} else
{var temp__4092__auto___8931 = cljs.core.seq.call(null,seq__8863_8899);if(temp__4092__auto___8931)
{var seq__8863_8932__$1 = temp__4092__auto___8931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8863_8932__$1))
{var c__4150__auto___8933 = cljs.core.chunk_first.call(null,seq__8863_8932__$1);{
var G__8934 = cljs.core.chunk_rest.call(null,seq__8863_8932__$1);
var G__8935 = c__4150__auto___8933;
var G__8936 = cljs.core.count.call(null,c__4150__auto___8933);
var G__8937 = 0;
seq__8863_8899 = G__8934;
chunk__8865_8900 = G__8935;
count__8866_8901 = G__8936;
i__8867_8902 = G__8937;
continue;
}
} else
{var en_8938 = cljs.core.first.call(null,seq__8863_8932__$1);var item_8939 = cljs.core.deref.call(null,en_8938);var item_name_8940 = divergence.entity.entity_atom__GT_component_val.call(null,en_8938,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8939.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_8939,cljs.core.deref.call(null,p_8893))))
{var seq__8873_8941 = cljs.core.seq.call(null,entities);var chunk__8874_8942 = null;var count__8875_8943 = 0;var i__8876_8944 = 0;while(true){
if((i__8876_8944 < count__8875_8943))
{var e1_8945 = cljs.core._nth.call(null,chunk__8874_8942,i__8876_8944);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_8945).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_8945,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__8946 = seq__8873_8941;
var G__8947 = chunk__8874_8942;
var G__8948 = count__8875_8943;
var G__8949 = (i__8876_8944 + 1);
seq__8873_8941 = G__8946;
chunk__8874_8942 = G__8947;
count__8875_8943 = G__8948;
i__8876_8944 = G__8949;
continue;
}
} else
{var temp__4092__auto___8950__$1 = cljs.core.seq.call(null,seq__8873_8941);if(temp__4092__auto___8950__$1)
{var seq__8873_8951__$1 = temp__4092__auto___8950__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8873_8951__$1))
{var c__4150__auto___8952 = cljs.core.chunk_first.call(null,seq__8873_8951__$1);{
var G__8953 = cljs.core.chunk_rest.call(null,seq__8873_8951__$1);
var G__8954 = c__4150__auto___8952;
var G__8955 = cljs.core.count.call(null,c__4150__auto___8952);
var G__8956 = 0;
seq__8873_8941 = G__8953;
chunk__8874_8942 = G__8954;
count__8875_8943 = G__8955;
i__8876_8944 = G__8956;
continue;
}
} else
{var e1_8957 = cljs.core.first.call(null,seq__8873_8951__$1);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_8957).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_8957,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__8958 = cljs.core.next.call(null,seq__8873_8951__$1);
var G__8959 = null;
var G__8960 = 0;
var G__8961 = 0;
seq__8873_8941 = G__8958;
chunk__8874_8942 = G__8959;
count__8875_8943 = G__8960;
i__8876_8944 = G__8961;
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
var G__8962 = cljs.core.next.call(null,seq__8863_8932__$1);
var G__8963 = null;
var G__8964 = 0;
var G__8965 = 0;
seq__8863_8899 = G__8962;
chunk__8865_8900 = G__8963;
count__8866_8901 = G__8964;
i__8867_8902 = G__8965;
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
var G__8966 = seq__8856;
var G__8967 = chunk__8858;
var G__8968 = count__8859;
var G__8969 = (i__8860 + 1);
seq__8856 = G__8966;
chunk__8858 = G__8967;
count__8859 = G__8968;
i__8860 = G__8969;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8856);if(temp__4092__auto__)
{var seq__8856__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8856__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__8856__$1);{
var G__8970 = cljs.core.chunk_rest.call(null,seq__8856__$1);
var G__8971 = c__4150__auto__;
var G__8972 = cljs.core.count.call(null,c__4150__auto__);
var G__8973 = 0;
seq__8856 = G__8970;
chunk__8858 = G__8971;
count__8859 = G__8972;
i__8860 = G__8973;
continue;
}
} else
{var pl = cljs.core.first.call(null,seq__8856__$1);var e_type_8974 = divergence.entity.entity_atom__GT_component_val.call(null,pl,new cljs.core.Keyword(null,"type","type",1017479852));if(cljs.core._EQ_.call(null,e_type_8974,new cljs.core.Keyword(null,"player","player",4323118675)))
{var p_8975 = pl;var actions_8976 = cljs.core.deref.call(null,p_8975).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var vec__8877_8977 = cljs.core.deref.call(null,p_8975).call(null,new cljs.core.Keyword(null,"position","position",1761709211));var x_8978 = cljs.core.nth.call(null,vec__8877_8977,0,null);var y_8979 = cljs.core.nth.call(null,vec__8877_8977,1,null);var r_8980 = cljs.core.nth.call(null,vec__8877_8977,2,null);var seq__8878_8981 = cljs.core.seq.call(null,entities);var chunk__8880_8982 = null;var count__8881_8983 = 0;var i__8882_8984 = 0;while(true){
if((i__8882_8984 < count__8881_8983))
{var en_8985 = cljs.core._nth.call(null,chunk__8880_8982,i__8882_8984);var item_8986 = cljs.core.deref.call(null,en_8985);var item_name_8987 = divergence.entity.entity_atom__GT_component_val.call(null,en_8985,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_8986.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_8986,cljs.core.deref.call(null,p_8975))))
{var seq__8884_8988 = cljs.core.seq.call(null,entities);var chunk__8885_8989 = null;var count__8886_8990 = 0;var i__8887_8991 = 0;while(true){
if((i__8887_8991 < count__8886_8990))
{var e1_8992 = cljs.core._nth.call(null,chunk__8885_8989,i__8887_8991);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_8992).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_8992,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__8993 = seq__8884_8988;
var G__8994 = chunk__8885_8989;
var G__8995 = count__8886_8990;
var G__8996 = (i__8887_8991 + 1);
seq__8884_8988 = G__8993;
chunk__8885_8989 = G__8994;
count__8886_8990 = G__8995;
i__8887_8991 = G__8996;
continue;
}
} else
{var temp__4092__auto___8997__$1 = cljs.core.seq.call(null,seq__8884_8988);if(temp__4092__auto___8997__$1)
{var seq__8884_8998__$1 = temp__4092__auto___8997__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8884_8998__$1))
{var c__4150__auto___8999 = cljs.core.chunk_first.call(null,seq__8884_8998__$1);{
var G__9000 = cljs.core.chunk_rest.call(null,seq__8884_8998__$1);
var G__9001 = c__4150__auto___8999;
var G__9002 = cljs.core.count.call(null,c__4150__auto___8999);
var G__9003 = 0;
seq__8884_8988 = G__9000;
chunk__8885_8989 = G__9001;
count__8886_8990 = G__9002;
i__8887_8991 = G__9003;
continue;
}
} else
{var e1_9004 = cljs.core.first.call(null,seq__8884_8998__$1);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_9004).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_9004,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__9005 = cljs.core.next.call(null,seq__8884_8998__$1);
var G__9006 = null;
var G__9007 = 0;
var G__9008 = 0;
seq__8884_8988 = G__9005;
chunk__8885_8989 = G__9006;
count__8886_8990 = G__9007;
i__8887_8991 = G__9008;
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
var G__9009 = seq__8878_8981;
var G__9010 = chunk__8880_8982;
var G__9011 = count__8881_8983;
var G__9012 = (i__8882_8984 + 1);
seq__8878_8981 = G__9009;
chunk__8880_8982 = G__9010;
count__8881_8983 = G__9011;
i__8882_8984 = G__9012;
continue;
}
} else
{var temp__4092__auto___9013__$1 = cljs.core.seq.call(null,seq__8878_8981);if(temp__4092__auto___9013__$1)
{var seq__8878_9014__$1 = temp__4092__auto___9013__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8878_9014__$1))
{var c__4150__auto___9015 = cljs.core.chunk_first.call(null,seq__8878_9014__$1);{
var G__9016 = cljs.core.chunk_rest.call(null,seq__8878_9014__$1);
var G__9017 = c__4150__auto___9015;
var G__9018 = cljs.core.count.call(null,c__4150__auto___9015);
var G__9019 = 0;
seq__8878_8981 = G__9016;
chunk__8880_8982 = G__9017;
count__8881_8983 = G__9018;
i__8882_8984 = G__9019;
continue;
}
} else
{var en_9020 = cljs.core.first.call(null,seq__8878_9014__$1);var item_9021 = cljs.core.deref.call(null,en_9020);var item_name_9022 = divergence.entity.entity_atom__GT_component_val.call(null,en_9020,new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core._EQ_.call(null,item_9021.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)))
{if(cljs.core.truth_(divergence.physics.colliding_QMARK_.call(null,item_9021,cljs.core.deref.call(null,p_8975))))
{var seq__8888_9023 = cljs.core.seq.call(null,entities);var chunk__8889_9024 = null;var count__8890_9025 = 0;var i__8891_9026 = 0;while(true){
if((i__8891_9026 < count__8890_9025))
{var e1_9027 = cljs.core._nth.call(null,chunk__8889_9024,i__8891_9026);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_9027).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_9027,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__9028 = seq__8888_9023;
var G__9029 = chunk__8889_9024;
var G__9030 = count__8890_9025;
var G__9031 = (i__8891_9026 + 1);
seq__8888_9023 = G__9028;
chunk__8889_9024 = G__9029;
count__8890_9025 = G__9030;
i__8891_9026 = G__9031;
continue;
}
} else
{var temp__4092__auto___9032__$2 = cljs.core.seq.call(null,seq__8888_9023);if(temp__4092__auto___9032__$2)
{var seq__8888_9033__$1 = temp__4092__auto___9032__$2;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8888_9033__$1))
{var c__4150__auto___9034 = cljs.core.chunk_first.call(null,seq__8888_9033__$1);{
var G__9035 = cljs.core.chunk_rest.call(null,seq__8888_9033__$1);
var G__9036 = c__4150__auto___9034;
var G__9037 = cljs.core.count.call(null,c__4150__auto___9034);
var G__9038 = 0;
seq__8888_9023 = G__9035;
chunk__8889_9024 = G__9036;
count__8890_9025 = G__9037;
i__8891_9026 = G__9038;
continue;
}
} else
{var e1_9039 = cljs.core.first.call(null,seq__8888_9033__$1);if(cljs.core._EQ_.call(null,":boxfloat1",cljs.core.pr_str.call(null,cljs.core.deref.call(null,e1_9039).call(null,new cljs.core.Keyword(null,"name","name",1017277949)))))
{cljs.core.swap_BANG_.call(null,e1_9039,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gravity","gravity",1294427584)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null));
} else
{}
{
var G__9040 = cljs.core.next.call(null,seq__8888_9033__$1);
var G__9041 = null;
var G__9042 = 0;
var G__9043 = 0;
seq__8888_9023 = G__9040;
chunk__8889_9024 = G__9041;
count__8890_9025 = G__9042;
i__8891_9026 = G__9043;
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
var G__9044 = cljs.core.next.call(null,seq__8878_9014__$1);
var G__9045 = null;
var G__9046 = 0;
var G__9047 = 0;
seq__8878_8981 = G__9044;
chunk__8880_8982 = G__9045;
count__8881_8983 = G__9046;
i__8882_8984 = G__9047;
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
var G__9048 = cljs.core.next.call(null,seq__8856__$1);
var G__9049 = null;
var G__9050 = 0;
var G__9051 = 0;
seq__8856 = G__9048;
chunk__8858 = G__9049;
count__8859 = G__9050;
i__8860 = G__9051;
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
divergence.system.update_camera = (function update_camera(camera,entities){var seq__9056 = cljs.core.seq.call(null,entities);var chunk__9057 = null;var count__9058 = 0;var i__9059 = 0;while(true){
if((i__9059 < count__9058))
{var e = cljs.core._nth.call(null,chunk__9057,i__9059);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.system.update_camera_coords.call(null,camera,cljs.core.nth.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"position","position",1761709211)),0),cljs.core.nth.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"position","position",1761709211)),1));
} else
{}
{
var G__9060 = seq__9056;
var G__9061 = chunk__9057;
var G__9062 = count__9058;
var G__9063 = (i__9059 + 1);
seq__9056 = G__9060;
chunk__9057 = G__9061;
count__9058 = G__9062;
i__9059 = G__9063;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9056);if(temp__4092__auto__)
{var seq__9056__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9056__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__9056__$1);{
var G__9064 = cljs.core.chunk_rest.call(null,seq__9056__$1);
var G__9065 = c__4150__auto__;
var G__9066 = cljs.core.count.call(null,c__4150__auto__);
var G__9067 = 0;
seq__9056 = G__9064;
chunk__9057 = G__9065;
count__9058 = G__9066;
i__9059 = G__9067;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__9056__$1);if(cljs.core._EQ_.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949)),new cljs.core.Keyword(null,"player","player",4323118675)))
{divergence.system.update_camera_coords.call(null,camera,cljs.core.nth.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"position","position",1761709211)),0),cljs.core.nth.call(null,cljs.core.deref.call(null,e).call(null,new cljs.core.Keyword(null,"position","position",1761709211)),1));
} else
{}
{
var G__9068 = cljs.core.next.call(null,seq__9056__$1);
var G__9069 = null;
var G__9070 = 0;
var G__9071 = 0;
seq__9056 = G__9068;
chunk__9057 = G__9069;
count__9058 = G__9070;
i__9059 = G__9071;
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
divergence.system.serialize = (function serialize(entities){var seq__9076 = cljs.core.seq.call(null,entities);var chunk__9077 = null;var count__9078 = 0;var i__9079 = 0;while(true){
if((i__9079 < count__9078))
{var e = cljs.core._nth.call(null,chunk__9077,i__9079);cljs.core.reset_BANG_.call(null,divergence.system.serial_data,cljs.core.deref.call(null,e));
cljs.core.swap_BANG_.call(null,divergence.system.serial_data,cljs.core.dissoc,new cljs.core.Keyword(null,"ref","ref",1014017029),new cljs.core.Keyword(null,"sprite","sprite",4413191735),new cljs.core.Keyword(null,"stage","stage",1123661424),new cljs.core.Keyword(null,"actions","actions",4147068015),new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641),new cljs.core.Keyword(null,"on-stage","on-stage",1431549186),new cljs.core.Keyword(null,"container","container",602947571));
divergence.system.save_to_local_db.call(null,cljs.core.pr_str.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949))),cljs.core.deref.call(null,divergence.system.serial_data));
{
var G__9080 = seq__9076;
var G__9081 = chunk__9077;
var G__9082 = count__9078;
var G__9083 = (i__9079 + 1);
seq__9076 = G__9080;
chunk__9077 = G__9081;
count__9078 = G__9082;
i__9079 = G__9083;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9076);if(temp__4092__auto__)
{var seq__9076__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9076__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__9076__$1);{
var G__9084 = cljs.core.chunk_rest.call(null,seq__9076__$1);
var G__9085 = c__4150__auto__;
var G__9086 = cljs.core.count.call(null,c__4150__auto__);
var G__9087 = 0;
seq__9076 = G__9084;
chunk__9077 = G__9085;
count__9078 = G__9086;
i__9079 = G__9087;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__9076__$1);cljs.core.reset_BANG_.call(null,divergence.system.serial_data,cljs.core.deref.call(null,e));
cljs.core.swap_BANG_.call(null,divergence.system.serial_data,cljs.core.dissoc,new cljs.core.Keyword(null,"ref","ref",1014017029),new cljs.core.Keyword(null,"sprite","sprite",4413191735),new cljs.core.Keyword(null,"stage","stage",1123661424),new cljs.core.Keyword(null,"actions","actions",4147068015),new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641),new cljs.core.Keyword(null,"on-stage","on-stage",1431549186),new cljs.core.Keyword(null,"container","container",602947571));
divergence.system.save_to_local_db.call(null,cljs.core.pr_str.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949))),cljs.core.deref.call(null,divergence.system.serial_data));
{
var G__9088 = cljs.core.next.call(null,seq__9076__$1);
var G__9089 = null;
var G__9090 = 0;
var G__9091 = 0;
seq__9076 = G__9088;
chunk__9077 = G__9089;
count__9078 = G__9090;
i__9079 = G__9091;
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
divergence.system.deserialize = (function deserialize(entities){var seq__9096 = cljs.core.seq.call(null,entities);var chunk__9097 = null;var count__9098 = 0;var i__9099 = 0;while(true){
if((i__9099 < count__9098))
{var e = cljs.core._nth.call(null,chunk__9097,i__9099);cljs.core.reset_BANG_.call(null,divergence.system.load_data,cljs.reader.read_string.call(null,localStorage.getItem(cljs.core.pr_str.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949))))));
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
var G__9100 = seq__9096;
var G__9101 = chunk__9097;
var G__9102 = count__9098;
var G__9103 = (i__9099 + 1);
seq__9096 = G__9100;
chunk__9097 = G__9101;
count__9098 = G__9102;
i__9099 = G__9103;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9096);if(temp__4092__auto__)
{var seq__9096__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9096__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__9096__$1);{
var G__9104 = cljs.core.chunk_rest.call(null,seq__9096__$1);
var G__9105 = c__4150__auto__;
var G__9106 = cljs.core.count.call(null,c__4150__auto__);
var G__9107 = 0;
seq__9096 = G__9104;
chunk__9097 = G__9105;
count__9098 = G__9106;
i__9099 = G__9107;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__9096__$1);cljs.core.reset_BANG_.call(null,divergence.system.load_data,cljs.reader.read_string.call(null,localStorage.getItem(cljs.core.pr_str.call(null,divergence.entity.entity_atom__GT_component_val.call(null,e,new cljs.core.Keyword(null,"name","name",1017277949))))));
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
var G__9108 = cljs.core.next.call(null,seq__9096__$1);
var G__9109 = null;
var G__9110 = 0;
var G__9111 = 0;
seq__9096 = G__9108;
chunk__9097 = G__9109;
count__9098 = G__9110;
i__9099 = G__9111;
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