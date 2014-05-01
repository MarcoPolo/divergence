// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.entity');
goog.require('cljs.core');
goog.require('divergence.camera');
goog.require('divergence.camera');
goog.require('divergence.renderer');
goog.require('divergence.renderer');
goog.require('divergence.component');
goog.require('divergence.component');
divergence.entity.normal_gravity = 0.4;
divergence.entity.pr1 = new cljs.core.Keyword("divergence.textures","playerright1","divergence.textures/playerright1",1815501394);
divergence.entity.pr2 = new cljs.core.Keyword("divergence.textures","playerright2","divergence.textures/playerright2",1815501399);
divergence.entity.pr3 = new cljs.core.Keyword("divergence.textures","playerright3","divergence.textures/playerright3",1815501400);
divergence.entity.pr4 = new cljs.core.Keyword("divergence.textures","playerright4","divergence.textures/playerright4",1815501397);
divergence.entity.pl1 = new cljs.core.Keyword("divergence.textures","playerleft1","divergence.textures/playerleft1",3465387845);
divergence.entity.pl2 = new cljs.core.Keyword("divergence.textures","playerleft2","divergence.textures/playerleft2",3465387846);
divergence.entity.pl3 = new cljs.core.Keyword("divergence.textures","playerleft3","divergence.textures/playerleft3",3465387819);
divergence.entity.pl4 = new cljs.core.Keyword("divergence.textures","playerleft4","divergence.textures/playerleft4",3465387820);
divergence.entity.pj1 = new cljs.core.Keyword("divergence.textures","playerJump1","divergence.textures/playerJump1",3569770142);
divergence.entity.pj2 = new cljs.core.Keyword("divergence.textures","playerJump2","divergence.textures/playerJump2",3569770147);
divergence.entity.pj3 = new cljs.core.Keyword("divergence.textures","playerJump3","divergence.textures/playerJump3",3569770148);
divergence.entity.pj4 = new cljs.core.Keyword("divergence.textures","playerJump4","divergence.textures/playerJump4",3569770145);
divergence.entity.pf = new cljs.core.Keyword("divergence.textures","playerfront","divergence.textures/playerfront",3460244008);
divergence.entity.pb = new cljs.core.Keyword("divergence.textures","playerback","divergence.textures/playerback",869958344);
divergence.entity.blockTexture = new cljs.core.Keyword("divergence.textures","block","divergence.textures/block",3394242921);
divergence.entity.boxTexture = new cljs.core.Keyword("divergence.textures","box","divergence.textures/box",3035254827);
divergence.entity.goalTexture = new cljs.core.Keyword("divergence.textures","goal","divergence.textures/goal",3038333683);
divergence.entity.bgTexture = new cljs.core.Keyword("divergence.textures","bg","divergence.textures/bg",3035151809);
divergence.entity.ropeTexture = new cljs.core.Keyword("divergence.textures","rope","divergence.textures/rope",3038661902);
divergence.entity.keyTexture = new cljs.core.Keyword("divergence.textures","key","divergence.textures/key",3035261855);
divergence.entity.pushButtonTexture = new cljs.core.Keyword("divergence.textures","push-button","divergence.textures/push-button",1058684097);
divergence.entity.doorClosedTexture = new cljs.core.Keyword("divergence.textures","door-closed","divergence.textures/door-closed",1403422091);
divergence.entity.doorOpenTexture = new cljs.core.Keyword("divergence.textures","door-open","divergence.textures/door-open",3915418885);
divergence.entity.treasureChestTexture = new cljs.core.Keyword("divergence.textures","treasure-chest","divergence.textures/treasure-chest",3138186147);
divergence.entity.flowerTexture = new cljs.core.Keyword("divergence.textures","flower","divergence.textures/flower",3776794523);
divergence.entity.candleATexture = new cljs.core.Keyword("divergence.textures","candleA","divergence.textures/candleA",3481590580);
divergence.entity.candleBTexture = new cljs.core.Keyword("divergence.textures","candleB","divergence.textures/candleB",3481590577);
divergence.entity.shipTexture = new cljs.core.Keyword("divergence.textures","ship","divergence.textures/ship",3038655420);
divergence.entity.starTileTextureA = new cljs.core.Keyword("divergence.textures","starTileA","divergence.textures/starTileA",907336157);
divergence.entity.starTileTextureB = new cljs.core.Keyword("divergence.textures","starTileB","divergence.textures/starTileB",907336158);
divergence.entity.starTileTextureC = new cljs.core.Keyword("divergence.textures","starTileC","divergence.textures/starTileC",907336163);
divergence.entity.starTileTextureD = new cljs.core.Keyword("divergence.textures","starTileD","divergence.textures/starTileD",907336164);
divergence.entity.starTileTextureE = new cljs.core.Keyword("divergence.textures","starTileE","divergence.textures/starTileE",907336161);
divergence.entity.starTileTextureF = new cljs.core.Keyword("divergence.textures","starTileF","divergence.textures/starTileF",907336162);
divergence.entity.starTileTexturePrime = new cljs.core.Keyword("divergence.textures","starTilePrime","divergence.textures/starTilePrime",3612789695);
divergence.entity.metalTileTextureA = new cljs.core.Keyword("divergence.textures","metalTileA","divergence.textures/metalTileA",2471401836);
divergence.entity.metalTileTextureB = new cljs.core.Keyword("divergence.textures","metalTileB","divergence.textures/metalTileB",2471401833);
divergence.entity.metalTileTextureC = new cljs.core.Keyword("divergence.textures","metalTileC","divergence.textures/metalTileC",2471401834);
divergence.entity.groundTileTextureA = new cljs.core.Keyword("divergence.textures","groundTileA","divergence.textures/groundTileA",4657379308);
divergence.entity.groundTileTextureB = new cljs.core.Keyword("divergence.textures","groundTileB","divergence.textures/groundTileB",4657379305);
divergence.entity.groundTileTextureC = new cljs.core.Keyword("divergence.textures","groundTileC","divergence.textures/groundTileC",4657379306);
divergence.entity.oceanTileTextureA = new cljs.core.Keyword("divergence.textures","oceanTileA","divergence.textures/oceanTileA",3336602897);
divergence.entity.oceanTileTextureB = new cljs.core.Keyword("divergence.textures","oceanTileB","divergence.textures/oceanTileB",3336602898);
divergence.entity.oceanTileTextureC = new cljs.core.Keyword("divergence.textures","oceanTileC","divergence.textures/oceanTileC",3336602903);
divergence.entity.chocolateTileTextureA = new cljs.core.Keyword("divergence.textures","chocolateTileA","divergence.textures/chocolateTileA",3992327063);
divergence.entity.chocolateTileTextureB = new cljs.core.Keyword("divergence.textures","chocolateTileB","divergence.textures/chocolateTileB",3992327064);
divergence.entity.chocolateTileTextureC = new cljs.core.Keyword("divergence.textures","chocolateTileC","divergence.textures/chocolateTileC",3992327061);
divergence.entity.chocolateTileTextureD = new cljs.core.Keyword("divergence.textures","chocolateTileD","divergence.textures/chocolateTileD",3992327062);
divergence.entity.chocolateTileTextureE = new cljs.core.Keyword("divergence.textures","chocolateTileE","divergence.textures/chocolateTileE",3992327035);
divergence.entity.chocolateTileTextureF = new cljs.core.Keyword("divergence.textures","chocolateTileF","divergence.textures/chocolateTileF",3992327036);
divergence.entity.chocolateTileTextureG = new cljs.core.Keyword("divergence.textures","chocolateTileG","divergence.textures/chocolateTileG",3992327033);
divergence.entity.chocolateTileTextureH = new cljs.core.Keyword("divergence.textures","chocolateTileH","divergence.textures/chocolateTileH",3992327034);
divergence.entity.chocolateTileTextureI = new cljs.core.Keyword("divergence.textures","chocolateTileI","divergence.textures/chocolateTileI",3992327039);
divergence.entity.chocolateTileTextureJ = new cljs.core.Keyword("divergence.textures","chocolateTileJ","divergence.textures/chocolateTileJ",3992327040);
divergence.entity.backgroundOneTexture = new cljs.core.Keyword("divergence.textures","backgroundOne","divergence.textures/backgroundOne",1170890680);
divergence.entity.backgroundTwoTexture = new cljs.core.Keyword("divergence.textures","backgroundTwo","divergence.textures/backgroundTwo",1170870202);
divergence.entity.backgroundThreeTexture = new cljs.core.Keyword("divergence.textures","backgroundThree","divergence.textures/backgroundThree",2186060016);
divergence.entity.backgroundFourTexture = new cljs.core.Keyword("divergence.textures","backgroundFour","divergence.textures/backgroundFour",2612542100);
divergence.entity.backgroundFiveTexture = new cljs.core.Keyword("divergence.textures","backgroundFive","divergence.textures/backgroundFive",2612548864);
divergence.entity.portalOneTexture = new cljs.core.Keyword("divergence.textures","portalOne","divergence.textures/portalOne",1899824054);
divergence.entity.portalTwoTexture = new cljs.core.Keyword("divergence.textures","portalTwo","divergence.textures/portalTwo",1899836352);
divergence.entity.portalThreeTexture = new cljs.core.Keyword("divergence.textures","portalThree","divergence.textures/portalThree",2678668654);
divergence.entity.catTextureA = new cljs.core.Keyword("divergence.textures","catA","divergence.textures/catA",3039252171);
divergence.entity.catTextureB = new cljs.core.Keyword("divergence.textures","catB","divergence.textures/catB",3039252172);
divergence.entity.catTextureC = new cljs.core.Keyword("divergence.textures","catC","divergence.textures/catC",3039252169);
divergence.entity.batTextureA = new cljs.core.Keyword("divergence.textures","batA","divergence.textures/batA",3039216428);
divergence.entity.batTextureB = new cljs.core.Keyword("divergence.textures","batB","divergence.textures/batB",3039216425);
divergence.entity.cupcakeTextureA = new cljs.core.Keyword("divergence.textures","cupcakeA","divergence.textures/cupcakeA",3536178283);
divergence.entity.cupcakeTextureB = new cljs.core.Keyword("divergence.textures","cupcakeB","divergence.textures/cupcakeB",3536178284);
divergence.entity.cupcakeTextureC = new cljs.core.Keyword("divergence.textures","cupcakeC","divergence.textures/cupcakeC",3536178281);
divergence.entity.donutTextureA = new cljs.core.Keyword("divergence.textures","donutA","divergence.textures/donutA",3755833503);
divergence.entity.donutTextureB = new cljs.core.Keyword("divergence.textures","donutB","divergence.textures/donutB",3755833504);
divergence.entity.donutTextureC = new cljs.core.Keyword("divergence.textures","donutC","divergence.textures/donutC",3755833501);
divergence.entity.donutTextureD = new cljs.core.Keyword("divergence.textures","donutD","divergence.textures/donutD",3755833502);
divergence.entity.donutTextureE = new cljs.core.Keyword("divergence.textures","donutE","divergence.textures/donutE",3755833507);
divergence.entity.enemyATextureRight = new cljs.core.Keyword("divergence.textures","enemyRight1","divergence.textures/enemyRight1",2936623801);
divergence.entity.enemyATextureLeft = new cljs.core.Keyword("divergence.textures","enemyLeft1","divergence.textures/enemyLeft1",701559710);
divergence.entity.enemyBTextureRight = new cljs.core.Keyword("divergence.textures","enemyRight2","divergence.textures/enemyRight2",2936623802);
divergence.entity.enemyBTextureLeft = new cljs.core.Keyword("divergence.textures","enemyLeft2","divergence.textures/enemyLeft2",701559715);
divergence.entity.jumpAnimationRight = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pj1,divergence.entity.pj2], null);
divergence.entity.jumpAnimationLeft = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pj3,divergence.entity.pj4], null);
divergence.entity.walkAnimationRight = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pr1,divergence.entity.pr2,divergence.entity.pr3,divergence.entity.pr4], null);
divergence.entity.walkAnimationLeft = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pl1,divergence.entity.pl2,divergence.entity.pl3,divergence.entity.pl4], null);
divergence.entity.catAnimation = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.catTextureA,divergence.entity.catTextureB,divergence.entity.catTextureC], null);
divergence.entity.batAnimation = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.batTextureA,divergence.entity.batTextureB], null);
divergence.entity.cupcakeAnimation = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.cupcakeTextureA,divergence.entity.cupcakeTextureB,divergence.entity.cupcakeTextureC], null);
divergence.entity.donutAnimation = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.donutTextureA,divergence.entity.donutTextureB,divergence.entity.donutTextureC,divergence.entity.donutTextureD,divergence.entity.donutTextureE], null);
/**
* A map to an entity and a list of its components
*/
divergence.entity.entity__GT_components = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* A map to a component and a list of entities that use it
*/
divergence.entity.normal_component__GT_entities = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
divergence.entity.entity_atom__GT_unique_entity_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
divergence.entity.unique_entity_atom__GT_entity_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
divergence.entity.unique_component__GT_entities = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
divergence.entity.component__GT_entities = (function component__GT_entities(component){var part1 = (function (){var or__3408__auto__ = cljs.core.deref.call(null,divergence.entity.normal_component__GT_entities).call(null,component);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var part2 = (function (){var or__3408__auto__ = cljs.core.deref.call(null,divergence.entity.unique_component__GT_entities).call(null,component);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();return cljs.core.concat.call(null,part1,part2);
});
divergence.entity.entity_atom__GT_component_val = (function entity_atom__GT_component_val(e_atom,component_keyword){var temp__4090__auto__ = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,e_atom);if(cljs.core.truth_(temp__4090__auto__))
{var unique_atom = temp__4090__auto__;var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,unique_atom),component_keyword);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.deref.call(null,e_atom),component_keyword);
}
} else
{return cljs.core.get.call(null,cljs.core.deref.call(null,e_atom),component_keyword);
}
});
divergence.entity.entity_atom__GT_ref = (function entity_atom__GT_ref(e_atom){return divergence.entity.entity_atom__GT_component_val.call(null,e_atom,new cljs.core.Keyword(null,"ref","ref",1014017029));
});
divergence.entity.e_atom__GT_c_val = divergence.entity.entity_atom__GT_component_val;
divergence.entity.entity_count = cljs.core.atom.call(null,0);
divergence.entity.entity = (function entity(components){return cljs.core.reduce.call(null,(function (acc,component){var category = cljs.core.get.call(null,cljs.core.meta.call(null,component),new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"normal","normal",4269125721));return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(component)], null),new cljs.core.Keyword(null,"attr","attr",1016909155).cljs$core$IFn$_invoke$arity$1(component));
}),cljs.core.PersistentArrayMap.EMPTY,components);
});
divergence.entity.block = (function block(scale_x,scale_y,x,y,pname,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,pname),divergence.component.unique.call(null,divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.blockTexture], null))),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"tile","tile",1017464352)),divergence.component.position.call(null,x,y,0),divergence.component.scale.call(null,scale_x,scale_y),divergence.component.collidable,divergence.component.friction.call(null,5),divergence.component.on_stage.call(null,stage)], null));
});
divergence.entity.tile = (function tile(scale_x,scale_y,texture,x,y,pname,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,pname),divergence.component.unique.call(null,divergence.component.sprite.call(null,texture)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"tile","tile",1017464352)),divergence.component.position.call(null,x,y,0),divergence.component.scale.call(null,scale_x,scale_y),divergence.component.collidable,divergence.component.friction.call(null,5),divergence.component.on_stage.call(null,stage)], null));
});
divergence.entity.npc = (function npc(scale_x,scale_y,texture,effect,x,y,pname,move_path,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,pname),divergence.component.unique.call(null,divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [texture], null))),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"npc","npc",1014013523)),divergence.component.position.call(null,x,y,0),divergence.component.scale.call(null,scale_x,scale_y),divergence.component.friction.call(null,5),divergence.component.on_stage.call(null,stage),divergence.component.move_path.call(null,move_path),divergence.component.effect.call(null,effect),divergence.component.path_index,divergence.component.create_ref,divergence.component.accelerates,divergence.component.movable], null));
});
divergence.entity.enemy = (function enemy(scale_x,scale_y,texture,move_path,effect,loop_QMARK_,x,y,pname,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,pname),divergence.component.unique.call(null,divergence.component.sprite.call(null,texture)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"enemy","enemy",1110557434)),divergence.component.position.call(null,x,y,0),divergence.component.scale.call(null,scale_x,scale_y),divergence.component.friction.call(null,5),divergence.component.on_stage.call(null,stage),divergence.component.move_path.call(null,move_path),divergence.component.effect.call(null,effect),divergence.component.path_loop.call(null,loop_QMARK_),divergence.component.path_index,divergence.component.path_direction,divergence.component.create_ref,divergence.component.collidable,divergence.component.accelerates,divergence.component.movable,divergence.component.gravity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null))], null));
});
divergence.entity.player = (function player(stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.unique.call(null,divergence.component.named.call(null,new cljs.core.Keyword(null,"player","player",4323118675))),divergence.component.unique.call(null,divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pf], null))),divergence.component.position.call(null,(divergence.camera.camera_width / 3),-450,0),divergence.component.unique.call(null,divergence.component.player_input),divergence.component.unique.call(null,divergence.component.on_stage.call(null,stage)),divergence.component.unique.call(null,divergence.component.collision_trigger),divergence.component.has_actions,divergence.component.movable,divergence.component.friction.call(null,1),divergence.component.scale.call(null,0.5,0.5),divergence.component.gravity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"player","player",4323118675)),divergence.component.holding_QMARK_.call(null,new cljs.core.Keyword(null,"nothing","nothing",3143228223)),divergence.component.anchor.call(null,0,0),divergence.component.items,divergence.component.pushing,divergence.component.collidable,divergence.component.accelerates,divergence.component.can_jump,divergence.component.climbing,divergence.component.cleared,divergence.component.divergent.call(null,new cljs.core.Keyword(null,"player","player",4323118675)),divergence.component.unique.call(null,divergence.component.player_time_traveler.call(null))], null));
});
divergence.entity.non_player = (function non_player(stage){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,divergence.entity.player.call(null,stage),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unique","unique",4468342595)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"player-time-traveler","player-time-traveler",4417459661),new cljs.core.Keyword(null,"player-input","player-input",3958476112)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unique","unique",4468342595)], null),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"non-player","non-player",841088339));
});
divergence.entity.goal = (function goal(x,y,win_condition,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"goal","goal",1017082501)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"goal","goal",1017082501)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.portalOneTexture,divergence.entity.portalTwoTexture,divergence.entity.portalThreeTexture], null)),divergence.component.create_ref,divergence.component.win_condition.call(null,win_condition),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.anchor.call(null,0.5,0.5),divergence.component.scale.call(null,0.75,0.75)], null));
});
divergence.entity.background = (function background(texture,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"bg","bg",1013907383)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"bg","bg",1013907383)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [texture], null)),divergence.component.tiling_sprite.call(null,texture),divergence.component.on_stage.call(null,stage),divergence.component.has_actions,divergence.component.unique.call(null,divergence.component.player_input),divergence.component.create_ref,divergence.component.movable,divergence.component.position.call(null,-900,-900,0),divergence.component.scale.call(null,1,1)], null));
});
divergence.entity.backgroundOne = cljs.core.partial.call(null,divergence.entity.background,divergence.entity.backgroundOneTexture);
divergence.entity.backgroundTwo = cljs.core.partial.call(null,divergence.entity.background,divergence.entity.backgroundTwoTexture);
divergence.entity.backgroundThree = cljs.core.partial.call(null,divergence.entity.background,divergence.entity.backgroundThreeTexture);
divergence.entity.backgroundFour = cljs.core.partial.call(null,divergence.entity.background,divergence.entity.backgroundFourTexture);
divergence.entity.backgroundFive = cljs.core.partial.call(null,divergence.entity.background,divergence.entity.backgroundFiveTexture);
divergence.entity.box = (function box(pname,x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,pname),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"obstacle","obstacle",1375839745)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.boxTexture], null)),divergence.component.collision_trigger,divergence.component.create_ref,divergence.component.accelerates,divergence.component.movable,divergence.component.has_actions,divergence.component.pushable,divergence.component.collidable,divergence.component.friction.call(null,1),divergence.component.gravity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null)),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,1,1)], null));
});
divergence.entity.boxfloat = (function boxfloat(pname,x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,pname),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"obstacle","obstacle",1375839745)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.boxTexture], null)),divergence.component.collision_trigger,divergence.component.create_ref,divergence.component.accelerates,divergence.component.movable,divergence.component.has_actions,divergence.component.pushable,divergence.component.collidable,divergence.component.friction.call(null,1),divergence.component.gravity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null)),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,1,1)], null));
});
divergence.entity.horizontal_full_block = cljs.core.partial.call(null,divergence.entity.block,4,.1);
divergence.entity.vertical_full_block = cljs.core.partial.call(null,divergence.entity.block,.1,1.5);
divergence.entity.regular_block = cljs.core.partial.call(null,divergence.entity.block,.1,.1);
divergence.entity.rope_block = (function rope_block(x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"rope","rope",1017410660)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"tool","tool",1017470218)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.ropeTexture], null)),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,1,1),divergence.component.anchor.call(null,0,0),divergence.component.create_ref,divergence.component.can_climb], null));
});
divergence.entity.starTileA = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.starTileTextureA], null));
divergence.entity.starTileB = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.starTileTextureB], null));
divergence.entity.starTileC = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.starTileTextureC], null));
divergence.entity.starTileD = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.starTileTextureD], null));
divergence.entity.starTileE = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.starTileTextureE], null));
divergence.entity.starTileF = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.starTileTextureF], null));
divergence.entity.starTilePrime = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.starTileTexturePrime], null));
divergence.entity.metalTileA = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.metalTileTextureA], null));
divergence.entity.metalTileB = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.metalTileTextureB], null));
divergence.entity.metalTileC = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.metalTileTextureC], null));
divergence.entity.groundTileA = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.groundTileTextureA], null));
divergence.entity.groundTileB = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.groundTileTextureB], null));
divergence.entity.groundTileC = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.groundTileTextureC], null));
divergence.entity.oceanTileA = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.oceanTileTextureA], null));
divergence.entity.oceanTileB = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.oceanTileTextureB], null));
divergence.entity.oceanTileC = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.oceanTileTextureC], null));
divergence.entity.chocolateTileA = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureA], null));
divergence.entity.chocolateTileB = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureB], null));
divergence.entity.chocolateTileC = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureC], null));
divergence.entity.chocolateTileD = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureD], null));
divergence.entity.chocolateTileE = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureE], null));
divergence.entity.chocolateTileF = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureF], null));
divergence.entity.chocolateTileG = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureG], null));
divergence.entity.chocolateTileH = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureH], null));
divergence.entity.chocolateTileI = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureI], null));
divergence.entity.chocolateTileJ = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.chocolateTileTextureJ], null));
divergence.entity.candle = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.candleATexture,divergence.entity.candleBTexture], null));
divergence.entity.ship = cljs.core.partial.call(null,divergence.entity.tile,1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.shipTexture], null));
divergence.entity.cat = cljs.core.partial.call(null,divergence.entity.tile,1,1,divergence.entity.catAnimation);
divergence.entity.bat = cljs.core.partial.call(null,divergence.entity.tile,1,1,divergence.entity.batAnimation);
divergence.entity.cupcake = cljs.core.partial.call(null,divergence.entity.tile,1,1,divergence.entity.cupcakeAnimation);
divergence.entity.donut = cljs.core.partial.call(null,divergence.entity.tile,1,1,divergence.entity.donutAnimation);
divergence.entity.some_text = (function some_text(stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"fps-counter","fps-counter",2249834634)),divergence.component.unique.call(null,divergence.component.text.call(null,"Hello World",{"fill": "white", "font": "20px Courier New"})),divergence.component.position.call(null,20,10,0),divergence.component.fps_counter,divergence.component.on_stage.call(null,stage)], null));
});
divergence.entity.tutorial_text = (function tutorial_text(text,x,y,path,loop_QMARK_,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"tutorial-text","tutorial-text",2676267438)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"text","text",1017460895)),divergence.component.unique.call(null,divergence.component.text.call(null,text,{"fill": "white", "font": "16px Calibri"})),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.move_path.call(null,path),divergence.component.path_loop.call(null,loop_QMARK_),divergence.component.path_index,divergence.component.movable,divergence.component.path_direction], null));
});
divergence.entity.key_block = (function key_block(x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"key","key",1014010321)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"item","item",1017147013)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.keyTexture], null)),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,0.5,0.5),divergence.component.create_ref,divergence.component.movable], null));
});
divergence.entity.push_button_block = (function push_button_block(x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"push-button","push-button",3466626231)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"button","button",3931183780)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pushButtonTexture], null)),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,0.5,0.5),divergence.component.create_ref,divergence.component.movable,divergence.component.button_pushed], null));
});
divergence.entity.door = (function door(x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"door-oc","door-oc",2853748677)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"door","door",1016993568)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.doorClosedTexture], null)),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,0.7,0.7),divergence.component.create_ref,divergence.component.gravity], null));
});
divergence.entity.push_button_box_fall_block = (function push_button_box_fall_block(x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"push-button-box-fall","push-button-box-fall",2511988023)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.pushButtonTexture], null)),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,0.5,0.5),divergence.component.create_ref,divergence.component.gravity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null))], null));
});
divergence.entity.treasure_chest_block = (function treasure_chest_block(x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"treasure-chest","treasure-chest",852693461)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.treasureChestTexture], null)),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,0.6,0.6),divergence.component.create_ref,divergence.component.gravity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null)),divergence.component.button_pushed], null));
});
divergence.entity.donut_block = (function donut_block(x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"donut-animation","donut-animation",4043390475)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"donut","donut",1109672596)),divergence.component.sprite.call(null,divergence.entity.donutAnimation),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,0.1,0.1),divergence.component.create_ref,divergence.component.gravity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null))], null));
});
divergence.entity.cupcake_block = (function cupcake_block(x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"cupcake-animation","cupcake-animation",3074540383)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"cupcake","cupcake",2138546408)),divergence.component.sprite.call(null,divergence.entity.cupcakeAnimation),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,0.1,0.1),divergence.component.create_ref,divergence.component.gravity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null))], null));
});
divergence.entity.flower_block = (function flower_block(x,y,stage){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.named.call(null,new cljs.core.Keyword(null,"flower","flower",4037242317)),divergence.component.entity_type.call(null,new cljs.core.Keyword(null,"button-fall","button-fall",3502863528)),divergence.component.sprite.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.entity.flowerTexture], null)),divergence.component.position.call(null,x,y,0),divergence.component.on_stage.call(null,stage),divergence.component.scale.call(null,0.6,0.6),divergence.component.create_ref,divergence.component.gravity.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,divergence.entity.normal_gravity,0], null)),divergence.component.button_pushed], null));
});
divergence.entity.timestream = (function timestream(){return divergence.entity.entity.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [divergence.component.timestream.call(null)], null));
});
divergence.entity.register_entity_BANG_ = (function register_entity_BANG_(entity){var unique_components = new cljs.core.Keyword(null,"unique","unique",4468342595).cljs$core$IFn$_invoke$arity$1(entity);var normal_components = new cljs.core.Keyword(null,"normal","normal",4269125721).cljs$core$IFn$_invoke$arity$1(entity);var unique_entity_atom = cljs.core.atom.call(null,unique_components);var entity_atom = cljs.core.atom.call(null,normal_components);cljs.core.swap_BANG_.call(null,divergence.entity.entity__GT_components,cljs.core.assoc,cljs.core.deref.call(null,divergence.entity.entity_count),entity_atom);
cljs.core.swap_BANG_.call(null,divergence.entity.entity_count,cljs.core.inc);
var seq__20396_20408 = cljs.core.seq.call(null,normal_components);var chunk__20397_20409 = null;var count__20398_20410 = 0;var i__20399_20411 = 0;while(true){
if((i__20399_20411 < count__20398_20410))
{var vec__20400_20412 = cljs.core._nth.call(null,chunk__20397_20409,i__20399_20411);var n_20413 = cljs.core.nth.call(null,vec__20400_20412,0,null);var component_20414 = cljs.core.nth.call(null,vec__20400_20412,1,null);cljs.core.swap_BANG_.call(null,divergence.entity.normal_component__GT_entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_20413], null),cljs.core.conj,entity_atom);
{
var G__20415 = seq__20396_20408;
var G__20416 = chunk__20397_20409;
var G__20417 = count__20398_20410;
var G__20418 = (i__20399_20411 + 1);
seq__20396_20408 = G__20415;
chunk__20397_20409 = G__20416;
count__20398_20410 = G__20417;
i__20399_20411 = G__20418;
continue;
}
} else
{var temp__4092__auto___20419 = cljs.core.seq.call(null,seq__20396_20408);if(temp__4092__auto___20419)
{var seq__20396_20420__$1 = temp__4092__auto___20419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20396_20420__$1))
{var c__4150__auto___20421 = cljs.core.chunk_first.call(null,seq__20396_20420__$1);{
var G__20422 = cljs.core.chunk_rest.call(null,seq__20396_20420__$1);
var G__20423 = c__4150__auto___20421;
var G__20424 = cljs.core.count.call(null,c__4150__auto___20421);
var G__20425 = 0;
seq__20396_20408 = G__20422;
chunk__20397_20409 = G__20423;
count__20398_20410 = G__20424;
i__20399_20411 = G__20425;
continue;
}
} else
{var vec__20401_20426 = cljs.core.first.call(null,seq__20396_20420__$1);var n_20427 = cljs.core.nth.call(null,vec__20401_20426,0,null);var component_20428 = cljs.core.nth.call(null,vec__20401_20426,1,null);cljs.core.swap_BANG_.call(null,divergence.entity.normal_component__GT_entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_20427], null),cljs.core.conj,entity_atom);
{
var G__20429 = cljs.core.next.call(null,seq__20396_20420__$1);
var G__20430 = null;
var G__20431 = 0;
var G__20432 = 0;
seq__20396_20408 = G__20429;
chunk__20397_20409 = G__20430;
count__20398_20410 = G__20431;
i__20399_20411 = G__20432;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,divergence.entity.entity_atom__GT_unique_entity_atom,cljs.core.assoc,entity_atom,unique_entity_atom);
cljs.core.swap_BANG_.call(null,divergence.entity.unique_entity_atom__GT_entity_atom,cljs.core.assoc,unique_entity_atom,entity_atom);
var seq__20402_20433 = cljs.core.seq.call(null,unique_components);var chunk__20403_20434 = null;var count__20404_20435 = 0;var i__20405_20436 = 0;while(true){
if((i__20405_20436 < count__20404_20435))
{var vec__20406_20437 = cljs.core._nth.call(null,chunk__20403_20434,i__20405_20436);var n_20438 = cljs.core.nth.call(null,vec__20406_20437,0,null);var component_20439 = cljs.core.nth.call(null,vec__20406_20437,1,null);cljs.core.swap_BANG_.call(null,divergence.entity.unique_component__GT_entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_20438], null),cljs.core.conj,unique_entity_atom);
{
var G__20440 = seq__20402_20433;
var G__20441 = chunk__20403_20434;
var G__20442 = count__20404_20435;
var G__20443 = (i__20405_20436 + 1);
seq__20402_20433 = G__20440;
chunk__20403_20434 = G__20441;
count__20404_20435 = G__20442;
i__20405_20436 = G__20443;
continue;
}
} else
{var temp__4092__auto___20444 = cljs.core.seq.call(null,seq__20402_20433);if(temp__4092__auto___20444)
{var seq__20402_20445__$1 = temp__4092__auto___20444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20402_20445__$1))
{var c__4150__auto___20446 = cljs.core.chunk_first.call(null,seq__20402_20445__$1);{
var G__20447 = cljs.core.chunk_rest.call(null,seq__20402_20445__$1);
var G__20448 = c__4150__auto___20446;
var G__20449 = cljs.core.count.call(null,c__4150__auto___20446);
var G__20450 = 0;
seq__20402_20433 = G__20447;
chunk__20403_20434 = G__20448;
count__20404_20435 = G__20449;
i__20405_20436 = G__20450;
continue;
}
} else
{var vec__20407_20451 = cljs.core.first.call(null,seq__20402_20445__$1);var n_20452 = cljs.core.nth.call(null,vec__20407_20451,0,null);var component_20453 = cljs.core.nth.call(null,vec__20407_20451,1,null);cljs.core.swap_BANG_.call(null,divergence.entity.unique_component__GT_entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n_20452], null),cljs.core.conj,unique_entity_atom);
{
var G__20454 = cljs.core.next.call(null,seq__20402_20445__$1);
var G__20455 = null;
var G__20456 = 0;
var G__20457 = 0;
seq__20402_20433 = G__20454;
chunk__20403_20434 = G__20455;
count__20404_20435 = G__20456;
i__20405_20436 = G__20457;
continue;
}
}
} else
{}
}
break;
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_atom,unique_entity_atom], null);
});
divergence.entity.destroy_entity_BANG_ = (function destroy_entity_BANG_(entity){var unique_atom = cljs.core.deref.call(null,divergence.entity.entity_atom__GT_unique_entity_atom).call(null,entity);var container = new cljs.core.Keyword(null,"container","container",602947571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,unique_atom));var unique_keys = cljs.core.keys.call(null,cljs.core.deref.call(null,unique_atom));var normal_keys = cljs.core.keys.call(null,cljs.core.deref.call(null,entity));var ref = divergence.entity.entity_atom__GT_ref.call(null,entity);if(cljs.core.not_any_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.deref.call(null,entity)))
{ref.parent.removeChild(ref);
} else
{}
cljs.core.swap_BANG_.call(null,divergence.entity.entity__GT_components,cljs.core.dissoc,entity);
var seq__20468_20476 = cljs.core.seq.call(null,normal_keys);var chunk__20469_20477 = null;var count__20470_20478 = 0;var i__20471_20479 = 0;while(true){
if((i__20471_20479 < count__20470_20478))
{var k_20480 = cljs.core._nth.call(null,chunk__20469_20477,i__20471_20479);cljs.core.swap_BANG_.call(null,divergence.entity.normal_component__GT_entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_20480], null),((function (seq__20468_20476,chunk__20469_20477,count__20470_20478,i__20471_20479,k_20480){
return (function (p1__20458_SHARP_){return cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,entity),p1__20458_SHARP_);
});})(seq__20468_20476,chunk__20469_20477,count__20470_20478,i__20471_20479,k_20480))
);
{
var G__20481 = seq__20468_20476;
var G__20482 = chunk__20469_20477;
var G__20483 = count__20470_20478;
var G__20484 = (i__20471_20479 + 1);
seq__20468_20476 = G__20481;
chunk__20469_20477 = G__20482;
count__20470_20478 = G__20483;
i__20471_20479 = G__20484;
continue;
}
} else
{var temp__4092__auto___20485 = cljs.core.seq.call(null,seq__20468_20476);if(temp__4092__auto___20485)
{var seq__20468_20486__$1 = temp__4092__auto___20485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20468_20486__$1))
{var c__4150__auto___20487 = cljs.core.chunk_first.call(null,seq__20468_20486__$1);{
var G__20488 = cljs.core.chunk_rest.call(null,seq__20468_20486__$1);
var G__20489 = c__4150__auto___20487;
var G__20490 = cljs.core.count.call(null,c__4150__auto___20487);
var G__20491 = 0;
seq__20468_20476 = G__20488;
chunk__20469_20477 = G__20489;
count__20470_20478 = G__20490;
i__20471_20479 = G__20491;
continue;
}
} else
{var k_20492 = cljs.core.first.call(null,seq__20468_20486__$1);cljs.core.swap_BANG_.call(null,divergence.entity.normal_component__GT_entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_20492], null),((function (seq__20468_20476,chunk__20469_20477,count__20470_20478,i__20471_20479,k_20492,seq__20468_20486__$1,temp__4092__auto___20485){
return (function (p1__20458_SHARP_){return cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,entity),p1__20458_SHARP_);
});})(seq__20468_20476,chunk__20469_20477,count__20470_20478,i__20471_20479,k_20492,seq__20468_20486__$1,temp__4092__auto___20485))
);
{
var G__20493 = cljs.core.next.call(null,seq__20468_20486__$1);
var G__20494 = null;
var G__20495 = 0;
var G__20496 = 0;
seq__20468_20476 = G__20493;
chunk__20469_20477 = G__20494;
count__20470_20478 = G__20495;
i__20471_20479 = G__20496;
continue;
}
}
} else
{}
}
break;
}
var seq__20472_20497 = cljs.core.seq.call(null,unique_keys);var chunk__20473_20498 = null;var count__20474_20499 = 0;var i__20475_20500 = 0;while(true){
if((i__20475_20500 < count__20474_20499))
{var k_20501 = cljs.core._nth.call(null,chunk__20473_20498,i__20475_20500);cljs.core.swap_BANG_.call(null,divergence.entity.unique_component__GT_entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_20501], null),((function (seq__20472_20497,chunk__20473_20498,count__20474_20499,i__20475_20500,k_20501){
return (function (p1__20459_SHARP_){return cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,unique_atom),p1__20459_SHARP_);
});})(seq__20472_20497,chunk__20473_20498,count__20474_20499,i__20475_20500,k_20501))
);
{
var G__20502 = seq__20472_20497;
var G__20503 = chunk__20473_20498;
var G__20504 = count__20474_20499;
var G__20505 = (i__20475_20500 + 1);
seq__20472_20497 = G__20502;
chunk__20473_20498 = G__20503;
count__20474_20499 = G__20504;
i__20475_20500 = G__20505;
continue;
}
} else
{var temp__4092__auto___20506 = cljs.core.seq.call(null,seq__20472_20497);if(temp__4092__auto___20506)
{var seq__20472_20507__$1 = temp__4092__auto___20506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20472_20507__$1))
{var c__4150__auto___20508 = cljs.core.chunk_first.call(null,seq__20472_20507__$1);{
var G__20509 = cljs.core.chunk_rest.call(null,seq__20472_20507__$1);
var G__20510 = c__4150__auto___20508;
var G__20511 = cljs.core.count.call(null,c__4150__auto___20508);
var G__20512 = 0;
seq__20472_20497 = G__20509;
chunk__20473_20498 = G__20510;
count__20474_20499 = G__20511;
i__20475_20500 = G__20512;
continue;
}
} else
{var k_20513 = cljs.core.first.call(null,seq__20472_20507__$1);cljs.core.swap_BANG_.call(null,divergence.entity.unique_component__GT_entities,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_20513], null),((function (seq__20472_20497,chunk__20473_20498,count__20474_20499,i__20475_20500,k_20513,seq__20472_20507__$1,temp__4092__auto___20506){
return (function (p1__20459_SHARP_){return cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,unique_atom),p1__20459_SHARP_);
});})(seq__20472_20497,chunk__20473_20498,count__20474_20499,i__20475_20500,k_20513,seq__20472_20507__$1,temp__4092__auto___20506))
);
{
var G__20514 = cljs.core.next.call(null,seq__20472_20507__$1);
var G__20515 = null;
var G__20516 = 0;
var G__20517 = 0;
seq__20472_20497 = G__20514;
chunk__20473_20498 = G__20515;
count__20474_20499 = G__20516;
i__20475_20500 = G__20517;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.call(null,divergence.entity.entity_atom__GT_unique_entity_atom,cljs.core.dissoc,entity);
return cljs.core.swap_BANG_.call(null,divergence.entity.unique_entity_atom__GT_entity_atom,cljs.core.dissoc,entity);
});
divergence.entity.filter_entities = (function filter_entities(component_name,entities){return cljs.core.filter.call(null,(function (e){return divergence.entity.entity_atom__GT_component_val.call(null,e,component_name);
}),entities);
});

//# sourceMappingURL=entity.js.map