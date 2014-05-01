(ns divergence.textures)

;;---------------------------------------------
;;TEXTURE DEFINITIONS--------------------------
;;---------------------------------------------
(def playerWalkRightTextureA (js/PIXI.Texture.fromImage "assets/img/player-walk-right1.png"))
(def playerWalkRightTextureB (js/PIXI.Texture.fromImage "assets/img/player-walk-right2.png"))
(def playerWalkRightTextureC (js/PIXI.Texture.fromImage "assets/img/player-walk-right3.png"))
(def playerWalkRightTextureD (js/PIXI.Texture.fromImage "assets/img/player-walk-right4.png"))

(def playerWalkLeftTextureA (js/PIXI.Texture.fromImage "assets/img/player-walk-left1.png"))
(def playerWalkLeftTextureB (js/PIXI.Texture.fromImage "assets/img/player-walk-left2.png"))
(def playerWalkLeftTextureC (js/PIXI.Texture.fromImage "assets/img/player-walk-left3.png"))
(def playerWalkLeftTextureD (js/PIXI.Texture.fromImage "assets/img/player-walk-left4.png"))

(def playerJumpingTextureA (js/PIXI.Texture.fromImage "assets/img/player-jump-1.png"))
(def playerJumpingTextureB (js/PIXI.Texture.fromImage "assets/img/player-jump-2.png"))
(def playerJumpingTextureC (js/PIXI.Texture.fromImage "assets/img/player-jump-3.png"))
(def playerJumpingTextureD (js/PIXI.Texture.fromImage "assets/img/player-jump-4.png"))

(def playerFacingFront (js/PIXI.Texture.fromImage "assets/img/player-front.png"))
(def playerFacingBack (js/PIXI.Texture.fromImage "assets/img/player-back.png"))

(def candleATexture (js/PIXI.Texture.fromImage "assets/img/candle1.png"))
(def candleBTexture (js/PIXI.Texture.fromImage "assets/img/candle2.png"))

(def shipTexture (js/PIXI.Texture.fromImage "assets/img/ship.png"))

(def coffeeBlueTexture (js/PIXI.Texture.fromImage "assets/img/bluecoffee.png"))
(def coffeePinkTexture (js/PIXI.Texture.fromImage "assets/img/pinkcoffee.png"))

(def portalOneTexture (js/PIXI.Texture.fromImage "assets/img/portal1.png"))
(def portalTwoTexture (js/PIXI.Texture.fromImage "assets/img/portal2.png"))
(def portalThreeTexture (js/PIXI.Texture.fromImage "assets/img/portal3.png"))

(def blockTexture (js/PIXI.Texture.fromImage "assets/img/Brick_Block.png"))
(def boxTexture (js/PIXI.Texture.fromImage "assets/img/box.png"))
(def goalTexture (js/PIXI.Texture.fromImage "assets/img/door.png"))

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

(def groundTileTextureA (js/PIXI.Texture.fromImage "assets/img/groundtile-a.png"))
(def groundTileTextureB (js/PIXI.Texture.fromImage "assets/img/groundtile-b.png"))
(def groundTileTextureC (js/PIXI.Texture.fromImage "assets/img/groundtile-c.png"))

(def oceanTileTextureA (js/PIXI.Texture.fromImage "assets/img/oceantile-a.png"))
(def oceanTileTextureB (js/PIXI.Texture.fromImage "assets/img/oceantile-b.png"))
(def oceanTileTextureC (js/PIXI.Texture.fromImage "assets/img/oceantile-c.png"))

(def catTextureA (js/PIXI.Texture.fromImage "assets/img/cat1.png"))
(def catTextureB (js/PIXI.Texture.fromImage "assets/img/cat2.png"))
(def catTextureC (js/PIXI.Texture.fromImage "assets/img/cat3.png"))

(def batTextureA (js/PIXI.Texture.fromImage "assets/img/bat1.png"))
(def batTextureB (js/PIXI.Texture.fromImage "assets/img/bat2.png"))

(def enemyTextureA (js/PIXI.Texture.fromImage "assets/img/enemy1right.png"))
(def enemyTextureB (js/PIXI.Texture.fromImage "assets/img/enemy1left.png"))
(def enemyTextureC (js/PIXI.Texture.fromImage "assets/img/enemy2right.png"))
(def enemyTextureD (js/PIXI.Texture.fromImage "assets/img/enemy2left.png"))

(def backgroundOne (js/PIXI.Texture.fromImage "assets/img/background-a.png"))
(def backgroundTwo (js/PIXI.Texture.fromImage "assets/img/background-b.png"))
(def backgroundThree (js/PIXI.Texture.fromImage "assets/img/background-c.png"))
(def backgroundFour (js/PIXI.Texture.fromImage "assets/img/background-d.png"))
(def backgroundFive (js/PIXI.Texture.fromImage "assets/img/background-e.png"))


(def textures
  { ::playerright1  playerWalkRightTextureA
    ::playerright2  playerWalkRightTextureB
    ::playerright3  playerWalkRightTextureC
    ::playerright4  playerWalkRightTextureD

    ::playerleft1  playerWalkLeftTextureA
    ::playerleft2  playerWalkLeftTextureB
    ::playerleft3  playerWalkLeftTextureC
    ::playerleft4  playerWalkLeftTextureD

    ::playerJump1  playerJumpingTextureA
    ::playerJump2  playerJumpingTextureB
    ::playerJump3  playerJumpingTextureC
    ::playerJump4  playerJumpingTextureD

    ::playerfront  playerFacingFront
    ::playerback   playerFacingBack

    ::box boxTexture
    ::goal goalTexture
    ::block blockTexture

    ::rope (js/PIXI.Texture.fromImage "assets/img/rope.png")
    ::key (js/PIXI.Texture.fromImage "assets/img/key.png")
    ::push-button (js/PIXI.Texture.fromImage "assets/img/push-button.png")
    ::door-closed (js/PIXI.Texture.fromImage "assets/img/door-closed.png")
    ::door-open (js/PIXI.Texture.fromImage "assets/img/door-open.png")
    ::treasure-chest (js/PIXI.Texture.fromImage "assets/img/chest.png")

    ::portalOne portalOneTexture
    ::portalTwo portalTwoTexture
    ::portalThree portalThreeTexture

    ::candleA candleATexture
    ::candleB candleBTexture

    ::ship shipTexture

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

    ::groundTileA groundTileTextureA
    ::groundTileB groundTileTextureB
    ::groundTileC groundTileTextureC

    ::oceanTileA oceanTileTextureA
    ::oceanTileB oceanTileTextureB
    ::oceanTileC oceanTileTextureC

    ::catA catTextureA
    ::catB catTextureB
    ::catC catTextureC

    ::batA batTextureA
    ::batB batTextureB

    ::enemyRight1 enemyTextureA
    ::enemyLeft1 enemyTextureB
    ::enemyRight2 enemyTextureC
    ::enemyLeft2 enemyTextureD

    ::backgroundOne backgroundOne
    ::backgroundTwo backgroundTwo
    ::backgroundThree backgroundThree
    ::backgroundFour backgroundFour
    ::backgroundFive backgroundFive
    })
