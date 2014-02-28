(ns divergence.textures)

(def bunnyTexture (js/PIXI.Texture.fromImage "assets/img/bunny.png"))
(def blockTexture (js/PIXI.Texture.fromImage "assets/img/Brick_Block.png"))

(def playerTexture (js/PIXI.Texture.fromImage "assets/img/player.png"))
(def boxTexture (js/PIXI.Texture.fromImage "assets/img/box.png"))
(def goalTexture (js/PIXI.Texture.fromImage "assets/img/door.png"))
(def bgTexture (js/PIXI.Texture.fromImage "assets/img/background.png"))
(def ropeTexture (js/PIXI.Texture.fromImage "assets/img/rope.png"))
(def keyTexture (js/PIXI.Texture.fromImage "assets/img/key.png"))

(def textures
  {::bunny bunnyTexture
   ::player playerTexture
   ::box boxTexture
   ::goal goalTexture
   ::bg bgTexture
   ::rope ropeTexture
   ::key keyTexture
   ::block blockTexture})
