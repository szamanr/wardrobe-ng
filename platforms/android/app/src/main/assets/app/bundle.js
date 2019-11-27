require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\r\nIn NativeScript, the app.css file is where you place CSS rules that\r\nyou would like to apply to your entire application. Check out\r\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\r\nselectors and properties you can use to style UI components.\r\n\r\n/*\r\nIn many cases you may want to use the NativeScript core theme instead\r\nof writing your own CSS rules. For a full list of class names in the theme\r\nrefer to http://docs.nativescript.org/ui/theme.\r\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_app_cloth_pick_cloth_pick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/cloth-pick/cloth-pick.component.ts");




const routes = [
    {
        path: '',
        redirectTo: '/cloth-pick',
        pathMatch: 'full',
    },
    {
        path: 'cloth-pick',
        component: _src_app_cloth_pick_cloth_pick_component__WEBPACK_IMPORTED_MODULE_3__["ClothPickComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"].forRoot(routes)],
        exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\r\n<page-router-outlet></page-router-outlet>\r\n"

/***/ }),

/***/ "./app/app.component.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./app/app.component.html"),
    })
], AppComponent);



/***/ }),

/***/ "./app/app.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_app_app_routing_module_tns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.tns.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.tns.ts");
/* harmony import */ var _src_app_cloth_pick_cloth_pick_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/cloth-pick/cloth-pick.component.ts");







var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
let AppModule = 
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _src_app_cloth_pick_cloth_pick_component__WEBPACK_IMPORTED_MODULE_5__["ClothPickComponent"],
        ],
        imports: [
            nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_2__["NativeScriptModule"],
            _src_app_app_routing_module_tns__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }],
        bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AppModule);



/***/ }),

/***/ "./app/cloth-pick/cloth-pick.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\r\n  <Label text=\"cloth-pick works\" textWrap=\"true\"></Label>\r\n  <Label text=\"This is a migrated component\" textWrap=\"true\"></Label>\r\n  <Label text=\"Update it to provide the UI elements required in your mobile app\" textWrap=\"true\"></Label>\r\n</StackLayout>\r\n\r\n<!--\r\nOriginal Web template:\r\n\r\n<section id=\"thermometer\" class=\"container\">\r\n  <div class=\"progress row\">\r\n    <div class=\"progress-bar {{thermometer.class}}\" role=\"progressbar\" [attr.aria-valuenow]=\"thermometer.value\" aria-valuemin=\"-20\" aria-valuemax =\"20\"\r\n         style=\"min-width: 2em;\" [style.width]=\"((20+thermometer.value)/40)*100 + '%'\">\r\n      {{thermometer.label}}\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"clothes\" class=\"container\">\r\n  <ul id=\"clothes-list\" class=\"row\">\r\n    <li *ngFor=\"let cloth of clothes; let i = index;\" class=\"cloth col-4\"\r\n        [ngClass]=\"{'selected' : this.clothSet[cloth.id]}\"\r\n    (click)=\"toggle(cloth)\">\r\n      <img src=\"{{cloth.image}}\" class=\"mx-auto d-block\"/>\r\n    </li>\r\n  </ul>\r\n</section>\r\n\r\n<section id=\"source\">\r\n\r\n</section>\r\n\r\n-->"

/***/ }),

/***/ "./app/cloth-pick/cloth-pick.component.scss":
/***/ (function(module, exports) {

module.exports = "/*\r\nAdd your NativeScript specific styles here.\r\nTo learn more about styling in NativeScript see:\r\nhttps://docs.nativescript.org/angular/ui/styling\r\n*/\n"

/***/ }),

