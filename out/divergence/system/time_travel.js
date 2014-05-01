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
divergence.system.time_travel.reverse_time = (function reverse_time(timestream,p__7030,rewind_time){var vec__7033 = p__7030;var timeline = cljs.core.nth.call(null,vec__7033,0,null);var time_left_in_timeline = cljs.core.nth.call(null,vec__7033,1,null);if((time_left_in_timeline > rewind_time))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline,(time_left_in_timeline - rewind_time)], null);
} else
{var vec__7034 = cljs.core.get_in.call(null,timestream,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline,0,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582)], null));var prev_timeline = cljs.core.nth.call(null,vec__7034,0,null);var prev_time = cljs.core.nth.call(null,vec__7034,1,null);return reverse_time.call(null,timestream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_timeline,prev_time], null),(rewind_time - time_left_in_timeline));
}
});
divergence.system.time_travel.create_divergent_entity = (function create_divergent_entity(time_event_node){var non_player = cljs.core.assoc_in.call(null,divergence.entity.non_player.call(null,divergence.renderer.stage),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),time_event_node);var vec__7036 = divergence.entity.register_entity_BANG_.call(null,non_player);var normal_e_atom = cljs.core.nth.call(null,vec__7036,0,null);var unique_e_atom = cljs.core.nth.call(null,vec__7036,1,null);divergence.system.create_ref.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unique_e_atom], null));
divergence.system.to_stage.call(null,cljs.core.deref.call(null,divergence.renderer.container),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unique_e_atom], null));
divergence.system.position.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
divergence.system.anchor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
return divergence.system.scale.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
});
/**
* This will create a new timeline with the prev-node where the current-node is
*/
divergence.system.time_travel.create_new_timeline = (function create_new_timeline(timestream,player_entity){var number_of_timelines = cljs.core.count.call(null,cljs.core.deref.call(null,timestream));var map__7038 = cljs.core.deref.call(null,player_entity).call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780));var map__7038__$1 = ((cljs.core.seq_QMARK_.call(null,map__7038))?cljs.core.apply.call(null,cljs.core.hash_map,map__7038):map__7038);var time_name = cljs.core.get.call(null,map__7038__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node = cljs.core.get.call(null,map__7038__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var new_timeline_number = number_of_timelines;cljs.core.swap_BANG_.call(null,timestream,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,cljs.core.conj.call(null,current_node,new cljs.core.Keyword(null,"forks","forks",1111523171)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new_timeline_number);
cljs.core.swap_BANG_.call(null,player_entity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_timeline_number,0], null));
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_timeline_number,0,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582)], null),current_node);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_timeline_number,0,new cljs.core.Keyword(null,"value","value",1125876963),time_name], null),cljs.core.deref.call(null,player_entity));
return divergence.system.time_travel.create_divergent_entity.call(null,current_node);
});
/**
* Fork the entity into another timeline, if a fork is found
*/
divergence.system.time_travel.fork_entity = (function fork_entity(timestream,entities){return null;
});
divergence.system.time_travel.tick_forward = (function tick_forward(timestream,entities){var seq__7055 = cljs.core.seq.call(null,entities);var chunk__7057 = null;var count__7058 = 0;var i__7059 = 0;while(true){
if((i__7059 < count__7058))
{var e = cljs.core._nth.call(null,chunk__7057,i__7059);var map__7061_7071 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__7061_7072__$1 = ((cljs.core.seq_QMARK_.call(null,map__7061_7071))?cljs.core.apply.call(null,cljs.core.hash_map,map__7061_7071):map__7061_7071);var time_name_7073 = cljs.core.get.call(null,map__7061_7072__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_7074 = cljs.core.get.call(null,map__7061_7072__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var future_node_7075 = cljs.core.update_in.call(null,current_node_7074,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null),cljs.core.inc);var future_value_path_7076 = cljs.core.conj.call(null,future_node_7075,new cljs.core.Keyword(null,"value","value",1125876963),time_name_7073);var future_state_7077 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),future_value_path_7076);var n_7078 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e)));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,future_node_7075),(cljs.core.second.call(null,future_node_7075) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,future_node_7075)))], null));
if(cljs.core.truth_(future_state_7077))
{var temp__4090__auto___7079 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,future_node_7075,new cljs.core.Keyword(null,"forks","forks",1111523171)));if(cljs.core.truth_(temp__4090__auto___7079))
{var forks_7080 = temp__4090__auto___7079;cljs.core.reset_BANG_.call(null,e,future_state_7077);
var seq__7062_7081 = cljs.core.seq.call(null,forks_7080);var chunk__7063_7082 = null;var count__7064_7083 = 0;var i__7065_7084 = 0;while(true){
if((i__7065_7084 < count__7064_7083))
{var fork_7085 = cljs.core._nth.call(null,chunk__7063_7082,i__7065_7084);divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_7085,0], null));
{
var G__7086 = seq__7062_7081;
var G__7087 = chunk__7063_7082;
var G__7088 = count__7064_7083;
var G__7089 = (i__7065_7084 + 1);
seq__7062_7081 = G__7086;
chunk__7063_7082 = G__7087;
count__7064_7083 = G__7088;
i__7065_7084 = G__7089;
continue;
}
} else
{var temp__4092__auto___7090 = cljs.core.seq.call(null,seq__7062_7081);if(temp__4092__auto___7090)
{var seq__7062_7091__$1 = temp__4092__auto___7090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7062_7091__$1))
{var c__4150__auto___7092 = cljs.core.chunk_first.call(null,seq__7062_7091__$1);{
var G__7093 = cljs.core.chunk_rest.call(null,seq__7062_7091__$1);
var G__7094 = c__4150__auto___7092;
var G__7095 = cljs.core.count.call(null,c__4150__auto___7092);
var G__7096 = 0;
seq__7062_7081 = G__7093;
chunk__7063_7082 = G__7094;
count__7064_7083 = G__7095;
i__7065_7084 = G__7096;
continue;
}
} else
{var fork_7097 = cljs.core.first.call(null,seq__7062_7091__$1);divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_7097,0], null));
{
var G__7098 = cljs.core.next.call(null,seq__7062_7091__$1);
var G__7099 = null;
var G__7100 = 0;
var G__7101 = 0;
seq__7062_7081 = G__7098;
chunk__7063_7082 = G__7099;
count__7064_7083 = G__7100;
i__7065_7084 = G__7101;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.reset_BANG_.call(null,e,future_state_7077);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",4323118675),n_7078))
{cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,future_node_7075,cljs.core.fnil.call(null,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),future_node_7075);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,future_value_path_7076,cljs.core.deref.call(null,e));
} else
{divergence.entity.destroy_entity_BANG_.call(null,e);
}
}
{
var G__7102 = seq__7055;
var G__7103 = chunk__7057;
var G__7104 = count__7058;
var G__7105 = (i__7059 + 1);
seq__7055 = G__7102;
chunk__7057 = G__7103;
count__7058 = G__7104;
i__7059 = G__7105;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7055);if(temp__4092__auto__)
{var seq__7055__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7055__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7055__$1);{
var G__7106 = cljs.core.chunk_rest.call(null,seq__7055__$1);
var G__7107 = c__4150__auto__;
var G__7108 = cljs.core.count.call(null,c__4150__auto__);
var G__7109 = 0;
seq__7055 = G__7106;
chunk__7057 = G__7107;
count__7058 = G__7108;
i__7059 = G__7109;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7055__$1);var map__7066_7110 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__7066_7111__$1 = ((cljs.core.seq_QMARK_.call(null,map__7066_7110))?cljs.core.apply.call(null,cljs.core.hash_map,map__7066_7110):map__7066_7110);var time_name_7112 = cljs.core.get.call(null,map__7066_7111__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_7113 = cljs.core.get.call(null,map__7066_7111__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var future_node_7114 = cljs.core.update_in.call(null,current_node_7113,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null),cljs.core.inc);var future_value_path_7115 = cljs.core.conj.call(null,future_node_7114,new cljs.core.Keyword(null,"value","value",1125876963),time_name_7112);var future_state_7116 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),future_value_path_7115);var n_7117 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e)));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,future_node_7114),(cljs.core.second.call(null,future_node_7114) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,future_node_7114)))], null));
if(cljs.core.truth_(future_state_7116))
{var temp__4090__auto___7118 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,future_node_7114,new cljs.core.Keyword(null,"forks","forks",1111523171)));if(cljs.core.truth_(temp__4090__auto___7118))
{var forks_7119 = temp__4090__auto___7118;cljs.core.reset_BANG_.call(null,e,future_state_7116);
var seq__7067_7120 = cljs.core.seq.call(null,forks_7119);var chunk__7068_7121 = null;var count__7069_7122 = 0;var i__7070_7123 = 0;while(true){
if((i__7070_7123 < count__7069_7122))
{var fork_7124 = cljs.core._nth.call(null,chunk__7068_7121,i__7070_7123);divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_7124,0], null));
{
var G__7125 = seq__7067_7120;
var G__7126 = chunk__7068_7121;
var G__7127 = count__7069_7122;
var G__7128 = (i__7070_7123 + 1);
seq__7067_7120 = G__7125;
chunk__7068_7121 = G__7126;
count__7069_7122 = G__7127;
i__7070_7123 = G__7128;
continue;
}
} else
{var temp__4092__auto___7129__$1 = cljs.core.seq.call(null,seq__7067_7120);if(temp__4092__auto___7129__$1)
{var seq__7067_7130__$1 = temp__4092__auto___7129__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7067_7130__$1))
{var c__4150__auto___7131 = cljs.core.chunk_first.call(null,seq__7067_7130__$1);{
var G__7132 = cljs.core.chunk_rest.call(null,seq__7067_7130__$1);
var G__7133 = c__4150__auto___7131;
var G__7134 = cljs.core.count.call(null,c__4150__auto___7131);
var G__7135 = 0;
seq__7067_7120 = G__7132;
chunk__7068_7121 = G__7133;
count__7069_7122 = G__7134;
i__7070_7123 = G__7135;
continue;
}
} else
{var fork_7136 = cljs.core.first.call(null,seq__7067_7130__$1);divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_7136,0], null));
{
var G__7137 = cljs.core.next.call(null,seq__7067_7130__$1);
var G__7138 = null;
var G__7139 = 0;
var G__7140 = 0;
seq__7067_7120 = G__7137;
chunk__7068_7121 = G__7138;
count__7069_7122 = G__7139;
i__7070_7123 = G__7140;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.reset_BANG_.call(null,e,future_state_7116);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",4323118675),n_7117))
{cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,future_node_7114,cljs.core.fnil.call(null,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),future_node_7114);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,future_value_path_7115,cljs.core.deref.call(null,e));
} else
{divergence.entity.destroy_entity_BANG_.call(null,e);
}
}
{
var G__7141 = cljs.core.next.call(null,seq__7055__$1);
var G__7142 = null;
var G__7143 = 0;
var G__7144 = 0;
seq__7055 = G__7141;
chunk__7057 = G__7142;
count__7058 = G__7143;
i__7059 = G__7144;
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
divergence.system.time_travel.tick_backwards = (function tick_backwards(timestream,entities){var seq__7155 = cljs.core.seq.call(null,entities);var chunk__7157 = null;var count__7158 = 0;var i__7159 = 0;while(true){
if((i__7159 < count__7158))
{var e = cljs.core._nth.call(null,chunk__7157,i__7159);var map__7161_7165 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__7161_7166__$1 = ((cljs.core.seq_QMARK_.call(null,map__7161_7165))?cljs.core.apply.call(null,cljs.core.hash_map,map__7161_7165):map__7161_7165);var time_name_7167 = cljs.core.get.call(null,map__7161_7166__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_7168 = cljs.core.get.call(null,map__7161_7166__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var unique_e_7169 = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e);var vec__7162_7170 = current_node_7168;var current_timeline_7171 = cljs.core.nth.call(null,vec__7162_7170,0,null);var time_in_timeline_7172 = cljs.core.nth.call(null,vec__7162_7170,1,null);var past_node_7173 = divergence.system.time_travel.reverse_time.call(null,cljs.core.deref.call(null,timestream),current_node_7168,divergence.system.time_travel.rewind_speed);var past_state_7174 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,past_node_7173,new cljs.core.Keyword(null,"value","value",1125876963),time_name_7167));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,past_node_7173),(cljs.core.second.call(null,past_node_7173) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,past_node_7173)))], null),13250351);
if(((time_in_timeline_7172 <= divergence.system.time_travel.rewind_speed)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"non-player","non-player",841088339),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unique_e_7169)))))
{divergence.entity.destroy_entity_BANG_.call(null,e);
} else
{cljs.core.reset_BANG_.call(null,e,past_state_7174);
}
{
var G__7175 = seq__7155;
var G__7176 = chunk__7157;
var G__7177 = count__7158;
var G__7178 = (i__7159 + 1);
seq__7155 = G__7175;
chunk__7157 = G__7176;
count__7158 = G__7177;
i__7159 = G__7178;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7155);if(temp__4092__auto__)
{var seq__7155__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7155__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7155__$1);{
var G__7179 = cljs.core.chunk_rest.call(null,seq__7155__$1);
var G__7180 = c__4150__auto__;
var G__7181 = cljs.core.count.call(null,c__4150__auto__);
var G__7182 = 0;
seq__7155 = G__7179;
chunk__7157 = G__7180;
count__7158 = G__7181;
i__7159 = G__7182;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7155__$1);var map__7163_7183 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__7163_7184__$1 = ((cljs.core.seq_QMARK_.call(null,map__7163_7183))?cljs.core.apply.call(null,cljs.core.hash_map,map__7163_7183):map__7163_7183);var time_name_7185 = cljs.core.get.call(null,map__7163_7184__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_7186 = cljs.core.get.call(null,map__7163_7184__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var unique_e_7187 = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e);var vec__7164_7188 = current_node_7186;var current_timeline_7189 = cljs.core.nth.call(null,vec__7164_7188,0,null);var time_in_timeline_7190 = cljs.core.nth.call(null,vec__7164_7188,1,null);var past_node_7191 = divergence.system.time_travel.reverse_time.call(null,cljs.core.deref.call(null,timestream),current_node_7186,divergence.system.time_travel.rewind_speed);var past_state_7192 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,past_node_7191,new cljs.core.Keyword(null,"value","value",1125876963),time_name_7185));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,past_node_7191),(cljs.core.second.call(null,past_node_7191) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,past_node_7191)))], null),13250351);
if(((time_in_timeline_7190 <= divergence.system.time_travel.rewind_speed)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"non-player","non-player",841088339),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unique_e_7187)))))
{divergence.entity.destroy_entity_BANG_.call(null,e);
} else
{cljs.core.reset_BANG_.call(null,e,past_state_7192);
}
{
var G__7193 = cljs.core.next.call(null,seq__7155__$1);
var G__7194 = null;
var G__7195 = 0;
var G__7196 = 0;
seq__7155 = G__7193;
chunk__7157 = G__7194;
count__7158 = G__7195;
i__7159 = G__7196;
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
{divergence.system.time_travel.tick_backwards.call(null,timestream,divergent_entities);
return cljs.core.swap_BANG_.call(null,player_entity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-time-traveler","player-time-traveler",4417459661),new cljs.core.Keyword(null,"traveled-back?","traveled-back?",1023163926)], null),true);
} else
{return divergence.system.time_travel.tick_forward.call(null,timestream,divergent_entities);
}
});

//# sourceMappingURL=time_travel.js.map