(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([1],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyComponent = (function () {
    function MyComponent() {
    }
    return MyComponent;
}());
MyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'my-component',
        template: "<h1>My Component 6767</h1>"
    })
], MyComponent);

//# sourceMappingURL=mycomponent.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__example_directive_mouse_events_mousewheel_directive__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__example_directive_mouse_events_mousewheel_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__example_dynamic_component_hello_world_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__example_dynamic_component_world_hello_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__example_dynamic_component_dynamic_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__example_dynamic_component_dynamic_component_main__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dynamic_component2_dynamic_component2_main__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dynamic_component2_dynamic_component2_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__example_growl_notification_bootstrap_growl_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_npm_link_test__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dynamic_dialog_component_dialog_anchor_directive__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dynamic_dialog_component_dialog_component__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Example Imports
//===================================================
 // Directive Example using HostListener

// Example : Dynamic Component
//===================================================




// Example : Dynamic Component 2
//===================================================
//import { DynamicComponent2 } from './dynamic-component2/dynamic-component2.component';


// Example : Bootstrap Growl Notifications
//===================================================


// Example : Dynamic Dialog Component
//===================================================


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* NgModule */])({
        imports: [
            // Imports Metadata tells the angular list of other modules used by this module.
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__example_growl_notification_bootstrap_growl_module__["a" /* BootstrapGrowlModule */],
            __WEBPACK_IMPORTED_MODULE_12_npm_link_test__["a" /* MyMainModule */]
        ],
        declarations: [
            // Declaration Metadata lists the components, directives , services etc that are part of this module.
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__example_directive_mouse_events_mousewheel_directive__["a" /* MouseWheelDirective */], __WEBPACK_IMPORTED_MODULE_4__example_directive_mouse_events_mousewheel_component__["a" /* MouseWheelDirectiveExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_5__example_dynamic_component_hello_world_component__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__example_dynamic_component_world_hello_component__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__example_dynamic_component_dynamic_component__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__example_dynamic_component_dynamic_component_main__["a" /* default */],
            __WEBPACK_IMPORTED_MODULE_9__dynamic_component2_dynamic_component2_main__["a" /* DynamicComponent2 */], __WEBPACK_IMPORTED_MODULE_9__dynamic_component2_dynamic_component2_main__["b" /* MainDynamicComponent2 */],
            __WEBPACK_IMPORTED_MODULE_14__dynamic_dialog_component_dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_13__dynamic_dialog_component_dialog_anchor_directive__["a" /* DialogAnchorDirective */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__dynamic_component2_dynamic_component2_service__["a" /* DynamicComp2Service */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__dynamic_component2_dynamic_component2_main__["a" /* DynamicComponent2 */]],
        bootstrap: [
            // Bootstrap Metadata identifies the root component of the module.
            // When Angular loads the appModule it looks for bootstrap Metadata and loads all the components listed here.
            // We want our module to AppComponent , hence we have listed it here
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);



/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example_growl_notification_index__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_dialog_component_dialog_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dynamic_dialog_component_dialog_anchor_directive__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(bootstrapGrowlService) {
        this.bootstrapGrowlService = bootstrapGrowlService;
        //service.setRootViewContainerRef(viewContainerRef)
        //service.addDynamicComponent()
    }
    AppComponent.prototype.openDialogBox = function () {
        this.dialogAnchor.createDialog(__WEBPACK_IMPORTED_MODULE_2__dynamic_dialog_component_dialog_component__["a" /* DialogComponent */]);
    };
    AppComponent.prototype.addGrowlAlert = function () {
        this.bootstrapGrowlService.addAlert("any custom message", __WEBPACK_IMPORTED_MODULE_1__example_growl_notification_index__["a" /* BootstrapAlertTypes */].SUCCESS);
        this.bootstrapGrowlService.addAlert("any custom message <b>with</b> HTML", __WEBPACK_IMPORTED_MODULE_1__example_growl_notification_index__["a" /* BootstrapAlertTypes */].INFO);
        this.bootstrapGrowlService.addAlert("any custom message", __WEBPACK_IMPORTED_MODULE_1__example_growl_notification_index__["a" /* BootstrapAlertTypes */].WARNING);
        this.bootstrapGrowlService.addAlert("any custom message", __WEBPACK_IMPORTED_MODULE_1__example_growl_notification_index__["a" /* BootstrapAlertTypes */].DANGER, false);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__dynamic_dialog_component_dialog_anchor_directive__["a" /* DialogAnchorDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__dynamic_dialog_component_dialog_anchor_directive__["a" /* DialogAnchorDirective */])
], AppComponent.prototype, "dialogAnchor", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'my-app',
        template: "\n        <div>Hello Angular 4</div>\n\n        <mousewheel-directive-example-component></mousewheel-directive-example-component>\n\n        <dynamic-component-main></dynamic-component-main>\n\n\t\t<dynamic-component-main2></dynamic-component-main2>\n\n\t\t<bootstrap-growl [alertCount]=\"3\" [autoClose]=\"10000\"></bootstrap-growl>\n\n        <button (click)=\"addGrowlAlert()\">Test</button>\n\n\t\t<div dialogAnchor></div>\n        <div class=\"open-button\" (click)='openDialogBox()'>Open dialog box</div>\n\t\t<my-component></my-component>\n    ",
        styleUrls: [],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dynamic_dialog_component_dialog_component__["a" /* DialogComponent */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__example_growl_notification_index__["b" /* BootstrapGrowlService */]])
], AppComponent);



