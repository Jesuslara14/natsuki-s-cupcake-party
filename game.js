import Phaser from 'phaser'
import Scene1 from './scenes/scene1'

window.onload = function(){
    const config = {
        width: 800,
        height: 600,
        backgroundColor: 0x0000,
        scene: [Scene1]
    }

    console.log(Phaser)

    var game = new Phaser.Game(config)
}