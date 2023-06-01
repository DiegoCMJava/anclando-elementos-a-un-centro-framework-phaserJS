class AlignOffset extends Phaser.Scene {

    
    constructor ()
    {
        super();
        this.y = 0;
        this.gems = [];
    };

   
preload () {


    this.load.image('gem', 'assets/sprites/gem.png');
    this.load.image('diamon', 'assets/sprites/diamon.png');
};


create () {

    // este es nuestro Sprite 'principal', el primero de la matriz
    this.gems.push(this.add.sprite(200, 300, 'gem'));

    for (let i = 0; i < 8; i++) {
        this.gems.push(this.add.sprite(0, 0, 'diamon'));
        
    }    
};


update (){
    Phaser.Actions.AlignTo(this.gems, Phaser.Display.Align.RIGHT_CENTER, 0, Math.sin(this.y) * 4); 
    this.y += 0.1;
    console.log(this.y)
}
};


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: AlignOffset

 };

 // creación del juego 
 const game = new Phaser.Game(config);
