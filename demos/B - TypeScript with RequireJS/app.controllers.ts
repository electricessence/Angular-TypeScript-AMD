/*
 * This demonstrates exporting controllers so they can all be imported in one module.
 * See app.ts.
 */

/// <reference path="..\..\typings\angularjs\angular.d.ts"/>
/// <reference path="..\..\source\IScopeWithData.d.ts"/>
/// <amd-dependency path="css!app.controllers.css"/> // Injects CSS dependency for the controllers.
import ControllerBase = require('../../source/ControllerBase');


export class TitleController extends ControllerBase
{
	static $inject:string[] = ControllerBase.$inject;

	constructor($scope:IScopeWithData)
	{
		super($scope);

		$scope.data['title'] = 'Angular Require Demo.';

	}
}

export class BodyController extends ControllerBase
{
	static $inject:string[] = ControllerBase.$inject;

	constructor($scope:IScopeWithData)
	{
		super($scope);

		$scope.data['body'] = 'This is the body of the app.';

	}

}

