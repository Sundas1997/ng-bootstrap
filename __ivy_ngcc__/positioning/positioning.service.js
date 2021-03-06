import { Injectable, ElementRef } from '@angular/core';
import { positionElements } from './ng-positioning';
import * as ɵngcc0 from '@angular/core';
export var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof ElementRef) {
            return element.nativeElement;
        }
        return element;
    };
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return []; };
PositioningService.ɵfac = function PositioningService_Factory(t) { return new (t || PositioningService)(); };
PositioningService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: PositioningService, factory: function (t) { return PositioningService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PositioningService, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return PositioningService;
}());

//# sourceMappingURL=positioning.service.js.map