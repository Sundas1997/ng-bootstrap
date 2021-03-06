import { Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export var DatepickerConfig = (function () {
    function DatepickerConfig() {
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
    /** @nocollapse */
    DatepickerConfig.ctorParameters = function () { return []; };
DatepickerConfig.ɵfac = function DatepickerConfig_Factory(t) { return new (t || DatepickerConfig)(); };
DatepickerConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DatepickerConfig, factory: function (t) { return DatepickerConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatepickerConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return DatepickerConfig;
}());

//# sourceMappingURL=datepicker.config.js.map