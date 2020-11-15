import { Component, ElementRef, ViewEncapsulation, HostListener } from '@angular/core';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { TypeaheadUtils } from './typeahead-utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function TypeaheadContainerComponent_ng_template_0_Template(rf, ctx) { }
function TypeaheadContainerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var match_r7 = ctx.match;
    var query_r8 = ctx.query;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHtml", ctx_r2.hightlight(match_r7, query_r8), ɵngcc0.ɵɵsanitizeHtml);
} }
function TypeaheadContainerComponent_ng_template_3_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(match_r10);
} }
function TypeaheadContainerComponent_ng_template_3_ng_template_1_li_1_ng_template_2_Template(rf, ctx) { }
var _c0 = function (a0, a1, a2, a3) { return { item: a0, index: a1, match: a2, query: a3 }; };
function TypeaheadContainerComponent_ng_template_3_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 10);
    ɵngcc0.ɵɵlistener("mouseenter", function TypeaheadContainerComponent_ng_template_3_ng_template_1_li_1_Template_li_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); var match_r10 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.selectActive(match_r10); });
    ɵngcc0.ɵɵelementStart(1, "a", 11);
    ɵngcc0.ɵɵlistener("click", function TypeaheadContainerComponent_ng_template_3_ng_template_1_li_1_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); var match_r10 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r19 = ɵngcc0.ɵɵnextContext(2); return ctx_r19.selectMatch(match_r10, $event); });
    ɵngcc0.ɵɵtemplate(2, TypeaheadContainerComponent_ng_template_3_ng_template_1_li_1_ng_template_2_Template, 0, 0, "ng-template", 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r21 = ɵngcc0.ɵɵnextContext();
    var match_r10 = ctx_r21.$implicit;
    var i_r11 = ctx_r21.index;
    var ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    var _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵclassProp("active", ctx_r13.isActive(match_r10));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r13.itemTemplate || _r1)("ngOutletContext", ɵngcc0.ɵɵpureFunction4(4, _c0, match_r10.item, i_r11, match_r10, ctx_r13.query));
} }
function TypeaheadContainerComponent_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TypeaheadContainerComponent_ng_template_3_ng_template_1_li_0_Template, 2, 1, "li", 7);
    ɵngcc0.ɵɵtemplate(1, TypeaheadContainerComponent_ng_template_3_ng_template_1_li_1_Template, 3, 9, "li", 8);
} if (rf & 2) {
    var match_r10 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", match_r10.isHeader());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !match_r10.isHeader());
} }
function TypeaheadContainerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 5);
    ɵngcc0.ɵɵtemplate(1, TypeaheadContainerComponent_ng_template_3_ng_template_1_Template, 2, 2, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.matches);
} }
function TypeaheadContainerComponent_ng_template_5_ng_template_0_h6_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h6", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r23 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(match_r23);
} }
function TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_ng_template_1_Template(rf, ctx) { }
function TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 13);
    ɵngcc0.ɵɵlistener("click", function TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); var match_r23 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r29 = ɵngcc0.ɵɵnextContext(2); return ctx_r29.selectMatch(match_r23, $event); })("mouseenter", function TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_Template_button_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r31); var match_r23 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r32 = ɵngcc0.ɵɵnextContext(2); return ctx_r32.selectActive(match_r23); });
    ɵngcc0.ɵɵtemplate(1, TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_ng_template_1_Template, 0, 0, "ng-template", 0);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r34 = ɵngcc0.ɵɵnextContext();
    var match_r23 = ctx_r34.$implicit;
    var i_r24 = ctx_r34.index;
    var ctx_r26 = ɵngcc0.ɵɵnextContext(2);
    var _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵclassProp("active", ctx_r26.isActive(match_r23));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r26.itemTemplate || _r1)("ngOutletContext", ɵngcc0.ɵɵpureFunction4(4, _c0, match_r23.item, i_r24, match_r23, ctx_r26.query));
} }
function TypeaheadContainerComponent_ng_template_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TypeaheadContainerComponent_ng_template_5_ng_template_0_h6_0_Template, 2, 1, "h6", 7);
    ɵngcc0.ɵɵtemplate(1, TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_Template, 2, 9, "ng-template", 12);
} if (rf & 2) {
    var match_r23 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngIf", match_r23.isHeader());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !match_r23.isHeader());
} }
function TypeaheadContainerComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TypeaheadContainerComponent_ng_template_5_ng_template_0_Template, 2, 2, "ng-template", 6);
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.matches);
} }
var _c1 = function (a0, a1, a2) { return { matches: a0, itemTemplate: a1, query: a2 }; };
export var TypeaheadContainerComponent = (function () {
    function TypeaheadContainerComponent(element) {
        this.isFocused = false;
        this._matches = [];
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (value) {
            this._matches = value;
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        get: function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        get: function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this._active);
    };
    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0
            ? this.matches.length - 1
            : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1
            ? 0
            : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.selectActive = function (value) {
        this.isFocused = true;
        this._active = value;
    };
    TypeaheadContainerComponent.prototype.hightlight = function (match, query) {
        var itemStr = match.value;
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? TypeaheadUtils.latinize(itemStr)
            : itemStr).toLowerCase();
        var startIdx;
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
                    itemStrHelper = itemStrHelper.substring(0, startIdx) + '        ' + ' '.repeat(tokenLen) + '         ' + itemStrHelper.substring(startIdx + tokenLen);
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
            }
        }
        return itemStr;
    };
    TypeaheadContainerComponent.prototype.focusLost = function () {
        this.isFocused = false;
    };
    TypeaheadContainerComponent.prototype.isActive = function (value) {
        return this._active === value;
    };
    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () {
            return _this.parent.typeaheadOnSelect.emit(value);
        }, 0);
        return false;
    };
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        'focusLost': [{ type: HostListener, args: ['mouseleave',] }, { type: HostListener, args: ['blur',] },],
    };
