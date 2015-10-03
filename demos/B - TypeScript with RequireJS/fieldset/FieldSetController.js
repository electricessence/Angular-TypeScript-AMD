var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../../../source/ControllerBase'], function (require, exports, ControllerBase) {
    var FieldSetController = (function (_super) {
        __extends(FieldSetController, _super);
        function FieldSetController() {
            _super.apply(this, arguments);
        }
        FieldSetController.$inject = ['$scope'];
        return FieldSetController;
    })(ControllerBase);
    exports.FieldSetController = FieldSetController;
});
//# sourceMappingURL=FieldSetController.js.map