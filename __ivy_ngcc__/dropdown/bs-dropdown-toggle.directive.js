import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import * as ɵngcc0 from '@angular/core';
export var BsDropdownToggleDirective = (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ElementRef, },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        'isDisabled': [{ type: HostBinding, args: ['attr.disabled',] },],
        'isOpen': [{ type: HostBinding, args: ['attr.aria-expanded',] },],
        'onClick': [{ type: HostListener, args: ['click',] },],
        'onDocumentClick': [{ type: HostListener, args: ['document:click', ['$event'],] },],
        'onEsc': [{ type: HostListener, args: ['keyup.esc',] },],
    };
BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(t) { return new (t || BsDropdownToggleDirective)(ɵngcc0.ɵɵdirectiveInject(BsDropdownState), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
BsDropdownToggleDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BsDropdownToggleDirective, selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]], hostVars: 3, hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function BsDropdownToggleDirective_click_HostBindingHandler() { return ctx.onClick(); })("click", function BsDropdownToggleDirective_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, ɵngcc0.ɵɵresolveDocument)("keyup.esc", function BsDropdownToggleDirective_keyup_esc_HostBindingHandler() { return ctx.onEsc(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-haspopup", true)("disabled", ctx.isDisabled)("aria-expanded", ctx.isOpen);
    } }, exportAs: ["bs-dropdown-toggle"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BsDropdownToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
                host: {
                    '[attr.aria-haspopup]': 'true'
                }
            }]
    }], function () { return [{ type: BsDropdownState }, { type: ɵngcc0.ElementRef }]; }, { isDisabled: [{
            type: HostBinding,
            args: ['attr.disabled']
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], onEsc: [{
            type: HostListener,
            args: ['keyup.esc']
        }], isOpen: [{
            type: HostBinding,
            args: ['attr.aria-expanded']
        }] }); })();
    return BsDropdownToggleDirective;
}());

//# sourceMappingURL=bs-dropdown-toggle.directive.js.map