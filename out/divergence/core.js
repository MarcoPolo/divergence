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
divergence.core.setup = (function setup(entities){var seq__20638_20642 = cljs.core.seq.call(null,entities);var chunk__20639_20643 = null;var count__20640_20644 = 0;var i__20641_20645 = 0;while(true){
if((i__20641_20645 < count__20640_20644))
{var e_20646 = cljs.core._nth.call(null,chunk__20639_20643,i__20641_20645);divergence.entity.register_entity_BANG_.call(null,e_20646);
{
var G__20647 = seq__20638_20642;
var G__20648 = chunk__20639_20643;
var G__20649 = count__20640_20644;
var G__20650 = (i__20641_20645 + 1);
seq__20638_20642 = G__20647;
chunk__20639_20643 = G__20648;
count__20640_20644 = G__20649;
i__20641_20645 = G__20650;
continue;
}
} else
{var temp__4092__auto___20651 = cljs.core.seq.call(null,seq__20638_20642);if(temp__4092__auto___20651)
{var seq__20638_20652__$1 = temp__4092__auto___20651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20638_20652__$1))
{var c__4150__auto___20653 = cljs.core.chunk_first.call(null,seq__20638_20652__$1);{
var G__20654 = cljs.core.chunk_rest.call(null,seq__20638_20652__$1);
var G__20655 = c__4150__auto___20653;
var G__20656 = cljs.core.count.call(null,c__4150__auto___20653);
var G__20657 = 0;
seq__20638_20642 = G__20654;
chunk__20639_20643 = G__20655;
count__20640_20644 = G__20656;
i__20641_20645 = G__20657;
continue;
}
} else
{var e_20658 = cljs.core.first.call(null,seq__20638_20652__$1);divergence.entity.register_entity_BANG_.call(null,e_20658);
{
var G__20659 = cljs.core.next.call(null,seq__20638_20652__$1);
var G__20660 = null;
var G__20661 = 0;
var G__20662 = 0;
seq__20638_20642 = G__20659;
chunk__20639_20643 = G__20660;
count__20640_20644 = G__20661;
i__20641_20645 = G__20662;
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
divergence.core.load_level = (function load_level(){var c__GT_e = divergence.entity.component__GT_entities;var seq__20667_20671 = cljs.core.seq.call(null,c__GT_e.call(null,new cljs.core.Keyword(null,"position","position",1761709211)));var chunk__20668_20672 = null;var count__20669_20673 = 0;var i__20670_20674 = 0;while(true){
if((i__20670_20674 < count__20669_20673))
{var things_with_positions_20675 = cljs.core._nth.call(null,chunk__20668_20672,i__20670_20674);divergence.entity.destroy_entity_BANG_.call(null,things_with_positions_20675);
{
var G__20676 = seq__20667_20671;
var G__20677 = chunk__20668_20672;
var G__20678 = count__20669_20673;
var G__20679 = (i__20670_20674 + 1);
seq__20667_20671 = G__20676;
chunk__20668_20672 = G__20677;
count__20669_20673 = G__20678;
i__20670_20674 = G__20679;
continue;
}
} else
{var temp__4092__auto___20680 = cljs.core.seq.call(null,seq__20667_20671);if(temp__4092__auto___20680)
{var seq__20667_20681__$1 = temp__4092__auto___20680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20667_20681__$1))
{var c__4150__auto___20682 = cljs.core.chunk_first.call(null,seq__20667_20681__$1);{
var G__20683 = cljs.core.chunk_rest.call(null,seq__20667_20681__$1);
var G__20684 = c__4150__auto___20682;
var G__20685 = cljs.core.count.call(null,c__4150__auto___20682);
var G__20686 = 0;
seq__20667_20671 = G__20683;
chunk__20668_20672 = G__20684;
count__20669_20673 = G__20685;
i__20670_20674 = G__20686;
continue;
}
} else
{var things_with_positions_20687 = cljs.core.first.call(null,seq__20667_20681__$1);divergence.entity.destroy_entity_BANG_.call(null,things_with_positions_20687);
{
var G__20688 = cljs.core.next.call(null,seq__20667_20681__$1);
var G__20689 = null;
var G__20690 = 0;
var G__20691 = 0;
seq__20667_20671 = G__20688;
chunk__20668_20672 = G__20689;
count__20669_20673 = G__20690;
i__20670_20674 = G__20691;
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