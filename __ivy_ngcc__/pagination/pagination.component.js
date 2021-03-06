import { Component, ElementRef, EventEmitter, Input, Output, Renderer, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginationConfig } from './pagination.config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function PaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 6);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.selectPage(1, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.getText("first"), ɵngcc0.ɵɵsanitizeHtml);
} }
function PaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.selectPage(ctx_r7.page - 1, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r1.getText("previous"), ɵngcc0.ɵɵsanitizeHtml);
} }
function PaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 9);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var pg_r9 = ctx.$implicit; var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.selectPage(pg_r9.number, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var pg_r9 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("active", pg_r9.active)("disabled", ctx_r2.disabled && !pg_r9.active);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", pg_r9.text, ɵngcc0.ɵɵsanitizeHtml);
} }
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 10);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.selectPage(ctx_r12.page + 1, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r3.noNext() || ctx_r3.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r3.getText("next"), ɵngcc0.ɵɵsanitizeHtml);
} }
function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 11);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.selectPage(ctx_r14.totalPages, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r4.noNext() || ctx_r4.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r4.getText("last"), ɵngcc0.ɵɵsanitizeHtml);
} }
export var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return PaginationComponent; }),
    multi: true
};
var PAGINATION_TEMPLATE = "\n  <ul class=\"pagination\" [ngClass]=\"classMap\">\n    <li class=\"pagination-first page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(1, $event)\" [innerHTML]=\"getText('first')\"></a>\n    </li>\n\n    <li class=\"pagination-prev page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\" [innerHTML]=\"getText('previous')\"></a>\n      </li>\n\n    <li *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.active\"\n        [class.disabled]=\"disabled&&!pg.active\"\n        class=\"pagination-page page-item\">\n      <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\" [innerHTML]=\"pg.text\"></a>\n    </li>\n\n    <li class=\"pagination-next page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noNext()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\" [innerHTML]=\"getText('next')\"></a></li>\n\n    <li class=\"pagination-last page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noNext()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\" [innerHTML]=\"getText('last')\"></a></li>\n  </ul>\n  ";
export var PaginationComponent = (function () {
    function PaginationComponent(renderer, elementRef, paginationConfig) {
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new EventEmitter();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object with current page index and number of items per page */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = (value > this.totalPages) ? this.totalPages : (value || 1);
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        // watch for maxSize
        this.maxSize = typeof this.maxSize !== 'undefined'
            ? this.maxSize
            : this.config.maxSize;
        this.rotate = typeof this.rotate !== 'undefined'
            ? this.rotate
            : this.config.rotate;
        this.boundaryLinks = typeof this.boundaryLinks !== 'undefined'
            ? this.boundaryLinks
            : this.config.boundaryLinks;
        this.directionLinks = typeof this.directionLinks !== 'undefined'
            ? this.directionLinks
            : this.config.directionLinks;
        this.pageBtnClass = typeof this.pageBtnClass !== 'undefined'
            ? this.pageBtnClass
            : this.config.pageBtnClass;
        // base class
        this.itemsPerPage = typeof this.itemsPerPage !== 'undefined'
            ? this.itemsPerPage
            : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getText = function (key) {
        return this[key + 'Text'] || this.config[key + 'Text'];
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PaginationComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: Renderer, },
        { type: ElementRef, },
        { type: PaginationConfig, },
    ]; };
    PaginationComponent.propDecorators = {
        'align': [{ type: Input },],
        'maxSize': [{ type: Input },],
        'boundaryLinks': [{ type: Input },],
        'directionLinks': [{ type: Input },],
        'firstText': [{ type: Input },],
        'previousText': [{ type: Input },],
        'nextText': [{ type: Input },],
        'lastText': [{ type: Input },],
        'rotate': [{ type: Input },],
        'pageBtnClass': [{ type: Input },],
        'disabled': [{ type: Input },],
        'numPages': [{ type: Output },],
        'pageChanged': [{ type: Output },],
        'itemsPerPage': [{ type: Input },],
        'totalItems': [{ type: Input },],
    };
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(ɵngcc0.ɵɵdirectiveInject(Renderer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(PaginationConfig)); };
PaginationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["pagination"]], inputs: { itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", rotate: "rotate", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", pageBtnClass: "pageBtnClass", align: "align", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", disabled: "disabled" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 6, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "innerHTML", "click"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵtemplate(1, PaginationComponent_li_1_Template, 2, 3, "li", 1);
        ɵngcc0.ɵɵtemplate(2, PaginationComponent_li_2_Template, 2, 3, "li", 2);
        ɵngcc0.ɵɵtemplate(3, PaginationComponent_li_3_Template, 2, 5, "li", 3);
        ɵngcc0.ɵɵtemplate(4, PaginationComponent_li_4_Template, 2, 3, "li", 4);
        ɵngcc0.ɵɵtemplate(5, PaginationComponent_li_5_Template, 2, 3, "li", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.classMap);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.boundaryLinks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.directionLinks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.pages);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.directionLinks);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.boundaryLinks);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{
                selector: 'pagination',
                template: PAGINATION_TEMPLATE,
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: Renderer }, { type: ɵngcc0.ElementRef }, { type: PaginationConfig }]; }, { numPages: [{
            type: Output
        }], pageChanged: [{
            type: Output
        }], itemsPerPage: [{
            type: Input
        }], totalItems: [{
            type: Input
        }], maxSize: [{
            type: Input
        }], rotate: [{
            type: Input
        }], boundaryLinks: [{
            type: Input
        }], directionLinks: [{
            type: Input
        }], pageBtnClass: [{
            type: Input
        }], align: [{
            type: Input
        }], firstText: [{
            type: Input
        }], previousText: [{
            type: Input
        }], nextText: [{
            type: Input
        }], lastText: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
    return PaginationComponent;
}());

//# sourceMappingURL=pagination.component.js.map