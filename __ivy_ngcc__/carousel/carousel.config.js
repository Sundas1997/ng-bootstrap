import { Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export var CarouselConfig = (function () {
    function CarouselConfig() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
    }
    /** @nocollapse */
    CarouselConfig.ctorParameters = function () { return []; };
CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
CarouselConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: CarouselConfig, factory: function (t) { return CarouselConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CarouselConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return CarouselConfig;
}());

//# sourceMappingURL=carousel.config.js.map