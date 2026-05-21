class GameScene extends Phaser.Scene {
    constructor() {
        super('gameScene');
    }
    preload() {
    }
    create() {
        this.add.graphics();
        this.enemy = this.add.rectangle(750, 500, 50, 100, 0x0000ff)

        this.tweens.add({
            targets: this.enemy,
            duration: 3000,
            x: 50,
            ease: 'linear',
            loop: -1
        })

    }
}