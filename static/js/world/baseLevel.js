/**
 * simple level abstraction
 */

var Game = require('./game');

console.log(Game);
function Level() {
	console.log("baseLevel created");
	this.generateLevel();
}

Level.prototype = {
	map: [],
	terrain: [],
	generateLevel: function () {
		/*
		tile_map[][] = [[...],...]

		for (i = 0; i < tile_map.size; i++):
			for (j = tile_map[i].size; j >= 0; j--):  // Changed loop condition here.
				draw(
					tile_map[i][j],
					x = (j * tile_width / 2) + (i * tile_width / 2)
					y = (i * tile_height / 2) - (j * tile_height / 2)
				)
		 */
		
		this.map = [];
		for (var z = 0; z < 100; z++) {
			this.map.push([[]]);
			this.terrain.push([[]]);
			for (var v = 0; v < 100; v++) {
				this.map[z][v] = 1;
				this.terrain[z][v] = 0;
			}
		}

		for (var x = 0; x < this.map.length; x++) {
			for (var y = this.map[x].length - 1; y >= 0; y--) {
				this.terrain[x][y] = this.assetForType(this.map[x][y], x, y, 256, 128);
				console.log(Game);
				Game.stage.addChild(this.terrain[x][y]);
			}
		}
	},
	assetForType: function (type, x, y, w, h) {
		var texture = new PIXI.Sprite.fromImage('/static/img/stonetile.jpg');
		texture.x = x;
		texture.y = y;
		texture.width = w;
		texture.height = h;

		return texture;
	}
};

module.exports = Level;