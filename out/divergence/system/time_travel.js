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
divergence.system.time_travel.reverse_time = (function reverse_time(timestream,p__20859,rewind_time){var vec__20862 = p__20859;var timeline = cljs.core.nth.call(null,vec__20862,0,null);var time_left_in_timeline = cljs.core.nth.call(null,vec__20862,1,null);if((time_left_in_timeline > rewind_time))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline,(time_left_in_timeline - rewind_time)], null);
} else
{var vec__20863 = cljs.core.get_in.call(null,timestream,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline,0,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582)], null));var prev_timeline = cljs.core.nth.call(null,vec__20863,0,null);var prev_time = cljs.core.nth.call(null,vec__20863,1,null);return reverse_time.call(null,timestream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_timeline,prev_time], null),(rewind_time - time_left_in_timeline));
}
});
divergence.system.time_travel.create_divergent_entity = (function create_divergent_entity(time_event_node){var non_player = cljs.core.assoc_in.call(null,divergence.entity.non_player.call(null,divergence.renderer.stage),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),time_event_node);var vec__20865 = divergence.entity.register_entity_BANG_.call(null,non_player);var normal_e_atom = cljs.core.nth.call(null,vec__20865,0,null);var unique_e_atom = cljs.core.nth.call(null,vec__20865,1,null);divergence.system.create_ref.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unique_e_atom], null));
divergence.system.to_stage.call(null,cljs.core.deref.call(null,divergence.renderer.container),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unique_e_atom], null));
divergence.system.position.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
divergence.system.anchor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
return divergence.system.scale.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
});
/**
* This will create a new timeline with the prev-node where the current-node is
*/
divergence.system.time_travel.create_new_timeline = (function create_new_timeline(timestream,player_entity){var number_of_timelines = cljs.core.count.call(null,cljs.core.deref.call(null,timestream));var map__20867 = cljs.core.deref.call(null,player_entity).call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780));var map__20867__$1 = ((cljs.core.seq_QMARK_.call(null,map__20867))?cljs.core.apply.call(null,cljs.core.hash_map,map__20867):map__20867);var time_name = cljs.core.get.call(null,map__20867__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node = cljs.core.get.call(null,map__20867__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var new_timeline_number = number_of_timelines;cljs.core.swap_BANG_.call(null,timestream,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,cljs.core.conj.call(null,current_node,new cljs.core.Keyword(null,"forks","forks",1111523171)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new_timeline_number);
cljs.core.swap_BANG_.call(null,player_entity,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_timeline_number,0], null));
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_timeline_number,0,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582)], null),current_node);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_timeline_number,0,new cljs.core.Keyword(null,"value","value",1125876963),time_name], null),cljs.core.deref.call(null,player_entity));
return divergence.system.time_travel.create_divergent_entity.call(null,current_node);
});
divergence.system.time_travel.tick_forward = (function tick_forward(timestream,entities){var player = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",4323118675),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.deref,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom)),divergence.entity.filter_entities.call(null,new cljs.core.Keyword(null,"name","name",1017277949),entities)));var map__20886 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player));var map__20886__$1 = ((cljs.core.seq_QMARK_.call(null,map__20886))?cljs.core.apply.call(null,cljs.core.hash_map,map__20886):map__20886);var vec__20887 = cljs.core.get.call(null,map__20886__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var player_timeline = cljs.core.nth.call(null,vec__20887,0,null);var _ = cljs.core.nth.call(null,vec__20887,1,null);var seq__20888 = cljs.core.seq.call(null,entities);var chunk__20890 = null;var count__20891 = 0;var i__20892 = 0;while(true){
if((i__20892 < count__20891))
{var e = cljs.core._nth.call(null,chunk__20890,i__20892);var map__20894_20904 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__20894_20905__$1 = ((cljs.core.seq_QMARK_.call(null,map__20894_20904))?cljs.core.apply.call(null,cljs.core.hash_map,map__20894_20904):map__20894_20904);var time_name_20906 = cljs.core.get.call(null,map__20894_20905__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_20907 = cljs.core.get.call(null,map__20894_20905__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var future_node_20908 = cljs.core.update_in.call(null,current_node_20907,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null),cljs.core.inc);var future_value_path_20909 = cljs.core.conj.call(null,future_node_20908,new cljs.core.Keyword(null,"value","value",1125876963),time_name_20906);var future_state_20910 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),future_value_path_20909);var n_20911 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e)));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,future_node_20908),(cljs.core.second.call(null,future_node_20908) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,future_node_20908)))], null));
if(cljs.core.truth_(future_state_20910))
{var temp__4090__auto___20912 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,future_node_20908,new cljs.core.Keyword(null,"forks","forks",1111523171)));if(cljs.core.truth_(temp__4090__auto___20912))
{var forks_20913 = temp__4090__auto___20912;cljs.core.reset_BANG_.call(null,e,future_state_20910);
var seq__20895_20914 = cljs.core.seq.call(null,forks_20913);var chunk__20896_20915 = null;var count__20897_20916 = 0;var i__20898_20917 = 0;while(true){
if((i__20898_20917 < count__20897_20916))
{var fork_20918 = cljs.core._nth.call(null,chunk__20896_20915,i__20898_20917);if(cljs.core._EQ_.call(null,fork_20918,player_timeline))
{} else
{divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_20918,0], null));
}
{
var G__20919 = seq__20895_20914;
var G__20920 = chunk__20896_20915;
var G__20921 = count__20897_20916;
var G__20922 = (i__20898_20917 + 1);
seq__20895_20914 = G__20919;
chunk__20896_20915 = G__20920;
count__20897_20916 = G__20921;
i__20898_20917 = G__20922;
continue;
}
} else
{var temp__4092__auto___20923 = cljs.core.seq.call(null,seq__20895_20914);if(temp__4092__auto___20923)
{var seq__20895_20924__$1 = temp__4092__auto___20923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20895_20924__$1))
{var c__4150__auto___20925 = cljs.core.chunk_first.call(null,seq__20895_20924__$1);{
var G__20926 = cljs.core.chunk_rest.call(null,seq__20895_20924__$1);
var G__20927 = c__4150__auto___20925;
var G__20928 = cljs.core.count.call(null,c__4150__auto___20925);
var G__20929 = 0;
seq__20895_20914 = G__20926;
chunk__20896_20915 = G__20927;
count__20897_20916 = G__20928;
i__20898_20917 = G__20929;
continue;
}
} else
{var fork_20930 = cljs.core.first.call(null,seq__20895_20924__$1);if(cljs.core._EQ_.call(null,fork_20930,player_timeline))
{} else
{divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_20930,0], null));
}
{
var G__20931 = cljs.core.next.call(null,seq__20895_20924__$1);
var G__20932 = null;
var G__20933 = 0;
var G__20934 = 0;
seq__20895_20914 = G__20931;
chunk__20896_20915 = G__20932;
count__20897_20916 = G__20933;
i__20898_20917 = G__20934;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.reset_BANG_.call(null,e,future_state_20910);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",4323118675),n_20911))
{cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,future_node_20908,cljs.core.fnil.call(null,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),future_node_20908);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,future_value_path_20909,cljs.core.deref.call(null,e));
} else
{divergence.entity.destroy_entity_BANG_.call(null,e);
}
}
{
var G__20935 = seq__20888;
var G__20936 = chunk__20890;
var G__20937 = count__20891;
var G__20938 = (i__20892 + 1);
seq__20888 = G__20935;
chunk__20890 = G__20936;
count__20891 = G__20937;
i__20892 = G__20938;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20888);if(temp__4092__auto__)
{var seq__20888__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20888__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__20888__$1);{
var G__20939 = cljs.core.chunk_rest.call(null,seq__20888__$1);
var G__20940 = c__4150__auto__;
var G__20941 = cljs.core.count.call(null,c__4150__auto__);
var G__20942 = 0;
seq__20888 = G__20939;
chunk__20890 = G__20940;
count__20891 = G__20941;
i__20892 = G__20942;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__20888__$1);var map__20899_20943 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__20899_20944__$1 = ((cljs.core.seq_QMARK_.call(null,map__20899_20943))?cljs.core.apply.call(null,cljs.core.hash_map,map__20899_20943):map__20899_20943);var time_name_20945 = cljs.core.get.call(null,map__20899_20944__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_20946 = cljs.core.get.call(null,map__20899_20944__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var future_node_20947 = cljs.core.update_in.call(null,current_node_20946,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null),cljs.core.inc);var future_value_path_20948 = cljs.core.conj.call(null,future_node_20947,new cljs.core.Keyword(null,"value","value",1125876963),time_name_20945);var future_state_20949 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),future_value_path_20948);var n_20950 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e)));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,future_node_20947),(cljs.core.second.call(null,future_node_20947) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,future_node_20947)))], null));
if(cljs.core.truth_(future_state_20949))
{var temp__4090__auto___20951 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,future_node_20947,new cljs.core.Keyword(null,"forks","forks",1111523171)));if(cljs.core.truth_(temp__4090__auto___20951))
{var forks_20952 = temp__4090__auto___20951;cljs.core.reset_BANG_.call(null,e,future_state_20949);
var seq__20900_20953 = cljs.core.seq.call(null,forks_20952);var chunk__20901_20954 = null;var count__20902_20955 = 0;var i__20903_20956 = 0;while(true){
if((i__20903_20956 < count__20902_20955))
{var fork_20957 = cljs.core._nth.call(null,chunk__20901_20954,i__20903_20956);if(cljs.core._EQ_.call(null,fork_20957,player_timeline))
{} else
{divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_20957,0], null));
}
{
var G__20958 = seq__20900_20953;
var G__20959 = chunk__20901_20954;
var G__20960 = count__20902_20955;
var G__20961 = (i__20903_20956 + 1);
seq__20900_20953 = G__20958;
chunk__20901_20954 = G__20959;
count__20902_20955 = G__20960;
i__20903_20956 = G__20961;
continue;
}
} else
{var temp__4092__auto___20962__$1 = cljs.core.seq.call(null,seq__20900_20953);if(temp__4092__auto___20962__$1)
{var seq__20900_20963__$1 = temp__4092__auto___20962__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20900_20963__$1))
{var c__4150__auto___20964 = cljs.core.chunk_first.call(null,seq__20900_20963__$1);{
var G__20965 = cljs.core.chunk_rest.call(null,seq__20900_20963__$1);
var G__20966 = c__4150__auto___20964;
var G__20967 = cljs.core.count.call(null,c__4150__auto___20964);
var G__20968 = 0;
seq__20900_20953 = G__20965;
chunk__20901_20954 = G__20966;
count__20902_20955 = G__20967;
i__20903_20956 = G__20968;
continue;
}
} else
{var fork_20969 = cljs.core.first.call(null,seq__20900_20963__$1);if(cljs.core._EQ_.call(null,fork_20969,player_timeline))
{} else
{divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_20969,0], null));
}
{
var G__20970 = cljs.core.next.call(null,seq__20900_20963__$1);
var G__20971 = null;
var G__20972 = 0;
var G__20973 = 0;
seq__20900_20953 = G__20970;
chunk__20901_20954 = G__20971;
count__20902_20955 = G__20972;
i__20903_20956 = G__20973;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.reset_BANG_.call(null,e,future_state_20949);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",4323118675),n_20950))
{cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,future_node_20947,cljs.core.fnil.call(null,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),future_node_20947);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,future_value_path_20948,cljs.core.deref.call(null,e));
} else
{divergence.entity.destroy_entity_BANG_.call(null,e);
}
}
{
var G__20974 = cljs.core.next.call(null,seq__20888__$1);
var G__20975 = null;
var G__20976 = 0;
var G__20977 = 0;
seq__20888 = G__20974;
chunk__20890 = G__20975;
count__20891 = G__20976;
i__20892 = G__20977;
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
divergence.system.time_travel.tick_backwards = (function tick_backwards(timestream,entities){var seq__20988 = cljs.core.seq.call(null,entities);var chunk__20990 = null;var count__20991 = 0;var i__20992 = 0;while(true){
if((i__20992 < count__20991))
{var e = cljs.core._nth.call(null,chunk__20990,i__20992);var map__20994_20998 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__20994_20999__$1 = ((cljs.core.seq_QMARK_.call(null,map__20994_20998))?cljs.core.apply.call(null,cljs.core.hash_map,map__20994_20998):map__20994_20998);var time_name_21000 = cljs.core.get.call(null,map__20994_20999__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_21001 = cljs.core.get.call(null,map__20994_20999__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var unique_e_21002 = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e);var vec__20995_21003 = current_node_21001;var current_timeline_21004 = cljs.core.nth.call(null,vec__20995_21003,0,null);var time_in_timeline_21005 = cljs.core.nth.call(null,vec__20995_21003,1,null);var past_node_21006 = divergence.system.time_travel.reverse_time.call(null,cljs.core.deref.call(null,timestream),current_node_21001,divergence.system.time_travel.rewind_speed);var past_state_21007 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,past_node_21006,new cljs.core.Keyword(null,"value","value",1125876963),time_name_21000));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,past_node_21006),(cljs.core.second.call(null,past_node_21006) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,past_node_21006)))], null),13250351);
if(((time_in_timeline_21005 <= divergence.system.time_travel.rewind_speed)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"non-player","non-player",841088339),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unique_e_21002)))))
{divergence.entity.destroy_entity_BANG_.call(null,e);
} else
{cljs.core.reset_BANG_.call(null,e,past_state_21007);
}
{
var G__21008 = seq__20988;
var G__21009 = chunk__20990;
var G__21010 = count__20991;
var G__21011 = (i__20992 + 1);
seq__20988 = G__21008;
chunk__20990 = G__21009;
count__20991 = G__21010;
i__20992 = G__21011;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20988);if(temp__4092__auto__)
{var seq__20988__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20988__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__20988__$1);{
var G__21012 = cljs.core.chunk_rest.call(null,seq__20988__$1);
var G__21013 = c__4150__auto__;
var G__21014 = cljs.core.count.call(null,c__4150__auto__);
var G__21015 = 0;
seq__20988 = G__21012;
chunk__20990 = G__21013;
count__20991 = G__21014;
i__20992 = G__21015;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__20988__$1);var map__20996_21016 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__20996_21017__$1 = ((cljs.core.seq_QMARK_.call(null,map__20996_21016))?cljs.core.apply.call(null,cljs.core.hash_map,map__20996_21016):map__20996_21016);var time_name_21018 = cljs.core.get.call(null,map__20996_21017__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_21019 = cljs.core.get.call(null,map__20996_21017__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var unique_e_21020 = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e);var vec__20997_21021 = current_node_21019;var current_timeline_21022 = cljs.core.nth.call(null,vec__20997_21021,0,null);var time_in_timeline_21023 = cljs.core.nth.call(null,vec__20997_21021,1,null);var past_node_21024 = divergence.system.time_travel.reverse_time.call(null,cljs.core.deref.call(null,timestream),current_node_21019,divergence.system.time_travel.rewind_speed);var past_state_21025 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,past_node_21024,new cljs.core.Keyword(null,"value","value",1125876963),time_name_21018));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,past_node_21024),(cljs.core.second.call(null,past_node_21024) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,past_node_21024)))], null),13250351);
if(((time_in_timeline_21023 <= divergence.system.time_travel.rewind_speed)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"non-player","non-player",841088339),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unique_e_21020)))))
{divergence.entity.destroy_entity_BANG_.call(null,e);
} else
{cljs.core.reset_BANG_.call(null,e,past_state_21025);
}
{
var G__21026 = cljs.core.next.call(null,seq__20988__$1);
var G__21027 = null;
var G__21028 = 0;
var G__21029 = 0;
seq__20988 = G__21026;
chunk__20990 = G__21027;
count__20991 = G__21028;
i__20992 = G__21029;
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
divergence.system.time_travel.animate_timetravel_backwards = (function animate_timetravel_backwards(){return (divergence.renderer.stage["filters"] = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.renderer.blur,divergence.renderer.twist], null)));
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