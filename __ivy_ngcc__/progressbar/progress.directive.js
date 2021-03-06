import { Directive, HostBinding, Input } from '@angular/core';
// todo: progress element conflict with bootstrap.css
// todo: need hack: replace host element with div
import * as ɵngcc0 from '@angular/core';
export var ProgressDirective = (function () {
    function ProgressDirective() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    Object.defineProperty(ProgressDirective.prototype, "max", {
        /** maximum total value of progress element */
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressDirective.prototype.addBar = function (bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    };
    ProgressDirective.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    /** @nocollapse */
    ProgressDirective.ctorParameters = function () { return []; };
    ProgressDirective.propDecorators = {
        'animate': [{ type: Input },],
        'max': [{ type: HostBinding, args: ['attr.max',] }, { type: Input },],
        'addClass': [{ type: HostBinding, args: ['class.progress',] },],
    };
ProgressDirective.ɵfac = function ProgressDirective_Factory(t) { return new (t || ProgressDirective)(); };
ProgressDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ProgressDirective, selectors: [["bs-progress"], ["", "progress", ""]], hostVars: 3, hostBindings: function ProgressDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("max", ctx.max);
        ɵngcc0.ɵɵclassProp("progress", ctx.addClass);
    } }, inputs: { max: "max", animate: "animate" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressDirective, [{
        type: Directive,
        args: [{ selector: 'bs-progress, [progress]' }]
    }], function () { return []; }, { addClass: [{
            type: HostBinding,
            args: ['class.progress']
        }], max: [{
            type: HostBinding,
            args: ['attr.max']
        }, {
            type: Input
        }], animate: [{
            type: Input
        }] }); })();
    return ProgressDirective;
}());

//# sourceMappingURL=progress.directive.js.map