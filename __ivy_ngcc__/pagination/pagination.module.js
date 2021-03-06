import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationConfig } from './pagination.config';
import { PagerComponent } from './pager.component';
import { PaginationComponent } from './pagination.component';
import * as ɵngcc0 from '@angular/core';
export var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule.forRoot = function () {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    };
    /** @nocollapse */
    PaginationModule.ctorParameters = function () { return []; };
PaginationModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PaginationModule });
PaginationModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PaginationModule, { declarations: function () { return [PagerComponent, PaginationComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [PagerComponent, PaginationComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PaginationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            }]
    }], function () { return []; }, null); })();
    return PaginationModule;
}());

//# sourceMappingURL=pagination.module.js.map