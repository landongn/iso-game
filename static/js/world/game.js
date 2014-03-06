var stats = new Stats();
var BaseLevel = require('./baseLevel');

function Game() {
	this.init();
}

Game.prototype = {
	stage: null,
	renderer: null,
	entities: [],
	init: function () {

		this.stage = new PIXI.Stage(0x00000);
		this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.view);
		stats.setMode(1);
		stats.domElement.style.position = "absolute";
		stats.domElement.style.top = 0;
		stats.domElement.style.left = 0;
		document.body.appendChild(stats.domElement);

		this.initializeWorld();
		this.initializePlayer();
		this.initializeControl();
		this.start();
	},
	initializeWorld: function () {
		this.currentLevel = new BaseLevel();
	},

	initializePlayer: function () {},

	initializeControl: function () {},

	start: function () {
		this.update();
	},

	update: function () {
		this.animate();
	},

	animate: function () {
		requestAnimationFrame(function () {
			stats.begin();
			this.update();
			this.renderer.render(this.stage);
			stats.end();
		}.bind(this));
	}
};

var game = new Game();
exports.stage = game.stage;
exports.renderer = game.renderer;
exports.entities = game.entities;