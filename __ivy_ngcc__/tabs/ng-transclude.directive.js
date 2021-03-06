import { Directive, Input, ViewContainerRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    NgTranscludeDirective.propDecorators = {
        'ngTransclude': [{ type: Input },],
    };
NgTranscludeDirective.ɵfac = function NgTranscludeDirective_Factory(t) { return new (t || NgTranscludeDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
NgTranscludeDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NgTranscludeDirective, selectors: [["", "ngTransclude", ""]], inputs: { ngTransclude: "ngTransclude" } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgTranscludeDirective, [{
        type: Directive,
        args: [{
                selector: '[ngTransclude]'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { ngTransclude: [{
            type: Input
        }] }); })();
    return NgTranscludeDirective;
}());

//# sourceMappingURL=ng-transclude.directive.js.map