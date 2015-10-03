var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var INJECT = ['$scope'];
    var ControllerBase = (function () {
        function ControllerBase($scope) {
            this.$scope = $scope;
            $scope.data = {};
        }
        return ControllerBase;
    })();
    var TitleController = (function (_super) {
        __extends(TitleController, _super);
        function TitleController($scope) {
            _super.call(this, $scope);
            $scope.data['title'] = 'Angular Require Demo.';
        }
        TitleController.$inject = INJECT;
        return TitleController;
    })(ControllerBase);
    exports.TitleController = TitleController;
    var BodyController = (function (_super) {
        __extends(BodyController, _super);
        function BodyController($scope) {
            _super.call(this, $scope);
            $scope.data['body'] = 'This is the body of the app.';
        }
        BodyController.$inject = INJECT;
        return BodyController;
    })(ControllerBase);
    exports.BodyController = BodyController;
});
//# sourceMappingURL=controllers.js.map