/***/ "./app/cloth-pick/cloth-pick.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothPickComponent", function() { return ClothPickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_assets_mocks_clothes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./assets/mocks/clothes.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./environments/environment.ts");




let ClothPickComponent = class ClothPickComponent {
    constructor() {
        /**
         * clothes currently selected for wearing
         */
        this.clothSet = [];
    }
    ngOnInit() {
        this.clothes = this.getClothes();
        this.climate = this.getCurrentClimate();
        this.updateThermometer();
    }
    getClothes() {
        return _src_assets_mocks_clothes__WEBPACK_IMPORTED_MODULE_2__["CLOTHES"];
    }
    /**
     * adds / removes cloth from current set
     * @param cloth the selected cloth item
     */
    toggle(cloth) {
        this.clothSet[cloth.id] = (typeof this.clothSet[cloth.id] !== 'undefined') ? !this.clothSet[cloth.id] : true;
        console.log(this.clothSet[cloth.id]);
        if (!_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            console.log(`current cloth set: ${this.clothSet.toString()}`);
        }
        this.updateThermometer();
    }
    updateThermometer() {
        const selectedClothes = this.clothes.filter((cloth) => {
            return this.clothSet[cloth.id];
        });
        // compute the sum of temperatures of all clothes in the current set
        const currentSetTemperature = selectedClothes.map((item) => {
            return item.temperature;
        }).reduce((a, b) => a + b, 0);
        // compare that with the current temperature to get the thermometer value
        const feltTemperature = this.computeFeltTemperature();
        const value = currentSetTemperature - feltTemperature;
        // set the label, like "a little too cold"
        const [label, className] = this.getLabel(value);
        this.thermometer = {
            value,
            label,
            class: className
        };
    }
    /**
     * computes temperature felt based on temperature, wind and precipitation
     */
    computeFeltTemperature() {
        return this.climate.temperature - Math.round(this.climate.wind / 10) - 5 * this.climate.rain - 5 * this.climate.snow;
    }
    /**
     * gets current climate condition from weather service
     */
    getCurrentClimate() {
        return {
            temperature: 10,
            wind: 0,
            rain: false,
            snow: false
        };
    }
    /**
     * TODO: move to thermometer service
     * returns a user-readable label
     * @param value temperature
     */
    getLabel(value) {
        if (value === 0) {
            return ['perfect!', 'bg-success'];
        }
        if (value <= -20) {
            return ['much too cold!', 'bg-danger'];
        }
        if (value <= -5) {
            return ['too cold', 'bg-danger'];
        }
        if (value <= -2) {
            return ['a little too cold', 'bg-warning'];
        }
        if (value <= 2) {
            return ['ok', 'bg-success'];
        }
        if (value < 5) {
            return ['a little too warm', 'bg-warning'];
        }
        if (value < 20) {
            return ['too warm', 'bg-danger'];
        }
        if (value > 20) {
            return ['much too warm!', 'bg-danger'];
        }
    }
};
ClothPickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cloth-pick',
        template: __webpack_require__("./app/cloth-pick/cloth-pick.component.html"),
        styles: [__webpack_require__("./app/cloth-pick/cloth-pick.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ClothPickComponent);



/***/ }),

/***/ "./app/cloth.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cloth", function() { return Cloth; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

class Cloth {
    constructor(temperature, type, image) {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        this.temperature = temperature ? temperature : 5;
        this.type = type ? type : 'body';
        this.image = image ? image : 'http://lorempixel.com/200/200/';
    }
}
Cloth.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./assets/mocks/clothes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOTHES", function() { return CLOTHES; });
/* harmony import */ var _src_app_cloth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/cloth.ts");

const CLOTHES = [
    new _src_app_cloth__WEBPACK_IMPORTED_MODULE_0__["Cloth"](4, 'body', 'assets/images/cloth01.jpg'),
    new _src_app_cloth__WEBPACK_IMPORTED_MODULE_0__["Cloth"](2, 'body', 'assets/images/cloth02.jpg'),
    new _src_app_cloth__WEBPACK_IMPORTED_MODULE_0__["Cloth"](10, 'body', 'assets/images/cloth03.jpg'),
    new _src_app_cloth__WEBPACK_IMPORTED_MODULE_0__["Cloth"](15, 'head', 'assets/images/cloth04.jpg'),
    new _src_app_cloth__WEBPACK_IMPORTED_MODULE_0__["Cloth"](10, 'feet', 'assets/images/cloth05.jpg'),
    new _src_app_cloth__WEBPACK_IMPORTED_MODULE_0__["Cloth"](6, 'body', 'assets/images/cloth06.jpg')
];


/***/ }),