/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainDynamicComponent2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_component2_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_component2_component__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__dynamic_component2_component__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainDynamicComponent2 = (function () {
    function MainDynamicComponent2(service, viewContainerRef) {
        service.setRootViewContainerRef(viewContainerRef);
        service.addDynamicComponent();
    }
    return MainDynamicComponent2;
}());
MainDynamicComponent2 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'dynamic-component-main2',
        template: "\n    <div>\n      <h2>Dynamic components Example 2! 123</h2>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dynamic_component2_service__["a" /* DynamicComp2Service */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewContainerRef */]])
], MainDynamicComponent2);




/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseWheelDirectiveExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseWheelDirectiveExampleComponent = (function () {
    function MouseWheelDirectiveExampleComponent() {
    }
    MouseWheelDirectiveExampleComponent.prototype.mouseWheelUpFunc = function () {
        this.mouseWheelDirection = "Scrolling Upward Direction";
    };
    MouseWheelDirectiveExampleComponent.prototype.mouseWheelDownFunc = function () {
        this.mouseWheelDirection = "Scrolling Downward Direction";
    };
    return MouseWheelDirectiveExampleComponent;
}());
MouseWheelDirectiveExampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'mousewheel-directive-example-component',
        template: "\n        <h2>Mouse wheel scroll on below div</h2>\n        <h4 style=\"color:green\">{{mouseWheelDirection}}</h4>\n        <div mouseWheel (mouseWheelUp)=\"mouseWheelUpFunc(event)\" (mouseWheelDown)=\"mouseWheelDownFunc(event)\" style=\"height: 150px;width:150px;border:1px solid red;\">Scroll in this area</div>\n    "
    }),
    __metadata("design:paramtypes", [])
], MouseWheelDirectiveExampleComponent);



/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseWheelDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
// Tutorial Soruce : http://blog.sodhanalibrary.com/2016/10/angular-2-directive-for-mouse-wheel.html#.WS12HeuGOUk
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseWheelDirective = (function () {
    function MouseWheelDirective() {
        this.mouseWheelUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* EventEmitter */]();
        this.mouseWheelDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* EventEmitter */]();
    }
    // Listening to the host - that is, the DOM element the directive is attached to - is among the primary ways directives
    // extend the component or element's behavior. Previously, we saw its common use case.    
    MouseWheelDirective.prototype.onMouseWheelChrome = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelFirefox = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelIE = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.mouseWheelFunc = function (event) {
        console.log("Mousewheel Directive called...");
        var event = window.event || event; // old IE browser support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE browser
        event.returnValue = false;
        // for Chrome and firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    };
    return MouseWheelDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* Output */])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* Output */])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelDown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* HostListener */])('mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelChrome", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* HostListener */])('DOMMouseScroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelFirefox", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* HostListener */])('onmousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelIE", null);
MouseWheelDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Directive */])({
        selector: '[mouseWheel]'
    })
], MouseWheelDirective);



/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hello_world_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__world_hello_component__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainDynamicComponent = (function () {
    function MainDynamicComponent() {
        this.componentData = null;
    }
    MainDynamicComponent.prototype.createHelloWorldComponent = function () {
        this.componentData = {
            component: __WEBPACK_IMPORTED_MODULE_1__hello_world_component__["a" /* default */],
            inputs: {
                showNum: 9
            }
        };
    };
    MainDynamicComponent.prototype.createWorldHelloComponent = function () {
        this.componentData = {
            component: __WEBPACK_IMPORTED_MODULE_2__world_hello_component__["a" /* default */],
            inputs: {
                showNum: 2
            }
        };
    };
    return MainDynamicComponent;
}());
MainDynamicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'dynamic-component-main',
        template: "\n    <div>\n      <h2>Lets dynamically create some components!</h2>\n      <button (click)=\"createHelloWorldComponent()\">Create Hello World</button>\n      <button (click)=\"createWorldHelloComponent()\">Create World Hello</button>\n      <dynamic-component [componentData]=\"componentData\"></dynamic-component>\n    </div>\n  ",
    })
], MainDynamicComponent);
/* harmony default export */ __webpack_exports__["a"] = (MainDynamicComponent);


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hello_world_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__world_hello_component__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicComponent = (function () {
    function DynamicComponent(resolver) {
        this.resolver = resolver;
        this.currentComponent = null;
    }
    Object.defineProperty(DynamicComponent.prototype, "componentData", {
        // component: Class for the component you want to create
        // inputs: An object with key/value pairs mapped to input name/input value
        set: function (data) {
            if (!data) {
                return;
            }
            // Inputs need to be in the following format to be resolved properly
            var inputProviders = Object.keys(data.inputs).map(function (inputName) { return { provide: inputName, useValue: data.inputs[inputName] }; });
            var resolvedInputs = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ReflectiveInjector */].resolve(inputProviders);
            // We create an injector out of the data we want to pass down and this components injector
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ReflectiveInjector */].fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            // We create a factory out of the component we want to create
            var factory = this.resolver.resolveComponentFactory(data.component);
            // We create the component using the factory and the injector
            var component = factory.create(injector);
            // We insert the component into the dom container
            this.dynamicComponentContainer.insert(component.hostView);
            // We can destroy the old component is we like by calling destroy
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    return DynamicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ViewChild */])('dynamicComponentContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewContainerRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewContainerRef */])
], DynamicComponent.prototype, "dynamicComponentContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DynamicComponent.prototype, "componentData", null);
DynamicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'dynamic-component',
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__hello_world_component__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__world_hello_component__["a" /* default */]],
        template: "\n    <div #dynamicComponentContainer></div>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ComponentFactoryResolver */]])
], DynamicComponent);
/* harmony default export */ __webpack_exports__["a"] = (DynamicComponent);


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BootstrapAlert */
var BootstrapAlert = (function () {
    function BootstrapAlert() {
    }
    return BootstrapAlert;
}());



