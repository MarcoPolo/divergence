// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.entity.enemies');
goog.require('cljs.core');
goog.require('divergence.textures');
goog.require('divergence.textures');
goog.require('divergence.entity');
goog.require('divergence.entity');
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
divergence.entity.enemies.cljs_to_js = (function cljs_to_js(x){if(typeof x === 'string')
{return x;
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__10599){var vec__10600 = p__10599;var k = cljs.core.nth.call(null,vec__10600,0,null);var v = cljs.core.nth.call(null,vec__10600,1,null);return cljs.core.assoc.call(null,m,cljs.core.clj__GT_js.call(null,k),cljs.core.clj__GT_js.call(null,v));
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
divergence.entity.enemies.normal_path = cljs.core.PersistentVector.fromArray([2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0], true);
divergence.entity.enemies.updown_path = cljs.core.PersistentVector.fromArray([0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2], true);
divergence.entity.enemies.bounce_path = cljs.core.PersistentVector.EMPTY;
divergence.entity.enemies.move_paths = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"normal","normal",4269125721),divergence.entity.enemies.normal_path,new cljs.core.Keyword(null,"bounce","bounce",3925666298),divergence.entity.enemies.bounce_path,new cljs.core.Keyword(null,"updown","updown",4470038831),divergence.entity.enemies.updown_path], null);
divergence.entity.enemies.enemy_effect_one = (function enemy_effect_one(player,enemy){return divergence.entity.entity_atom__GT_ref.call(null,player).textures = divergence.entity.enemies.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.catAnimation));
});
divergence.entity.enemies.enemy_effect_two = (function enemy_effect_two(player,enemy){divergence.entity.entity_atom__GT_ref.call(null,player).textures = divergence.entity.enemies.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.batAnimation));
var map__10603 = cljs.core.deref.call(null,player);var map__10603__$1 = ((cljs.core.seq_QMARK_.call(null,map__10603))?cljs.core.apply.call(null,cljs.core.hash_map,map__10603):map__10603);var vec__10604 = cljs.core.get.call(null,map__10603__$1,new cljs.core.Keyword(null,"position","position",1761709211));var x = cljs.core.nth.call(null,vec__10604,0,null);var y = cljs.core.nth.call(null,vec__10604,1,null);var rot = cljs.core.nth.call(null,vec__10604,2,null);return cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - 200),y,rot], null));
});
divergence.entity.enemies.enemy_effect_three = (function enemy_effect_three(player,enemy){var map__10607 = cljs.core.deref.call(null,player);var map__10607__$1 = ((cljs.core.seq_QMARK_.call(null,map__10607))?cljs.core.apply.call(null,cljs.core.hash_map,map__10607):map__10607);var vec__10608 = cljs.core.get.call(null,map__10607__$1,new cljs.core.Keyword(null,"position","position",1761709211));var x = cljs.core.nth.call(null,vec__10608,0,null);var y = cljs.core.nth.call(null,vec__10608,1,null);var rot = cljs.core.nth.call(null,vec__10608,2,null);return cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - 200),y,rot], null));
});
divergence.entity.enemies.enemy_effect_four = (function enemy_effect_four(player,enemy){divergence.entity.entity_atom__GT_ref.call(null,player).textures = divergence.entity.enemies.cljs_to_js.call(null,cljs.core.map.call(null,divergence.textures.textures,divergence.entity.catAnimation));
var map__10611 = cljs.core.deref.call(null,player);var map__10611__$1 = ((cljs.core.seq_QMARK_.call(null,map__10611))?cljs.core.apply.call(null,cljs.core.hash_map,map__10611):map__10611);var vec__10612 = cljs.core.get.call(null,map__10611__$1,new cljs.core.Keyword(null,"position","position",1761709211));var x = cljs.core.nth.call(null,vec__10612,0,null);var y = cljs.core.nth.call(null,vec__10612,1,null);var rot = cljs.core.nth.call(null,vec__10612,2,null);return cljs.core.swap_BANG_.call(null,player,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - 200),y,rot], null));
});
divergence.entity.enemies.effect_map = new cljs.core.PersistentArrayMap(null, 5, [0,divergence.entity.enemies.enemy_effect_three,1,divergence.entity.enemies.enemy_effect_one,2,divergence.entity.enemies.enemy_effect_two,3,divergence.entity.enemies.enemy_effect_four,4,divergence.entity.enemies.enemy_effect_two], null);
divergence.entity.enemies.effects = (function effects(player,enemy){return divergence.entity.enemies.effect_map.call(null,cljs.core.deref.call(null,enemy).call(null,new cljs.core.Keyword(null,"effect","effect",4002786563))).call(null,player,enemy);
});
divergence.entity.enemies.flappy_straight = cljs.core.partial.call(null,divergence.entity.enemy,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.enemyATextureRight], null),divergence.entity.enemies.normal_path,0,false);
divergence.entity.enemies.flappy = cljs.core.partial.call(null,divergence.entity.enemy,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.enemyATextureRight], null),divergence.entity.enemies.normal_path,0,true);
divergence.entity.enemies.flappy2 = cljs.core.partial.call(null,divergence.entity.enemy,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.enemyATextureRight], null),divergence.entity.enemies.updown_path,0,true);
divergence.entity.enemies.flappy3 = cljs.core.partial.call(null,divergence.entity.enemy,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.enemyATextureRight], null),divergence.entity.enemies.normal_path,2,true);
divergence.entity.enemies.flappy4 = cljs.core.partial.call(null,divergence.entity.enemy,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.enemyATextureRight], null),divergence.entity.enemies.updown_path,2,true);
divergence.entity.enemies.flappy5 = cljs.core.partial.call(null,divergence.entity.enemy,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.enemyATextureRight], null),divergence.entity.enemies.normal_path,2,false);
divergence.entity.enemies.shark = cljs.core.partial.call(null,divergence.entity.enemy,0.3,0.3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.enemyBTextureLeft], null),divergence.entity.enemies.normal_path,3,true);
divergence.entity.enemies.shark2 = cljs.core.partial.call(null,divergence.entity.enemy,0.3,0.3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.enemyBTextureRight], null),divergence.entity.enemies.normal_path,3,false);

//# sourceMappingURL=enemies.js.map