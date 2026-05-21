let config = {
    parent: 'phaser-game',
    type: Phaser.WEBGL,
    pixelArt: true,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [ GameScene ],
}

const game = new Phaser.Game(config)