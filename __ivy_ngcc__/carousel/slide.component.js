import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["*"];
export var SlideComponent = (function () {
    function SlideComponent(carousel) {
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent, },
    ]; };
    SlideComponent.propDecorators = {
        'active': [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
        'addClass': [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.carousel-item',] },],
    };
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(ɵngcc0.ɵɵdirectiveInject(CarouselComponent)); };
SlideComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SlideComponent, selectors: [["slide"]], hostVars: 6, hostBindings: function SlideComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active);
    } }, inputs: { active: "active" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("active", ctx.active);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SlideComponent, [{
        type: Component,
        args: [{
                selector: 'slide',
                template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  "
            }]
    }], function () { return [{ type: CarouselComponent }]; }, { addClass: [{
            type: HostBinding,
            args: ['class.item']
        }, {
            type: HostBinding,
            args: ['class.carousel-item']
        }], active: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: Input
        }] }); })();
    return SlideComponent;
}());

//# sourceMappingURL=slide.component.js.map