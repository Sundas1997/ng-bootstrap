import { Directive, TemplateRef } from '@angular/core';
import { TabDirective } from './tab.directive';
/** Should be used to mark <template> element as a template for tab heading */
import * as ɵngcc0 from '@angular/core';
export var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: TabDirective, },
    ]; };
TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(t) { return new (t || TabHeadingDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(TabDirective)); };
TabHeadingDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: TabHeadingDirective, selectors: [["", "tabHeading", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabHeadingDirective, [{
        type: Directive,
        args: [{ selector: '[tabHeading]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: TabDirective }]; }, null); })();
    return TabHeadingDirective;
}());

//# sourceMappingURL=tab-heading.directive.js.map