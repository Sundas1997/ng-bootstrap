import { Injectable } from '@angular/core';
/** Provides default configuration values for timepicker */
import * as ɵngcc0 from '@angular/core';
export var TimepickerConfig = (function () {
    function TimepickerConfig() {
        /** hours change step */
        this.hourStep = 1;
        /** hours change step */
        this.minuteStep = 5;
        /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
        this.showMeridian = true;
        /** meridian labels based on locale */
        this.meridians = ['AM', 'PM'];
        /** if true hours and minutes fields will be readonly */
        this.readonlyInput = false;
        /** if true scroll inside hours and minutes inputs will change time */
        this.mousewheel = true;
        /** if true up/down arrowkeys inside hours and minutes inputs will change time */
        this.arrowkeys = true;
        /** if true spinner arrows above and below the inputs will be shown */
        this.showSpinners = true;
        /** minimum time user can select */
        this.min = void 0;
        /** maximum time user can select */
        this.max = void 0;
    }
    /** @nocollapse */
    TimepickerConfig.ctorParameters = function () { return []; };
TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) { return new (t || TimepickerConfig)(); };
TimepickerConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TimepickerConfig, factory: function (t) { return TimepickerConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimepickerConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return TimepickerConfig;
}());

//# sourceMappingURL=timepicker.config.js.map