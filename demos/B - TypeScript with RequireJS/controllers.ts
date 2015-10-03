///<reference path="../../typings/angularjs/angular.d.ts"/>


var INJECT = ['$scope'];

export interface IScopeWithData extends ng.IScope
{
	data:{ [key: string]: any};
}

class ControllerBase
{
	constructor(
		public $scope:IScopeWithData)
	{
		$scope.data = {};
	}
}

export class TitleController extends ControllerBase
{
	static $inject:string[] = INJECT;

	constructor($scope:IScopeWithData)
	{
		super($scope);

		$scope.data['title'] = 'Angular Require Demo.';

	}
}

export class BodyController extends ControllerBase
{
	static $inject:string[] = INJECT;

	constructor($scope:IScopeWithData)
	{
		super($scope);

		$scope.data['body'] = 'This is the body of the app.';

	}

}

