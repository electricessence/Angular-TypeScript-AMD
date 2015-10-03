/// <reference path="../../../typings/angularjs/angular"/>
import angular = require('angular');
import FieldSetController = require('./FieldSetController');
import FieldSetDirective = require('./FieldSetDirective');

export function activate(app:ng.IModule):void
{
	app
		.controller(FieldSetController)
		.directive(FieldSetDirective);

}

