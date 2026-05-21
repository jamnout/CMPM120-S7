class GameScene extends Phaser.Scene {
    constructor() {
        super('gameScene');
    }
    preload() {
    }
    create() {
        this.add.graphics();
        this.Title = this.add.text(
            115,
            207,
            "Hello",
        );

    }
}