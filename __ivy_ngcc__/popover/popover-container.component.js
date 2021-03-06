import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function PopoverContainerComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h3", 3);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.title);
} }
var _c0 = ["*"];
export var PopoverContainerComponent = (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig, },
    ]; };
    PopoverContainerComponent.propDecorators = {
        'placement': [{ type: Input },],
        'title': [{ type: Input },],
    };
PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) { return new (t || PopoverContainerComponent)(ɵngcc0.ɵɵdirectiveInject(PopoverConfig)); };
PopoverContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PopoverContainerComponent, selectors: [["popover-container"]], hostAttrs: ["role", "tooltip", 2, "display", "block"], hostVars: 4, hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassMap("popover in popover-" + ctx.placement + " " + ctx.placement);
        ɵngcc0.ɵɵclassProp("show", !ctx.isBs3);
    } }, inputs: { placement: "placement", title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title", 4, "ngIf"], [1, "popover-content"], [1, "popover-title"]], template: function PopoverContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelement(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PopoverContainerComponent, [{
        type: Component,
        args: [{
                selector: 'popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"popover in popover-" + placement + " " + placement',
                    '[class.show]': '!isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                },
                template: "\n<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title\" *ngIf=\"title\">{{title}}</h3><div class=\"popover-content\"><ng-content></ng-content></div>\n    "
            }]
    }], function () { return [{ type: PopoverConfig }]; }, { placement: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();
    return PopoverContainerComponent;
}());

//# sourceMappingURL=popover-container.component.js.map