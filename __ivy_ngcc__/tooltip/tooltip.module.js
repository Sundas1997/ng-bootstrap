import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from '../component-loader';
import { PositioningService } from '../positioning';
import * as ɵngcc0 from '@angular/core';
export var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    ;
    /** @nocollapse */
    TooltipModule.ctorParameters = function () { return []; };
TooltipModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TooltipModule });
TooltipModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TooltipModule, { declarations: function () { return [TooltipDirective, TooltipContainerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TooltipDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TooltipModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            }]
    }], function () { return []; }, null); })();
    return TooltipModule;
}());

//# sourceMappingURL=tooltip.module.js.map