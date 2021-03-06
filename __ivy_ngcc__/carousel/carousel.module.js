import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './slide.component';
import { CarouselConfig } from './carousel.config';
import * as ɵngcc0 from '@angular/core';
export var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    /** @nocollapse */
    CarouselModule.ctorParameters = function () { return []; };
CarouselModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CarouselModule });
CarouselModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, providers: [CarouselConfig], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CarouselModule, { declarations: function () { return [SlideComponent, CarouselComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SlideComponent, CarouselComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CarouselModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            }]
    }], function () { return []; }, null); })();
    return CarouselModule;
}());

//# sourceMappingURL=carousel.module.js.map