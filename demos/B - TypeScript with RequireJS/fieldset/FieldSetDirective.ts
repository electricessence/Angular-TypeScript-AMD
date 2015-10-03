/// <reference path="..\..\..\typings\requirejs\require.d.ts"/>
/// <reference path="..\..\..\typings\angularjs\angular.d.ts"/>

import ControllerBase = require('../../../source/ControllerBase');

//var template = require('text!./template.html');

export var fieldSet:ng.IDirectiveFactory = function():ng.IDirective {
	return  {
		restrict: "EC",
		transclude: true,
		template:null//template
	};
};
