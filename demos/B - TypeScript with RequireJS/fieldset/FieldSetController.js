var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../../source/ControllerBase'], function (require, exports, ControllerBase) {
    var LEGEND = 'legend', BODY = 'body';
    var FieldSetController = (function (_super) {
        __extends(FieldSetController, _super);
        function FieldSetController($scope) {
            _super.call(this, $scope);
            $scope.data[LEGEND] = "I'm a component.";
            $scope.data[BODY] = "And this is my content.";
        }
        FieldSetController.$inject = ControllerBase.$inject;
        return FieldSetController;
    })(ControllerBase);
    exports.FieldSetController = FieldSetController;
});
//# sourceMappingURL=FieldSetController.js.map