import { Component, HostBinding, Input } from '@angular/core';
import { TabsetConfig } from './tabset.config';
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './ng-transclude.directive';

function TabsetComponent_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "span", 7);
    ɵngcc0.ɵɵlistener("click", function TabsetComponent_li_1_span_4_Template_span_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var tabz_r1 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r3 = ɵngcc0.ɵɵnextContext(); $event.preventDefault(); return ctx_r3.removeTab(tabz_r1); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
var _c0 = function (a1) { return ["nav-item", a1]; };
function TabsetComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 3);
    ɵngcc0.ɵɵelementStart(1, "a", 4);
    ɵngcc0.ɵɵlistener("click", function TabsetComponent_li_1_Template_a_click_1_listener() { var tabz_r1 = ctx.$implicit; return tabz_r1.active = true; });
    ɵngcc0.ɵɵelementStart(2, "span", 5);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, TabsetComponent_li_1_span_4_Template, 2, 0, "span", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var tabz_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("active", tabz_r1.active)("disabled", tabz_r1.disabled);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c0, tabz_r1.customClass || ""));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("active", tabz_r1.active)("disabled", tabz_r1.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTransclude", tabz_r1.headingRef);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(tabz_r1.heading);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", tabz_r1.removable);
} }
var _c1 = ["*"];
export var TabsetComponent = (function () {
    function TabsetComponent(config) {
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    TabsetComponent.prototype.removeTab = function (tab) {
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a
        );
        var _a;
    };
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: TabsetConfig, },
    ]; };
    TabsetComponent.propDecorators = {
        'vertical': [{ type: Input },],
        'justified': [{ type: Input },],
        'type': [{ type: Input },],
        'clazz': [{ type: HostBinding, args: ['class.tab-container',] },],
    };
TabsetComponent.ɵfac = function TabsetComponent_Factory(t) { return new (t || TabsetComponent)(ɵngcc0.ɵɵdirectiveInject(TabsetConfig)); };
TabsetComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TabsetComponent, selectors: [["tabset"]], hostVars: 2, hostBindings: function TabsetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("tab-container", ctx.clazz);
    } }, inputs: { vertical: "vertical", justified: "justified", type: "type" }, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[1, "nav", 3, "ngClass", "click"], [3, "ngClass", "active", "disabled", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngClass"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [3, "ngTransclude"], [4, "ngIf"], [1, "glyphicon", "glyphicon-remove-circle", 3, "click"]], template: function TabsetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵlistener("click", function TabsetComponent_Template_ul_click_0_listener($event) { return $event.preventDefault(); });
        ɵngcc0.ɵɵtemplate(1, TabsetComponent_li_1_Template, 5, 14, "li", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.classMap);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc2.NgTranscludeDirective, ɵngcc1.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabsetComponent, [{
        type: Component,
        args: [{
                selector: 'tabset',
                template: "\n    <ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n        <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n          [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n          <a href=\"javascript:void(0);\" class=\"nav-link\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n            (click)=\"tabz.active = true\">\n            <span [ngTransclude]=\"tabz.headingRef\">{{tabz.heading}}</span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"glyphicon glyphicon-remove-circle\"></span>\n            </span>\n          </a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-content></ng-content>\n    </div>\n  "
            }]
    }], function () { return [{ type: TabsetConfig }]; }, { clazz: [{
            type: HostBinding,
            args: ['class.tab-container']
        }], vertical: [{
            type: Input
        }], justified: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
    return TabsetComponent;
}());

//# sourceMappingURL=tabset.component.js.map