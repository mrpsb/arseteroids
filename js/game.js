///<reference path='lib/phaser.comments.d.ts' />

// Set up new game
const game = new Phaser.Game(1024,768,Phaser.AUTO,'game');

//Add states

game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('gameover', gameoverState);

//Start boot state
game.state.start('boot');