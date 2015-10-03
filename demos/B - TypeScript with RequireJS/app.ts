/// <reference path="..\..\typings\angularjs\angular"/>
///<reference path="..\..\typings\requirejs\require.d.ts"/>

import angular = require('angular');
import controllers = require('./app.controllers');

// We can prepare the application for bootstrapping before the DOM is ready.
var appModule = angular
		.module('TypeScriptRequireJsDemo', []) // Initialize the module.
		.controller(controllers) // Inject all the immediate controllers.
	;

// Defer bootstrapping until document is ready, and sub component is loaded.
require(['./fieldset/component', 'domready!'], (FieldSet)=>
{
	FieldSet.activate(appModule);
	angular.bootstrap(document, [appModule.name]);
});


// Deferred dependencies can then call for this module to append to it.
export = appModule;
