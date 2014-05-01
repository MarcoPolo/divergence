// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.leveleditor');
goog.require('cljs.core');
goog.require('divergence.entity');
goog.require('divergence.entity');
goog.require('divergence.component');
goog.require('divergence.component');
divergence.leveleditor.canvas = document.getElementById("game");
divergence.leveleditor.entities = cljs.core.PersistentVector.EMPTY;
divergence.leveleditor.set_entity = (function set_entity(entities,x,y,id){var G__5851 = id;if(cljs.core._EQ_.call(null,0,G__5851))
{return entities.call(null,cljs.core.conj,5);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(id)].join('')));
} else
{return null;
}
}
});
divergence.leveleditor.parse_click = (function parse_click(event){var cx = event.pageX;var cy = event.pageY;var offset = divergence.leveleditor.canvas.offset();var left_offset = offset.left;var top_offset = offset.top;var x = (cx - left_offset);var y = (cy - top_offset);var height = divergence.leveleditor.canvas.height();var width = divergence.leveleditor.canvas.width();return divergence.leveleditor.set_entity.call(null,divergence.leveleditor.entities,x,y,0);
});
divergence.leveleditor.set_click = (function set_click(){return document.onclick = divergence.leveleditor.parse_click;
});

//# sourceMappingURL=leveleditor.js.map