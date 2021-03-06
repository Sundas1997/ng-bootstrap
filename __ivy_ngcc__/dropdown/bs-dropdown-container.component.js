import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["*"];
export var BsDropdownContainerComponent = (function () {
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState, },
    ]; };
BsDropdownContainerComponent.ɵfac = function BsDropdownContainerComponent_Factory(t) { return new (t || BsDropdownContainerComponent)(ɵngcc0.ɵɵdirectiveInject(BsDropdownState)); };
BsDropdownContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BsDropdownContainerComponent, selectors: [["bs-dropdown-container"]], hostAttrs: [2, "display", "block", "position", "absolute"], ngContentSelectors: _c0, decls: 2, vars: 8, template: function BsDropdownContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("dropup", ctx.direction === "up")("dropdown", ctx.direction === "down")("show", ctx.isOpen)("open", ctx.isOpen);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BsDropdownContainerComponent, [{
        type: Component,
        args: [{
                selector: 'bs-dropdown-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    style: 'display:block;position: absolute;'
                },
                template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
            }]
    }], function () { return [{ type: BsDropdownState }]; }, null); })();
    return BsDropdownContainerComponent;
}());

//# sourceMappingURL=bs-dropdown-container.component.js.map