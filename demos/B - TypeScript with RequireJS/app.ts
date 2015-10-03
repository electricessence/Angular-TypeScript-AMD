/// <reference path="../../typings/angularjs/angular"/>
/// <amd-dependency path="domready!"/> // Only bootstrap the application when the dom is ready.

import angular = require('angular');
import controllers = require('./app.controllers');
import FieldSet = require('./fieldset/component');

var appModule = angular
	.module('TypeScriptRequireJsDemo', [])
	.controller(controllers);

//FieldSet.activate(appModule);

angular.bootstrap(document, [appModule.name]);

// Deferred dependencies can then call for this module to append to it.
export = appModule;
