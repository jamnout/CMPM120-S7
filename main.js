let config = {
    parent: 'phaser-game',
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [ Game ]
}

let game = new Phaser.Game(config)