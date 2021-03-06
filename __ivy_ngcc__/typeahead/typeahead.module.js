import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadDirective } from './typeahead.directive';
import { ComponentLoaderFactory } from '../component-loader';
import { PositioningService } from '../positioning';
import * as ɵngcc0 from '@angular/core';
export var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    TypeaheadModule.forRoot = function () {
        return {
            ngModule: TypeaheadModule,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    };
    ;
    /** @nocollapse */
    TypeaheadModule.ctorParameters = function () { return []; };
TypeaheadModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TypeaheadModule });
TypeaheadModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TypeaheadModule_Factory(t) { return new (t || TypeaheadModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TypeaheadModule, { declarations: function () { return [TypeaheadContainerComponent, TypeaheadDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TypeaheadContainerComponent, TypeaheadDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TypeaheadModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                exports: [TypeaheadContainerComponent, TypeaheadDirective],
                entryComponents: [TypeaheadContainerComponent]
            }]
    }], function () { return []; }, null); })();
    return TypeaheadModule;
}());

//# sourceMappingURL=typeahead.module.js.map