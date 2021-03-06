import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as ɵngcc0 from '@angular/core';
export var DraggableItemService = (function () {
    function DraggableItemService() {
        this.onCapture = new Subject();
    }
    DraggableItemService.prototype.dragStart = function (item) {
        this.draggableItem = item;
    };
    DraggableItemService.prototype.getItem = function () {
        return this.draggableItem;
    };
    DraggableItemService.prototype.captureItem = function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, { overZoneIndex: overZoneIndex, i: newIndex });
        }
        return this.draggableItem;
    };
    DraggableItemService.prototype.onCaptureItem = function () {
        return this.onCapture;
    };
    /** @nocollapse */
    DraggableItemService.ctorParameters = function () { return []; };
DraggableItemService.ɵfac = function DraggableItemService_Factory(t) { return new (t || DraggableItemService)(); };
DraggableItemService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DraggableItemService, factory: function (t) { return DraggableItemService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DraggableItemService, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return DraggableItemService;
}());

//# sourceMappingURL=draggable-item.service.js.map