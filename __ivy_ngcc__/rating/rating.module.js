import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingComponent } from './rating.component';
import * as ɵngcc0 from '@angular/core';
export var RatingModule = (function () {
    function RatingModule() {
    }
    RatingModule.forRoot = function () {
        return {
            ngModule: RatingModule,
            providers: []
        };
    };
    /** @nocollapse */
    RatingModule.ctorParameters = function () { return []; };
RatingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RatingModule });
RatingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RatingModule_Factory(t) { return new (t || RatingModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RatingModule, { declarations: function () { return [RatingComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [RatingComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RatingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [RatingComponent],
                exports: [RatingComponent]
            }]
    }], function () { return []; }, null); })();
    return RatingModule;
}());

//# sourceMappingURL=rating.module.js.map