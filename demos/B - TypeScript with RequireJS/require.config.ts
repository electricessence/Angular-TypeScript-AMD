///<reference path="../../typings/requirejs/require"/>

require.config({

	urlArgs:"cacheBust="+(new Date()).getTime(),

	paths: {
		"angular": "../../bower_components/angular/angular"
	},

	shim: {
		"angular": {
			exports: "angular"
		}
	},

	// Plug-ins.
	map: {
		'*': {
			'css': '../../bower_components/require-css/css', // or whatever the path to require-css is
			'text': '../../bower_components/text',
			'domready':'../../bower_components/requirejs-domready/domReady'
		}
	}
});
