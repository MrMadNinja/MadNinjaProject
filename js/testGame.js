
let gameScene = new Phaser.Scene('Game')

let config ={
    type: Phaser.AUTO,
    width:640,
    heiht:360,
    scene: gameScene
}

let game = new Phaser.Game(config)

gameScene.preload = function(){
    this.load.image('background','GameAsset/TestGame/img/background.png')
}
gameScene.create = function(){
    this.add.sprite(0,0,'background')
}