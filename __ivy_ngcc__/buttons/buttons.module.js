import { NgModule } from '@angular/core';
import { ButtonCheckboxDirective } from './button-checkbox.directive';
import { ButtonRadioDirective } from './button-radio.directive';
import * as ɵngcc0 from '@angular/core';
export var ButtonsModule = (function () {
    function ButtonsModule() {
    }
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    /** @nocollapse */
    ButtonsModule.ctorParameters = function () { return []; };
ButtonsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonsModule });
ButtonsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonsModule_Factory(t) { return new (t || ButtonsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonsModule, { declarations: function () { return [ButtonCheckboxDirective, ButtonRadioDirective]; }, exports: function () { return [ButtonCheckboxDirective, ButtonRadioDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonsModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective]
            }]
    }], function () { return []; }, null); })();
    return ButtonsModule;
}());

//# sourceMappingURL=buttons.module.js.map