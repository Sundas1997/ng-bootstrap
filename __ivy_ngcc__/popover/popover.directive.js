import { Directive, Input, Output, Renderer, ElementRef, ViewContainerRef } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { ComponentLoaderFactory } from '../component-loader';
import { PopoverContainerComponent } from './popover-container.component';
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
import * as ɵngcc0 from '@angular/core';
export var PopoverDirective = (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () { return this._popover.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            placement: this.placement,
            title: this.popoverTitle
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
        { type: ViewContainerRef, },
        { type: PopoverConfig, },
        { type: ComponentLoaderFactory, },
    ]; };
    PopoverDirective.propDecorators = {
        'popover': [{ type: Input },],
        'popoverTitle': [{ type: Input },],
        'placement': [{ type: Input },],
        'triggers': [{ type: Input },],
        'container': [{ type: Input },],
        'isOpen': [{ type: Input },],
        'onShown': [{ type: Output },],
        'onHidden': [{ type: Output },],
    };
PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(Renderer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(PopoverConfig), ɵngcc0.ɵɵdirectiveInject(ComponentLoaderFactory)); };
PopoverDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PopoverDirective, selectors: [["", "popover", ""]], inputs: { isOpen: "isOpen", popover: "popover", popoverTitle: "popoverTitle", placement: "placement", triggers: "triggers", container: "container" }, outputs: { onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-popover"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PopoverDirective, [{
        type: Directive,
        args: [{ selector: '[popover]', exportAs: 'bs-popover' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: Renderer }, { type: ɵngcc0.ViewContainerRef }, { type: PopoverConfig }, { type: ComponentLoaderFactory }]; }, { onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], isOpen: [{
            type: Input
        }], popover: [{
            type: Input
        }], popoverTitle: [{
            type: Input
        }], placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], container: [{
            type: Input
        }] }); })();
    return PopoverDirective;
}());

//# sourceMappingURL=popover.directive.js.map