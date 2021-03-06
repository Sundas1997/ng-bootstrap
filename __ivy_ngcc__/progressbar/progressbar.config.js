import { Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export var ProgressbarConfig = (function () {
    function ProgressbarConfig() {
        /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
        this.animate = true;
        /** maximum total value of progress element */
        this.max = 100;
    }
    /** @nocollapse */
    ProgressbarConfig.ctorParameters = function () { return []; };
ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) { return new (t || ProgressbarConfig)(); };
ProgressbarConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ProgressbarConfig, factory: function (t) { return ProgressbarConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressbarConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return ProgressbarConfig;
}());

//# sourceMappingURL=progressbar.config.js.map