import { Directive, ElementRef, Input, Output, Renderer, ViewContainerRef } from '@angular/core';
import 'rxjs/add/operator/filter';
import { ComponentLoaderFactory } from '../component-loader';
import { BsDropdownConfig } from './bs-dropdown.config';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownState } from './bs-dropdown.state';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import * as ɵngcc0 from '@angular/core';
export var BsDropdownDirective = (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .filter(function (value) { return value === true; })
            .subscribe(function (value) { return _this.hide(); }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            this._isInlineOpen = true;
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this._isInlineOpen = false;
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
        { type: BsDropdownConfig, },
        { type: BsDropdownState, },
    ]; };
    BsDropdownDirective.propDecorators = {
        'placement': [{ type: Input },],
        'triggers': [{ type: Input },],
        'container': [{ type: Input },],
        'dropup': [{ type: Input },],
        'autoClose': [{ type: Input },],
        'isDisabled': [{ type: Input },],
        'isOpen': [{ type: Input },],
        'onShown': [{ type: Output },],
        'onHidden': [{ type: Output },],
    };
BsDropdownDirective.ɵfac = function BsDropdownDirective_Factory(t) { return new (t || BsDropdownDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(Renderer), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ComponentLoaderFactory), ɵngcc0.ɵɵdirectiveInject(BsDropdownConfig), ɵngcc0.ɵɵdirectiveInject(BsDropdownState)); };
BsDropdownDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BsDropdownDirective, selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]], hostVars: 6, hostBindings: function BsDropdownDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("dropup", ctx.dropup)("open", ctx.isOpen)("show", ctx.isOpen && ctx.isBs4);
    } }, inputs: { autoClose: "autoClose", isDisabled: "isDisabled", isOpen: "isOpen", placement: "placement", triggers: "triggers", container: "container", dropup: "dropup" }, outputs: { onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-dropdown"], features: [ɵngcc0.ɵɵProvidersFeature([BsDropdownState])] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BsDropdownDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState],
                host: {
                    '[class.dropup]': 'dropup',
                    '[class.open]': 'isOpen',
                    '[class.show]': 'isOpen && isBs4'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: Renderer }, { type: ɵngcc0.ViewContainerRef }, { type: ComponentLoaderFactory }, { type: BsDropdownConfig }, { type: BsDropdownState }]; }, { onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], autoClose: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], container: [{
            type: Input
        }], dropup: [{
            type: Input
        }] }); })();
    return BsDropdownDirective;
}());

//# sourceMappingURL=bs-dropdown.directive.js.map