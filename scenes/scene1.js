export default class Scene1 extends Phaser.Scene{
    constructor(){
        super("NewSceneBooting")
    }

    create(){
        this.add.text(20,20,"game is being gamed");
    }
}

