import { Injectable } from '@angular/core';
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
import * as ɵngcc0 from '@angular/core';
export var AccordionConfig = (function () {
    function AccordionConfig() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
    /** @nocollapse */
    AccordionConfig.ctorParameters = function () { return []; };
AccordionConfig.ɵfac = function AccordionConfig_Factory(t) { return new (t || AccordionConfig)(); };
AccordionConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AccordionConfig, factory: function (t) { return AccordionConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AccordionConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return AccordionConfig;
}());

//# sourceMappingURL=accordion.config.js.map