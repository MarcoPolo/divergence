// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.system.conditions');
goog.require('cljs.core');
divergence.system.conditions.no_condition = (function no_condition(entity){return true;
});
divergence.system.conditions.button_condition = (function button_condition(entity){if(cljs.core.truth_(cljs.core.deref.call(null,entity).call(null,new cljs.core.Keyword(null,"cleared","cleared",1870681886))))
{return true;
} else
{return false;
}
});
divergence.system.conditions.conditions_map = new cljs.core.PersistentArrayMap(null, 6, [0,divergence.system.conditions.no_condition,1,divergence.system.conditions.no_condition,2,divergence.system.conditions.button_condition,3,divergence.system.conditions.no_condition,4,divergence.system.conditions.button_condition,5,divergence.system.conditions.no_condition], null);
/**
* Add some logic here later
*/
divergence.system.conditions.conditions = (function conditions(level){return divergence.system.conditions.conditions_map.call(null,level);
});

//# sourceMappingURL=conditions.js.map