/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_growl_alert_types_enum__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bootstrap_growl_alert_types_enum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_component__ = __webpack_require__(95);
/* unused harmony reexport BootstrapGrowlComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootstrap_growl_model__ = __webpack_require__(164);
/* unused harmony reexport BootstrapAlert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootstrap_growl_module__ = __webpack_require__(96);
/* unused harmony reexport BootstrapGrowlModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootstrap_growl_service__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__bootstrap_growl_service__["a"]; });







/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(151);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_mycomponent_component__ = __webpack_require__(147);
/* unused harmony reexport MyComponent */
/**
 * @license
 * Copyright Noémi Salaün All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/noemi-salaun/ng-logger/blob/master/LICENSE
 */
/**
 * Created by Noémi Salaün on 17/09/2016.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mycomponent_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(28);
/**
 * @license
 * Copyright Noémi Salaün All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/noemi-salaun/ng-logger/blob/master/LICENSE
 */
/**
 * Created by Noémi Salaün on 10/11/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyMainModule = (function () {
    function MyMainModule() {
    }
    return MyMainModule;
}());
MyMainModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__mycomponent_component__["a" /* MyComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__mycomponent_component__["a" /* MyComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], MyMainModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
// Tutorial SRC : http://blog.rangle.io/dynamically-creating-components-with-angular-2/
// http://plnkr.co/edit/ZXsIWykqKZi5r75VMtw2?p=preview
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloWorldComponent = (function () {
    function HelloWorldComponent(injector) {
        this.injector = injector;
        this.showNum = 0;
        this.showNum = this.injector.get('showNum');
    }
    return HelloWorldComponent;
}());
HelloWorldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'hello-world',
        template: "\n    <div>Hello World {{showNum}}</div>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], HelloWorldComponent);
/* harmony default export */ __webpack_exports__["a"] = (HelloWorldComponent);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
// Tutorial SRC : http://blog.rangle.io/dynamically-creating-components-with-angular-2/
// http://plnkr.co/edit/ZXsIWykqKZi5r75VMtw2?p=preview
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorldHelloComponent = (function () {
    function WorldHelloComponent(injector) {
        this.injector = injector;
        this.showNum = 0;
        this.showNum = this.injector.get('showNum');
    }
    return WorldHelloComponent;
}());
WorldHelloComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'world-hello',
        template: "\n    <div>World Hello {{showNum}}</div>\n  ",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
], WorldHelloComponent);
/* harmony default export */ __webpack_exports__["a"] = (WorldHelloComponent);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapGrowlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_alert_types_enum__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BootstrapGrowlService = (function () {
    function BootstrapGrowlService() {
        this.alerts = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.alertHolder = new Array();
        this.alertCount = 999;
        this.autoClose = -1;
    }
    BootstrapGrowlService.prototype.configure = function (alertCount, autoClose) {
        if (typeof alertCount !== "undefined" && alertCount !== null) {
            if (!isNaN(alertCount) && alertCount > 0) {
                this.alertCount = alertCount;
            }
            else {
                console.error("parameter alertCount must be a valid number > 0, to leave default, do not provide this parameter");
            }
        }
        if (typeof autoClose !== "undefined" && autoClose !== null) {
            if (!isNaN(autoClose) && autoClose > 0) {
                this.autoClose = autoClose;
            }
            else {
                console.error("parameter autoClose must be a valid number > 0, to leave default, do not provide this parameter");
            }
        }
    };
    BootstrapGrowlService.prototype.addAlert = function (message, type, dismissable) {
        if (this.alertHolder.length >= this.alertCount) {
            this._removeAlertById(0, this.alertHolder, this.alerts);
        }
        if (typeof dismissable === "undefined" || dismissable === null) {
            dismissable = true;
        }
        var cssType = this._convertTypeToCssClass(type);
        var alert = { message: message, type: cssType, dismissable: dismissable };
        this.alertHolder.push(alert);
        this.alerts.next(this.alertHolder);
        if (this.autoClose > -1) {
            this._scheduleAlertHide(this.autoClose, alert);
        }
    };
    BootstrapGrowlService.prototype.removeAlert = function (alert) {
        this._removeAlert(alert, this.alertHolder, this.alerts);
    };
    BootstrapGrowlService.prototype._removeAlert = function (alert, alertHolder, alerts) {
        var index = alertHolder.indexOf(alert);
        this._removeAlertById(index, alertHolder, alerts);
    };
    BootstrapGrowlService.prototype._scheduleAlertHide = function (timeout, alert) {
        var _this = this;
        var displayTimeout = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].timer(timeout);
        displayTimeout.subscribe(function () {
            _this._removeAlert(alert, _this.alertHolder, _this.alerts);
        });
    };
    BootstrapGrowlService.prototype._convertTypeToCssClass = function (type) {
        if (type === __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_alert_types_enum__["a" /* BootstrapAlertTypes */].SUCCESS) {
            return "success";
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_alert_types_enum__["a" /* BootstrapAlertTypes */].INFO) {
            return "info";
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_alert_types_enum__["a" /* BootstrapAlertTypes */].WARNING) {
            return "warning";
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_alert_types_enum__["a" /* BootstrapAlertTypes */].DANGER) {
            return "danger";
        }
    };
    BootstrapGrowlService.prototype._removeAlertById = function (id, alertHolder, alerts) {
        alertHolder.splice(id, 1);
        alerts.next(alertHolder);
    };
    return BootstrapGrowlService;
}());
BootstrapGrowlService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BootstrapGrowlService);