/***/ "./environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.tns.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.tns.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.tns.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.tns.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_src_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.tns.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAubW9kdWxlLnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2xvdGgtcGljay9jbG90aC1waWNrLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jbG90aC1waWNrL2Nsb3RoLXBpY2suY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nsb3RoLXBpY2svY2xvdGgtcGljay5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nsb3RoLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2Nrcy9jbG90aGVzLnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRucy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUhBQTJFLG1CQUFPLENBQUMsc0lBQW9HO0FBQ3ZMLDBFQUEwRSxtQkFBTyxDQUFDLHNJQUFvRyxHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSxvZ0JBQW9nQixFQUFFLHlFQUF5RTtBQUN0MEIsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQeUM7QUFDOEI7QUFHSztBQUVyRSxNQUFNLE1BQU0sR0FBVztJQUM1QjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLGFBQWE7UUFDekIsU0FBUyxFQUFFLE1BQU07S0FDcEI7SUFDRDtRQUNJLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSwyRkFBa0I7S0FDaEM7Q0FDRixDQUFDO0FBTUYsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FBSTtBQUFwQixnQkFBZ0I7SUFKNUIsOERBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1cs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Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSwrRDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcclxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXHJcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxyXFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxyXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxyXFxuXFxyXFxuLypcXHJcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXHJcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcclxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxyXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge0Nsb3RoUGlja0NvbXBvbmVudH0gZnJvbSAnQHNyYy9hcHAvY2xvdGgtcGljay9jbG90aC1waWNrLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgICBwYXRoOiAnJyxcclxuICAgICAgcmVkaXJlY3RUbzogJy9jbG90aC1waWNrJyxcclxuICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIHBhdGg6ICdjbG90aC1waWNrJyxcclxuICAgICAgY29tcG9uZW50OiBDbG90aFBpY2tDb21wb25lbnQsXHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFnZS1yb3V0ZXItb3V0bGV0IC0tPlxcclxcbjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRucyc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbG90aFBpY2tDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9jbG90aC1waWNrL2Nsb3RoLXBpY2suY29tcG9uZW50JztcclxuXHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIENsb3RoUGlja0NvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbi8qXHJcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcclxuKi9cclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJjbG90aC1waWNrIHdvcmtzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGEgbWlncmF0ZWQgY29tcG9uZW50XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJVcGRhdGUgaXQgdG8gcHJvdmlkZSB0aGUgVUkgZWxlbWVudHMgcmVxdWlyZWQgaW4geW91ciBtb2JpbGUgYXBwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbjwhLS1cXHJcXG5PcmlnaW5hbCBXZWIgdGVtcGxhdGU6XFxyXFxuXFxyXFxuPHNlY3Rpb24gaWQ9XFxcInRoZXJtb21ldGVyXFxcIiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzIHJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzLWJhciB7e3RoZXJtb21ldGVyLmNsYXNzfX1cXFwiIHJvbGU9XFxcInByb2dyZXNzYmFyXFxcIiBbYXR0ci5hcmlhLXZhbHVlbm93XT1cXFwidGhlcm1vbWV0ZXIudmFsdWVcXFwiIGFyaWEtdmFsdWVtaW49XFxcIi0yMFxcXCIgYXJpYS12YWx1ZW1heCA9XFxcIjIwXFxcIlxcclxcbiAgICAgICAgIHN0eWxlPVxcXCJtaW4td2lkdGg6IDJlbTtcXFwiIFtzdHlsZS53aWR0aF09XFxcIigoMjArdGhlcm1vbWV0ZXIudmFsdWUpLzQwKSoxMDAgKyAnJSdcXFwiPlxcclxcbiAgICAgIHt7dGhlcm1vbWV0ZXIubGFiZWx9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2Plxcclxcbjwvc2VjdGlvbj5cXHJcXG5cXHJcXG48c2VjdGlvbiBpZD1cXFwiY2xvdGhlc1xcXCIgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICA8dWwgaWQ9XFxcImNsb3RoZXMtbGlzdFxcXCIgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxsaSAqbmdGb3I9XFxcImxldCBjbG90aCBvZiBjbG90aGVzOyBsZXQgaSA9IGluZGV4O1xcXCIgY2xhc3M9XFxcImNsb3RoIGNvbC00XFxcIlxcclxcbiAgICAgICAgW25nQ2xhc3NdPVxcXCJ7J3NlbGVjdGVkJyA6IHRoaXMuY2xvdGhTZXRbY2xvdGguaWRdfVxcXCJcXHJcXG4gICAgKGNsaWNrKT1cXFwidG9nZ2xlKGNsb3RoKVxcXCI+XFxyXFxuICAgICAgPGltZyBzcmM9XFxcInt7Y2xvdGguaW1hZ2V9fVxcXCIgY2xhc3M9XFxcIm14LWF1dG8gZC1ibG9ja1xcXCIvPlxcclxcbiAgICA8L2xpPlxcclxcbiAgPC91bD5cXHJcXG48L3NlY3Rpb24+XFxyXFxuXFxyXFxuPHNlY3Rpb24gaWQ9XFxcInNvdXJjZVxcXCI+XFxyXFxuXFxyXFxuPC9zZWN0aW9uPlxcclxcblxcclxcbi0tPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qXFxyXFxuQWRkIHlvdXIgTmF0aXZlU2NyaXB0IHNwZWNpZmljIHN0eWxlcyBoZXJlLlxcclxcblRvIGxlYXJuIG1vcmUgYWJvdXQgc3R5bGluZyBpbiBOYXRpdmVTY3JpcHQgc2VlOlxcclxcbmh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvdWkvc3R5bGluZ1xcclxcbiovXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDbG90aH0gZnJvbSAnQHNyYy9hcHAvY2xvdGgnO1xuaW1wb3J0IHtDTE9USEVTfSBmcm9tICdAc3JjL2Fzc2V0cy9tb2Nrcy9jbG90aGVzJztcbmltcG9ydCB7ZW52aXJvbm1lbnR9IGZyb20gJ0BzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNsb3RoLXBpY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvdGgtcGljay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nsb3RoLXBpY2suY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDbG90aFBpY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogbGlzdCBvZiBhdmFpbGFibGUgY2xvdGhlc1xuICAgKi9cbiAgcHJpdmF0ZSBjbG90aGVzOiBDbG90aFtdO1xuXG4gIC8qKlxuICAgKiBjbG90aGVzIGN1cnJlbnRseSBzZWxlY3RlZCBmb3Igd2VhcmluZ1xuICAgKi9cbiAgcHJpdmF0ZSBjbG90aFNldDogYm9vbGVhbltdID0gW107XG5cbiAgLyoqXG4gICAqIHRoZSB2YWx1ZSBpbmRpY2F0aW5nIGhvdyBjb2xkIC8gd2FybSB3ZSdsbCBmZWVsIGlmIHdlYXJpbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjbG90aGVzIGluIHRoZSBjdXJyZW50IHdlYXRoZXJcbiAgICovXG4gIHRoZXJtb21ldGVyOiB7XG4gICAgdmFsdWU6IG51bWJlcixcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGNsYXNzOiBzdHJpbmcsXG4gIH07XG5cbiAgLyoqXG4gICAqIGN1cnJlbnQgY2xpbWF0ZSBpbmZvOiB0ZW1wZXJhdHVyZSwgd2luZCwgcHJlY2lwaXRhdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBjbGltYXRlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNsb3RoZXMgPSB0aGlzLmdldENsb3RoZXMoKTtcbiAgICB0aGlzLmNsaW1hdGUgPSB0aGlzLmdldEN1cnJlbnRDbGltYXRlKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVRoZXJtb21ldGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGdldENsb3RoZXMoKSB7XG4gICAgcmV0dXJuIENMT1RIRVM7XG4gIH1cblxuICAvKipcbiAgICogYWRkcyAvIHJlbW92ZXMgY2xvdGggZnJvbSBjdXJyZW50IHNldFxuICAgKiBAcGFyYW0gY2xvdGggdGhlIHNlbGVjdGVkIGNsb3RoIGl0ZW1cbiAgICovXG4gIHRvZ2dsZShjbG90aDogQ2xvdGgpIHtcbiAgICB0aGlzLmNsb3RoU2V0W2Nsb3RoLmlkXSA9ICh0eXBlb2YgdGhpcy5jbG90aFNldFtjbG90aC5pZF0gIT09ICd1bmRlZmluZWQnKSA/ICF0aGlzLmNsb3RoU2V0W2Nsb3RoLmlkXSA6IHRydWU7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmNsb3RoU2V0W2Nsb3RoLmlkXSk7XG5cbiAgICBpZiAoIWVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IGNsb3RoIHNldDogJHt0aGlzLmNsb3RoU2V0LnRvU3RyaW5nKCl9YCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVUaGVybW9tZXRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUaGVybW9tZXRlcigpIHtcbiAgICBjb25zdCBzZWxlY3RlZENsb3RoZXMgPSB0aGlzLmNsb3RoZXMuZmlsdGVyKChjbG90aCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2xvdGhTZXRbY2xvdGguaWRdO1xuICAgIH0pO1xuXG4gICAgLy8gY29tcHV0ZSB0aGUgc3VtIG9mIHRlbXBlcmF0dXJlcyBvZiBhbGwgY2xvdGhlcyBpbiB0aGUgY3VycmVudCBzZXRcbiAgICBjb25zdCBjdXJyZW50U2V0VGVtcGVyYXR1cmUgPSBzZWxlY3RlZENsb3RoZXMubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS50ZW1wZXJhdHVyZTtcbiAgICB9KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcblxuICAgIC8vIGNvbXBhcmUgdGhhdCB3aXRoIHRoZSBjdXJyZW50IHRlbXBlcmF0dXJlIHRvIGdldCB0aGUgdGhlcm1vbWV0ZXIgdmFsdWVcbiAgICBjb25zdCBmZWx0VGVtcGVyYXR1cmUgPSB0aGlzLmNvbXB1dGVGZWx0VGVtcGVyYXR1cmUoKTtcbiAgICBjb25zdCB2YWx1ZSA9IGN1cnJlbnRTZXRUZW1wZXJhdHVyZSAtIGZlbHRUZW1wZXJhdHVyZTtcblxuICAgIC8vIHNldCB0aGUgbGFiZWwsIGxpa2UgXCJhIGxpdHRsZSB0b28gY29sZFwiXG4gICAgY29uc3QgW2xhYmVsLCBjbGFzc05hbWVdID0gdGhpcy5nZXRMYWJlbCh2YWx1ZSk7XG5cbiAgICB0aGlzLnRoZXJtb21ldGVyID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGNsYXNzOiBjbGFzc05hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXB1dGVzIHRlbXBlcmF0dXJlIGZlbHQgYmFzZWQgb24gdGVtcGVyYXR1cmUsIHdpbmQgYW5kIHByZWNpcGl0YXRpb25cbiAgICovXG4gIHByaXZhdGUgY29tcHV0ZUZlbHRUZW1wZXJhdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGltYXRlLnRlbXBlcmF0dXJlIC0gTWF0aC5yb3VuZCh0aGlzLmNsaW1hdGUud2luZCAvIDEwKSAtIDUgKiB0aGlzLmNsaW1hdGUucmFpbiAtIDUgKiB0aGlzLmNsaW1hdGUuc25vdztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRzIGN1cnJlbnQgY2xpbWF0ZSBjb25kaXRpb24gZnJvbSB3ZWF0aGVyIHNlcnZpY2VcbiAgICovXG4gIHByaXZhdGUgZ2V0Q3VycmVudENsaW1hdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlbXBlcmF0dXJlOiAxMCxcbiAgICAgIHdpbmQ6IDAsXG4gICAgICByYWluOiBmYWxzZSxcbiAgICAgIHNub3c6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBtb3ZlIHRvIHRoZXJtb21ldGVyIHNlcnZpY2VcbiAgICogcmV0dXJucyBhIHVzZXItcmVhZGFibGUgbGFiZWxcbiAgICogQHBhcmFtIHZhbHVlIHRlbXBlcmF0dXJlXG4gICAqL1xuICBwcml2YXRlIGdldExhYmVsKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPT09IDApIHsgcmV0dXJuIFsncGVyZmVjdCEnLCAnYmctc3VjY2VzcyddOyB9XG5cbiAgICBpZiAodmFsdWUgPD0gLTIwKSB7IHJldHVybiBbJ211Y2ggdG9vIGNvbGQhJywgJ2JnLWRhbmdlciddOyB9XG4gICAgaWYgKHZhbHVlIDw9IC01KSB7IHJldHVybiBbJ3RvbyBjb2xkJywgJ2JnLWRhbmdlciddOyB9XG4gICAgaWYgKHZhbHVlIDw9IC0yKSB7IHJldHVybiBbJ2EgbGl0dGxlIHRvbyBjb2xkJywgJ2JnLXdhcm5pbmcnXTsgfVxuXG4gICAgaWYgKHZhbHVlIDw9IDIpIHsgcmV0dXJuIFsnb2snLCAnYmctc3VjY2VzcyddOyB9XG5cbiAgICBpZiAodmFsdWUgPCA1KSB7IHJldHVybiBbJ2EgbGl0dGxlIHRvbyB3YXJtJywgJ2JnLXdhcm5pbmcnXTsgfVxuICAgIGlmICh2YWx1ZSA8IDIwKSB7IHJldHVybiBbJ3RvbyB3YXJtJywgJ2JnLWRhbmdlciddOyB9XG4gICAgaWYgKHZhbHVlID4gMjApIHsgcmV0dXJuIFsnbXVjaCB0b28gd2FybSEnLCAnYmctZGFuZ2VyJ107IH1cbiAgfVxuXG59XG4iLCJpbXBvcnQge3Y0IGFzIHV1aWR9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb3RoIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRlbXBlcmF0dXJlOiBudW1iZXI7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGltYWdlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRlbXBlcmF0dXJlPzogbnVtYmVyLCB0eXBlPzogc3RyaW5nLCBpbWFnZT86IHN0cmluZykge1xyXG4gICAgdGhpcy5pZCA9IHV1aWQoKTtcclxuICAgIHRoaXMudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZSA/IHRlbXBlcmF0dXJlIDogNTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGUgPyB0eXBlIDogJ2JvZHknO1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlID8gaW1hZ2UgOiAnaHR0cDovL2xvcmVtcGl4ZWwuY29tLzIwMC8yMDAvJztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDbG90aH0gZnJvbSAnQHNyYy9hcHAvY2xvdGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMT1RIRVM6IENsb3RoW10gPSBbXHJcbiAgbmV3IENsb3RoKDQsICdib2R5JywgJ2Fzc2V0cy9pbWFnZXMvY2xvdGgwMS5qcGcnKSxcclxuICBuZXcgQ2xvdGgoMiwgJ2JvZHknLCAnYXNzZXRzL2ltYWdlcy9jbG90aDAyLmpwZycpLFxyXG4gIG5ldyBDbG90aCgxMCwgJ2JvZHknLCAnYXNzZXRzL2ltYWdlcy9jbG90aDAzLmpwZycpLFxyXG4gIG5ldyBDbG90aCgxNSwgJ2hlYWQnLCAnYXNzZXRzL2ltYWdlcy9jbG90aDA0LmpwZycpLFxyXG4gIG5ldyBDbG90aCgxMCwgJ2ZlZXQnLCAnYXNzZXRzL2ltYWdlcy9jbG90aDA1LmpwZycpLFxyXG4gIG5ldyBDbG90aCg2LCAnYm9keScsICdhc3NldHMvaW1hZ2VzL2Nsb3RoMDYuanBnJylcclxuXTtcclxuIiwiLy8gVGhpcyBmaWxlIGNhbiBiZSByZXBsYWNlZCBkdXJpbmcgYnVpbGQgYnkgdXNpbmcgdGhlIGBmaWxlUmVwbGFjZW1lbnRzYCBhcnJheS5cbi8vIGBuZyBidWlsZCAtLXByb2RgIHJlcGxhY2VzIGBlbnZpcm9ubWVudC50c2Agd2l0aCBgZW52aXJvbm1lbnQucHJvZC50c2AuXG4vLyBUaGUgbGlzdCBvZiBmaWxlIHJlcGxhY2VtZW50cyBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXIuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cbi8qXG4gKiBGb3IgZWFzaWVyIGRlYnVnZ2luZyBpbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgY2FuIGltcG9ydCB0aGUgZm9sbG93aW5nIGZpbGVcbiAqIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXMgYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYC5cbiAqXG4gKiBUaGlzIGltcG9ydCBzaG91bGQgYmUgY29tbWVudGVkIG91dCBpbiBwcm9kdWN0aW9uIG1vZGUgYmVjYXVzZSBpdCB3aWxsIGhhdmUgYSBuZWdhdGl2ZSBpbXBhY3RcbiAqIG9uIHBlcmZvcm1hbmNlIGlmIGFuIGVycm9yIGlzIHRocm93bi5cbiAqL1xuLy8gaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxyXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybSc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICdAc3JjL2FwcC9hcHAubW9kdWxlJztcclxuXHJcbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXHJcbi8vIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXHJcbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXHJcbi8vIEEgTmF0aXZlU2NyaXB0IEFuZ3VsYXIgYXBwIG5lZWRzIHRvIG1ha2UgYm90aCBwYXJhZGlnbXMgd29yayB0b2dldGhlcixcclxuLy8gc28gd2UgcHJvdmlkZSBhIHdyYXBwZXIgcGxhdGZvcm0gb2JqZWN0LCBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsXHJcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9