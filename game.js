var game;

window.onload = function() {
	game = new Phaser.Game(640, 960);
	game.state.add("Boot", boot);
	game.state.add("Preload", preload);
	game.state.start("Boot");
}
var boot = function(game){};
boot.prototype = {
	preload: function(){
		this.game.load.image("loading","assets/sprites/loading.png");
	},
	create: function(){
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.state.start("Preload");
	}
}