/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComponent2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DynamicComponent2 = (function () {
    function DynamicComponent2() {
    }
    return DynamicComponent2;
}());
DynamicComponent2 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'dynamic-component2',
        template: "\n    <h2>I'm dynamically attached</h2>\n  "
    })
], DynamicComponent2);



/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComp2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_component2_component__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicComp2Service = (function () {
    function DynamicComp2Service(_componentFactoryResolver) {
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    DynamicComp2Service.prototype.setRootViewContainerRef = function (viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    };
    DynamicComp2Service.prototype.addDynamicComponent = function () {
        var factory = this._componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__dynamic_component2_component__["a" /* DynamicComponent2 */]);
        var component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    };
    return DynamicComp2Service;
}());
DynamicComp2Service = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ComponentFactoryResolver */]])
], DynamicComp2Service);



/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogAnchorDirective = (function () {
    function DialogAnchorDirective(viewContainer, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DialogAnchorDirective.prototype.createDialog = function (dialogComponent) {
        this.viewContainer.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        var dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
        return dialogComponentRef;
    };
    return DialogAnchorDirective;
}());
DialogAnchorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Directive */])({
        selector: '[dialogAnchor]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewContainerRef */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ComponentFactoryResolver */]])
], DialogAnchorDirective);



/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DialogComponent = (function () {
    function DialogComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* EventEmitter */]();
    }
    DialogComponent.prototype.onClickedExit = function () {
        this.close.emit(event);
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'dlg',
        template: "\n\t\t<div class=\"dialog\">\n\t\t\t<header>\n\t\t\t\t<div class=\"title\">Dialog box</div>\n\t\t\t\t<div class=\"exit-button\" (click)=\"onClickedExit()\">x</div>\n\t\t\t</header>\n\t\t\t<p>Hello, I'm a dialog box!</p>\n\t\t</div>\n\t",
        styles: ["\n        .dialog {\n            width: 250px;\n            position: absolute;\n            border: 1px solid black;\n            border-radius: 5px;\n            overflow: hidden;\n            position: fixed;\n            left: calc(50% - 125px);\n            top: 100px;\n        }\n        .dialog p {\n            text-align: center;\n        }\n        .dialog header {\n            border-bottom: 1px solid black;\n            font-size: 12px;\n            padding: 5px;\n            display: flex;\n        }\n        .dialog header .title {\n            flex-grow: 1;\n            cursor: default;\n        }\n        .dialog header .exit-button {\n            cursor: pointer;\n            padding: 0 5px;\n        }\n    "]
    })
], DialogComponent);



