// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.component');
goog.require('cljs.core');
divergence.component.component = (function component(name,attributes){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"attr","attr",1016909155),attributes], null);
});
divergence.component.sprite = (function sprite(texture){return divergence.component.component.call(null,new cljs.core.Keyword(null,"sprite","sprite",4413191735),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"texture","texture",3891054733),texture], null));
});
divergence.component.tiling_sprite = (function tiling_sprite(texture){return divergence.component.component.call(null,new cljs.core.Keyword(null,"tiling-sprite","tiling-sprite",4602967641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"texture","texture",3891054733),texture], null));
});
divergence.component.on_stage = (function on_stage(stage){return divergence.component.component.call(null,new cljs.core.Keyword(null,"stage","stage",1123661424),stage);
});
divergence.component.position = (function position(x,y,rot){return divergence.component.component.call(null,new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,rot], null));
});
divergence.component.friction = (function friction(f){return divergence.component.component.call(null,new cljs.core.Keyword(null,"friction","friction",3884153452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null));
});
divergence.component.anchor = (function anchor(x,y){return divergence.component.component.call(null,new cljs.core.Keyword(null,"anchor","anchor",3895572007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y], null));
});
divergence.component.scale = (function scale(x,y){return divergence.component.component.call(null,new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x-scale","x-scale",1537726247),x,new cljs.core.Keyword(null,"y-scale","y-scale",2425229928),y], null));
});
divergence.component.named = (function named(n){return divergence.component.component.call(null,new cljs.core.Keyword(null,"name","name",1017277949),n);
});
/**
* Gravity settings should be:
* [x-acceleration y-acceleration rot-acceleration]
*/
divergence.component.gravity = (function gravity(gravity_settings){return divergence.component.component.call(null,new cljs.core.Keyword(null,"gravity","gravity",1294427584),gravity_settings);
});
divergence.component.entity_type = (function entity_type(entity_type__$1){return divergence.component.component.call(null,new cljs.core.Keyword(null,"type","type",1017479852),entity_type__$1);
});
divergence.component.move_path = (function move_path(path){return divergence.component.component.call(null,new cljs.core.Keyword(null,"path","path",1017337751),path);
});
divergence.component.path_loop = (function path_loop(loop_QMARK_){return divergence.component.component.call(null,new cljs.core.Keyword(null,"path-loop","path-loop",589907646),loop_QMARK_);
});
divergence.component.effect = (function effect(number){return divergence.component.component.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563),number);
});
divergence.component.cleared = divergence.component.component.call(null,new cljs.core.Keyword(null,"cleared","cleared",1870681886),false);
divergence.component.path_index = divergence.component.component.call(null,new cljs.core.Keyword(null,"path-index","path-index",752100508),0);
divergence.component.path_direction = divergence.component.component.call(null,new cljs.core.Keyword(null,"direction","direction",4346280689),false);
divergence.component.items = divergence.component.component.call(null,new cljs.core.Keyword(null,"items","items",1114430258),0);
divergence.component.holding_QMARK_ = (function holding_QMARK_(itemName){return divergence.component.component.call(null,new cljs.core.Keyword(null,"holding","holding",2105666101),itemName);
});
/**
* Create a reference to the PIXI object
*/
divergence.component.create_ref = divergence.component.component.call(null,new cljs.core.Keyword(null,"create-ref","create-ref",2381964212),true);
divergence.component.player_input = divergence.component.component.call(null,new cljs.core.Keyword(null,"player-input","player-input",3958476112),true);
divergence.component.has_actions = divergence.component.component.call(null,new cljs.core.Keyword(null,"actions","actions",4147068015),cljs.core.PersistentHashSet.EMPTY);
divergence.component.movable = divergence.component.component.call(null,new cljs.core.Keyword(null,"velocity","velocity",3148165199),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
divergence.component.pushable = divergence.component.component.call(null,new cljs.core.Keyword(null,"pushable","pushable",2790267622),true);
divergence.component.text = (function text(string,style){return divergence.component.component.call(null,new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",4416885635),string,new cljs.core.Keyword(null,"style","style",1123684643),style], null));
});
divergence.component.position = (function position(x,y,rot){return divergence.component.component.call(null,new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,rot], null));
});
divergence.component.win_condition = (function win_condition(condition){return divergence.component.component.call(null,new cljs.core.Keyword(null,"win-condition","win-condition",4211796956),condition);
});
divergence.component.fps_counter = divergence.component.component.call(null,new cljs.core.Keyword(null,"fps-counter","fps-counter",2249834634),true);
divergence.component.collidable = divergence.component.component.call(null,new cljs.core.Keyword(null,"collidable","collidable",3682426451),true);
divergence.component.collision_trigger = divergence.component.component.call(null,new cljs.core.Keyword(null,"collision-trigger","collision-trigger",1837179279),true);
divergence.component.accelerates = divergence.component.component.call(null,new cljs.core.Keyword(null,"acceleration","acceleration",746604530),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null));
divergence.component.can_jump = divergence.component.component.call(null,new cljs.core.Keyword(null,"can-jump","can-jump",841018237),1);
divergence.component.can_climb = divergence.component.component.call(null,new cljs.core.Keyword(null,"can-climb","can-climb",4237636074),1);
divergence.component.climbing = divergence.component.component.call(null,new cljs.core.Keyword(null,"climbing","climbing",1929333887),0);
divergence.component.pushing = divergence.component.component.call(null,new cljs.core.Keyword(null,"pushing","pushing",794119674),false);
divergence.component.button_pushed = divergence.component.component.call(null,new cljs.core.Keyword(null,"button-pushed","button-pushed",911964070),false);
divergence.component.button_pushed_box_fall = divergence.component.component.call(null,new cljs.core.Keyword(null,"button-pushed-box-fall","button-pushed-box-fall",3166687016),0);
/**
* Anything whose state (e.g. position, velocity...) changes based of time
*/
divergence.component.time_based_state = divergence.component.component.call(null,new cljs.core.Keyword(null,"time-base-state","time-base-state",3913480455),true);
/**
* A wrapper for anything that is unique to the entity instance, and can't be transferred
*/
divergence.component.unique = (function unique(component){return cljs.core.with_meta.call(null,component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"unique","unique",4468342595)], null));
});
/**
* Anything whose state (e.g. position, velocity...) changes based of time. You should name it so it is recognizable in the timestream
*/
divergence.component.time_based_state = (function time_based_state(name){return divergence.component.component.call(null,new cljs.core.Keyword(null,"time-based-state","time-based-state",4565067369),name);
});
/**
* stores time-based state
*/
divergence.component.timestream = (function timestream(){return divergence.component.component.call(null,new cljs.core.Keyword(null,"timestream","timestream",2723317759),cljs.core.PersistentVector.EMPTY);
});
/**
* Anything that exists in a divergent timeline.
* It needs a unique name that represents that item across time.
* name should be a :keyword
*/
divergence.component.divergent = (function divergent(time_name){return divergence.component.component.call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeline","timeline",3232221107),0,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.Keyword(null,"current-node","current-node",2436467016),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.Keyword(null,"time-name","time-name",1004205309),time_name], null));
});
/**
* The difference here is that the player has the ability to create
* alternate timelines
*/
divergence.component.player_time_traveler = (function player_time_traveler(){return divergence.component.component.call(null,new cljs.core.Keyword(null,"player-time-traveler","player-time-traveler",4417459661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"traveled-back?","traveled-back?",1023163926),false], null));
});

//# sourceMappingURL=component.js.map