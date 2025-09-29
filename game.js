import Phaser from 'phaser'

window.onload = function(){
    const config = {
        width: 800,
        height: 600,
        backgroundColor: 0x0000
    }

    console.log(Phaser)

    var game = new Phaser.Game(config)
}