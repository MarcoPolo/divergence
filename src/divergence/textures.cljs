(ns divergence.textures)

(def bunnyTexture (js/PIXI.Texture.fromImage "assets/img/bunny.png"))


(def playerStandingTexture (js/PIXI.Texture.fromImage "assets/img/player-standing-filled.png"))
(def playerJumpingTexture (js/PIXI.Texture.fromImage "assets/img/player-jumping-filled.png"))

(def candleATexture (js/PIXI.Texture.fromImage "assets/img/candle1.png"))
(def candleBTexture (js/PIXI.Texture.fromImage "assets/img/candle2.png"))

(def coffeeBlueTexture (js/PIXI.Texture.fromImage "assets/img/bluecoffee.png"))
(def coffeePinkTexture (js/PIXI.Texture.fromImage "assets/img/pinkcoffee.png"))

(def portalOneTexture (js/PIXI.Texture.fromImage "assets/img/portal1.png"))
(def portalTwoTexture (js/PIXI.Texture.fromImage "assets/img/portal2.png"))
(def portalThreeTexture (js/PIXI.Texture.fromImage "assets/img/portal3.png"))

(def blockTexture (js/PIXI.Texture.fromImage "assets/img/Brick_Block.png"))
(def boxTexture (js/PIXI.Texture.fromImage "assets/img/box.png"))
(def goalTexture (js/PIXI.Texture.fromImage "assets/img/door.png"))
(def bgTexture (js/PIXI.Texture.fromImage "assets/img/background.png"))

(def starTileTextureA (js/PIXI.Texture.fromImage "assets/img/star1.png"))
(def starTileTextureB (js/PIXI.Texture.fromImage "assets/img/star2.png"))
(def starTileTextureC (js/PIXI.Texture.fromImage "assets/img/star3.png"))
(def starTileTextureD (js/PIXI.Texture.fromImage "assets/img/star4.png"))
(def starTileTextureE (js/PIXI.Texture.fromImage "assets/img/star5.png"))
(def starTileTextureF (js/PIXI.Texture.fromImage "assets/img/star6.png"))
(def starTileTexturePrime (js/PIXI.Texture.fromImage "assets/img/stars.png"))

(def metalTileTextureA (js/PIXI.Texture.fromImage "assets/img/tile1.png"))
(def metalTileTextureB (js/PIXI.Texture.fromImage "assets/img/tile2.png"))
(def metalTileTextureC (js/PIXI.Texture.fromImage "assets/img/tile3.png"))

(def backgroundOneTexture (js/PIXI.Texture.fromImage "assets/img/background-a.png"))
(def backgroundTwoTexture (js/PIXI.Texture.fromImage "assets/img/background-b.png"))
(def backgroundThreeTexture (js/PIXI.Texture.fromImage "assets/img/background-c.png"))

(def textures
  {::bunny bunnyTexture

   ::playerStanding playerStandingTexture
   ::playerJumping playerJumpingTexture

   ::box boxTexture
   ::goal goalTexture
   ::bg bgTexture
   ::block blockTexture

   ::rope ropeTexture
   ::key keyTexture

   ::portalOne portalOneTexture
   ::portalTwo portalTwoTexture
   ::portalThree portalThreeTexture

   ::candleA candleATexture
   ::candleB candleBTexture

   ::starTileA starTileTextureA
   ::starTileB starTileTextureB
   ::starTileC starTileTextureC
   ::starTileD starTileTextureD
   ::starTileE starTileTextureE
   ::starTileF starTileTextureF
   ::starTilePrime starTileTexturePrime

   ::metalTileA metalTileTextureA
   ::metalTileB metalTileTextureB
   ::metalTileC metalTileTextureC

   ::backgroundOne backgroundOneTexture
   ::backgroundTwo backgroundTwoTexture
   ::backgroundThree backgroundThreeTexture
   })
