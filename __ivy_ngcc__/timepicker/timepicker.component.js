import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimepickerConfig } from './timepicker.config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

var _c0 = function (a0) { return { hidden: a0 }; };
function TimepickerComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td", 7);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, !ctx_r0.showMeridian));
} }
var _c1 = function (a0) { return { disabled: a0 }; };
function TimepickerComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 7);
    ɵngcc0.ɵɵelementStart(1, "button", 8);
    ɵngcc0.ɵɵlistener("click", function TimepickerComponent_td_19_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.toggleMeridian(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c0, !ctx_r1.showMeridian));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c1, ctx_r1.noToggleMeridian() || ctx_r1.readonlyInput));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.meridian);
} }
function TimepickerComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td", 7);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(1, _c0, !ctx_r2.showMeridian));
} }
var _c2 = function (a0) { return { "has-error": a0 }; };
export var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TimepickerComponent; }),
    multi: true
};
// todo: refactor directive has to many functions! (extract to stateless helper)
// todo: use moment js?
// todo: implement `time` validator
// todo: replace increment/decrement blockers with getters, or extract
// todo: unify work with selected
function isDefined(value) {
    return typeof value !== 'undefined';
}
function addMinutes(date, minutes) {
    var dt = new Date(date.getTime() + minutes * 60000);
    var newDate = new Date(date);
    newDate.setHours(dt.getHours(), dt.getMinutes());
    return newDate;
}
export var TimepickerComponent = (function () {
    function TimepickerComponent(_config) {
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        // result value
        this._selected = new Date();
        this.config = _config;
        Object.assign(this, _config);
    }
    Object.defineProperty(TimepickerComponent.prototype, "showMeridian", {
        /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
        get: function () {
            return this._showMeridian;
        },
        set: function (value) {
            this._showMeridian = value;
            // || !this.$error.time
            // if (true) {
            this.updateTemplate();
            return;
            // }
            // Evaluate from template
            /*let hours = this.getHoursFromTemplate();
             let minutes = this.getMinutesFromTemplate();
             if (isDefined(hours) && isDefined(minutes)) {
             this.selected.setHours(hours);
             this.refresh();
             }*/
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (v) {
            if (v) {
                this._selected = v;
                this.updateTemplate();
                this.onChange(this.selected);
            }
        },
        enumerable: true,
        configurable: true
    });
    // todo: add formatter value to Date object
    TimepickerComponent.prototype.ngOnInit = function () {
        // todo: take in account $locale.DATETIME_FORMATS.AMPMS;
        if (this.mousewheel) {
        }
        if (this.arrowkeys) {
        }
        // this.setupInputEvents();
    };
    TimepickerComponent.prototype.writeValue = function (v) {
        if (v === this.selected) {
            return;
        }
        if (v && v instanceof Date) {
            this.selected = v;
            return;
        }
        this.selected = v ? new Date(v) : void 0;
    };
    TimepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TimepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TimepickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonlyInput = isDisabled;
    };
    TimepickerComponent.prototype.updateHours = function () {
        if (this.readonlyInput) {
            return;
        }
        var hours = this.getHoursFromTemplate();
        var minutes = this.getMinutesFromTemplate();
        this.invalidHours = !isDefined(hours);
        this.invalidMinutes = !isDefined(minutes);
        if (this.invalidHours || this.invalidMinutes) {
            // TODO: needed a validation functionality.
            return;
        }
        this.selected.setHours(hours);
        this.invalidHours = (this.selected < this.min || this.selected > this.max);
        if (this.invalidHours) {
            // todo: validation?
            // invalidate(true);
            return;
        }
        else {
            this.refresh();
        }
    };
    TimepickerComponent.prototype.hoursOnBlur = function () {
        if (this.readonlyInput) {
            return;
        }
        // todo: binded with validation
        if (!this.invalidHours && parseInt(this.hours, 10) < 10) {
            this.hours = this.pad(this.hours);
        }
    };
    TimepickerComponent.prototype.updateMinutes = function () {
        if (this.readonlyInput) {
            return;
        }
        var minutes = this.getMinutesFromTemplate();
        var hours = this.getHoursFromTemplate();
        this.invalidMinutes = !isDefined(minutes);
        this.invalidHours = !isDefined(hours);
        if (this.invalidMinutes || this.invalidHours) {
            // TODO: needed a validation functionality.
            return;
        }
        this.selected.setMinutes(minutes);
        this.invalidMinutes = (this.selected < this.min || this.selected > this.max);
        if (this.invalidMinutes) {
            // todo: validation
            // invalidate(undefined, true);
            return;
        }
        else {
            this.refresh();
        }
    };
    TimepickerComponent.prototype.minutesOnBlur = function () {
        if (this.readonlyInput) {
            return;
        }
        if (!this.invalidMinutes && parseInt(this.minutes, 10) < 10) {
            this.minutes = this.pad(this.minutes);
        }
    };
    TimepickerComponent.prototype.incrementHours = function () {
        if (!this.noIncrementHours()) {
            this.addMinutesToSelected(this.hourStep * 60);
        }
    };
    TimepickerComponent.prototype.decrementHours = function () {
        if (!this.noDecrementHours()) {
            this.addMinutesToSelected(-this.hourStep * 60);
        }
    };
    TimepickerComponent.prototype.incrementMinutes = function () {
        if (!this.noIncrementMinutes()) {
            this.addMinutesToSelected(this.minuteStep);
        }
    };
    TimepickerComponent.prototype.decrementMinutes = function () {
        if (!this.noDecrementMinutes()) {
            this.addMinutesToSelected(-this.minuteStep);
        }
    };
    TimepickerComponent.prototype.noIncrementHours = function () {
        var incrementedSelected = addMinutes(this.selected, this.hourStep * 60);
        return incrementedSelected > this.max ||
            (incrementedSelected < this.selected && incrementedSelected < this.min);
    };
    TimepickerComponent.prototype.noDecrementHours = function () {
        var decrementedSelected = addMinutes(this.selected, -this.hourStep * 60);
        return decrementedSelected < this.min ||
            (decrementedSelected > this.selected && decrementedSelected > this.max);
    };
    TimepickerComponent.prototype.noIncrementMinutes = function () {
        var incrementedSelected = addMinutes(this.selected, this.minuteStep);
        return incrementedSelected > this.max ||
            (incrementedSelected < this.selected && incrementedSelected < this.min);
    };
    TimepickerComponent.prototype.noDecrementMinutes = function () {
        var decrementedSelected = addMinutes(this.selected, -this.minuteStep);
        return decrementedSelected < this.min ||
            (decrementedSelected > this.selected && decrementedSelected > this.max);
    };
    TimepickerComponent.prototype.toggleMeridian = function () {
        if (!this.noToggleMeridian()) {
            var sign = this.selected.getHours() < 12 ? 1 : -1;
            this.addMinutesToSelected(12 * 60 * sign);
        }
    };
    TimepickerComponent.prototype.noToggleMeridian = function () {
        if (this.readonlyInput) {
            return true;
        }
        if (this.selected.getHours() < 13) {
            return addMinutes(this.selected, 12 * 60) > this.max;
        }
        else {
            return addMinutes(this.selected, -12 * 60) < this.min;
        }
    };
    TimepickerComponent.prototype.refresh = function () {
        // this.makeValid();
        this.updateTemplate();
        this.onChange(this.selected);
    };
    TimepickerComponent.prototype.updateTemplate = function () {
        var hours = this.selected.getHours();
        var minutes = this.selected.getMinutes();
        if (this.showMeridian) {
            // Convert 24 to 12 hour system
            hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
        }
        // this.hours = keyboardChange === 'h' ? hours : this.pad(hours);
        // if (keyboardChange !== 'm') {
        //  this.minutes = this.pad(minutes);
        // }
        this.hours = this.pad(hours);
        this.minutes = this.pad(minutes);
        if (!this.meridians) {
            this.meridians = this.config.meridians;
        }
        this.meridian = this.selected.getHours() < 12
            ? this.meridians[0]
            : this.meridians[1];
    };
    TimepickerComponent.prototype.getHoursFromTemplate = function () {
        var hours = parseInt(this.hours, 10);
        var valid = this.showMeridian
            ? (hours > 0 && hours < 13)
            : (hours >= 0 && hours < 24);
        if (!valid) {
            return void 0;
        }
        if (this.showMeridian) {
            if (hours === 12) {
                hours = 0;
            }
            if (this.meridian === this.meridians[1]) {
                hours = hours + 12;
            }
        }
        return hours;
    };
    TimepickerComponent.prototype.getMinutesFromTemplate = function () {
        var minutes = parseInt(this.minutes, 10);
        return (minutes >= 0 && minutes < 60) ? minutes : undefined;
    };
    TimepickerComponent.prototype.pad = function (value) {
        return (isDefined(value) && value.toString().length < 2)
            ? '0' + value
            : value.toString();
    };
    TimepickerComponent.prototype.addMinutesToSelected = function (minutes) {
        this.selected = addMinutes(this.selected, minutes);
        this.refresh();
    };
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () { return [
        { type: TimepickerConfig, },
    ]; };
    TimepickerComponent.propDecorators = {
        'hourStep': [{ type: Input },],
        'minuteStep': [{ type: Input },],
        'readonlyInput': [{ type: Input },],
        'mousewheel': [{ type: Input },],
        'arrowkeys': [{ type: Input },],
        'showSpinners': [{ type: Input },],
        'min': [{ type: Input },],
        'max': [{ type: Input },],
        'meridians': [{ type: Input },],
        'showMeridian': [{ type: Input },],
    };
TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(ɵngcc0.ɵɵdirectiveInject(TimepickerConfig)); };
TimepickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TimepickerComponent, selectors: [["timepicker"]], inputs: { showMeridian: "showMeridian", readonlyInput: "readonlyInput", meridians: "meridians", hourStep: "hourStep", minuteStep: "minuteStep", mousewheel: "mousewheel", arrowkeys: "arrowkeys", showSpinners: "showSpinners", min: "min", max: "max" }, features: [ɵngcc0.ɵɵProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR])], decls: 30, vars: 31, consts: [[1, "text-center", 3, "ngClass"], [1, "btn", "btn-link", 3, "ngClass", "click"], [1, "glyphicon", "glyphicon-chevron-up"], [3, "ngClass", 4, "ngIf"], [1, "form-group", 3, "ngClass"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", 2, "width", "50px", 3, "ngModel", "readonly", "ngModelChange", "change", "blur"], [1, "glyphicon", "glyphicon-chevron-down"], [3, "ngClass"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "ngClass", "click"]], template: function TimepickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table");
        ɵngcc0.ɵɵelementStart(1, "tbody");
        ɵngcc0.ɵɵelementStart(2, "tr", 0);
        ɵngcc0.ɵɵelementStart(3, "td");
        ɵngcc0.ɵɵelementStart(4, "a", 1);
        ɵngcc0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_4_listener() { return ctx.incrementHours(); });
        ɵngcc0.ɵɵelement(5, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "td");
        ɵngcc0.ɵɵtext(7, "\u00A0");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "td");
        ɵngcc0.ɵɵelementStart(9, "a", 1);
        ɵngcc0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_9_listener() { return ctx.incrementMinutes(); });
        ɵngcc0.ɵɵelement(10, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, TimepickerComponent_td_11_Template, 1, 3, "td", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "tr");
        ɵngcc0.ɵɵelementStart(13, "td", 4);
        ɵngcc0.ɵɵelementStart(14, "input", 5);
        ɵngcc0.ɵɵlistener("ngModelChange", function TimepickerComponent_Template_input_ngModelChange_14_listener($event) { return ctx.hours = $event; })("change", function TimepickerComponent_Template_input_change_14_listener() { return ctx.updateHours(); })("blur", function TimepickerComponent_Template_input_blur_14_listener() { return ctx.hoursOnBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "td");
        ɵngcc0.ɵɵtext(16, ":");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(17, "td", 4);
        ɵngcc0.ɵɵelementStart(18, "input", 5);
        ɵngcc0.ɵɵlistener("ngModelChange", function TimepickerComponent_Template_input_ngModelChange_18_listener($event) { return ctx.minutes = $event; })("change", function TimepickerComponent_Template_input_change_18_listener() { return ctx.updateMinutes(); })("blur", function TimepickerComponent_Template_input_blur_18_listener() { return ctx.minutesOnBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(19, TimepickerComponent_td_19_Template, 3, 7, "td", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(20, "tr", 0);
        ɵngcc0.ɵɵelementStart(21, "td");
        ɵngcc0.ɵɵelementStart(22, "a", 1);
        ɵngcc0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_22_listener() { return ctx.decrementHours(); });
        ɵngcc0.ɵɵelement(23, "span", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(24, "td");
        ɵngcc0.ɵɵtext(25, "\u00A0");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(26, "td");
        ɵngcc0.ɵɵelementStart(27, "a", 1);
        ɵngcc0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_27_listener() { return ctx.decrementMinutes(); });
        ɵngcc0.ɵɵelement(28, "span", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(29, TimepickerComponent_td_29_Template, 1, 3, "td", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(15, _c0, !ctx.showSpinners || ctx.readonlyInput));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(17, _c1, ctx.noIncrementHours()));
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(19, _c1, ctx.noIncrementMinutes()));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMeridian);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(21, _c2, ctx.invalidHours));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.hours)("readonly", ctx.readonlyInput);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(23, _c2, ctx.invalidMinutes));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.minutes)("readonly", ctx.readonlyInput);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMeridian);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(25, _c0, !ctx.showSpinners || ctx.readonlyInput));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(27, _c1, ctx.noDecrementHours()));
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(29, _c1, ctx.noDecrementMinutes()));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showMeridian);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc2.DefaultValueAccessor, ɵngcc2.MaxLengthValidator, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimepickerComponent, [{
        type: Component,
        args: [{
                selector: 'timepicker',
                template: "\n    <table>\n      <tbody>\n        <tr class=\"text-center\" [ngClass]=\"{hidden: !showSpinners || readonlyInput}\">\n          <td><a (click)=\"incrementHours()\" [ngClass]=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"incrementMinutes()\" [ngClass]=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" *ngIf=\"showMeridian\"></td>\n        </tr>\n        <tr>\n          <td class=\"form-group\" [ngClass]=\"{'has-error': invalidHours}\">\n            <input style=\"width:50px;\" type=\"text\" [(ngModel)]=\"hours\" (change)=\"updateHours()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"hoursOnBlur()\" maxlength=\"2\">\n          </td>\n          <td>:</td>\n          <td class=\"form-group\" [ngClass]=\"{'has-error': invalidMinutes}\">\n            <input style=\"width:50px;\" type=\"text\" [(ngModel)]=\"minutes\" (change)=\"updateMinutes()\" class=\"form-control text-center\" [readonly]=\"readonlyInput\" (blur)=\"minutesOnBlur()\" maxlength=\"2\">\n          </td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" *ngIf=\"showMeridian\"><button type=\"button\" [ngClass]=\"{disabled: noToggleMeridian() || readonlyInput}\" class=\"btn btn-default text-center\" (click)=\"toggleMeridian()\">{{meridian}}</button></td>\n        </tr>\n        <tr class=\"text-center\" [ngClass]=\"{hidden: !showSpinners || readonlyInput}\">\n          <td><a (click)=\"decrementHours()\" [ngClass]=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td>&nbsp;</td>\n          <td><a (click)=\"decrementMinutes()\" [ngClass]=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n          <td [ngClass]=\"{hidden: !showMeridian}\" *ngIf=\"showMeridian\"></td>\n        </tr>\n      </tbody>\n    </table>\n  ",
                providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: TimepickerConfig }]; }, { showMeridian: [{
            type: Input
        }], readonlyInput: [{
            type: Input
        }], meridians: [{
            type: Input
        }], hourStep: [{
            type: Input
        }], minuteStep: [{
            type: Input
        }], mousewheel: [{
            type: Input
        }], arrowkeys: [{
            type: Input
        }], showSpinners: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }] }); })();
    return TimepickerComponent;
}());

//# sourceMappingURL=timepicker.component.js.map