///<reference path='lib/phaser.comments.d.ts' />

const preloadState = {
  
  preload: function() {
    
    const loadingLabel = game.add.text(80, 150, 'loading...', {font:'30px Courier', fill = '#ffffff'});
    
    game.load.image('bum', 'assets/bum.png');
    game.load.image('poo', 'assets/poo.png');

  }

  create: function() {
   
    game.state.start('menu');
  
  }


}