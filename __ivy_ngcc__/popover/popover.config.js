import { Injectable } from '@angular/core';
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
import * as ɵngcc0 from '@angular/core';
export var PopoverConfig = (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
    /** @nocollapse */
    PopoverConfig.ctorParameters = function () { return []; };
PopoverConfig.ɵfac = function PopoverConfig_Factory(t) { return new (t || PopoverConfig)(); };
PopoverConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: PopoverConfig, factory: function (t) { return PopoverConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PopoverConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return PopoverConfig;
}());

//# sourceMappingURL=popover.config.js.map