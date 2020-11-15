import { Component } from '@angular/core';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { DatePickerInnerComponent } from './datepicker-inner.component';
// write an interface for template options
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DayPickerComponent_table_0_th_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "th");
} }
function DayPickerComponent_table_0_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 8);
    ɵngcc0.ɵɵelementStart(1, "small", 9);
    ɵngcc0.ɵɵelementStart(2, "b");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var labelz_r4 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(labelz_r4.abbr);
} }
function DayPickerComponent_table_0_ng_template_15_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 8);
    ɵngcc0.ɵɵelementStart(1, "em");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var index_r6 = ɵngcc0.ɵɵnextContext(2).index;
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.weekNumbers[index_r6]);
} }
var _c0 = function (a0, a1, a2, a3, a4) { return { "btn-secondary": a0, "btn-info": a1, disabled: a2, active: a3, "btn-default": a4 }; };
var _c1 = function (a0, a1) { return { "text-muted": a0, "text-info": a1 }; };
function DayPickerComponent_table_0_ng_template_15_tr_0_td_2_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 14);
    ɵngcc0.ɵɵlistener("click", function DayPickerComponent_table_0_ng_template_15_tr_0_td_2_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var dtz_r11 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r13 = ɵngcc0.ɵɵnextContext(4); return ctx_r13.datePicker.select(dtz_r11.date); });
    ɵngcc0.ɵɵelementStart(1, "span", 15);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var dtz_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r12 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassMapInterpolate1("btn btn-sm ", dtz_r11.customClass, "");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction5(7, _c0, ctx_r12.isBs4 && !dtz_r11.selected && !ctx_r12.datePicker.isActive(dtz_r11), dtz_r11.selected, dtz_r11.disabled, !ctx_r12.isBs4 && ctx_r12.datePicker.isActive(dtz_r11), !ctx_r12.isBs4))("disabled", dtz_r11.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(13, _c1, dtz_r11.secondary || dtz_r11.current, !ctx_r12.isBs4 && dtz_r11.current));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(dtz_r11.label);
} }
function DayPickerComponent_table_0_ng_template_15_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 12);
    ɵngcc0.ɵɵtemplate(1, DayPickerComponent_table_0_ng_template_15_tr_0_td_2_button_1_Template, 3, 16, "button", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var dtz_r11 = ctx.$implicit;
    var ctx_r9 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("id", dtz_r11.uid);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r9.datePicker.onlyCurrentMonth && dtz_r11.secondary));
} }
function DayPickerComponent_table_0_ng_template_15_tr_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr");
    ɵngcc0.ɵɵtemplate(1, DayPickerComponent_table_0_ng_template_15_tr_0_td_1_Template, 3, 1, "td", 10);
    ɵngcc0.ɵɵtemplate(2, DayPickerComponent_table_0_ng_template_15_tr_0_td_2_Template, 2, 2, "td", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var rowz_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.datePicker.showWeeks);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", rowz_r5);
} }
function DayPickerComponent_table_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DayPickerComponent_table_0_ng_template_15_tr_0_Template, 3, 2, "tr", 5);
} if (rf & 2) {
    var rowz_r5 = ctx.$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r3.datePicker.onlyCurrentMonth && rowz_r5[0].secondary && rowz_r5[6].secondary));
} }
var _c2 = function (a0) { return { disabled: a0 }; };
function DayPickerComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "table", 1);
    ɵngcc0.ɵɵelementStart(1, "thead");
    ɵngcc0.ɵɵelementStart(2, "tr");
    ɵngcc0.ɵɵelementStart(3, "th");
    ɵngcc0.ɵɵelementStart(4, "button", 2);
    ɵngcc0.ɵɵlistener("click", function DayPickerComponent_table_0_Template_button_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.datePicker.move(0 - 1); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "th");
    ɵngcc0.ɵɵelementStart(6, "button", 3);
    ɵngcc0.ɵɵlistener("click", function DayPickerComponent_table_0_Template_button_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.datePicker.toggleMode(); });
    ɵngcc0.ɵɵelementStart(7, "strong");
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "th");
    ɵngcc0.ɵɵelementStart(10, "button", 4);
    ɵngcc0.ɵɵlistener("click", function DayPickerComponent_table_0_Template_button_click_10_listener() { ɵngcc0.ɵɵrestoreView(_r19); var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.datePicker.move(1); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(11, "tr");
    ɵngcc0.ɵɵtemplate(12, DayPickerComponent_table_0_th_12_Template, 1, 0, "th", 5);
    ɵngcc0.ɵɵtemplate(13, DayPickerComponent_table_0_th_13_Template, 4, 1, "th", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "tbody");
    ɵngcc0.ɵɵtemplate(15, DayPickerComponent_table_0_ng_template_15_Template, 1, 1, "ng-template", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("aria-labelledby", ctx_r0.datePicker.uniqueId + "-title");
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.CURRENT_THEME_TEMPLATE.ARROW_LEFT, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("colspan", 5 + (ctx_r0.datePicker.showWeeks ? 1 : 0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("id", ctx_r0.datePicker.uniqueId + "-title")("disabled", ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode)("ngClass", ɵngcc0.ɵɵpureFunction1(11, _c2, ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.CURRENT_THEME_TEMPLATE.ARROW_RIGHT, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.datePicker.showWeeks);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.labels);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.rows);
} }
var TEMPLATE_OPTIONS = {
    'bs4': {
        ARROW_LEFT: '&lt;',
        ARROW_RIGHT: '&gt;'
    },
    'bs3': {
        ARROW_LEFT: "\n    <i class=\"glyphicon glyphicon-chevron-left\"></i>\n    ",
        ARROW_RIGHT: "\n    <i class=\"glyphicon glyphicon-chevron-right\"></i>\n    "
    }
};
export var DayPickerComponent = (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.CURRENT_THEME_TEMPLATE = isBs3()
            ? TEMPLATE_OPTIONS.bs3
            : TEMPLATE_OPTIONS.bs4;
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    DayPickerComponent.prototype.ngOnInit = function () {
        var self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            var year = this.activeDate.getFullYear();
            var month = this.activeDate.getMonth();
            var firstDayOfMonth = new Date(year, month, 1);
            var difference = this.startingDay - firstDayOfMonth.getDay();
            var numDisplayedFromPreviousMonth = (difference > 0)
                ? 7 - difference
                : -difference;
            var firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            var _days = self.getDates(firstDate, 42);
            var days = [];
            for (var i = 0; i < 42; i++) {
                var _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                var numWeeks = self.rows.length;
                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    };
    DayPickerComponent.prototype.getDates = function (startDate, n) {
        var dates = new Array(n);
        var current = new Date(startDate.getTime());
        var i = 0;
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
        }
        return dates;
    };
    DayPickerComponent.prototype.getISO8601WeekNumber = function (date) {
        var checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    };
    /** @nocollapse */
    DayPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent, },
    ]; };