TypeaheadContainerComponent.ɵfac = function TypeaheadContainerComponent_Factory(t) { return new (t || TypeaheadContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TypeaheadContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TypeaheadContainerComponent, selectors: [["typeahead-container"]], hostAttrs: [1, "dropdown", "open", 2, "position", "absolute", "display", "block"], hostVars: 2, hostBindings: function TypeaheadContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseleave", function TypeaheadContainerComponent_mouseleave_HostBindingHandler() { return ctx.focusLost(); })("blur", function TypeaheadContainerComponent_blur_HostBindingHandler() { return ctx.focusLost(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("dropdown-menu", ctx.isBs4);
    } }, decls: 7, vars: 6, consts: [[3, "ngTemplateOutlet", "ngOutletContext"], ["bsItemTemplate", ""], ["bs3Template", ""], ["bs4Template", ""], [3, "innerHtml"], [1, "dropdown-menu"], ["ngFor", "", 3, "ngForOf"], ["class", "dropdown-header", 4, "ngIf"], [3, "active", "mouseenter", 4, "ngIf"], [1, "dropdown-header"], [3, "mouseenter"], ["href", "#", "tabindex", "-1", 3, "click"], [3, "ngIf"], [1, "dropdown-item", 3, "click", "mouseenter"]], template: function TypeaheadContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TypeaheadContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        ɵngcc0.ɵɵtemplate(1, TypeaheadContainerComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, TypeaheadContainerComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, TypeaheadContainerComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r3 = ɵngcc0.ɵɵreference(4);
        var _r5 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.optionsListTemplate || (ctx.isBs4 ? _r5 : _r3))("ngOutletContext", ɵngcc0.ɵɵpureFunction3(2, _c1, ctx.matches, ctx.itemTemplate, ctx.query));
    } }, directives: [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, ɵngcc1.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TypeaheadContainerComponent, [{
        type: Component,
        args: [{
                selector: 'typeahead-container',
                // tslint:disable-next-line
                template: "\n<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n  [ngOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"hightlight(match, query)\"></span></ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n<ul class=\"dropdown-menu\">\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <li *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</li>\n    <li *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\n      <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n          [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n      </a>\n    </li>\n  </ng-template>\n</ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template >\n<ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n   <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</h6>\n   <ng-template [ngIf]=\"!match.isHeader()\">\n      <button\n        class=\"dropdown-item\"\n        (click)=\"selectMatch(match, $event)\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.active]=\"isActive(match)\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n            [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n      </button>\n  </ng-template>\n</ng-template>\n</ng-template>\n",
                // tslint:disable
                host: {
                    'class': 'dropdown open',
                    '[class.dropdown-menu]': 'isBs4',
                    style: 'position: absolute;display: block;'
                },
                // tslint: enable
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { focusLost: [{
            type: HostListener,
            args: ['mouseleave']
        }, {
            type: HostListener,
            args: ['blur']
        }] }); })();
    return TypeaheadContainerComponent;
}());

//# sourceMappingURL=typeahead-container.component.js.map