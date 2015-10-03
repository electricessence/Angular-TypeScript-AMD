///<reference path="IScopeWithData.d.ts"/>


class ControllerBase
{
	constructor(
		public $scope:IScopeWithData)
	{
		$scope.data = {};
	}
}

export = ControllerBase;