DayPickerComponent.ɵfac = function DayPickerComponent_Factory(t) { return new (t || DayPickerComponent)(ɵngcc0.ɵɵdirectiveInject(DatePickerInnerComponent)); };
DayPickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DayPickerComponent, selectors: [["daypicker"]], decls: 1, vars: 1, consts: [["role", "grid", "aria-activedescendant", "activeDateId", 4, "ngIf"], ["role", "grid", "aria-activedescendant", "activeDateId"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "btn-sm", "pull-left", 3, "innerHTML", "click"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "btn-sm", 2, "width", "100%", 3, "id", "disabled", "ngClass", "click"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "btn-sm", "pull-right", 3, "innerHTML", "click"], [4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], ["ngFor", "", 3, "ngForOf"], [1, "text-center"], ["aria-label", "labelz.full"], ["class", "h6", "class", "text-center", 4, "ngIf"], ["class", "text-center", "role", "gridcell", 3, "id", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "text-center", 3, "id"], ["type", "button", "style", "min-width:100%;", "tabindex", "-1", 3, "class", "ngClass", "disabled", "click", 4, "ngIf"], ["type", "button", "tabindex", "-1", 2, "min-width", "100%", 3, "ngClass", "disabled", "click"], [3, "ngClass"]], template: function DayPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DayPickerComponent_table_0_Template, 16, 13, "table", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.datePicker.datepickerMode === "day");
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DayPickerComponent, [{
        type: Component,
        args: [{
                selector: 'daypicker',
                template: "\n<table *ngIf=\"datePicker.datepickerMode==='day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId+'-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" \n                class=\"btn btn-default btn-secondary btn-sm pull-left\" \n                (click)=\"datePicker.move(-1)\" \n                tabindex=\"-1\"\n                [innerHTML]=\"CURRENT_THEME_TEMPLATE.ARROW_LEFT\">\n        </button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode()\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" \n                class=\"btn btn-default btn-secondary btn-sm pull-right\" \n                (click)=\"datePicker.move(1)\" \n                tabindex=\"-1\"\n                [innerHTML]=\"CURRENT_THEME_TEMPLATE.ARROW_RIGHT\">\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{labelz.abbr}}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{dtz.label}}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  "
            }]
    }], function () { return [{ type: DatePickerInnerComponent }]; }, null); })();
    return DayPickerComponent;
}());

//# sourceMappingURL=daypicker.component.js.map