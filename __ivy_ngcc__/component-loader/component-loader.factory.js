import { Injectable, NgZone, ComponentFactoryResolver, Injector } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from '../positioning';
import * as ɵngcc0 from '@angular/core';
export var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(componentFactoryResolver, ngZone, injector, posService) {
        this._ngZone = ngZone;
        this._injector = injector;
        this._posService = posService;
        this._componentFactoryResolver = componentFactoryResolver;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._posService);
    };
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: NgZone, },
        { type: Injector, },
        { type: PositioningService, },
    ]; };
ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) { return new (t || ComponentLoaderFactory)(ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(PositioningService)); };
ComponentLoaderFactory.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ComponentLoaderFactory, factory: function (t) { return ComponentLoaderFactory.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComponentLoaderFactory, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.Injector }, { type: PositioningService }]; }, null); })();
    return ComponentLoaderFactory;
}());

//# sourceMappingURL=component-loader.factory.js.map