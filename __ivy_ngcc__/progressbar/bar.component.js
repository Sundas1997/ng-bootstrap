import { Component, Host, Input } from '@angular/core';
import { ProgressDirective } from './progress.directive';
// todo: number pipe
// todo: use query from progress?
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = function (a0, a1) { return { width: a0, transition: a1 }; };
var _c1 = ["*"];
export var BarComponent = (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /** current value of progress bar */
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
        var totalPercentage = this.progress.bars.reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: ProgressDirective, decorators: [{ type: Host },] },
    ]; };
    BarComponent.propDecorators = {
        'type': [{ type: Input },],
        'value': [{ type: Input },],
    };
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(ɵngcc0.ɵɵdirectiveInject(ProgressDirective, 1)); };
BarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BarComponent, selectors: [["bar"]], inputs: { value: "value", type: "type" }, ngContentSelectors: _c1, decls: 2, vars: 8, consts: [["role", "progressbar", "aria-valuemin", "0", 1, "progress-bar", 2, "min-width", "0", 3, "ngClass", "ngStyle"]], template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.type && "progress-bar-" + ctx.type)("ngStyle", ɵngcc0.ɵɵpureFunction2(5, _c0, (ctx.percent < 100 ? ctx.percent : 100) + "%", ctx.transition));
        ɵngcc0.ɵɵattribute("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent.toFixed(0) + "%")("aria-valuemax", ctx.max);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BarComponent, [{
        type: Component,
        args: [{
                selector: 'bar',
                template: "\n  <div class=\"progress-bar\"\n    style=\"min-width: 0;\"\n    role=\"progressbar\"\n    [ngClass]=\"type && 'progress-bar-' + type\"\n    [ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\n    aria-valuemin=\"0\"\n    [attr.aria-valuenow]=\"value\"\n    [attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n    [attr.aria-valuemax]=\"max\"><ng-content></ng-content></div>\n"
            }]
    }], function () { return [{ type: ProgressDirective, decorators: [{
                type: Host
            }] }]; }, { value: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
    return BarComponent;
}());

//# sourceMappingURL=bar.component.js.map