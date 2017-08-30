///<reference path='lib/phaser.comments.d.ts' />

const menuState = {
  
  create: function () {
      
    const nameLabel = game.add.text(80, 80, 'Arseteroids', {font: '50px Arial', fill: '#ffffff'});
     
    const startLabel = game.add.text(80,game.world.height-80,"press the W key to start", {font: '25px Arial', fill: '#ffffff'});

    const wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    wkey.onDown.addOnce(this.start, this);
  },

  start: function () {
      game.state.start('play');
  }

}