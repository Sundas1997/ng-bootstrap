import { Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export var AlertConfig = (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    /** @nocollapse */
    AlertConfig.ctorParameters = function () { return []; };
AlertConfig.ɵfac = function AlertConfig_Factory(t) { return new (t || AlertConfig)(); };
AlertConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AlertConfig, factory: function (t) { return AlertConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return AlertConfig;
}());

//# sourceMappingURL=alert.config.js.map