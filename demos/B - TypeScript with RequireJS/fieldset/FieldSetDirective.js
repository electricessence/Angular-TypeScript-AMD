/// <reference path="..\..\..\typings\requirejs\require.d.ts"/>
/// <reference path="..\..\..\typings\angularjs\angular.d.ts"/>
define(["require", "exports"], function (require, exports) {
    var TEMPLATE = "\n<fieldset ng-controller=\"FieldSetController\">\n    <legend>{{data.legend}}</legend>\n\n    <div>\n        {{data.body}}\n    </div>\n</fieldset>\n";
    exports.fieldSet = function () {
        return {
            restrict: "EC",
            transclude: true,
            template: TEMPLATE
        };
    };
});
//# sourceMappingURL=FieldSetDirective.js.map