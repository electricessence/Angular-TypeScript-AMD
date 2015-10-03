/// <reference path="..\..\typings\angularjs\angular"/>
///<reference path="..\..\typings\requirejs\require.d.ts"/>
define(["require", "exports", 'angular', './app.controllers'], function (require, exports, angular, controllers) {
    var appModule = angular
        .module('TypeScriptRequireJsDemo', [])
        .controller(controllers);
    require(['./fieldset/component', 'domready!'], function (FieldSet) {
        FieldSet.activate(appModule);
        angular.bootstrap(document, [appModule.name]);
    });
    return appModule;
});
//# sourceMappingURL=app.js.map