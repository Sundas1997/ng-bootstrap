import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTranscludeDirective } from './ng-transclude.directive';
import { TabHeadingDirective } from './tab-heading.directive';
import { TabDirective } from './tab.directive';
import { TabsetComponent } from './tabset.component';
import { TabsetConfig } from './tabset.config';
import * as ɵngcc0 from '@angular/core';
export var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
    /** @nocollapse */
    TabsModule.ctorParameters = function () { return []; };
TabsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TabsModule });
TabsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TabsModule, { declarations: function () { return [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TabsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
                exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]
            }]
    }], function () { return []; }, null); })();
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map