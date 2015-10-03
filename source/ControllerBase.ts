///<reference path="IScopeWithData.d.ts"/>


class ControllerBase
{
	static $inject:string[] = ['$scope'];

	constructor(
		public $scope:IScopeWithData)
	{
		$scope.data = {};
	}
}

export = ControllerBase;
