import { NgModule } from '@angular/core';
import { AccordionModule } from './accordion/accordion.module';
import { AlertModule } from './alert/alert.module';
import { ButtonsModule } from './buttons/buttons.module';
import { CarouselModule } from './carousel/carousel.module';
import { CollapseModule } from './collapse/collapse.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { BsDropdownModule } from './dropdown/bs-dropdown.module';
import { ModalModule } from './modal/modal.module';
import { PaginationModule } from './pagination/pagination.module';
import { ProgressbarModule } from './progressbar/progressbar.module';
import { RatingModule } from './rating/rating.module';
import { SortableModule } from './sortable';
import { TabsModule } from './tabs/tabs.module';
import { TimepickerModule } from './timepicker/timepicker.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { TypeaheadModule } from './typeahead/typeahead.module';
import { PopoverModule } from './popover/popover.module';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './accordion/accordion.module';
import * as ɵngcc2 from './alert/alert.module';
import * as ɵngcc3 from './buttons/buttons.module';
import * as ɵngcc4 from './carousel/carousel.module';
import * as ɵngcc5 from './collapse/collapse.module';
import * as ɵngcc6 from './datepicker/datepicker.module';
import * as ɵngcc7 from './dropdown/bs-dropdown.module';
import * as ɵngcc8 from './modal/modal.module';
import * as ɵngcc9 from './pagination/pagination.module';
import * as ɵngcc10 from './progressbar/progressbar.module';
import * as ɵngcc11 from './popover/popover.module';
import * as ɵngcc12 from './rating/rating.module';
import * as ɵngcc13 from './tabs/tabs.module';
import * as ɵngcc14 from './timepicker/timepicker.module';
import * as ɵngcc15 from './tooltip/tooltip.module';
import * as ɵngcc16 from './typeahead/typeahead.module';
import * as ɵngcc17 from './sortable/sortable.module';
export { AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent } from './accordion';
export { AlertComponent, AlertConfig, AlertModule } from './alert';
export { ButtonCheckboxDirective, ButtonRadioDirective, ButtonsModule } from './buttons';
export { CarouselComponent, CarouselConfig, CarouselModule, SlideComponent } from './carousel';
export { CollapseDirective, CollapseModule } from './collapse';
export { DateFormatter, DatePickerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent } from './datepicker';
export { ModalDirective, ModalBackdropOptions, ModalBackdropComponent, ModalModule } from './modal';
export { BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective } from './dropdown';
export { PagerComponent, PaginationComponent, PaginationConfig, PaginationModule } from './pagination';
export { BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule, ProgressDirective } from './progressbar';
export { RatingComponent, RatingModule } from './rating';
export { DraggableItemService, SortableComponent, SortableModule } from './sortable';
export { NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule } from './tabs';
export { TimepickerComponent, TimepickerConfig, TimepickerModule } from './timepicker';
export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule } from './tooltip';
export { TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, TypeaheadUtils } from './typeahead';
export { PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule } from './popover';
export { OnChange, LinkedList, isBs3, Trigger, Utils } from './utils';
export { ComponentLoader, ComponentLoaderFactory, ContentRef } from './component-loader';
export { Positioning, PositioningService, positionElements } from './positioning';
var MODULES = [
    AccordionModule, AlertModule, ButtonsModule,
    CarouselModule, CollapseModule, DatepickerModule,
    BsDropdownModule, ModalModule, PaginationModule,
    ProgressbarModule, PopoverModule, RatingModule,
    TabsModule, TimepickerModule, TooltipModule,
    TypeaheadModule
];
export var BsRootModule = (function () {
    function BsRootModule() {
    }
    /** @nocollapse */
    BsRootModule.ctorParameters = function () { return []; };
BsRootModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BsRootModule });
BsRootModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BsRootModule_Factory(t) { return new (t || BsRootModule)(); }, imports: [[
            AccordionModule.forRoot(), AlertModule.forRoot(), ButtonsModule.forRoot(),
            CarouselModule.forRoot(), CollapseModule.forRoot(),
            DatepickerModule.forRoot(),
            BsDropdownModule.forRoot(), ModalModule.forRoot(), PaginationModule.forRoot(),
            ProgressbarModule.forRoot(), PopoverModule.forRoot(),
            RatingModule.forRoot(),
            TabsModule.forRoot(), TimepickerModule.forRoot(), TooltipModule.forRoot(),
            TypeaheadModule.forRoot(), SortableModule.forRoot()
        ], AccordionModule, AlertModule, ButtonsModule,
        CarouselModule, CollapseModule, DatepickerModule,
        BsDropdownModule, ModalModule, PaginationModule,
        ProgressbarModule, PopoverModule, RatingModule,
        TabsModule, TimepickerModule, TooltipModule,
        TypeaheadModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BsRootModule, { imports: [ɵngcc1.AccordionModule, ɵngcc2.AlertModule, ɵngcc3.ButtonsModule, ɵngcc4.CarouselModule, ɵngcc5.CollapseModule, ɵngcc6.DatepickerModule, ɵngcc7.BsDropdownModule, ɵngcc8.ModalModule, ɵngcc9.PaginationModule, ɵngcc10.ProgressbarModule, ɵngcc11.PopoverModule, ɵngcc12.RatingModule, ɵngcc13.TabsModule, ɵngcc14.TimepickerModule, ɵngcc15.TooltipModule, ɵngcc16.TypeaheadModule, ɵngcc17.SortableModule], exports: [AccordionModule, AlertModule, ButtonsModule,
        CarouselModule, CollapseModule, DatepickerModule,
        BsDropdownModule, ModalModule, PaginationModule,
        ProgressbarModule, PopoverModule, RatingModule,
        TabsModule, TimepickerModule, TooltipModule,
        TypeaheadModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BsRootModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AccordionModule.forRoot(), AlertModule.forRoot(), ButtonsModule.forRoot(),
                    CarouselModule.forRoot(), CollapseModule.forRoot(),
                    DatepickerModule.forRoot(),
                    BsDropdownModule.forRoot(), ModalModule.forRoot(), PaginationModule.forRoot(),
                    ProgressbarModule.forRoot(), PopoverModule.forRoot(),
                    RatingModule.forRoot(),
                    TabsModule.forRoot(), TimepickerModule.forRoot(), TooltipModule.forRoot(),
                    TypeaheadModule.forRoot(), SortableModule.forRoot()
                ],
                exports: MODULES
            }]
    }], function () { return []; }, null); })();
    return BsRootModule;
}());
export var Ng2BootstrapModule = (function () {
    function Ng2BootstrapModule() {
    }
    Ng2BootstrapModule.forRoot = function () {
        return { ngModule: BsRootModule };
    };
    /** @nocollapse */
    Ng2BootstrapModule.ctorParameters = function () { return []; };
Ng2BootstrapModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: Ng2BootstrapModule });
Ng2BootstrapModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function Ng2BootstrapModule_Factory(t) { return new (t || Ng2BootstrapModule)(); }, imports: [AccordionModule, AlertModule, ButtonsModule,
        CarouselModule, CollapseModule, DatepickerModule,
        BsDropdownModule, ModalModule, PaginationModule,
        ProgressbarModule, PopoverModule, RatingModule,
        TabsModule, TimepickerModule, TooltipModule,
        TypeaheadModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(Ng2BootstrapModule, { exports: [AccordionModule, AlertModule, ButtonsModule,
        CarouselModule, CollapseModule, DatepickerModule,
        BsDropdownModule, ModalModule, PaginationModule,
        ProgressbarModule, PopoverModule, RatingModule,
        TabsModule, TimepickerModule, TooltipModule,
        TypeaheadModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Ng2BootstrapModule, [{
        type: NgModule,
        args: [{ exports: MODULES }]
    }], function () { return []; }, null); })();
    return Ng2BootstrapModule;
}());

export {DatePickerInnerComponent} from './datepicker/datepicker-inner.component';
//# sourceMappingURL=index.js.map