import { Component, Input } from '@angular/core';
import { AccordionConfig } from './accordion.config';
/** Displays collapsible content panels for presenting information in a limited amount of space. */
import * as ɵngcc0 from '@angular/core';

var _c0 = ["*"];
export var AccordionComponent = (function () {
    function AccordionComponent(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    AccordionComponent.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    AccordionComponent.prototype.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    /** @nocollapse */
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionConfig, },
    ]; };
    AccordionComponent.propDecorators = {
        'closeOthers': [{ type: Input },],
    };
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(ɵngcc0.ɵɵdirectiveInject(AccordionConfig)); };
AccordionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["accordion"]], hostAttrs: ["role", "tablist"], hostVars: 3, hostBindings: function AccordionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-multiselectable", ctx.closeOthers);
        ɵngcc0.ɵɵclassProp("panel-group", true);
    } }, inputs: { closeOthers: "closeOthers" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AccordionComponent, [{
        type: Component,
        args: [{
                selector: 'accordion',
                template: "<ng-content></ng-content>",
                // tslint:disable-next-line
                host: {
                    '[class.panel-group]': 'true',
                    '[attr.aria-multiselectable]': 'closeOthers',
                    role: 'tablist'
                }
            }]
    }], function () { return [{ type: AccordionConfig }]; }, { closeOthers: [{
            type: Input
        }] }); })();
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.component.js.map