/// <reference path="../../typings/angularjs/angular"/>
/// <amd-dependency path="css!app.css"/> // Injects CSS dependency for the app.
/// <amd-dependency path="domready!"/> // Only bootstrap the application when the dom is ready.

import angular = require('angular');
import controllers = require('./Controllers');

var appModule = angular
	.module('TypeScriptRequireJsDemo', [])
	.controller(controllers);

angular.bootstrap(document, [appModule.name]);

export = appModule;
