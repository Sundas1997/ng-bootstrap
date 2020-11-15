import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import * as ɵngcc0 from '@angular/core';
export var BsDropdownMenuDirective = (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ViewContainerRef, },
        { type: TemplateRef, },
    ]; };
BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(t) { return new (t || BsDropdownMenuDirective)(ɵngcc0.ɵɵdirectiveInject(BsDropdownState), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
BsDropdownMenuDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BsDropdownMenuDirective, selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]], exportAs: ["bs-dropdown-menu"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BsDropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            }]
    }], function () { return [{ type: BsDropdownState }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.TemplateRef }]; }, null); })();
    return BsDropdownMenuDirective;
}());

//# sourceMappingURL=bs-dropdown-menu.directive.js.map