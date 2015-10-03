/// <reference path="../../../typings/angularjs/angular"/>
/// <amd-dependency path="text!template.html"/> // Injects CSS dependency for the controllers.
import angular = require('angular');
import FieldSetController = require('./FieldSetController');
import FieldSetDirective = require('./FieldSetDirective');

export function activate(app:ng.IModule):void
{
	app
		.controller(FieldSetController)
		.directive(FieldSetDirective);

}

