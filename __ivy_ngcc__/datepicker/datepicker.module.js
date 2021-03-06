import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatePickerComponent } from './datepicker.component';
import { DayPickerComponent } from './daypicker.component';
import { MonthPickerComponent } from './monthpicker.component';
import { YearPickerComponent } from './yearpicker.component';
import { DatepickerConfig } from './datepicker.config';
import * as ɵngcc0 from '@angular/core';
export var DatepickerModule = (function () {
    function DatepickerModule() {
    }
    DatepickerModule.forRoot = function () {
        return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
    };
    /** @nocollapse */
    DatepickerModule.ctorParameters = function () { return []; };
DatepickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DatepickerModule });
DatepickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DatepickerModule_Factory(t) { return new (t || DatepickerModule)(); }, imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DatepickerModule, { declarations: function () { return [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent,
        MonthPickerComponent, YearPickerComponent]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent,
        MonthPickerComponent, YearPickerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                declarations: [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent,
                    MonthPickerComponent, YearPickerComponent],
                exports: [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent,
                    MonthPickerComponent, YearPickerComponent],
                entryComponents: [DatePickerComponent]
            }]
    }], function () { return []; }, null); })();
    return DatepickerModule;
}());

//# sourceMappingURL=datepicker.module.js.map