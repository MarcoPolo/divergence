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
divergence.system.time_travel.reverse_time = (function reverse_time(timestream,p__20692,rewind_time){var vec__20695 = p__20692;var timeline = cljs.core.nth.call(null,vec__20695,0,null);var time_left_in_timeline = cljs.core.nth.call(null,vec__20695,1,null);if((time_left_in_timeline > rewind_time))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline,(time_left_in_timeline - rewind_time)], null);
} else
{var vec__20696 = cljs.core.get_in.call(null,timestream,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeline,0,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582)], null));var prev_timeline = cljs.core.nth.call(null,vec__20696,0,null);var prev_time = cljs.core.nth.call(null,vec__20696,1,null);return reverse_time.call(null,timestream,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_timeline,prev_time], null),(rewind_time - time_left_in_timeline));
}
});
divergence.system.time_travel.create_divergent_entity = (function create_divergent_entity(time_event_node){var non_player = cljs.core.assoc_in.call(null,divergence.entity.non_player.call(null,divergence.renderer.stage),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),time_event_node);var vec__20698 = divergence.entity.register_entity_BANG_.call(null,non_player);var normal_e_atom = cljs.core.nth.call(null,vec__20698,0,null);var unique_e_atom = cljs.core.nth.call(null,vec__20698,1,null);divergence.system.create_ref.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unique_e_atom], null));
divergence.system.to_stage.call(null,cljs.core.deref.call(null,divergence.renderer.container),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unique_e_atom], null));
divergence.system.position.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
divergence.system.anchor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
return divergence.system.scale.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normal_e_atom], null));
});
/**
* This will create a new timeline with the prev-node where the current-node is
*/
divergence.system.time_travel.create_new_timeline = (function create_new_timeline(timestream,player_entity){var number_of_timelines = cljs.core.count.call(null,cljs.core.deref.call(null,timestream));var map__20700 = cljs.core.deref.call(null,player_entity).call(null,new cljs.core.Keyword(null,"divergent","divergent",3614789780));var map__20700__$1 = ((cljs.core.seq_QMARK_.call(null,map__20700))?cljs.core.apply.call(null,cljs.core.hash_map,map__20700):map__20700);var time_name = cljs.core.get.call(null,map__20700__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node = cljs.core.get.call(null,map__20700__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var new_timeline_number = number_of_timelines;cljs.core.swap_BANG_.call(null,timestream,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
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
divergence.system.time_travel.tick_forward = (function tick_forward(timestream,entities){var seq__20717 = cljs.core.seq.call(null,entities);var chunk__20719 = null;var count__20720 = 0;var i__20721 = 0;while(true){
if((i__20721 < count__20720))
{var e = cljs.core._nth.call(null,chunk__20719,i__20721);var map__20723_20733 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__20723_20734__$1 = ((cljs.core.seq_QMARK_.call(null,map__20723_20733))?cljs.core.apply.call(null,cljs.core.hash_map,map__20723_20733):map__20723_20733);var time_name_20735 = cljs.core.get.call(null,map__20723_20734__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_20736 = cljs.core.get.call(null,map__20723_20734__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var future_node_20737 = cljs.core.update_in.call(null,current_node_20736,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null),cljs.core.inc);var future_value_path_20738 = cljs.core.conj.call(null,future_node_20737,new cljs.core.Keyword(null,"value","value",1125876963),time_name_20735);var future_state_20739 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),future_value_path_20738);var n_20740 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e)));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,future_node_20737),(cljs.core.second.call(null,future_node_20737) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,future_node_20737)))], null));
if(cljs.core.truth_(future_state_20739))
{var temp__4090__auto___20741 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,future_node_20737,new cljs.core.Keyword(null,"forks","forks",1111523171)));if(cljs.core.truth_(temp__4090__auto___20741))
{var forks_20742 = temp__4090__auto___20741;cljs.core.reset_BANG_.call(null,e,future_state_20739);
var seq__20724_20743 = cljs.core.seq.call(null,forks_20742);var chunk__20725_20744 = null;var count__20726_20745 = 0;var i__20727_20746 = 0;while(true){
if((i__20727_20746 < count__20726_20745))
{var fork_20747 = cljs.core._nth.call(null,chunk__20725_20744,i__20727_20746);divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_20747,0], null));
{
var G__20748 = seq__20724_20743;
var G__20749 = chunk__20725_20744;
var G__20750 = count__20726_20745;
var G__20751 = (i__20727_20746 + 1);
seq__20724_20743 = G__20748;
chunk__20725_20744 = G__20749;
count__20726_20745 = G__20750;
i__20727_20746 = G__20751;
continue;
}
} else
{var temp__4092__auto___20752 = cljs.core.seq.call(null,seq__20724_20743);if(temp__4092__auto___20752)
{var seq__20724_20753__$1 = temp__4092__auto___20752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20724_20753__$1))
{var c__4150__auto___20754 = cljs.core.chunk_first.call(null,seq__20724_20753__$1);{
var G__20755 = cljs.core.chunk_rest.call(null,seq__20724_20753__$1);
var G__20756 = c__4150__auto___20754;
var G__20757 = cljs.core.count.call(null,c__4150__auto___20754);
var G__20758 = 0;
seq__20724_20743 = G__20755;
chunk__20725_20744 = G__20756;
count__20726_20745 = G__20757;
i__20727_20746 = G__20758;
continue;
}
} else
{var fork_20759 = cljs.core.first.call(null,seq__20724_20753__$1);divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_20759,0], null));
{
var G__20760 = cljs.core.next.call(null,seq__20724_20753__$1);
var G__20761 = null;
var G__20762 = 0;
var G__20763 = 0;
seq__20724_20743 = G__20760;
chunk__20725_20744 = G__20761;
count__20726_20745 = G__20762;
i__20727_20746 = G__20763;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.reset_BANG_.call(null,e,future_state_20739);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",4323118675),n_20740))
{cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,future_node_20737,cljs.core.fnil.call(null,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),future_node_20737);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,future_value_path_20738,cljs.core.deref.call(null,e));
} else
{divergence.entity.destroy_entity_BANG_.call(null,e);
}
}
{
var G__20764 = seq__20717;
var G__20765 = chunk__20719;
var G__20766 = count__20720;
var G__20767 = (i__20721 + 1);
seq__20717 = G__20764;
chunk__20719 = G__20765;
count__20720 = G__20766;
i__20721 = G__20767;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20717);if(temp__4092__auto__)
{var seq__20717__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20717__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__20717__$1);{
var G__20768 = cljs.core.chunk_rest.call(null,seq__20717__$1);
var G__20769 = c__4150__auto__;
var G__20770 = cljs.core.count.call(null,c__4150__auto__);
var G__20771 = 0;
seq__20717 = G__20768;
chunk__20719 = G__20769;
count__20720 = G__20770;
i__20721 = G__20771;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__20717__$1);var map__20728_20772 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__20728_20773__$1 = ((cljs.core.seq_QMARK_.call(null,map__20728_20772))?cljs.core.apply.call(null,cljs.core.hash_map,map__20728_20772):map__20728_20772);var time_name_20774 = cljs.core.get.call(null,map__20728_20773__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_20775 = cljs.core.get.call(null,map__20728_20773__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var future_node_20776 = cljs.core.update_in.call(null,current_node_20775,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null),cljs.core.inc);var future_value_path_20777 = cljs.core.conj.call(null,future_node_20776,new cljs.core.Keyword(null,"value","value",1125876963),time_name_20774);var future_state_20778 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),future_value_path_20777);var n_20779 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e)));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,future_node_20776),(cljs.core.second.call(null,future_node_20776) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,future_node_20776)))], null));
if(cljs.core.truth_(future_state_20778))
{var temp__4090__auto___20780 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,future_node_20776,new cljs.core.Keyword(null,"forks","forks",1111523171)));if(cljs.core.truth_(temp__4090__auto___20780))
{var forks_20781 = temp__4090__auto___20780;cljs.core.reset_BANG_.call(null,e,future_state_20778);
var seq__20729_20782 = cljs.core.seq.call(null,forks_20781);var chunk__20730_20783 = null;var count__20731_20784 = 0;var i__20732_20785 = 0;while(true){
if((i__20732_20785 < count__20731_20784))
{var fork_20786 = cljs.core._nth.call(null,chunk__20730_20783,i__20732_20785);divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_20786,0], null));
{
var G__20787 = seq__20729_20782;
var G__20788 = chunk__20730_20783;
var G__20789 = count__20731_20784;
var G__20790 = (i__20732_20785 + 1);
seq__20729_20782 = G__20787;
chunk__20730_20783 = G__20788;
count__20731_20784 = G__20789;
i__20732_20785 = G__20790;
continue;
}
} else
{var temp__4092__auto___20791__$1 = cljs.core.seq.call(null,seq__20729_20782);if(temp__4092__auto___20791__$1)
{var seq__20729_20792__$1 = temp__4092__auto___20791__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20729_20792__$1))
{var c__4150__auto___20793 = cljs.core.chunk_first.call(null,seq__20729_20792__$1);{
var G__20794 = cljs.core.chunk_rest.call(null,seq__20729_20792__$1);
var G__20795 = c__4150__auto___20793;
var G__20796 = cljs.core.count.call(null,c__4150__auto___20793);
var G__20797 = 0;
seq__20729_20782 = G__20794;
chunk__20730_20783 = G__20795;
count__20731_20784 = G__20796;
i__20732_20785 = G__20797;
continue;
}
} else
{var fork_20798 = cljs.core.first.call(null,seq__20729_20792__$1);divergence.system.time_travel.create_divergent_entity.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork_20798,0], null));
{
var G__20799 = cljs.core.next.call(null,seq__20729_20792__$1);
var G__20800 = null;
var G__20801 = 0;
var G__20802 = 0;
seq__20729_20782 = G__20799;
chunk__20730_20783 = G__20800;
count__20731_20784 = G__20801;
i__20732_20785 = G__20802;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.reset_BANG_.call(null,e,future_state_20778);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player","player",4323118675),n_20779))
{cljs.core.swap_BANG_.call(null,timestream,cljs.core.update_in,future_node_20776,cljs.core.fnil.call(null,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY));
cljs.core.swap_BANG_.call(null,e,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"divergent","divergent",3614789780),new cljs.core.Keyword(null,"current-node","current-node",2436467016)], null),future_node_20776);
cljs.core.swap_BANG_.call(null,timestream,cljs.core.assoc_in,future_value_path_20777,cljs.core.deref.call(null,e));
} else
{divergence.entity.destroy_entity_BANG_.call(null,e);
}
}
{
var G__20803 = cljs.core.next.call(null,seq__20717__$1);
var G__20804 = null;
var G__20805 = 0;
var G__20806 = 0;
seq__20717 = G__20803;
chunk__20719 = G__20804;
count__20720 = G__20805;
i__20721 = G__20806;
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
divergence.system.time_travel.tick_backwards = (function tick_backwards(timestream,entities){var seq__20817 = cljs.core.seq.call(null,entities);var chunk__20819 = null;var count__20820 = 0;var i__20821 = 0;while(true){
if((i__20821 < count__20820))
{var e = cljs.core._nth.call(null,chunk__20819,i__20821);var map__20823_20827 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__20823_20828__$1 = ((cljs.core.seq_QMARK_.call(null,map__20823_20827))?cljs.core.apply.call(null,cljs.core.hash_map,map__20823_20827):map__20823_20827);var time_name_20829 = cljs.core.get.call(null,map__20823_20828__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_20830 = cljs.core.get.call(null,map__20823_20828__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var unique_e_20831 = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e);var vec__20824_20832 = current_node_20830;var current_timeline_20833 = cljs.core.nth.call(null,vec__20824_20832,0,null);var time_in_timeline_20834 = cljs.core.nth.call(null,vec__20824_20832,1,null);var past_node_20835 = divergence.system.time_travel.reverse_time.call(null,cljs.core.deref.call(null,timestream),current_node_20830,divergence.system.time_travel.rewind_speed);var past_state_20836 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,past_node_20835,new cljs.core.Keyword(null,"value","value",1125876963),time_name_20829));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,past_node_20835),(cljs.core.second.call(null,past_node_20835) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,past_node_20835)))], null),13250351);
if(((time_in_timeline_20834 <= divergence.system.time_travel.rewind_speed)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"non-player","non-player",841088339),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unique_e_20831)))))
{divergence.entity.destroy_entity_BANG_.call(null,e);
} else
{cljs.core.reset_BANG_.call(null,e,past_state_20836);
}
{
var G__20837 = seq__20817;
var G__20838 = chunk__20819;
var G__20839 = count__20820;
var G__20840 = (i__20821 + 1);
seq__20817 = G__20837;
chunk__20819 = G__20838;
count__20820 = G__20839;
i__20821 = G__20840;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20817);if(temp__4092__auto__)
{var seq__20817__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20817__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__20817__$1);{
var G__20841 = cljs.core.chunk_rest.call(null,seq__20817__$1);
var G__20842 = c__4150__auto__;
var G__20843 = cljs.core.count.call(null,c__4150__auto__);
var G__20844 = 0;
seq__20817 = G__20841;
chunk__20819 = G__20842;
count__20820 = G__20843;
i__20821 = G__20844;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__20817__$1);var map__20825_20845 = new cljs.core.Keyword(null,"divergent","divergent",3614789780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,e));var map__20825_20846__$1 = ((cljs.core.seq_QMARK_.call(null,map__20825_20845))?cljs.core.apply.call(null,cljs.core.hash_map,map__20825_20845):map__20825_20845);var time_name_20847 = cljs.core.get.call(null,map__20825_20846__$1,new cljs.core.Keyword(null,"time-name","time-name",1004205309));var current_node_20848 = cljs.core.get.call(null,map__20825_20846__$1,new cljs.core.Keyword(null,"current-node","current-node",2436467016));var unique_e_20849 = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e);var vec__20826_20850 = current_node_20848;var current_timeline_20851 = cljs.core.nth.call(null,vec__20826_20850,0,null);var time_in_timeline_20852 = cljs.core.nth.call(null,vec__20826_20850,1,null);var past_node_20853 = divergence.system.time_travel.reverse_time.call(null,cljs.core.deref.call(null,timestream),current_node_20848,divergence.system.time_travel.rewind_speed);var past_state_20854 = cljs.core.get_in.call(null,cljs.core.deref.call(null,timestream),cljs.core.conj.call(null,past_node_20853,new cljs.core.Keyword(null,"value","value",1125876963),time_name_20847));divergence.timeviz.draw_time_node.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,past_node_20853),(cljs.core.second.call(null,past_node_20853) + divergence.timeviz.find_time_offset.call(null,cljs.core.deref.call(null,timestream),cljs.core.first.call(null,past_node_20853)))], null),13250351);
if(((time_in_timeline_20852 <= divergence.system.time_travel.rewind_speed)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"non-player","non-player",841088339),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unique_e_20849)))))
{divergence.entity.destroy_entity_BANG_.call(null,e);
} else
{cljs.core.reset_BANG_.call(null,e,past_state_20854);
}
{
var G__20855 = cljs.core.next.call(null,seq__20817__$1);
var G__20856 = null;
var G__20857 = 0;
var G__20858 = 0;
seq__20817 = G__20855;
chunk__20819 = G__20856;
count__20820 = G__20857;
i__20821 = G__20858;
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