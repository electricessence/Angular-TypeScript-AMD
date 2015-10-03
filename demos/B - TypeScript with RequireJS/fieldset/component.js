define(["require", "exports", './FieldSetController', './FieldSetDirective', "text!template.html"], function (require, exports, FieldSetController, FieldSetDirective) {
    function activate(app) {
        app.controller(FieldSetController).directive(FieldSetDirective);
    }
    exports.activate = activate;
});
//# sourceMappingURL=component.js.map