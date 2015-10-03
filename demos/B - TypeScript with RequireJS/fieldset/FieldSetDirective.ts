/// <reference path="..\..\..\typings\requirejs\require.d.ts"/>
/// <reference path="..\..\..\typings\angularjs\angular.d.ts"/>

import ControllerBase = require('../../../source/ControllerBase');

const TEMPLATE = `
<fieldset ng-controller="FieldSetController">
    <legend>{{data.legend}}</legend>

    <div>
        {{data.body}}
    </div>
</fieldset>
`;

export var fieldSet:ng.IDirectiveFactory = function():ng.IDirective {
	return  {
		restrict: "EC",
		transclude: true,
		template: TEMPLATE
	};
};
