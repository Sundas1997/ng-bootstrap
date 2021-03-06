import { EventEmitter, Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export var BsDropdownState = (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
BsDropdownState.ɵfac = function BsDropdownState_Factory(t) { return new (t || BsDropdownState)(); };
BsDropdownState.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: BsDropdownState, factory: function (t) { return BsDropdownState.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BsDropdownState, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return BsDropdownState;
}());

//# sourceMappingURL=bs-dropdown.state.js.map