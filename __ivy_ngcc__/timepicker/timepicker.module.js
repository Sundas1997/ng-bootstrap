import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TimepickerComponent } from './timepicker.component';
import { TimepickerConfig } from './timepicker.config';
import * as ɵngcc0 from '@angular/core';
export var TimepickerModule = (function () {
    function TimepickerModule() {
    }
    TimepickerModule.forRoot = function () {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerConfig]
        };
    };
    /** @nocollapse */
    TimepickerModule.ctorParameters = function () { return []; };
TimepickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TimepickerModule });
TimepickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); }, imports: [[CommonModule, FormsModule], FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TimepickerModule, { declarations: function () { return [TimepickerComponent]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [TimepickerComponent, FormsModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent, FormsModule]
            }]
    }], function () { return []; }, null); })();
    return TimepickerModule;
}());

//# sourceMappingURL=timepicker.module.js.map