import { NgModule } from '@angular/core';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.component';
import { PositioningService } from '../positioning';
import { ComponentLoaderFactory } from '../component-loader';
import * as ɵngcc0 from '@angular/core';
export var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule, providers: [ComponentLoaderFactory, PositioningService] };
    };
    /** @nocollapse */
    ModalModule.ctorParameters = function () { return []; };
ModalModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ModalModule });
ModalModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ModalModule, { declarations: function () { return [ModalBackdropComponent, ModalDirective]; }, exports: function () { return [ModalBackdropComponent, ModalDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ModalModule, [{
        type: NgModule,
        args: [{
                declarations: [ModalBackdropComponent, ModalDirective],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent]
            }]
    }], function () { return []; }, null); })();
    return ModalModule;
}());

//# sourceMappingURL=modal.module.js.map