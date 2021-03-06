import { Injectable } from '@angular/core';
/** Default values provider for tooltip */
import * as ɵngcc0 from '@angular/core';
export var TooltipConfig = (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    /** @nocollapse */
    TooltipConfig.ctorParameters = function () { return []; };
TooltipConfig.ɵfac = function TooltipConfig_Factory(t) { return new (t || TooltipConfig)(); };
TooltipConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TooltipConfig, factory: function (t) { return TooltipConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return TooltipConfig;
}());

//# sourceMappingURL=tooltip.config.js.map