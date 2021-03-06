import { Component, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatepickerConfig } from './datepicker.config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './datepicker-inner.component';
import * as ɵngcc2 from './daypicker.component';
import * as ɵngcc3 from './monthpicker.component';
import * as ɵngcc4 from './yearpicker.component';
export var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
/* tslint:enable:component-selector-name component-selector-type */
export var DatePickerComponent = (function () {
    function DatePickerComponent(config) {
        /** sets datepicker mode, supports: `day`, `month`, `year` */
        this.datepickerMode = 'day';
        /** if false week numbers will be hidden */
        this.showWeeks = true;
        this.selectionDone = new EventEmitter(undefined);
        /** callback to invoke when the activeDate is changed. */
        this.activeDateChange = new EventEmitter(undefined);
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        /** currently active date */
        get: function () {
            return this._activeDate || this._now;
        },
        set: function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.configureOptions = function () {
        Object.assign(this, this.config);
    };
    DatePickerComponent.prototype.onUpdate = function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    DatePickerComponent.prototype.onSelectionDone = function (event) {
        this.selectionDone.emit(event);
    };
    DatePickerComponent.prototype.onActiveDateChange = function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    DatePickerComponent.prototype.writeValue = function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: DatepickerConfig, },
    ]; };
    DatePickerComponent.propDecorators = {
        'datepickerMode': [{ type: Input },],
        'initDate': [{ type: Input },],
        'minDate': [{ type: Input },],
        'maxDate': [{ type: Input },],
        'minMode': [{ type: Input },],
        'maxMode': [{ type: Input },],
        'showWeeks': [{ type: Input },],
        'formatDay': [{ type: Input },],
        'formatMonth': [{ type: Input },],
        'formatYear': [{ type: Input },],
        'formatDayHeader': [{ type: Input },],
        'formatDayTitle': [{ type: Input },],
        'formatMonthTitle': [{ type: Input },],
        'startingDay': [{ type: Input },],
        'yearRange': [{ type: Input },],
        'onlyCurrentMonth': [{ type: Input },],
        'shortcutPropagation': [{ type: Input },],
        'monthColLimit': [{ type: Input },],
        'yearColLimit': [{ type: Input },],
        'customClass': [{ type: Input },],
        'dateDisabled': [{ type: Input },],
        'activeDate': [{ type: Input },],
        'selectionDone': [{ type: Output },],
        'activeDateChange': [{ type: Output },],
        '_datePicker': [{ type: ViewChild, args: [DatePickerInnerComponent,] },],
    };
DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) { return new (t || DatePickerComponent)(ɵngcc0.ɵɵdirectiveInject(DatepickerConfig)); };
DatePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DatePickerComponent, selectors: [["datepicker"]], viewQuery: function DatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(DatePickerInnerComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._datePicker = _t.first);
    } }, inputs: { datepickerMode: "datepickerMode", showWeeks: "showWeeks", activeDate: "activeDate", initDate: "initDate", minDate: "minDate", maxDate: "maxDate", minMode: "minMode", maxMode: "maxMode", formatDay: "formatDay", formatMonth: "formatMonth", formatYear: "formatYear", formatDayHeader: "formatDayHeader", formatDayTitle: "formatDayTitle", formatMonthTitle: "formatMonthTitle", startingDay: "startingDay", yearRange: "yearRange", onlyCurrentMonth: "onlyCurrentMonth", shortcutPropagation: "shortcutPropagation", monthColLimit: "monthColLimit", yearColLimit: "yearColLimit", customClass: "customClass", dateDisabled: "dateDisabled" }, outputs: { selectionDone: "selectionDone", activeDateChange: "activeDateChange" }, features: [ɵngcc0.ɵɵProvidersFeature([DATEPICKER_CONTROL_VALUE_ACCESSOR])], decls: 4, vars: 22, consts: [[3, "activeDate", "datepickerMode", "initDate", "minDate", "maxDate", "minMode", "maxMode", "showWeeks", "formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "startingDay", "yearRange", "customClass", "dateDisabled", "onlyCurrentMonth", "shortcutPropagation", "monthColLimit", "yearColLimit", "update", "selectionDone", "activeDateChange"], ["tabindex", "0"]], template: function DatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "datepicker-inner", 0);
        ɵngcc0.ɵɵlistener("update", function DatePickerComponent_Template_datepicker_inner_update_0_listener($event) { return ctx.onUpdate($event); })("selectionDone", function DatePickerComponent_Template_datepicker_inner_selectionDone_0_listener($event) { return ctx.onSelectionDone($event); })("activeDateChange", function DatePickerComponent_Template_datepicker_inner_activeDateChange_0_listener($event) { return ctx.onActiveDateChange($event); });
        ɵngcc0.ɵɵelement(1, "daypicker", 1);
        ɵngcc0.ɵɵelement(2, "monthpicker", 1);
        ɵngcc0.ɵɵelement(3, "yearpicker", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("activeDate", ctx.activeDate)("datepickerMode", ctx.datepickerMode)("initDate", ctx.initDate)("minDate", ctx.minDate)("maxDate", ctx.maxDate)("minMode", ctx.minMode)("maxMode", ctx.maxMode)("showWeeks", ctx.showWeeks)("formatDay", ctx.formatDay)("formatMonth", ctx.formatMonth)("formatYear", ctx.formatYear)("formatDayHeader", ctx.formatDayHeader)("formatDayTitle", ctx.formatDayTitle)("formatMonthTitle", ctx.formatMonthTitle)("startingDay", ctx.startingDay)("yearRange", ctx.yearRange)("customClass", ctx.customClass)("dateDisabled", ctx.dateDisabled)("onlyCurrentMonth", ctx.onlyCurrentMonth)("shortcutPropagation", ctx.shortcutPropagation)("monthColLimit", ctx.monthColLimit)("yearColLimit", ctx.yearColLimit);
    } }, directives: [ɵngcc1.DatePickerInnerComponent, ɵngcc2.DayPickerComponent, ɵngcc3.MonthPickerComponent, ɵngcc4.YearPickerComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatePickerComponent, [{
        type: Component,
        args: [{
                selector: 'datepicker',
                template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: DatepickerConfig }]; }, { datepickerMode: [{
            type: Input
        }], showWeeks: [{
            type: Input
        }], selectionDone: [{
            type: Output
        }], activeDateChange: [{
            type: Output
        }], activeDate: [{
            type: Input
        }], initDate: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], minMode: [{
            type: Input
        }], maxMode: [{
            type: Input
        }], formatDay: [{
            type: Input
        }], formatMonth: [{
            type: Input
        }], formatYear: [{
            type: Input
        }], formatDayHeader: [{
            type: Input
        }], formatDayTitle: [{
            type: Input
        }], formatMonthTitle: [{
            type: Input
        }], startingDay: [{
            type: Input
        }], yearRange: [{
            type: Input
        }], onlyCurrentMonth: [{
            type: Input
        }], shortcutPropagation: [{
            type: Input
        }], monthColLimit: [{
            type: Input
        }], yearColLimit: [{
            type: Input
        }], customClass: [{
            type: Input
        }], dateDisabled: [{
            type: Input
        }], _datePicker: [{
            type: ViewChild,
            args: [DatePickerInnerComponent]
        }] }); })();
    return DatePickerComponent;
}());

//# sourceMappingURL=datepicker.component.js.map