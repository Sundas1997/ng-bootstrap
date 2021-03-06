import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { ProgressDirective } from './progress.directive';
import { ProgressbarComponent } from './progressbar.component';
import { ProgressbarConfig } from './progressbar.config';
import * as ɵngcc0 from '@angular/core';
export var ProgressbarModule = (function () {
    function ProgressbarModule() {
    }
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
    };
    /** @nocollapse */
    ProgressbarModule.ctorParameters = function () { return []; };
ProgressbarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ProgressbarModule });
ProgressbarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ProgressbarModule_Factory(t) { return new (t || ProgressbarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ProgressbarModule, { declarations: function () { return [ProgressDirective, BarComponent, ProgressbarComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ProgressDirective, BarComponent, ProgressbarComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [ProgressDirective, BarComponent, ProgressbarComponent],
                exports: [ProgressDirective, BarComponent, ProgressbarComponent]
            }]
    }], function () { return []; }, null); })();
    return ProgressbarModule;
}());

//# sourceMappingURL=progressbar.module.js.map