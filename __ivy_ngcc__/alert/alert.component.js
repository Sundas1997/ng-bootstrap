import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = ["*"];
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertConfig } from './alert.config';
import { OnChange } from '../utils/decorators';
export var AlertComponent = (function () {
    function AlertComponent(_config) {
        var _this = this;
        /** Alert type. Provides one of four bootstrap supported contextual classes: `success`, `info`, `warning` and `danger` */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** This event fires immediately after close instance method is called, $event is an instance of Alert component. */
        this.onClose = new EventEmitter();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new EventEmitter();
        this.isClosed = false;
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(this.dismissOnTimeout, 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    AlertComponent.prototype.close = function () {
        if (this.isClosed) {
            return;
        }
        this.onClose.emit(this);
        this.isClosed = true;
        this.onClosed.emit(this);
    };
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: AlertConfig, },
    ]; };
    AlertComponent.propDecorators = {
        'type': [{ type: Input },],
        'dismissible': [{ type: Input },],
        'dismissOnTimeout': [{ type: Input },],
        'onClose': [{ type: Output },],
        'onClosed': [{ type: Output },],
    };
    __decorate([
        OnChange(), 
        __metadata('design:type', Boolean)
    ], AlertComponent.prototype, "dismissible", void 0);
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(ɵngcc0.ɵɵdirectiveInject(AlertConfig)); };
AlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["alert"], ["ngx-alert"]], inputs: { type: "type", dismissible: "dismissible", dismissOnTimeout: "dismissOnTimeout" }, outputs: { onClose: "onClose", onClosed: "onClosed" }, ngContentSelectors: _c0, decls: 19, vars: 5, consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "template", 0);
        ɵngcc0.ɵɵtext(1, "\n  ");
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtext(3, "\n    ");
        ɵngcc0.ɵɵelementStart(4, "template", 0);
        ɵngcc0.ɵɵtext(5, "\n      ");
        ɵngcc0.ɵɵelementStart(6, "button", 2);
        ɵngcc0.ɵɵlistener("click", function AlertComponent_Template_button_click_6_listener() { return ctx.close(); });
        ɵngcc0.ɵɵtext(7, "\n        ");
        ɵngcc0.ɵɵelementStart(8, "span", 3);
        ɵngcc0.ɵɵtext(9, "\u00D7");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(10, "\n        ");
        ɵngcc0.ɵɵelementStart(11, "span", 4);
        ɵngcc0.ɵɵtext(12, "Close");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(13, "\n      ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(14, "\n    ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(15, "\n    ");
        ɵngcc0.ɵɵprojection(16);
        ɵngcc0.ɵɵtext(17, "\n  ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtext(18, "\n");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isClosed);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMap("alert alert-" + ctx.type);
        ɵngcc0.ɵɵproperty("ngClass", ctx.classes);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dismissible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'alert,ngx-alert',
                template: "\n<template [ngIf]=\"!isClosed\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </template>\n    <ng-content></ng-content>\n  </div>\n</template>\n  "
            }]
    }], function () { return [{ type: AlertConfig }]; }, { type: [{
            type: Input
        }], dismissible: [{
            type: Input
        }], onClose: [{
            type: Output
        }], onClosed: [{
            type: Output
        }], dismissOnTimeout: [{
            type: Input
        }] }); })();
    return AlertComponent;
}());

//# sourceMappingURL=alert.component.js.map