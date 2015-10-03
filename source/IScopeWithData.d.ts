///<reference path="../typings/angularjs/angular.d.ts"/>

interface IScopeWithData extends ng.IScope
{
	data:{ [key: string]: any};
}
