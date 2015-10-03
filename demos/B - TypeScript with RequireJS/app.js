define(["require", "exports", 'angular', './app.controllers', "domready!"], function (require, exports, angular, controllers) {
    var appModule = angular.module('TypeScriptRequireJsDemo', []).controller(controllers);
    angular.bootstrap(document, [appModule.name]);
    return appModule;
});
//# sourceMappingURL=app.js.map