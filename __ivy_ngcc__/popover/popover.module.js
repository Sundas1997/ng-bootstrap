import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderFactory } from '../component-loader';
import { PositioningService } from '../positioning';
import { PopoverConfig } from './popover.config';
import { PopoverDirective } from './popover.directive';
import { PopoverContainerComponent } from './popover-container.component';
import * as ɵngcc0 from '@angular/core';
export var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    /** @nocollapse */
    PopoverModule.ctorParameters = function () { return []; };
PopoverModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: PopoverModule });
PopoverModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PopoverModule, { declarations: function () { return [PopoverDirective, PopoverContainerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [PopoverDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PopoverModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            }]
    }], function () { return []; }, null); })();
    return PopoverModule;
}());

//# sourceMappingURL=popover.module.js.map