import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from '../component-loader';
import { PositioningService } from '../positioning';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';
import { BsDropdownConfig } from './bs-dropdown.config';
import { BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownState } from './bs-dropdown.state';
import * as ɵngcc0 from '@angular/core';
export var BsDropdownModule = (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    ;
    /** @nocollapse */
    BsDropdownModule.ctorParameters = function () { return []; };
BsDropdownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BsDropdownModule });
BsDropdownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BsDropdownModule_Factory(t) { return new (t || BsDropdownModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BsDropdownModule, { declarations: function () { return [BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownContainerComponent,
        BsDropdownDirective]; }, exports: function () { return [BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BsDropdownModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            }]
    }], function () { return []; }, null); })();
ɵngcc0.ɵɵsetComponentScope(BsDropdownContainerComponent, [BsDropdownMenuDirective,
    BsDropdownToggleDirective,
    BsDropdownContainerComponent,
    BsDropdownDirective], []);
    return BsDropdownModule;
}());

//# sourceMappingURL=bs-dropdown.module.js.map