import { Directive, HostBinding, HostListener, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// TODO: config: activeClass - Class to apply to the checked buttons
import * as ɵngcc0 from '@angular/core';
export var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
export var ButtonCheckboxDirective = (function () {
    function ButtonCheckboxDirective() {
        /** Truthy value, will be set to ngModel */
        this.btnCheckboxTrue = true;
        /** Falsy value, will be set to ngModel */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /** @nocollapse */
    ButtonCheckboxDirective.ctorParameters = function () { return []; };
    ButtonCheckboxDirective.propDecorators = {
        'btnCheckboxTrue': [{ type: Input },],
        'btnCheckboxFalse': [{ type: Input },],
        'state': [{ type: HostBinding, args: ['class.active',] },],
        'onClick': [{ type: HostListener, args: ['click',] },],
    };
ButtonCheckboxDirective.ɵfac = function ButtonCheckboxDirective_Factory(t) { return new (t || ButtonCheckboxDirective)(); };
ButtonCheckboxDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ButtonCheckboxDirective, selectors: [["", "btnCheckbox", ""]], hostVars: 2, hostBindings: function ButtonCheckboxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ButtonCheckboxDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.state);
    } }, inputs: { btnCheckboxTrue: "btnCheckboxTrue", btnCheckboxFalse: "btnCheckboxFalse" }, features: [ɵngcc0.ɵɵProvidersFeature([CHECKBOX_CONTROL_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonCheckboxDirective, [{
        type: Directive,
        args: [{ selector: '[btnCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] }]
    }], function () { return []; }, { btnCheckboxTrue: [{
            type: Input
        }], btnCheckboxFalse: [{
            type: Input
        }], state: [{
            type: HostBinding,
            args: ['class.active']
        }], onClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
    return ButtonCheckboxDirective;
}());

//# sourceMappingURL=button-checkbox.directive.js.map