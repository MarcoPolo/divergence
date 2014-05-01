// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.system.time_travel');
goog.require('cljs.core');
goog.require('divergence.system');
goog.require('divergence.system');
goog.require('divergence.renderer');
goog.require('divergence.renderer');
goog.require('divergence.timeviz');
goog.require('divergence.timeviz');
goog.require('divergence.entity');
goog.require('divergence.entity');
divergence.system.time_travel.rewind_speed = 1;
divergence.system.time_travel.reverse_time = (function reverse_time(timestream,p__21030,rewind_time){var vec__21033 = p__21030;var timeline = cljs.core.nth.call(null,vec__21033,0,null);var time_left_in_timeline = cljs.core.nth.call(null,vec__21033,1,null);if((time_left_in_timeline > rewind_time))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline,(time_left_in_timeline - rewind_time)], null);
} else
{var vec__21034 = cljs.core.get_in.call(null,timestream,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline,0,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582)], null));var prev_timeline = cljs.core.nth.call(null,vec__21034,0,null);var prev_time = cljs.core.nth.call(null,vec__21034,1,null);return reverse_time.call(null,timestream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_timeline,prev_time], null),(rewind_time - time_left_in_timeline));
}
});
divergence.system.time_travel.create_divergent_entity = (function create_divergent_entity(time_event_node){var non_player = cljs.core.assoc_in.call(null,divergence.entity.non_player.call(null,divergence.renderer.stage),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),time_event_node);var vec__21036 = divergence.entity.register_entity_BANG_.call(null,non_player);var normal_e_atom = cljs.core.nth.call(null,vec__21036,0,null);var unique_e_atom = cljs.core.nth.call(null,vec__21036,1,null);divergence.system.create_ref.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unique_e_atom], null));
divergence.system.to_stage.call(null,cljs.core.deref.call(null,divergence.renderer.container),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unique_e_atom], null));
divergence.system.position.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
divergence.system.anchor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
return divergence.system.scale.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
});
/**
* This will create a new timeline with the prev-node where the current-node is
*/
divergence.system.time_travel.create_new_timeline = (function create_new_timeline(timestream,player_entity){var number_of_timelines = cljs.core.count.call(null,cljs.core.deref.call(null,timestream));var map__21038 = cljs.core.deref.call(null,player_entity).call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780));var map__21038__$1 = ((cljs.core.seq_QMARK_.call(null,map__21038))?cljs.core.apply.call(null,cljs.core.hash_map,map__21038):map__21038);var time_name = cljs.core.get.call(null,map__21038__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node = cljs.core.get.call(null,map__21038__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var new_timeline_number = number_of_timelines;cljs.core.swap_BANG_.call(null,timestream,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,cljs.core.conj.call(null,current_node,new cljs.core.Keyword(null,"forks","forks",1111523171)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new_timeline_number);
cljs.core.swap_BANG_.call(null,player_entity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_timeline_number,0], null));
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_timeline_number,0,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582)], null),current_node);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_timeline_number,0,new cljs.core.Keyword(null,"value","value",1125876963),time_name], null),cljs.core.deref.call(null,player_entity));
return divergence.system.time_travel.create_divergent_entity.call(null,current_node);
});
divergence.system.time_travel.tick_forward = (function tick_forward(timestream,entities){var player = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",4323118675),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.deref,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom)),divergence.entity.filter_entities.call(null,new cljs.core.Keyword(null,"name","name",1017277949),entities)));var map__21057 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player));var map__21057__$1 = ((cljs.core.seq_QMARK_.call(null,map__21057))?cljs.core.apply.call(null,cljs.core.hash_map,map__21057):map__21057);var vec__21058 = cljs.core.get.call(null,map__21057__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var player_timeline = cljs.core.nth.call(null,vec__21058,0,null);var _ = cljs.core.nth.call(null,vec__21058,1,null);var seq__21059 = cljs.core.seq.call(null,entities);var chunk__21061 = null;var count__21062 = 0;var i__21063 = 0;while(true){
if((i__21063 < count__21062))
{var e = cljs.core._nth.call(null,chunk__21061,i__21063);var map__21065_21075 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__21065_21076__$1 = ((cljs.core.seq_QMARK_.call(null,map__21065_21075))?cljs.core.apply.call(null,cljs.core.hash_map,map__21065_21075):map__21065_21075);var time_name_21077 = cljs.core.get.call(null,map__21065_21076__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_21078 = cljs.core.get.call(null,map__21065_21076__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var future_node_21079 = cljs.core.update_in.call(null,current_node_21078,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null),cljs.core.inc);var future_value_path_21080 = cljs.core.conj.call(null,future_node_21079,new cljs.core.Keyword(null,"value","value",1125876963),time_name_21077);var future_state_21081 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),future_value_path_21080);var n_21082 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e)));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,future_node_21079),(cljs.core.second.call(null,future_node_21079) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,future_node_21079)))], null));
if(cljs.core.truth_(future_state_21081))
{var temp__4090__auto___21083 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,future_node_21079,new cljs.core.Keyword(null,"forks","forks",1111523171)));if(cljs.core.truth_(temp__4090__auto___21083))
{var forks_21084 = temp__4090__auto___21083;cljs.core.reset_BANG_.call(null,e,future_state_21081);
var seq__21066_21085 = cljs.core.seq.call(null,forks_21084);var chunk__21067_21086 = null;var count__21068_21087 = 0;var i__21069_21088 = 0;while(true){
if((i__21069_21088 < count__21068_21087))
{var fork_21089 = cljs.core._nth.call(null,chunk__21067_21086,i__21069_21088);if(cljs.core._EQ_.call(null,fork_21089,player_timeline))
{} else
{divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_21089,0], null));
}
{
var G__21090 = seq__21066_21085;
var G__21091 = chunk__21067_21086;
var G__21092 = count__21068_21087;
var G__21093 = (i__21069_21088 + 1);
seq__21066_21085 = G__21090;
chunk__21067_21086 = G__21091;
count__21068_21087 = G__21092;
i__21069_21088 = G__21093;
continue;
}
} else
{var temp__4092__auto___21094 = cljs.core.seq.call(null,seq__21066_21085);if(temp__4092__auto___21094)
{var seq__21066_21095__$1 = temp__4092__auto___21094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21066_21095__$1))
{var c__4150__auto___21096 = cljs.core.chunk_first.call(null,seq__21066_21095__$1);{
var G__21097 = cljs.core.chunk_rest.call(null,seq__21066_21095__$1);
var G__21098 = c__4150__auto___21096;
var G__21099 = cljs.core.count.call(null,c__4150__auto___21096);
var G__21100 = 0;
seq__21066_21085 = G__21097;
chunk__21067_21086 = G__21098;
count__21068_21087 = G__21099;
i__21069_21088 = G__21100;
continue;
}
} else
{var fork_21101 = cljs.core.first.call(null,seq__21066_21095__$1);if(cljs.core._EQ_.call(null,fork_21101,player_timeline))
{} else
{divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_21101,0], null));
}
{
var G__21102 = cljs.core.next.call(null,seq__21066_21095__$1);
var G__21103 = null;
var G__21104 = 0;
var G__21105 = 0;
seq__21066_21085 = G__21102;
chunk__21067_21086 = G__21103;
count__21068_21087 = G__21104;
i__21069_21088 = G__21105;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.reset_BANG_.call(null,e,future_state_21081);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",4323118675),n_21082))
{cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,future_node_21079,cljs.core.fnil.call(null,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),future_node_21079);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,future_value_path_21080,cljs.core.deref.call(null,e));
} else
{divergence.entity.destroy_entity_BANG_.call(null,e);
}
}
{
var G__21106 = seq__21059;
var G__21107 = chunk__21061;
var G__21108 = count__21062;
var G__21109 = (i__21063 + 1);
seq__21059 = G__21106;
chunk__21061 = G__21107;
count__21062 = G__21108;
i__21063 = G__21109;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21059);if(temp__4092__auto__)
{var seq__21059__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21059__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__21059__$1);{
var G__21110 = cljs.core.chunk_rest.call(null,seq__21059__$1);
var G__21111 = c__4150__auto__;
var G__21112 = cljs.core.count.call(null,c__4150__auto__);
var G__21113 = 0;
seq__21059 = G__21110;
chunk__21061 = G__21111;
count__21062 = G__21112;
i__21063 = G__21113;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__21059__$1);var map__21070_21114 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__21070_21115__$1 = ((cljs.core.seq_QMARK_.call(null,map__21070_21114))?cljs.core.apply.call(null,cljs.core.hash_map,map__21070_21114):map__21070_21114);var time_name_21116 = cljs.core.get.call(null,map__21070_21115__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_21117 = cljs.core.get.call(null,map__21070_21115__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var future_node_21118 = cljs.core.update_in.call(null,current_node_21117,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null),cljs.core.inc);var future_value_path_21119 = cljs.core.conj.call(null,future_node_21118,new cljs.core.Keyword(null,"value","value",1125876963),time_name_21116);var future_state_21120 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),future_value_path_21119);var n_21121 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e)));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,future_node_21118),(cljs.core.second.call(null,future_node_21118) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,future_node_21118)))], null));
if(cljs.core.truth_(future_state_21120))
{var temp__4090__auto___21122 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,future_node_21118,new cljs.core.Keyword(null,"forks","forks",1111523171)));if(cljs.core.truth_(temp__4090__auto___21122))
{var forks_21123 = temp__4090__auto___21122;cljs.core.reset_BANG_.call(null,e,future_state_21120);
var seq__21071_21124 = cljs.core.seq.call(null,forks_21123);var chunk__21072_21125 = null;var count__21073_21126 = 0;var i__21074_21127 = 0;while(true){
if((i__21074_21127 < count__21073_21126))
{var fork_21128 = cljs.core._nth.call(null,chunk__21072_21125,i__21074_21127);if(cljs.core._EQ_.call(null,fork_21128,player_timeline))
{} else
{divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_21128,0], null));
}
{
var G__21129 = seq__21071_21124;
var G__21130 = chunk__21072_21125;
var G__21131 = count__21073_21126;
var G__21132 = (i__21074_21127 + 1);
seq__21071_21124 = G__21129;
chunk__21072_21125 = G__21130;
count__21073_21126 = G__21131;
i__21074_21127 = G__21132;
continue;
}
} else
{var temp__4092__auto___21133__$1 = cljs.core.seq.call(null,seq__21071_21124);if(temp__4092__auto___21133__$1)
{var seq__21071_21134__$1 = temp__4092__auto___21133__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21071_21134__$1))
{var c__4150__auto___21135 = cljs.core.chunk_first.call(null,seq__21071_21134__$1);{
var G__21136 = cljs.core.chunk_rest.call(null,seq__21071_21134__$1);
var G__21137 = c__4150__auto___21135;
var G__21138 = cljs.core.count.call(null,c__4150__auto___21135);
var G__21139 = 0;
seq__21071_21124 = G__21136;
chunk__21072_21125 = G__21137;
count__21073_21126 = G__21138;
i__21074_21127 = G__21139;
continue;
}
} else
{var fork_21140 = cljs.core.first.call(null,seq__21071_21134__$1);if(cljs.core._EQ_.call(null,fork_21140,player_timeline))
{} else
{divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_21140,0], null));
}
{
var G__21141 = cljs.core.next.call(null,seq__21071_21134__$1);
var G__21142 = null;
var G__21143 = 0;
var G__21144 = 0;
seq__21071_21124 = G__21141;
chunk__21072_21125 = G__21142;
count__21073_21126 = G__21143;
i__21074_21127 = G__21144;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.reset_BANG_.call(null,e,future_state_21120);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",4323118675),n_21121))
{cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,future_node_21118,cljs.core.fnil.call(null,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),future_node_21118);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,future_value_path_21119,cljs.core.deref.call(null,e));
} else
{divergence.entity.destroy_entity_BANG_.call(null,e);
}
}
{
var G__21145 = cljs.core.next.call(null,seq__21059__$1);
var G__21146 = null;
var G__21147 = 0;
var G__21148 = 0;
seq__21059 = G__21145;
chunk__21061 = G__21146;
count__21062 = G__21147;
i__21063 = G__21148;
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
divergence.system.time_travel.tick_backwards = (function tick_backwards(timestream,entities){var seq__21159 = cljs.core.seq.call(null,entities);var chunk__21161 = null;var count__21162 = 0;var i__21163 = 0;while(true){
if((i__21163 < count__21162))
{var e = cljs.core._nth.call(null,chunk__21161,i__21163);var map__21165_21169 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__21165_21170__$1 = ((cljs.core.seq_QMARK_.call(null,map__21165_21169))?cljs.core.apply.call(null,cljs.core.hash_map,map__21165_21169):map__21165_21169);var time_name_21171 = cljs.core.get.call(null,map__21165_21170__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_21172 = cljs.core.get.call(null,map__21165_21170__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var unique_e_21173 = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e);var vec__21166_21174 = current_node_21172;var current_timeline_21175 = cljs.core.nth.call(null,vec__21166_21174,0,null);var time_in_timeline_21176 = cljs.core.nth.call(null,vec__21166_21174,1,null);var past_node_21177 = divergence.system.time_travel.reverse_time.call(null,cljs.core.deref.call(null,timestream),current_node_21172,divergence.system.time_travel.rewind_speed);var past_state_21178 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,past_node_21177,new cljs.core.Keyword(null,"value","value",1125876963),time_name_21171));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,past_node_21177),(cljs.core.second.call(null,past_node_21177) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,past_node_21177)))], null),13250351);
if(((time_in_timeline_21176 <= divergence.system.time_travel.rewind_speed)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"non-player","non-player",841088339),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unique_e_21173)))))
{divergence.entity.destroy_entity_BANG_.call(null,e);
} else
{cljs.core.reset_BANG_.call(null,e,past_state_21178);
}
{
var G__21179 = seq__21159;
var G__21180 = chunk__21161;
var G__21181 = count__21162;
var G__21182 = (i__21163 + 1);
seq__21159 = G__21179;
chunk__21161 = G__21180;
count__21162 = G__21181;
i__21163 = G__21182;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21159);if(temp__4092__auto__)
{var seq__21159__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21159__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__21159__$1);{
var G__21183 = cljs.core.chunk_rest.call(null,seq__21159__$1);
var G__21184 = c__4150__auto__;
var G__21185 = cljs.core.count.call(null,c__4150__auto__);
var G__21186 = 0;
seq__21159 = G__21183;
chunk__21161 = G__21184;
count__21162 = G__21185;
i__21163 = G__21186;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__21159__$1);var map__21167_21187 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__21167_21188__$1 = ((cljs.core.seq_QMARK_.call(null,map__21167_21187))?cljs.core.apply.call(null,cljs.core.hash_map,map__21167_21187):map__21167_21187);var time_name_21189 = cljs.core.get.call(null,map__21167_21188__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_21190 = cljs.core.get.call(null,map__21167_21188__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var unique_e_21191 = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e);var vec__21168_21192 = current_node_21190;var current_timeline_21193 = cljs.core.nth.call(null,vec__21168_21192,0,null);var time_in_timeline_21194 = cljs.core.nth.call(null,vec__21168_21192,1,null);var past_node_21195 = divergence.system.time_travel.reverse_time.call(null,cljs.core.deref.call(null,timestream),current_node_21190,divergence.system.time_travel.rewind_speed);var past_state_21196 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,past_node_21195,new cljs.core.Keyword(null,"value","value",1125876963),time_name_21189));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,past_node_21195),(cljs.core.second.call(null,past_node_21195) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,past_node_21195)))], null),13250351);
if(((time_in_timeline_21194 <= divergence.system.time_travel.rewind_speed)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"non-player","non-player",841088339),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unique_e_21191)))))
{divergence.entity.destroy_entity_BANG_.call(null,e);
} else
{cljs.core.reset_BANG_.call(null,e,past_state_21196);
}
{
var G__21197 = cljs.core.next.call(null,seq__21159__$1);
var G__21198 = null;
var G__21199 = 0;
var G__21200 = 0;
seq__21159 = G__21197;
chunk__21161 = G__21198;
count__21162 = G__21199;
i__21163 = G__21200;
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
divergence.system.time_travel.animate_timetravel_backwards = (function animate_timetravel_backwards(){return (divergence.renderer.stage["filters"] = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.renderer.blur,divergence.renderer.gray], null)));
});
divergence.system.time_travel.clear_animations = (function clear_animations(){return (divergence.renderer.stage["filters"] = null);
});
/**
* Entry function for traveling through time forward and backwards
*/
divergence.system.time_travel.time_travel = (function time_travel(timestream,divergent_entities,player_entity){var normal_player_entity = cljs.core.deref.call(null,divergence.entity.unique_entity_atom__GT_entity_atom).call(null,player_entity);var actions = cljs.core.deref.call(null,normal_player_entity).call(null,new cljs.core.Keyword(null,"actions","actions",4147068015));var traveling_back_QMARK_ = actions.call(null,new cljs.core.Keyword(null,"travel-back","travel-back",642120492));var traveled_back_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,player_entity),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-time-traveler","player-time-traveler",4417459661),new cljs.core.Keyword(null,"traveled-back?","traveled-back?",1023163926)], null));if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.not.call(null,traveling_back_QMARK_);if(and__3396__auto__)
{return traveled_back_QMARK_;
} else
{return and__3396__auto__;
}
})()))
{cljs.core.swap_BANG_.call(null,player_entity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-time-traveler","player-time-traveler",4417459661),new cljs.core.Keyword(null,"traveled-back?","traveled-back?",1023163926)], null),false);
divergence.system.time_travel.create_new_timeline.call(null,timestream,normal_player_entity);
} else
{}
if(cljs.core.truth_(traveling_back_QMARK_))
{divergence.system.time_travel.animate_timetravel_backwards.call(null);
divergence.system.time_travel.tick_backwards.call(null,timestream,divergent_entities);
return cljs.core.swap_BANG_.call(null,player_entity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-time-traveler","player-time-traveler",4417459661),new cljs.core.Keyword(null,"traveled-back?","traveled-back?",1023163926)], null),true);
} else
{divergence.system.time_travel.clear_animations.call(null);
return divergence.system.time_travel.tick_forward.call(null,timestream,divergent_entities);
}
});

//# sourceMappingURL=time_travel.js.map