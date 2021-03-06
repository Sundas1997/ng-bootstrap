import { NgModule } from '@angular/core';
import { CollapseDirective } from './collapse.directive';
import * as ɵngcc0 from '@angular/core';
export var CollapseModule = (function () {
    function CollapseModule() {
    }
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    /** @nocollapse */
    CollapseModule.ctorParameters = function () { return []; };
CollapseModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CollapseModule });
CollapseModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CollapseModule_Factory(t) { return new (t || CollapseModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CollapseModule, { declarations: function () { return [CollapseDirective]; }, exports: function () { return [CollapseDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CollapseModule, [{
        type: NgModule,
        args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            }]
    }], function () { return []; }, null); })();
    return CollapseModule;
}());

//# sourceMappingURL=collapse.module.js.map