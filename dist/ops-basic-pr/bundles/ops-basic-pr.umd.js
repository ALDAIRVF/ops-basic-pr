(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ops-basic-pr', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ops-basic-pr'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var OpsBasicPrService = /** @class */ (function () {
        function OpsBasicPrService() {
        }
        return OpsBasicPrService;
    }());
    OpsBasicPrService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OpsBasicPrService_Factory() { return new OpsBasicPrService(); }, token: OpsBasicPrService, providedIn: "root" });
    OpsBasicPrService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    OpsBasicPrService.ctorParameters = function () { return []; };

    var OpsBasicPrComponent = /** @class */ (function () {
        function OpsBasicPrComponent() {
        }
        OpsBasicPrComponent.prototype.ngOnInit = function () {
        };
        return OpsBasicPrComponent;
    }());
    OpsBasicPrComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-ops-basic-pr',
                    template: "\n    <p>\n      ops-basic-pr works!\n    </p>\n  "
                },] }
    ];
    OpsBasicPrComponent.ctorParameters = function () { return []; };

    var OpsBasicPrModule = /** @class */ (function () {
        function OpsBasicPrModule() {
        }
        return OpsBasicPrModule;
    }());
    OpsBasicPrModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [OpsBasicPrComponent],
                    imports: [],
                    exports: [OpsBasicPrComponent]
                },] }
    ];

    /*
     * Public API Surface of ops-basic-pr
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OpsBasicPrComponent = OpsBasicPrComponent;
    exports.OpsBasicPrModule = OpsBasicPrModule;
    exports.OpsBasicPrService = OpsBasicPrService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ops-basic-pr.umd.js.map
