///<reference path='lib/phaser.comments.d.ts' />

const gameoverState {
  create: function() {

  }

  restart: function() {
      game.state.start('menu');
  }
}