import { Directive, ElementRef, HostBinding, forwardRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export var ButtonRadioDirective = (function () {
    function ButtonRadioDirective(el) {
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonRadioDirective.prototype.onClick = function () {
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.btnRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.btnRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    // ControlValueAccessor
    // model -> view
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
    };
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ButtonRadioDirective.propDecorators = {
        'btnRadio': [{ type: Input },],
        'uncheckable': [{ type: Input },],
        'value': [{ type: Input },],
        'isActive': [{ type: HostBinding, args: ['class.active',] },],
        'onClick': [{ type: HostListener, args: ['click',] },],
    };
ButtonRadioDirective.ɵfac = function ButtonRadioDirective_Factory(t) { return new (t || ButtonRadioDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ButtonRadioDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ButtonRadioDirective, selectors: [["", "btnRadio", ""]], hostVars: 2, hostBindings: function ButtonRadioDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ButtonRadioDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.isActive);
    } }, inputs: { value: "value", uncheckable: "uncheckable", btnRadio: "btnRadio" }, features: [ɵngcc0.ɵɵProvidersFeature([RADIO_CONTROL_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonRadioDirective, [{
        type: Directive,
        args: [{ selector: '[btnRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { isActive: [{
            type: HostBinding,
            args: ['class.active']
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }], value: [{
            type: Input
        }], uncheckable: [{
            type: Input
        }], btnRadio: [{
            type: Input
        }] }); })();
    return ButtonRadioDirective;
}());

//# sourceMappingURL=button-radio.directive.js.map