/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapAlertTypes; });
var BootstrapAlertTypes;
(function (BootstrapAlertTypes) {
    BootstrapAlertTypes[BootstrapAlertTypes["SUCCESS"] = 0] = "SUCCESS";
    BootstrapAlertTypes[BootstrapAlertTypes["INFO"] = 1] = "INFO";
    BootstrapAlertTypes[BootstrapAlertTypes["WARNING"] = 2] = "WARNING";
    BootstrapAlertTypes[BootstrapAlertTypes["DANGER"] = 3] = "DANGER";
})(BootstrapAlertTypes || (BootstrapAlertTypes = {}));
/*
export const BootstrapAlertTypes = {
    [Symbol('SUCCESS')] : 0,
    [Symbol('INFO')] : 1,
    WARNING : 2,
    DANGER : 3,
}*/
// ES6 Symbol() Example
//============================
// Example 1
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]); // "value"
// Example 2
var foo = (_b = {},
    _b[Symbol()] = 'foo',
    _b[Symbol('foo')] = 'bar',
    _b[Symbol.for('bar')] = 'baz',
    _b.what = Symbol('what'),
    _b);
console.log(Object.getOwnPropertySymbols(foo));
for (var _i = 0, _c = Object.getOwnPropertySymbols(foo); _i < _c.length; _i++) {
    var symbol = _c[_i];
    console.log(foo[symbol]);
}
// Example 3
var Color = {
    RED: Symbol('RED'),
    GREEN: Symbol('GREEN'),
    BLUE: Symbol('BLUE'),
};
console.log(String(Color.RED));
console.log('Color: ', Color.RED);
// Example 4
var symObj = {};
var SUCCESS = Symbol();
symObj[SUCCESS] = 'SUCCESS';
console.log("Example 4 : ", symObj[SUCCESS]);
// Example 5
var directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};
for (var key in directions) {
    var p = directions[key];
    console.log(p, Symbol.keyFor(p));
}
var _a, _b;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapGrowlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_service__ = __webpack_require__(61);
// ngx-bootstrap-growl
// REF : https://github.com/mbenzenhoefer/ngx-bootstrap-growl
//=====================================================================
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BootstrapGrowlComponent = (function () {
    function BootstrapGrowlComponent(growlService) {
        this.growlService = growlService;
    }
    BootstrapGrowlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.growlService.configure(this.alertCount, this.autoClose);
        this.growlService.alerts.subscribe(function (alerts) {
            _this.alerts = alerts;
        });
        console.log(this.alerts);
    };
    BootstrapGrowlComponent.prototype.closeAlert = function (alert) {
        if (alert.dismissable) {
            this.growlService.removeAlert(alert);
        }
    };
    return BootstrapGrowlComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Input */])(),
    __metadata("design:type", Number)
], BootstrapGrowlComponent.prototype, "alertCount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Input */])(),
    __metadata("design:type", Number)
], BootstrapGrowlComponent.prototype, "autoClose", void 0);
BootstrapGrowlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'bootstrap-growl',
        template: "\n    <div *ngFor=\"let alert of alerts\">\n        <div class=\"alert alert-{{alert.type}}\" [ngClass]=\"{'alert-dismissible': alert.dismissable}\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAlert(alert)\" *ngIf=\"alert.dismissable\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <span [innerHtml]=\"alert.message\"></span>\n        </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_service__["a" /* BootstrapGrowlService */]])
], BootstrapGrowlComponent);



/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapGrowlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootstrap_growl_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BootstrapGrowlModule = (function () {
    function BootstrapGrowlModule() {
    }
    return BootstrapGrowlModule;
}());
BootstrapGrowlModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_component__["a" /* BootstrapGrowlComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__bootstrap_growl_service__["a" /* BootstrapGrowlService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_component__["a" /* BootstrapGrowlComponent */]
        ]
    })
], BootstrapGrowlModule);



/***/ })

},[166]);
});
//# sourceMappingURL=app.js.map