import { Component, HostBinding, Inject, Input } from '@angular/core';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { AccordionComponent } from './accordion.component';
/*
 * ### Accordion heading

 Instead of using `heading` attribute on the `accordion-group`, you can use an `accordion-heading` attribute on `any` element inside of a group that will be used as group's header template.

 * */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../collapse/collapse.directive';

var _c0 = function (a0) { return { "text-muted": a0 }; };
function AccordionPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r0.isDisabled));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.heading);
} }
var _c1 = [[["", "accordion-heading", ""]], "*"];
var _c2 = ["[accordion-heading]", "*"];
export var AccordionPanelComponent = (function () {
    function AccordionPanelComponent(accordion) {
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        // Questionable, maybe .panel-open should be on child div.panel element?
        /** Is accordion group open or closed */
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.ngOnInit = function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    AccordionPanelComponent.prototype.ngOnDestroy = function () {
        this.accordion.removeGroup(this);
    };
    AccordionPanelComponent.prototype.toggleOpen = function (event) {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
    /** @nocollapse */
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] },] },
    ]; };
    AccordionPanelComponent.propDecorators = {
        'heading': [{ type: Input },],
        'panelClass': [{ type: Input },],
        'isDisabled': [{ type: Input },],
        'isOpen': [{ type: HostBinding, args: ['class.panel-open',] }, { type: Input },],
    };
AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(ɵngcc0.ɵɵdirectiveInject(AccordionComponent)); };
AccordionPanelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AccordionPanelComponent, selectors: [["accordion-group"], ["accordion-panel"]], hostVars: 2, hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("panel-open", ctx.isOpen);
    } }, inputs: { isOpen: "isOpen", panelClass: "panelClass", heading: "heading", isDisabled: "isDisabled" }, ngContentSelectors: _c2, decls: 9, vars: 4, consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "click"], [1, "panel-title", "card-title"], ["role", "button", 1, "accordion-toggle"], [3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse"], [1, "panel-body", "card-block"], [3, "ngClass"]], template: function AccordionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵlistener("click", function AccordionPanelComponent_Template_div_click_1_listener($event) { return ctx.toggleOpen($event); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵtemplate(4, AccordionPanelComponent_div_4_Template, 2, 4, "div", 4);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 6);
        ɵngcc0.ɵɵprojection(8, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.panelClass);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵattribute("aria-expanded", ctx.isOpen);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.heading);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("collapse", !ctx.isOpen);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc2.CollapseDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AccordionPanelComponent, [{
        type: Component,
        args: [{
                selector: 'accordion-group, accordion-panel',
                template: "\n<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div class=\"panel-heading card-header\" role=\"tab\" (click)=\"toggleOpen($event)\">\n    <div class=\"panel-title card-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <div *ngIf=\"heading\"[ngClass]=\"{'text-muted': isDisabled}\">{{heading}}</div>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">\n    <div class=\"panel-body card-block\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n  "
            }]
    }], function () { return [{ type: AccordionComponent, decorators: [{
                type: Inject,
                args: [AccordionComponent]
            }] }]; }, { isOpen: [{
            type: HostBinding,
            args: ['class.panel-open']
        }, {
            type: Input
        }], panelClass: [{
            type: Input
        }], heading: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }] }); })();
    return AccordionPanelComponent;
}());

//# sourceMappingURL=accordion-group.component.js.map