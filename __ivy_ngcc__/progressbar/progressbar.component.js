import { Component, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './progress.directive';
import * as ɵngcc2 from './bar.component';

var _c0 = ["*"];
export var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        Object.assign(this, config);
    }
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfig, },
    ]; };
    ProgressbarComponent.propDecorators = {
        'animate': [{ type: Input },],
        'max': [{ type: Input },],
        'type': [{ type: Input },],
        'value': [{ type: Input },],
    };
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(ɵngcc0.ɵɵdirectiveInject(ProgressbarConfig)); };
ProgressbarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], inputs: { animate: "animate", max: "max", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["progress", "", 3, "animate", "max"], [3, "type", "value"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "bar", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("animate", ctx.animate)("max", ctx.max);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("type", ctx.type)("value", ctx.value);
    } }, directives: [ɵngcc1.ProgressDirective, ɵngcc2.BarComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'progressbar',
                template: "\n    <div progress [animate]=\"animate\" [max]=\"max\">\n      <bar [type]=\"type\" [value]=\"value\">\n          <ng-content></ng-content>\n      </bar>\n    </div>\n  "
            }]
    }], function () { return [{ type: ProgressbarConfig }]; }, { animate: [{
            type: Input
        }], max: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
    return ProgressbarComponent;
}());

//# sourceMappingURL=progressbar.component.js.map