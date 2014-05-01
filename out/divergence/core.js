// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.core');
goog.require('cljs.core');
goog.require('divergence.leveleditor');
goog.require('divergence.renderer');
goog.require('divergence.system');
goog.require('divergence.timeviz');
goog.require('goog.dom');
goog.require('divergence.renderer');
goog.require('divergence.system.time_travel');
goog.require('goog.dom');
goog.require('divergence.audio');
goog.require('divergence.leveleditor');
goog.require('divergence.audio');
goog.require('divergence.entity.levels');
goog.require('divergence.component');
goog.require('divergence.entity');
goog.require('divergence.system.time_travel');
goog.require('divergence.system');
goog.require('divergence.component');
goog.require('divergence.entity.levels');
goog.require('divergence.entity');
cljs.core.enable_console_print_BANG_.call(null);
divergence.core.renderer = divergence.renderer.renderer;
divergence.core.stage = cljs.core.atom.call(null,divergence.renderer.stage);
divergence.core.current_level = cljs.core.atom.call(null,0);
divergence.core.container = divergence.renderer.container;
divergence.core.camera = divergence.renderer.camera;
/**
* A map to an entity and a list of its components
*/
divergence.core.entity__GT_components = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* A map to a component and a list of entities that use it
*/
divergence.core.component__GT_entities = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
divergence.core.entity_count = cljs.core.atom.call(null,0);
divergence.core.animate_ref = cljs.core.atom.call(null,null);
divergence.core.globalID = cljs.core.atom.call(null,null);
divergence.core.timestream = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-node","prev-node",4421093582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)], null)], null));
divergence.core.setup = (function setup(entities){var seq__5644_5648 = cljs.core.seq.call(null,entities);var chunk__5645_5649 = null;var count__5646_5650 = 0;var i__5647_5651 = 0;while(true){
if((i__5647_5651 < count__5646_5650))
{var e_5652 = cljs.core._nth.call(null,chunk__5645_5649,i__5647_5651);divergence.entity.register_entity_BANG_.call(null,e_5652);
{
var G__5653 = seq__5644_5648;
var G__5654 = chunk__5645_5649;
var G__5655 = count__5646_5650;
var G__5656 = (i__5647_5651 + 1);
seq__5644_5648 = G__5653;
chunk__5645_5649 = G__5654;
count__5646_5650 = G__5655;
i__5647_5651 = G__5656;
continue;
}
} else
{var temp__4092__auto___5657 = cljs.core.seq.call(null,seq__5644_5648);if(temp__4092__auto___5657)
{var seq__5644_5658__$1 = temp__4092__auto___5657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5644_5658__$1))
{var c__4150__auto___5659 = cljs.core.chunk_first.call(null,seq__5644_5658__$1);{
var G__5660 = cljs.core.chunk_rest.call(null,seq__5644_5658__$1);
var G__5661 = c__4150__auto___5659;
var G__5662 = cljs.core.count.call(null,c__4150__auto___5659);
var G__5663 = 0;
seq__5644_5648 = G__5660;
chunk__5645_5649 = G__5661;
count__5646_5650 = G__5662;
i__5647_5651 = G__5663;
continue;
}
} else
{var e_5664 = cljs.core.first.call(null,seq__5644_5658__$1);divergence.entity.register_entity_BANG_.call(null,e_5664);
{
var G__5665 = cljs.core.next.call(null,seq__5644_5658__$1);
var G__5666 = null;
var G__5667 = 0;
var G__5668 = 0;
seq__5644_5648 = G__5665;
chunk__5645_5649 = G__5666;
count__5646_5650 = G__5667;
i__5647_5651 = G__5668;
continue;
}
}
} else
{}
}
break;
}
var c__GT_e = divergence.entity.component__GT_entities;divergence.system.create_ref.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"sprite","sprite",4413191735)));
divergence.system.create_tiling_ref.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641)));
divergence.system.create_text.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"text","text",1017460895)));
divergence.system.to_stage.call(null,cljs.core.deref.call(null,divergence.core.container),c__GT_e.call(null,new cljs.core.Keyword(null,"stage","stage",1123661424)));
divergence.system.add_camera.call(null,cljs.core.deref.call(null,divergence.core.camera),cljs.core.deref.call(null,divergence.core.container));
divergence.system.on_stage.call(null,cljs.core.deref.call(null,divergence.core.stage),cljs.core.deref.call(null,divergence.core.camera));
divergence.audio.startBGM.call(null,cljs.core.deref.call(null,divergence.system.current_level));
divergence.system.position.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"position","position",1761709211)));
divergence.system.anchor.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"anchor","anchor",3895572007)));
divergence.system.scale.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"scale","scale",1123155132)));
return divergence.system.set_width_height.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"collidable","collidable",3682426451)));
});
divergence.core.load_level = (function load_level(){var c__GT_e = divergence.entity.component__GT_entities;var seq__5673_5677 = cljs.core.seq.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"position","position",1761709211)));var chunk__5674_5678 = null;var count__5675_5679 = 0;var i__5676_5680 = 0;while(true){
if((i__5676_5680 < count__5675_5679))
{var things_with_positions_5681 = cljs.core._nth.call(null,chunk__5674_5678,i__5676_5680);divergence.entity.destroy_entity_BANG_.call(null,things_with_positions_5681);
{
var G__5682 = seq__5673_5677;
var G__5683 = chunk__5674_5678;
var G__5684 = count__5675_5679;
var G__5685 = (i__5676_5680 + 1);
seq__5673_5677 = G__5682;
chunk__5674_5678 = G__5683;
count__5675_5679 = G__5684;
i__5676_5680 = G__5685;
continue;
}
} else
{var temp__4092__auto___5686 = cljs.core.seq.call(null,seq__5673_5677);if(temp__4092__auto___5686)
{var seq__5673_5687__$1 = temp__4092__auto___5686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5673_5687__$1))
{var c__4150__auto___5688 = cljs.core.chunk_first.call(null,seq__5673_5687__$1);{
var G__5689 = cljs.core.chunk_rest.call(null,seq__5673_5687__$1);
var G__5690 = c__4150__auto___5688;
var G__5691 = cljs.core.count.call(null,c__4150__auto___5688);
var G__5692 = 0;
seq__5673_5677 = G__5689;
chunk__5674_5678 = G__5690;
count__5675_5679 = G__5691;
i__5676_5680 = G__5692;
continue;
}
} else
{var things_with_positions_5693 = cljs.core.first.call(null,seq__5673_5687__$1);divergence.entity.destroy_entity_BANG_.call(null,things_with_positions_5693);
{
var G__5694 = cljs.core.next.call(null,seq__5673_5687__$1);
var G__5695 = null;
var G__5696 = 0;
var G__5697 = 0;
seq__5673_5677 = G__5694;
chunk__5674_5678 = G__5695;
count__5675_5679 = G__5696;
i__5676_5680 = G__5697;
continue;
}
}
} else
{}
}
break;
}
cljs.core.deref.call(null,divergence.core.container).parent.removeChild(cljs.core.deref.call(null,divergence.core.container));
cljs.core.deref.call(null,divergence.core.camera).parent.removeChild(cljs.core.deref.call(null,divergence.core.camera));
cljs.core.reset_BANG_.call(null,divergence.core.container,(new PIXI.DisplayObjectContainer()));
cljs.core.reset_BANG_.call(null,divergence.core.camera,(new PIXI.DisplayObjectContainer()));
cljs.core.reset_BANG_.call(null,divergence.core.timestream,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-node","prev-node",4421093582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)], null)], null));
return divergence.core.setup.call(null,divergence.entity.levels.get_levels.call(null,cljs.core.deref.call(null,divergence.core.current_level)).call(null,cljs.core.deref.call(null,divergence.core.stage)));
});
divergence.core.resetGame = (function resetGame(){return divergence.core.load_level.call(null);
});
divergence.core.timestream = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prev-node","prev-node",4421093582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)], null)], null));
divergence.core.savegame = (function savegame(){var c__GT_e = divergence.entity.component__GT_entities;return divergence.system.serialize.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"position","position",1761709211)));
});
divergence.core.loadgame = (function loadgame(){var c__GT_e = divergence.entity.component__GT_entities;return divergence.system.deserialize.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"position","position",1761709211)));
});
divergence.core.pause = (function pause(){return cancelAnimationFrame(cljs.core.deref.call(null,divergence.core.globalID));
});
divergence.core.resume = (function resume(){return requestAnimationFrame(cljs.core.deref.call(null,divergence.core.animate_ref));
});
divergence.core.animate = (function animate(){var c__GT_e = divergence.entity.component__GT_entities;divergence.renderer.renderer.render(divergence.renderer.stage);
divergence.system.time_travel.time_travel.call(null,divergence.core.timestream,c__GT_e.call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780)),cljs.core.first.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"player-time-traveler","player-time-traveler",4417459661))));
divergence.system.set_width_height.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"collidable","collidable",3682426451)));
divergence.system.player_input.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"player-input","player-input",3958476112)));
divergence.system.climbing.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"type","type",1017479852)));
divergence.system.execute_actions.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"actions","actions",4147068015)));
divergence.system.move_background.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780)),c__GT_e.call(null,new cljs.core.Keyword(null,"type","type",1017479852)));
divergence.system.animations.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"sprite","sprite",4413191735)));
divergence.system.gravity.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"gravity","gravity",1294427584)));
divergence.system.movement_caps.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)));
divergence.system.friction.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"acceleration","acceleration",746604530)));
divergence.system.accelerate.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"acceleration","acceleration",746604530)));
divergence.system.execute_entities.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"path","path",1017337751)));
divergence.system.execute_effects.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780)),c__GT_e.call(null,new cljs.core.Keyword(null,"collidable","collidable",3682426451)));
divergence.system.collide.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"collidable","collidable",3682426451)));
divergence.system.push.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"pushable","pushable",2790267622)),c__GT_e.call(null,new cljs.core.Keyword(null,"type","type",1017479852)));
if(cljs.core.truth_(divergence.system.goal_QMARK_.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"type","type",1017479852)),c__GT_e.call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780)))))
{divergence.system.next_level.call(null);
cljs.core.swap_BANG_.call(null,divergence.core.current_level,cljs.core.inc);
divergence.core.load_level.call(null);
} else
{}
divergence.system.move.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199)));
divergence.system.position.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"position","position",1761709211)));
divergence.system.fps_counter.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"fps-counter","fps-counter",2249834634)));
divergence.timeviz.render_stage.call(null);
divergence.system.update_camera.call(null,divergence.core.container,c__GT_e.call(null,new cljs.core.Keyword(null,"position","position",1761709211)));
divergence.system.pick_drop_item.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"type","type",1017479852)));
divergence.system.hit_button.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780)),c__GT_e.call(null,new cljs.core.Keyword(null,"type","type",1017479852)));
divergence.system.hit_button_box_fall.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780)),c__GT_e.call(null,new cljs.core.Keyword(null,"type","type",1017479852)));
return cljs.core.reset_BANG_.call(null,divergence.core.globalID,requestAnimationFrame(cljs.core.deref.call(null,divergence.core.animate_ref)));
});
/**
* A way to slow down the game for debugging
*/
divergence.core.debug_slow_down = (function debug_slow_down(){var slow_down_factor = 4;var cnt = cljs.core.atom.call(null,0);return (function (){cljs.core.swap_BANG_.call(null,cnt,cljs.core.inc);
if((cljs.core.mod.call(null,cljs.core.deref.call(null,cnt),slow_down_factor) === 0))
{return divergence.core.animate.call(null);
} else
{return requestAnimationFrame(cljs.core.deref.call(null,divergence.core.animate_ref));
}
});
});
cljs.core.reset_BANG_.call(null,divergence.core.animate_ref,divergence.core.animate);
divergence.core.setup.call(null,divergence.entity.levels.prologue.call(null,cljs.core.deref.call(null,divergence.core.stage)));
requestAnimationFrame(cljs.core.deref.call(null,divergence.core.animate_ref));

//# sourceMappingURL=core.js.map