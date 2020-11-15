import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DraggableItemService } from './draggable-item.service';
/* tslint:disable */
/* tslint:enable */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function SortableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵlistener("dragover", function SortableComponent_div_1_Template_div_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onItemDragover($event, 0); })("dragenter", function SortableComponent_div_1_Template_div_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.cancelEvent($event); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.placeholderClass)("ngStyle", ctx_r0.placeholderStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.placeholderItem);
} }
function SortableComponent_div_2_ng_template_1_Template(rf, ctx) { }
var _c0 = function (a0, a1) { return [a0, a1]; };
var _c1 = function (a0, a1) { return { item: a0, index: a1 }; };
function SortableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵlistener("dragstart", function SortableComponent_div_2_Template_div_dragstart_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var item_r7 = ctx.$implicit; var i_r8 = ctx.index; var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onItemDragstart($event, item_r7, i_r8); })("dragend", function SortableComponent_div_2_Template_div_dragend_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.resetActiveItem($event); })("dragover", function SortableComponent_div_2_Template_div_dragover_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var i_r8 = ctx.index; var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onItemDragover($event, i_r8); })("dragenter", function SortableComponent_div_2_Template_div_dragenter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.cancelEvent($event); });
    ɵngcc0.ɵɵtemplate(1, SortableComponent_div_2_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    var _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(4, _c0, ctx_r1.itemClass, i_r8 === ctx_r1.activeItem ? ctx_r1.itemActiveClass : ""))("ngStyle", ctx_r1.getItemStyle(i_r8 === ctx_r1.activeItem));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate || _r2)("ngOutletContext", ɵngcc0.ɵɵpureFunction2(7, _c1, item_r7, i_r8));
} }
function SortableComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    var item_r15 = ctx.item;
    ɵngcc0.ɵɵtextInterpolate(item_r15.value);
} }
export var SortableComponent = (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /** class name for items wrapper */
        this.wrapperClass = '';
        /** style object for items wrapper */
        this.wrapperStyle = {};
        /** class name for item */
        this.itemClass = '';
        /** style object for item */
        this.itemStyle = {};
        /** class name for active item */
        this.itemActiveClass = '';
        /** style object for active item */
        this.itemActiveStyle = {};
        /** class name for placeholder */
        this.placeholderClass = '';
        /** style object for placeholder */
        this.placeholderStyle = {};
        /** placeholder item which will be shown if collection is empty */
        this.placeholderItem = '';
        /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new EventEmitter();
        this.showPlaceholder = false;
        this.activeItem = -1;
        this.onTouched = Function.prototype;
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer.onCaptureItem()
            .subscribe(function (item) { return _this.onDrop(item); });
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
            var out = this.items.map(function (x) { return x.initData; });
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype.onItemDragstart = function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    SortableComponent.prototype.onItemDragover = function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        var newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = this.items.slice(0, i).concat([
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            newArray = this.items.slice(0, dragItem.i).concat(this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.cancelEvent = function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    SortableComponent.prototype.onDrop = function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter(function (x, i) { return i !== item.i; });
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    SortableComponent.prototype.resetActiveItem = function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    SortableComponent.prototype.registerOnChange = function (callback) {
        this.onChanged = callback;
    };
    SortableComponent.prototype.registerOnTouched = function (callback) {
        this.onTouched = callback;
    };
    SortableComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value) {
            this.items = value.map(function (x, i) { return ({
                id: i,
                initData: x,
                value: _this.fieldName ? x[_this.fieldName] : x
            }); });
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    SortableComponent.prototype.updatePlaceholderState = function () {
        this.showPlaceholder = !this._items.length;
    };
    SortableComponent.prototype.getItemStyle = function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    SortableComponent.prototype.initDragstartEvent = function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: DraggableItemService, },
    ]; };
    SortableComponent.propDecorators = {
        'fieldName': [{ type: Input },],
        'wrapperClass': [{ type: Input },],
        'wrapperStyle': [{ type: Input },],
        'itemClass': [{ type: Input },],
        'itemStyle': [{ type: Input },],
        'itemActiveClass': [{ type: Input },],
        'itemActiveStyle': [{ type: Input },],
        'placeholderClass': [{ type: Input },],
        'placeholderStyle': [{ type: Input },],
        'placeholderItem': [{ type: Input },],
        'itemTemplate': [{ type: Input },],
        'onChange': [{ type: Output },],
    };
SortableComponent.ɵfac = function SortableComponent_Factory(t) { return new (t || SortableComponent)(ɵngcc0.ɵɵdirectiveInject(DraggableItemService)); };
SortableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SortableComponent, selectors: [["bs-sortable"]], inputs: { wrapperClass: "wrapperClass", wrapperStyle: "wrapperStyle", itemClass: "itemClass", itemStyle: "itemStyle", itemActiveClass: "itemActiveClass", itemActiveStyle: "itemActiveStyle", placeholderClass: "placeholderClass", placeholderStyle: "placeholderStyle", placeholderItem: "placeholderItem", fieldName: "fieldName", itemTemplate: "itemTemplate" }, outputs: { onChange: "onChange" }, exportAs: ["bs-sortable"], features: [ɵngcc0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return SortableComponent; }),
                multi: true
            }])], decls: 5, vars: 5, consts: [[3, "ngClass", "ngStyle", "dragover", "dragenter", "drop", "mouseleave"], [3, "ngClass", "ngStyle", "dragover", "dragenter", 4, "ngIf"], ["draggable", "true", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter", 4, "ngFor", "ngForOf"], ["defItemTemplate", ""], [3, "ngClass", "ngStyle", "dragover", "dragenter"], ["draggable", "true", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter"], [3, "ngTemplateOutlet", "ngOutletContext"]], template: function SortableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("dragover", function SortableComponent_Template_div_dragover_0_listener($event) { return ctx.cancelEvent($event); })("dragenter", function SortableComponent_Template_div_dragenter_0_listener($event) { return ctx.cancelEvent($event); })("drop", function SortableComponent_Template_div_drop_0_listener($event) { return ctx.resetActiveItem($event); })("mouseleave", function SortableComponent_Template_div_mouseleave_0_listener($event) { return ctx.resetActiveItem($event); });
        ɵngcc0.ɵɵtemplate(1, SortableComponent_div_1_Template, 2, 3, "div", 1);
        ɵngcc0.ɵɵtemplate(2, SortableComponent_div_2_Template, 2, 10, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, SortableComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", ctx.wrapperClass)("ngStyle", ctx.wrapperStyle)("ngStyle", ctx.wrapperStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showPlaceholder);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SortableComponent, [{
        type: Component,
        args: [{
                selector: 'bs-sortable',
                exportAs: 'bs-sortable',
                template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SortableComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: DraggableItemService }]; }, { wrapperClass: [{
            type: Input
        }], wrapperStyle: [{
            type: Input
        }], itemClass: [{
            type: Input
        }], itemStyle: [{
            type: Input
        }], itemActiveClass: [{
            type: Input
        }], itemActiveStyle: [{
            type: Input
        }], placeholderClass: [{
            type: Input
        }], placeholderStyle: [{
            type: Input
        }], placeholderItem: [{
            type: Input
        }], onChange: [{
            type: Output
        }], fieldName: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }] }); })();
    return SortableComponent;
}());

//# sourceMappingURL=sortable.component.js.map