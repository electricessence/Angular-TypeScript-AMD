import ControllerBase = require('../../../source/ControllerBase');

const
	LEGEND:string = 'legend',
	BODY:string = 'body';

export class FieldSetController extends ControllerBase {
	static $inject:string[] = ControllerBase.$inject;

	constructor($scope:IScopeWithData) {
		super($scope);

		$scope.data[LEGEND] = "I'm a component.";
		$scope.data[BODY] = "And this is my content.";
	}
}
