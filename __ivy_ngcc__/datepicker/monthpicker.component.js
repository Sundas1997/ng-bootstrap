import { Component } from '@angular/core';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = function (a0, a1, a2, a3) { return { "btn-link": a0, "btn-info": a1, disabled: a2, active: a3 }; };
var _c1 = function (a0, a1) { return { "text-success": a0, "text-info": a1 }; };
function MonthPickerComponent_table_0_tr_14_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 9);
    ɵngcc0.ɵɵelementStart(1, "button", 10);
    ɵngcc0.ɵɵlistener("click", function MonthPickerComponent_table_0_tr_14_td_1_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); var dtz_r4 = ctx.$implicit; var ctx_r5 = ɵngcc0.ɵɵnextContext(3); return ctx_r5.datePicker.select(dtz_r4.date); });
    ɵngcc0.ɵɵelementStart(2, "span", 11);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var dtz_r4 = ctx.$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵpropertyInterpolate("id", dtz_r4.uid);
    ɵngcc0.ɵɵproperty("ngClass", dtz_r4.customClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction4(6, _c0, ctx_r3.isBs4 && !dtz_r4.selected && !ctx_r3.datePicker.isActive(dtz_r4), dtz_r4.selected || ctx_r3.isBs4 && !dtz_r4.selected && ctx_r3.datePicker.isActive(dtz_r4), dtz_r4.disabled, !ctx_r3.isBs4 && ctx_r3.datePicker.isActive(dtz_r4)))("disabled", dtz_r4.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(11, _c1, ctx_r3.isBs4 && dtz_r4.current, !ctx_r3.isBs4 && dtz_r4.current));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(dtz_r4.label);
} }
function MonthPickerComponent_table_0_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr");
    ɵngcc0.ɵɵtemplate(1, MonthPickerComponent_table_0_tr_14_td_1_Template, 4, 14, "td", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var rowz_r2 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", rowz_r2);
} }
var _c2 = function (a0) { return { disabled: a0 }; };
function MonthPickerComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "table", 1);
    ɵngcc0.ɵɵelementStart(1, "thead");
    ɵngcc0.ɵɵelementStart(2, "tr");
    ɵngcc0.ɵɵelementStart(3, "th");
    ɵngcc0.ɵɵelementStart(4, "button", 2);
    ɵngcc0.ɵɵlistener("click", function MonthPickerComponent_table_0_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.datePicker.move(0 - 1); });
    ɵngcc0.ɵɵelement(5, "i", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "th");
    ɵngcc0.ɵɵelementStart(7, "button", 4);
    ɵngcc0.ɵɵlistener("click", function MonthPickerComponent_table_0_Template_button_click_7_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.datePicker.toggleMode(); });
    ɵngcc0.ɵɵelementStart(8, "strong");
    ɵngcc0.ɵɵtext(9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "th");
    ɵngcc0.ɵɵelementStart(11, "button", 5);
    ɵngcc0.ɵɵlistener("click", function MonthPickerComponent_table_0_Template_button_click_11_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.datePicker.move(1); });
    ɵngcc0.ɵɵelement(12, "i", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(13, "tbody");
    ɵngcc0.ɵɵtemplate(14, MonthPickerComponent_table_0_tr_14_Template, 2, 1, "tr", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(6);
    ɵngcc0.ɵɵattribute("colspan", ctx_r0.datePicker.monthColLimit - 2 <= 0 ? 1 : ctx_r0.datePicker.monthColLimit - 2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("id", ctx_r0.datePicker.uniqueId + "-title")("disabled", ctx_r0.datePicker.datepickerMode === ctx_r0.maxMode)("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c2, ctx_r0.datePicker.datepickerMode === ctx_r0.maxMode));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.rows);
} }
export var MonthPickerComponent = (function () {
    function MonthPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var months = new Array(12);
            var year = this.activeDate.getFullYear();
            var date;
            for (var i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }, 'month');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth());
            var d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }, 'month');
        this.datePicker.refreshView();
    };
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent, },
    ]; };
MonthPickerComponent.ɵfac = function MonthPickerComponent_Factory(t) { return new (t || MonthPickerComponent)(ɵngcc0.ɵɵdirectiveInject(DatePickerInnerComponent)); };
MonthPickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MonthPickerComponent, selectors: [["monthpicker"]], decls: 1, vars: 1, consts: [["role", "grid", 4, "ngIf"], ["role", "grid"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", "pull-left", 3, "click"], [1, "glyphicon", "glyphicon-chevron-left"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", 2, "width", "100%", 3, "id", "disabled", "ngClass", "click"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", "pull-right", 3, "click"], [1, "glyphicon", "glyphicon-chevron-right"], [4, "ngFor", "ngForOf"], ["class", "text-center", "role", "gridcell", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "text-center", 3, "id", "ngClass"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", 2, "min-width", "100%", 3, "ngClass", "disabled", "click"], [3, "ngClass"]], template: function MonthPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, MonthPickerComponent_table_0_Template, 15, 8, "table", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.datePicker.datepickerMode === "month");
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MonthPickerComponent, [{
        type: Component,
        args: [{
                selector: 'monthpicker',
                template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-left\"></i>\n        </button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\n          <i class=\"glyphicon glyphicon-chevron-right\"></i>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" id=\"{{dtz.uid}}\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{dtz.label}}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  "
            }]
    }], function () { return [{ type: DatePickerInnerComponent }]; }, null); })();
    return MonthPickerComponent;
}());

//# sourceMappingURL=monthpicker.component.js.map