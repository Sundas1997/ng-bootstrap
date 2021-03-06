import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableComponent } from './sortable.component';
import { DraggableItemService } from './draggable-item.service';
import * as ɵngcc0 from '@angular/core';
export var SortableModule = (function () {
    function SortableModule() {
    }
    SortableModule.forRoot = function () {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    };
    /** @nocollapse */
    SortableModule.ctorParameters = function () { return []; };
SortableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SortableModule });
SortableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SortableModule_Factory(t) { return new (t || SortableModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SortableModule, { declarations: function () { return [SortableComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SortableComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SortableModule, [{
        type: NgModule,
        args: [{
                declarations: [SortableComponent],
                imports: [CommonModule],
                exports: [SortableComponent]
            }]
    }], function () { return []; }, null); })();
    return SortableModule;
}());

//# sourceMappingURL=sortable.module.js.map