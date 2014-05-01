// Compiled by ClojureScript 0.0-2138
goog.provide('divergence.renderer');
goog.require('cljs.core');
divergence.renderer.container = cljs.core.atom.call(null,(new PIXI.DisplayObjectContainer()));
divergence.renderer.camera = cljs.core.atom.call(null,(new PIXI.DisplayObjectContainer()));
divergence.renderer.stage = (new PIXI.Stage(16777215));
divergence.renderer.renderer = (new PIXI.autoDetectRenderer(800,450));
divergence.renderer.blur = (new PIXI.BlurFilter());
divergence.renderer.twist = (new PIXI.TwistFilter());
(divergence.renderer.twist["angle"] = .5);
(divergence.renderer.twist["radius"] = 1);
document.getElementById("game-container").appendChild(divergence.renderer.renderer.view);

//# sourceMappingURL=renderer.js.map