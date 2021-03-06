/** Provides default configuration values for timepicker */
import * as ɵngcc0 from '@angular/core';
export declare class TimepickerConfig {
    /** hours change step */
    hourStep: number;
    /** hours change step */
    minuteStep: number;
    /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
    showMeridian: boolean;
    /** meridian labels based on locale */
    meridians: string[];
    /** if true hours and minutes fields will be readonly */
    readonlyInput: boolean;
    /** if true scroll inside hours and minutes inputs will change time */
    mousewheel: boolean;
    /** if true up/down arrowkeys inside hours and minutes inputs will change time */
    arrowkeys: boolean;
    /** if true spinner arrows above and below the inputs will be shown */
    showSpinners: boolean;
    /** minimum time user can select */
    min: number;
    /** maximum time user can select */
    max: number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TimepickerConfig, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TimepickerConfig>;
}

//# sourceMappingURL=timepicker.config.d.ts.map