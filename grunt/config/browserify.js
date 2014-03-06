/*jshint node:true*/
'use strict';

// https://github.com/dylang/grunt-browserify

module.exports = function (config) {
	return {
		app: {
			src: config.source + 'js/app.js',
			dest: config.static + 'js/app.develop.js'
		},
		build: {
			src: config.source + 'js/app.js',
			dest: config.static + 'js/app.release.js'
		}
	};
};
