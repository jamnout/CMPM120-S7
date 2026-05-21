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

        this.player = this.add.circle(400, 525, 25, 0xff0000)

        this.input.keyboard.on('keydown-SPACE', () => {

                if (this.player.y === 525) {
                    this.tweens.add({
                        targets: this.player,
                        duration: 500,
                        y: 300,
                        ease: 'Power2',
                        yoyo: true
                    })
            }
        })


    }
}