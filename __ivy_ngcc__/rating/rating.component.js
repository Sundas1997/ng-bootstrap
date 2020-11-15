import { Component, EventEmitter, HostListener, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function RatingComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "i", 3);
    ɵngcc0.ɵɵlistener("mouseenter", function RatingComponent_ng_template_1_Template_i_mouseenter_2_listener() { ɵngcc0.ɵɵrestoreView(_r4); var index_r2 = ctx.index; var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.enter(index_r2 + 1); })("click", function RatingComponent_ng_template_1_Template_i_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r4); var index_r2 = ctx.index; var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.rate(index_r2 + 1); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var r_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("(", index_r2 < ctx_r0.value ? "*" : " ", ")");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", index_r2 < ctx_r0.value ? r_r1.stateOn : r_r1.stateOff)("title", r_r1.title);
} }
export var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RatingComponent; }),
    multi: true
};
export var RatingComponent = (function () {
    function RatingComponent() {
        /** number of icons */
        this.max = 5;
        /** fired when icon selected, $event:number equals to selected rating */
        this.onHover = new EventEmitter();
        /** fired when icon selected, $event:number equals to previous rating value */
        this.onLeave = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    RatingComponent.prototype.onKeydown = function (event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        var sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    RatingComponent.prototype.ngOnInit = function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.readonly = this.readonly === true;
        this.stateOn = typeof this.stateOn !== 'undefined'
            ? this.stateOn
            : 'glyphicon-star';
        this.stateOff = typeof this.stateOff !== 'undefined'
            ? this.stateOff
            : 'glyphicon-star-empty';
        this.titles = typeof this.titles !== 'undefined' && this.titles.length > 0
            ? this.titles
            : ['one', 'two', 'three', 'four', 'five'];
        this.range = this.buildTemplateObjects(this.ratingStates, this.max);
    };
    // model -> view
    RatingComponent.prototype.writeValue = function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            return;
        }
        this.preValue = value;
        this.value = value;
    };
    RatingComponent.prototype.enter = function (value) {
        if (!this.readonly) {
            this.value = value;
            this.onHover.emit(value);
        }
    };
    RatingComponent.prototype.reset = function () {
        this.value = this.preValue;
        this.onLeave.emit(this.value);
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RatingComponent.prototype.rate = function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    RatingComponent.prototype.buildTemplateObjects = function (ratingStates, max) {
        ratingStates = ratingStates || [];
        var count = ratingStates.length || max;
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push(Object.assign({
                index: i,
                stateOn: this.stateOn,
                stateOff: this.stateOff,
                title: this.titles[i] || i + 1
            }, ratingStates[i] || {}));
        }
        return result;
    };
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return []; };
    RatingComponent.propDecorators = {
        'max': [{ type: Input },],
        'stateOn': [{ type: Input },],
        'stateOff': [{ type: Input },],
        'readonly': [{ type: Input },],
        'titles': [{ type: Input },],
        'ratingStates': [{ type: Input },],
        'onHover': [{ type: Output },],
        'onLeave': [{ type: Output },],
        'onKeydown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
    };
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RatingComponent, selectors: [["rating"]], hostBindings: function RatingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function RatingComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } }, inputs: { max: "max", readonly: "readonly", stateOn: "stateOn", stateOff: "stateOff", titles: "titles", ratingStates: "ratingStates" }, outputs: { onHover: "onHover", onLeave: "onLeave" }, features: [ɵngcc0.ɵɵProvidersFeature([RATING_CONTROL_VALUE_ACCESSOR])], decls: 2, vars: 3, consts: [["tabindex", "0", "role", "slider", "aria-valuemin", "0", 3, "mouseleave", "keydown"], ["ngFor", "", 3, "ngForOf"], [1, "sr-only"], [1, "glyphicon", 3, "ngClass", "title", "mouseenter", "click"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵlistener("mouseleave", function RatingComponent_Template_span_mouseleave_0_listener() { return ctx.reset(); })("keydown", function RatingComponent_Template_span_keydown_0_listener($event) { return ctx.onKeydown($event); });
        ɵngcc0.ɵɵtemplate(1, RatingComponent_ng_template_1_Template, 3, 3, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-valuemax", ctx.range.length)("aria-valuenow", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.range);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{
                selector: 'rating',
                template: "\n    <span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\" [attr.aria-valuenow]=\"value\">\n      <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n        <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n        <i (mouseenter)=\"enter(index + 1)\" (click)=\"rate(index + 1)\" class=\"glyphicon\" [ngClass]=\"index < value ? r.stateOn : r.stateOff\" [title]=\"r.title\" ></i>\n      </ng-template>\n    </span>\n  ",
                providers: [RATING_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return []; }, { max: [{
            type: Input
        }], onHover: [{
            type: Output
        }], onLeave: [{
            type: Output
        }], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], readonly: [{
            type: Input
        }], stateOn: [{
            type: Input
        }], stateOff: [{
            type: Input
        }], titles: [{
            type: Input
        }], ratingStates: [{
            type: Input
        }] }); })();
    return RatingComponent;
}());

//# sourceMappingURL=rating.component.js.map