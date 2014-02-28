(ns divergence.textures)

(def bunnyTexture (js/PIXI.Texture.fromImage "assets/img/bunny.png"))
(def blockTexture (js/PIXI.Texture.fromImage "assets/img/Brick_Block.png"))

(def textures
  {::bunny bunnyTexture
   ::block blockTexture})
