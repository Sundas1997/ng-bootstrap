import { Injectable } from '@angular/core';
/** Provides default values for Pagination and pager components */
import * as ɵngcc0 from '@angular/core';
export var PaginationConfig = (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    /** @nocollapse */
    PaginationConfig.ctorParameters = function () { return []; };
PaginationConfig.ɵfac = function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); };
PaginationConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: PaginationConfig, factory: function (t) { return PaginationConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PaginationConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return PaginationConfig;
}());

//# sourceMappingURL=pagination.config.js.map