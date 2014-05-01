// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.timeviz');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
divergence.timeviz.renderer = (new PIXI.autoDetectRenderer(800,150));
document.getElementById("timestream-viz").appendChild(divergence.timeviz.renderer.view);
divergence.timeviz.stage = (new PIXI.Stage(1579032));
divergence.timeviz.graphics = (new PIXI.Graphics());
divergence.timeviz.stage.addChild(divergence.timeviz.graphics);
divergence.timeviz.graphics.clear();
divergence.timeviz.renderer.render(divergence.timeviz.stage);
divergence.timeviz.offset_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
divergence.timeviz.find_time_offset = (function find_time_offset(timestream,origin_timeline_number){if(cljs.core._EQ_.call(null,origin_timeline_number,0))
{return 0;
} else
{var temp__4090__auto__ = cljs.core.deref.call(null,divergence.timeviz.offset_cache).call(null,origin_timeline_number);if(cljs.core.truth_(temp__4090__auto__))
{var offset = temp__4090__auto__;return offset;
} else
{var prev_node = cljs.core.get_in.call(null,timestream,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin_timeline_number,0,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582)], null));var prev_timeline = cljs.core.first.call(null,prev_node);var prev_time = cljs.core.second.call(null,prev_node);var offset = (prev_time + find_time_offset.call(null,timestream,prev_timeline));cljs.core.swap_BANG_.call(null,divergence.timeviz.offset_cache,cljs.core.assoc,origin_timeline_number,offset);
return offset;
}
}
});
/**
* Add an offset to timelines so that times match across timelines
*/
divergence.timeviz.normalize_timeline = (function normalize_timeline(timestream,timeline){var first_node = new cljs.core.Keyword(null,"prev-node","prev-node",4421093582).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,timeline));var nodes = cljs.core.rest.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"prev-node","prev-node",4421093582),timeline));var timeline_number = cljs.core.ffirst.call(null,nodes);if(cljs.core._EQ_.call(null,cljs.core.ffirst.call(null,nodes),cljs.core.first.call(null,first_node)))
{return nodes;
} else
{return cljs.core.map.call(null,(function (p1__9112_SHARP_){return cljs.core.update_in.call(null,p1__9112_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [1], null),cljs.core.partial.call(null,cljs.core._PLUS_,divergence.timeviz.find_time_offset.call(null,timestream,timeline_number)));
}),nodes);
}
});
divergence.timeviz.draw_time_node = (function() {
var draw_time_node = null;
var draw_time_node__1 = (function (node){return draw_time_node.call(null,node,16777215);
});
var draw_time_node__2 = (function (p__9113,color){var vec__9115 = p__9113;var timeline = cljs.core.nth.call(null,vec__9115,0,null);var time_event = cljs.core.nth.call(null,vec__9115,1,null);if(cljs.core._EQ_.call(null,0,cljs.core.mod.call(null,time_event,500)))
{divergence.timeviz.graphics.clear();
} else
{}
var time_event__$1 = cljs.core.mod.call(null,time_event,500);if(cljs.core._EQ_.call(null,0,cljs.core.mod.call(null,time_event__$1,10)))
{divergence.timeviz.graphics.beginFill(color,1);
divergence.timeviz.graphics.drawCircle((20 + time_event__$1),(10 * (2 + cljs.core.mod.call(null,timeline,12))),4);
return divergence.timeviz.graphics.endFill();
} else
{return null;
}
});
draw_time_node = function(p__9113,color){
switch(arguments.length){
case 1:
return draw_time_node__1.call(this,p__9113);
case 2:
return draw_time_node__2.call(this,p__9113,color);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_time_node.cljs$core$IFn$_invoke$arity$1 = draw_time_node__1;
draw_time_node.cljs$core$IFn$_invoke$arity$2 = draw_time_node__2;
return draw_time_node;
})()
;
divergence.timeviz.render_stage = (function render_stage(){return divergence.timeviz.renderer.render(divergence.timeviz.stage);
});
divergence.timeviz.print_timestream = (function print_timestream(timestream){divergence.timeviz.graphics.clear();
var seq__9128_9140 = cljs.core.seq.call(null,timestream);var chunk__9133_9141 = null;var count__9134_9142 = 0;var i__9135_9143 = 0;while(true){
if((i__9135_9143 < count__9134_9142))
{var timeline_9144 = cljs.core._nth.call(null,chunk__9133_9141,i__9135_9143);var seq__9136_9145 = cljs.core.seq.call(null,cljs.core.take_nth.call(null,16,divergence.timeviz.normalize_timeline.call(null,timestream,timeline_9144)));var chunk__9137_9146 = null;var count__9138_9147 = 0;var i__9139_9148 = 0;while(true){
if((i__9139_9148 < count__9138_9147))
{var time_event_9149 = cljs.core._nth.call(null,chunk__9137_9146,i__9139_9148);divergence.timeviz.draw_time_node.call(null,time_event_9149);
{
var G__9150 = seq__9136_9145;
var G__9151 = chunk__9137_9146;
var G__9152 = count__9138_9147;
var G__9153 = (i__9139_9148 + 1);
seq__9136_9145 = G__9150;
chunk__9137_9146 = G__9151;
count__9138_9147 = G__9152;
i__9139_9148 = G__9153;
continue;
}
} else
{var temp__4092__auto___9154 = cljs.core.seq.call(null,seq__9136_9145);if(temp__4092__auto___9154)
{var seq__9136_9155__$1 = temp__4092__auto___9154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9136_9155__$1))
{var c__4150__auto___9156 = cljs.core.chunk_first.call(null,seq__9136_9155__$1);{
var G__9157 = cljs.core.chunk_rest.call(null,seq__9136_9155__$1);
var G__9158 = c__4150__auto___9156;
var G__9159 = cljs.core.count.call(null,c__4150__auto___9156);
var G__9160 = 0;
seq__9136_9145 = G__9157;
chunk__9137_9146 = G__9158;
count__9138_9147 = G__9159;
i__9139_9148 = G__9160;
continue;
}
} else
{var time_event_9161 = cljs.core.first.call(null,seq__9136_9155__$1);divergence.timeviz.draw_time_node.call(null,time_event_9161);
{
var G__9162 = cljs.core.next.call(null,seq__9136_9155__$1);
var G__9163 = null;
var G__9164 = 0;
var G__9165 = 0;
seq__9136_9145 = G__9162;
chunk__9137_9146 = G__9163;
count__9138_9147 = G__9164;
i__9139_9148 = G__9165;
continue;
}
}
} else
{}
}
break;
}
{
var G__9166 = seq__9128_9140;
var G__9167 = chunk__9133_9141;
var G__9168 = count__9134_9142;
var G__9169 = (i__9135_9143 + 1);
seq__9128_9140 = G__9166;
chunk__9133_9141 = G__9167;
count__9134_9142 = G__9168;
i__9135_9143 = G__9169;
continue;
}
} else
{var temp__4092__auto___9170 = cljs.core.seq.call(null,seq__9128_9140);if(temp__4092__auto___9170)
{var seq__9128_9171__$1 = temp__4092__auto___9170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9128_9171__$1))
{var c__4150__auto___9172 = cljs.core.chunk_first.call(null,seq__9128_9171__$1);{
var G__9173 = cljs.core.chunk_rest.call(null,seq__9128_9171__$1);
var G__9174 = c__4150__auto___9172;
var G__9175 = cljs.core.count.call(null,c__4150__auto___9172);
var G__9176 = 0;
seq__9128_9140 = G__9173;
chunk__9133_9141 = G__9174;
count__9134_9142 = G__9175;
i__9135_9143 = G__9176;
continue;
}
} else
{var timeline_9177 = cljs.core.first.call(null,seq__9128_9171__$1);var seq__9129_9178 = cljs.core.seq.call(null,cljs.core.take_nth.call(null,16,divergence.timeviz.normalize_timeline.call(null,timestream,timeline_9177)));var chunk__9130_9179 = null;var count__9131_9180 = 0;var i__9132_9181 = 0;while(true){
if((i__9132_9181 < count__9131_9180))
{var time_event_9182 = cljs.core._nth.call(null,chunk__9130_9179,i__9132_9181);divergence.timeviz.draw_time_node.call(null,time_event_9182);
{
var G__9183 = seq__9129_9178;
var G__9184 = chunk__9130_9179;
var G__9185 = count__9131_9180;
var G__9186 = (i__9132_9181 + 1);
seq__9129_9178 = G__9183;
chunk__9130_9179 = G__9184;
count__9131_9180 = G__9185;
i__9132_9181 = G__9186;
continue;
}
} else
{var temp__4092__auto___9187__$1 = cljs.core.seq.call(null,seq__9129_9178);if(temp__4092__auto___9187__$1)
{var seq__9129_9188__$1 = temp__4092__auto___9187__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9129_9188__$1))
{var c__4150__auto___9189 = cljs.core.chunk_first.call(null,seq__9129_9188__$1);{
var G__9190 = cljs.core.chunk_rest.call(null,seq__9129_9188__$1);
var G__9191 = c__4150__auto___9189;
var G__9192 = cljs.core.count.call(null,c__4150__auto___9189);
var G__9193 = 0;
seq__9129_9178 = G__9190;
chunk__9130_9179 = G__9191;
count__9131_9180 = G__9192;
i__9132_9181 = G__9193;
continue;
}
} else
{var time_event_9194 = cljs.core.first.call(null,seq__9129_9188__$1);divergence.timeviz.draw_time_node.call(null,time_event_9194);
{
var G__9195 = cljs.core.next.call(null,seq__9129_9188__$1);
var G__9196 = null;
var G__9197 = 0;
var G__9198 = 0;
seq__9129_9178 = G__9195;
chunk__9130_9179 = G__9196;
count__9131_9180 = G__9197;
i__9132_9181 = G__9198;
continue;
}
}
} else
{}
}
break;
}
{
var G__9199 = cljs.core.next.call(null,seq__9128_9171__$1);
var G__9200 = null;
var G__9201 = 0;
var G__9202 = 0;
seq__9128_9140 = G__9199;
chunk__9133_9141 = G__9200;
count__9134_9142 = G__9201;
i__9135_9143 = G__9202;
continue;
}
}
} else
{}
}
break;
}
return divergence.timeviz.render_stage.call(null);
});

//# sourceMappingURL=timeviz.js.map