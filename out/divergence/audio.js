// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.audio');
goog.require('cljs.core');
divergence.audio.jumpSound = (new buzz.sound("assets/sounds/fins__jumping.wav"));
divergence.audio.pickUpSound = (new buzz.sound("assets/sounds/adriancalzon__pickup1.mp3"));
divergence.audio.dropSound = (new buzz.sound("assets/sounds/movingplaid_spray-can.wav"));
divergence.audio.pushSound = (new buzz.sound("assets/sounds/stanestane__push.wav"));
divergence.audio.magicSound = (new buzz.sound("assets/sounds/joe93barlow__protego.mp3"));
divergence.audio.timeTravelSound = (new buzz.sound("assets/sounds/timetravel.wav"));
divergence.audio.bgm1 = (new buzz.sound("assets/sounds/Mellowtron.mp3"));
divergence.audio.bgm2 = (new buzz.sound("assets/sounds/Phat Sketch.ogg"));
divergence.audio.sounds = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"jump","jump",1017178016),divergence.audio.jumpSound,new cljs.core.Keyword(null,"pickup","pickup",4320394734),divergence.audio.pickUpSound,new cljs.core.Keyword(null,"drop","drop",1016996449),divergence.audio.dropSound,new cljs.core.Keyword(null,"push","push",1017356940),divergence.audio.pushSound,new cljs.core.Keyword(null,"teleport","teleport",3948669597),divergence.audio.magicSound,new cljs.core.Keyword(null,"time","time",1017464383),divergence.audio.timeTravelSound,new cljs.core.Keyword(null,"bgm1","bgm1",1016926171),divergence.audio.bgm1,new cljs.core.Keyword(null,"bgm2","bgm2",1016926172),divergence.audio.bgm2], null));
/**
* @param {...*} var_args
*/
divergence.audio.update_values = (function() { 
var update_values__delegate = function (m,f,args){return cljs.core.reduce.call(null,(function (r,p__4746){var vec__4747 = p__4746;var k = cljs.core.nth.call(null,vec__4747,0,null);var v = cljs.core.nth.call(null,vec__4747,1,null);return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
};
var update_values = function (m,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_values__delegate.call(this,m,f,args);};
update_values.cljs$lang$maxFixedArity = 2;
update_values.cljs$lang$applyTo = (function (arglist__4748){
var m = cljs.core.first(arglist__4748);
arglist__4748 = cljs.core.next(arglist__4748);
var f = cljs.core.first(arglist__4748);
var args = cljs.core.rest(arglist__4748);
return update_values__delegate(m,f,args);
});
update_values.cljs$core$IFn$_invoke$arity$variadic = update_values__delegate;
return update_values;
})()
;
divergence.audio.play_sound = (function play_sound(key){var sound = cljs.core.deref.call(null,divergence.audio.sounds).call(null,key);sound.load();
return sound.play();
});
divergence.audio.play_bgm = (function play_bgm(key){var sound = cljs.core.deref.call(null,divergence.audio.sounds).call(null,key);sound.bind("ended",(function (e){sound.load();
return sound.play();
}),false);
sound.load();
return sound.play();
});
divergence.audio.startBGM = (function startBGM(level){if(cljs.core._EQ_.call(null,level,0))
{return divergence.audio.play_bgm.call(null,new cljs.core.Keyword(null,"bgm1","bgm1",1016926171));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cljs.core.deref.call(null,divergence.audio.sounds).call(null,new cljs.core.Keyword(null,"bgm1","bgm1",1016926171)).stop();
cljs.core.deref.call(null,divergence.audio.sounds).call(null,new cljs.core.Keyword(null,"bgm2","bgm2",1016926172)).stop();
return divergence.audio.play_bgm.call(null,new cljs.core.Keyword(null,"bgm2","bgm2",1016926172));
} else
{return null;
}
}
});
divergence.audio.decVolumeSub = (function decVolumeSub(sound){return sound.decreaseVolume();
});
divergence.audio.decVolume = (function decVolume(){return cljs.core.reset_BANG_.call(null,divergence.audio.sounds,divergence.audio.update_values.call(null,cljs.core.deref.call(null,divergence.audio.sounds),divergence.audio.decVolumeSub));
});
divergence.audio.incVolumeSub = (function incVolumeSub(sound){return sound.increaseVolume();
});
divergence.audio.incVolume = (function incVolume(){return cljs.core.reset_BANG_.call(null,divergence.audio.sounds,divergence.audio.update_values.call(null,cljs.core.deref.call(null,divergence.audio.sounds),divergence.audio.incVolumeSub));
});
divergence.audio.setVolumeSub = (function setVolumeSub(sound,value){return sound.setVolume(value);
});
divergence.audio.setVolume = (function setVolume(value){return cljs.core.reset_BANG_.call(null,divergence.audio.sounds,divergence.audio.update_values.call(null,cljs.core.deref.call(null,divergence.audio.sounds),divergence.audio.setVolumeSub,value));
});
divergence.audio.muteSub = (function muteSub(sound){return sound.mute();
});
divergence.audio.mute = (function mute(){return cljs.core.reset_BANG_.call(null,divergence.audio.sounds,divergence.audio.update_values.call(null,cljs.core.deref.call(null,divergence.audio.sounds),divergence.audio.muteSub));
});
divergence.audio.unmuteSub = (function unmuteSub(sound){return sound.unmute();
});
divergence.audio.unmute = (function unmute(){return cljs.core.reset_BANG_.call(null,divergence.audio.sounds,divergence.audio.update_values.call(null,cljs.core.deref.call(null,divergence.audio.sounds),divergence.audio.unmuteSub));
});

//# sourceMappingURL=audio.js.map