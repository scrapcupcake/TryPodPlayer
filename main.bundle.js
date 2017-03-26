webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AudioPlayerService = (function () {
    //loaded : boolean;
    //_playing : boolean;
    /*public get playing(){
        return this._playing;
    }*/
    function AudioPlayerService(store) {
        var _this = this;
        this.store = store;
        this._playerEvents = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["ReplaySubject"](1);
        this.playerEvents$ = this._playerEvents.asObservable();
        this._audioPlayer = new Audio();
        this._audioPlayer.addEventListener('timeupdate', function () {
            _this._playerEvents.next(_this.updateFor(_this._audioPlayer.currentTime));
        });
    }
    Object.defineProperty(AudioPlayerService.prototype, "canPlay", {
        get: function () {
            return this._audioPlayer.readyState > 3 &&
                (this._audioPlayer.paused || this._audioPlayer.ended || this._audioPlayer.played.length === 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioPlayerService.prototype, "playing", {
        get: function () {
            return !this._audioPlayer.paused && !this._audioPlayer.ended && 0 < this._audioPlayer.currentTime;
        },
        enumerable: true,
        configurable: true
    });
    AudioPlayerService.prototype.updateFor = function (time) {
        var update = {
            guid: this.currentItem.guid,
            length: this._audioPlayer.duration,
            progress: time,
            completed: 0
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores__["d" /* PodcastMediaUpdate */](update));
        return update;
    };
    AudioPlayerService.prototype.load = function (source) {
        if (source.guid != this.guid) {
            this.pause();
            this.currentItem = source;
            this._audioPlayer.src = source.media.url;
            this._audioPlayer.load();
            this._audioPlayer.addEventListener("canplay", this.playOnLoad.bind(this));
        }
    };
    AudioPlayerService.prototype.unload = function () {
        this.currentItem = undefined;
        this._audioPlayer.pause();
        this._audioPlayer.src = undefined;
    };
    AudioPlayerService.prototype.play = function () {
        if (!this.playing) {
            if (this.canPlay) {
                this._audioPlayer.play();
            }
            else {
                this._audioPlayer.addEventListener("canplay", this.playOnLoad.bind(this));
            }
        }
    };
    AudioPlayerService.prototype.playOnLoad = function () {
        var _this = this;
        this._audioPlayer.addEventListener("canplay", function (e) {
            _this._playerEvents.next(_this.updateFor(0));
            _this._audioPlayer.play();
            _this._audioPlayer.removeEventListener("canplay");
        });
    };
    AudioPlayerService.prototype.pause = function () {
        this._audioPlayer.pause();
    };
    AudioPlayerService.prototype.advanceBy = function (seconds) {
        var _this = this;
        this.resumePlay(function () {
            return _this._audioPlayer.currentTime = seconds + _this._audioPlayer.currentTime;
        });
    };
    AudioPlayerService.prototype.advanceTo = function (seconds) {
        var _this = this;
        this.resumePlay(function () { return _this._audioPlayer.currentTime = seconds; });
    };
    AudioPlayerService.prototype.resumePlay = function (behavior) {
        var wasPlaying = this.playing;
        if (wasPlaying) {
            this.pause();
            behavior();
            this.play();
        }
        else {
            behavior();
        }
    };
    Object.defineProperty(AudioPlayerService.prototype, "duration", {
        get: function () {
            return this._audioPlayer.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioPlayerService.prototype, "currentTime", {
        get: function () {
            return this._audioPlayer.currentTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioPlayerService.prototype, "url", {
        get: function () {
            return this._audioPlayer.currentSrc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioPlayerService.prototype, "guid", {
        get: function () {
            return !!this.currentItem ? this.currentItem.guid : '';
        },
        enumerable: true,
        configurable: true
    });
    return AudioPlayerService;
}());
AudioPlayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */]) === "function" && _a || Object])
], AudioPlayerService);

var _a;
//# sourceMappingURL=audio-player.service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application_types__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__application_types__);
/* unused harmony reexport ApplicationState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rss__ = __webpack_require__(437);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__rss__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__rss__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__rss__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__rss__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(58);
/* unused harmony reexport STORE_RSS_DATA */
/* unused harmony reexport LOAD_RSS_DATA */
/* unused harmony reexport RSS_SELECTED */
/* unused harmony reexport PODCAST_SELECTED */
/* unused harmony reexport PODCAST_MEDIA_UPDATE */
/* unused harmony reexport LoadRssData */
/* unused harmony reexport StoreRssData */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__actions__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__actions__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui__ = __webpack_require__(442);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__ui__["a"]; });
/* unused harmony reexport UiState */
/* unused harmony reexport PlayerState */
/* unused harmony reexport ArchiveState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__selectors__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__selectors__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__selectors__["c"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__archive_component__ = __webpack_require__(425);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__archive_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archive_container_component__ = __webpack_require__(424);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__archive_container_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores__ = __webpack_require__(20);
/* harmony export (immutable) */ __webpack_exports__["b"] = getHeight;
/* unused harmony export getPlayerDetailsFor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return latestDetailsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return currentDetailsSelector; });

function getHeight(progress, length) {
    var percentComplete = progress > 0 && length > 0 ? (progress / length) * 100 : 0;
    return percentComplete + "%";
}
var getPlayerDetailsFor = function (state, guid) {
    if (!state.uiState.listeningHistory) {
        state.uiState.listeningHistory = [];
    }
    return state.uiState.listeningHistory.find(function (hist) { return hist.guid === guid; });
};
var latestDetailsSelector = function (state) {
    var current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stores__["e" /* currentPodcastSelector */])(state);
    var latest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stores__["j" /* latestPodcastSelector */])(state);
    var latestDetails = getPlayerDetailsFor(state, latest.guid);
    if (latestDetails != undefined) {
        return {
            listeningLatest: !current || current.guid === latest.guid,
            progress: latestDetails.progress,
            length: latestDetails.length,
            title: latest.title,
            guid: latest.guid
        };
    }
    else {
        return {
            listeningLatest: true,
            progress: 0,
            length: 0,
            title: latest.title,
            guid: latest.guid
        };
    }
};
var currentDetailsSelector = function (state) {
    var current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stores__["e" /* currentPodcastSelector */])(state);
    var latest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stores__["j" /* latestPodcastSelector */])(state);
    var currentDetails = getPlayerDetailsFor(state, current.guid);
    if (currentDetails != undefined) {
        return {
            listeningLatest: !current || current.guid === latest.guid,
            progress: currentDetails.progress,
            length: currentDetails.length,
            title: current.title,
            guid: current.guid
        };
    }
    else {
        return {
            listeningLatest: true,
            progress: 0,
            length: 0,
            title: "",
            guid: ""
        };
    }
};
//# sourceMappingURL=button-view-model.selector.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landing_component__ = __webpack_require__(429);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__landing_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_container_component__ = __webpack_require__(428);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__landing_container_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_currently_playing_component__ = __webpack_require__(426);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__buttons_currently_playing_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_latest_podcast_component__ = __webpack_require__(427);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__buttons_latest_podcast_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssSelectorGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EpisodeSelectorGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RssSelectorGuard = (function () {
    function RssSelectorGuard(store) {
        this.store = store;
    }
    RssSelectorGuard.prototype.canActivate = function (route, state) {
        var id = decodeURIComponent(route.params['id']);
        console.log("Routing event for Feed ID:", id);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores__["g" /* RssSelected */](id));
        return true;
    };
    return RssSelectorGuard;
}());
RssSelectorGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === "function" && _a || Object])
], RssSelectorGuard);

var EpisodeSelectorGuard = (function () {
    function EpisodeSelectorGuard(store) {
        this.store = store;
    }
    EpisodeSelectorGuard.prototype.canActivate = function (route, state) {
        var episodeGuid = decodeURIComponent(route.params["episode"]);
        console.log("Routing event from Episode Guid:", episodeGuid);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores__["h" /* PodcastSelected */](episodeGuid));
        return true;
    };
    return EpisodeSelectorGuard;
}());
EpisodeSelectorGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === "function" && _b || Object])
], EpisodeSelectorGuard);

var _a, _b;
//# sourceMappingURL=route-listener.service.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rss_selector_component__ = __webpack_require__(434);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__rss_selector_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector_container_component__ = __webpack_require__(435);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__selector_container_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currentRssFeedSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currentPodcastSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return latestPodcastSelector; });
var currentRssFeedSelector = function (state) {
    var selectedFeed = state.rssStates.find(function (f) { return state.uiState.currentFeedLink === f.link; });
    //console.log("currentRssFeedSelector:",selectedFeed,state);
    return selectedFeed;
};
var currentPodcastSelector = function (state) {
    var currentFeed = currentRssFeedSelector(state);
    if (!!currentFeed) {
        return currentFeed.podcasts.find(function (p) { return p.guid === state.uiState.currentGuid; });
    }
    return undefined;
};
var latestPodcastSelector = function (state) {
    var currentFeed = currentRssFeedSelector(state);
    return currentFeed.podcasts[0];
};
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "button {\n  height: 100%;\n  position: relative;\n}\n.cover {\n  position: absolute;\n  background-color: black;\n  content: \"\";\n  height: 0%;\n  width: 100%;\n  -webkit-filter: opacity(30%);\n          filter: opacity(30%);\n  bottom: 0;\n  left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 360;


/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(445);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        template: '<router-outlet></router-outlet>',
        styles: [__webpack_require__(511)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_core_compose__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngrx_store_localstorage__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngrx_store_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngrx_store_localstorage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_router_store__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stores__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rss_selector__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__landing__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__archive__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__player__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routing__ = __webpack_require__(433);
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular Imports






//NGRX Imports






//Store Imports







//const appReducer = compose(localStorageSync(Object.keys(reducers), true), combineReducers)(reducers);
var initialState = { router: { path: window.location.pathname + window.location.search } };
var reducerTable = { rssStates: __WEBPACK_IMPORTED_MODULE_12__stores__["a" /* rssReducer */], uiState: __WEBPACK_IMPORTED_MODULE_12__stores__["b" /* uiReducer */], router: __WEBPACK_IMPORTED_MODULE_11__ngrx_router_store__["a" /* routerReducer */] };
var appReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_core_compose__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_ngrx_store_localstorage__["localStorageSync"])(Object.keys(['rssStates']), true), __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* combineReducers */])(reducerTable);
// This is required for AOT
function reducer(state, action) {
    return appReducer(state, action);
}
var StoreImport = __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* StoreModule */].provideStore(reducer);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__rss_selector__["a" /* SelectorContainer */],
            __WEBPACK_IMPORTED_MODULE_13__rss_selector__["b" /* RssSelector */],
            __WEBPACK_IMPORTED_MODULE_15__landing__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__landing__["b" /* LandingContainer */],
            __WEBPACK_IMPORTED_MODULE_15__landing__["c" /* LatestPodcast */],
            __WEBPACK_IMPORTED_MODULE_15__landing__["d" /* CurrentlyPlaying */],
            __WEBPACK_IMPORTED_MODULE_16__archive__["a" /* Archive */],
            __WEBPACK_IMPORTED_MODULE_16__archive__["b" /* ArchiveContainer */],
            __WEBPACK_IMPORTED_MODULE_17__player__["a" /* Player */],
            __WEBPACK_IMPORTED_MODULE_17__player__["b" /* PlayerContainer */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__routing__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            StoreImport,
            __WEBPACK_IMPORTED_MODULE_11__ngrx_router_store__["b" /* RouterStoreModule */].connectRouter(),
            __WEBPACK_IMPORTED_MODULE_8__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_12__stores__["c" /* RssEffects */]),
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({})
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__routing__["b" /* RssSelectorGuard */],
            __WEBPACK_IMPORTED_MODULE_18__routing__["c" /* EpisodeSelectorGuard */],
            __WEBPACK_IMPORTED_MODULE_17__player__["c" /* AudioPlayerService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_selectors__ = __webpack_require__(268);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchiveContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArchiveContainer = (function () {
    function ArchiveContainer(store) {
        this.store = store;
        this.feed$ = store.select(__WEBPACK_IMPORTED_MODULE_2__stores_selectors__["b" /* currentRssFeedSelector */]);
    }
    ArchiveContainer.prototype.ngOnInit = function () {
    };
    return ArchiveContainer;
}());
ArchiveContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'ArchiveContainer',
        template: "<archive [feed]=\"feed$ | async\"></archive>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === "function" && _a || Object])
], ArchiveContainer);

var _a;
//# sourceMappingURL=archive-container.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Archive; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Archive = (function () {
    function Archive(router, player) {
        this.router = router;
        this.player = player;
    }
    Archive.prototype.urlFor = function (feedItem) {
        return "../play/" + feedItem.guid;
    };
    Archive.prototype.ngOnInit = function () {
        this.listen = this.player.currentItem;
        this.latest = !!this.feed ? this.feed.podcasts[0] : undefined;
        this.currentArchiveIndex = 3; //Todo: Start somewhere sensible?
    };
    Object.defineProperty(Archive.prototype, "havePrevious", {
        get: function () {
            return this.currentArchiveIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Archive.prototype, "haveNext", {
        get: function () {
            return this.currentArchiveIndex < this.feed.podcasts.length - 4;
        },
        enumerable: true,
        configurable: true
    });
    Archive.prototype.movePrevious = function () {
        if (this.havePrevious) {
            this.currentArchiveIndex -= 3;
        }
    };
    Archive.prototype.moveNext = function () {
        if (this.haveNext) {
            this.currentArchiveIndex += 3;
        }
    };
    Object.defineProperty(Archive.prototype, "previous", {
        get: function () {
            var _this = this;
            if (!this.latest) {
                return [];
            }
            return this.feed.podcasts.filter(function (item, index) {
                return index >= _this.currentArchiveIndex - 3 && index < _this.currentArchiveIndex;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Archive.prototype, "current", {
        get: function () {
            var _this = this;
            if (!this.latest) {
                return [];
            }
            return this.feed.podcasts.filter(function (item, index) {
                return index >= _this.currentArchiveIndex && index < _this.currentArchiveIndex + 3;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Archive.prototype, "next", {
        get: function () {
            var _this = this;
            if (!this.latest) {
                return [];
            }
            return this.feed.podcasts.filter(function (item, index) {
                return index >= _this.currentArchiveIndex + 3 && index < _this.currentArchiveIndex + 6;
            });
        },
        enumerable: true,
        configurable: true
    });
    return Archive;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__stores__["i" /* RssState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__stores__["i" /* RssState */]) === "function" && _a || Object)
], Archive.prototype, "feed", void 0);
Archive = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'archive',
        template: __webpack_require__(619),
        styles: [__webpack_require__(507)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__player__["c" /* AudioPlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__player__["c" /* AudioPlayerService */]) === "function" && _c || Object])
], Archive);

var _a, _b, _c;
//# sourceMappingURL=archive.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_view_model_selector__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentlyPlaying; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrentlyPlaying = (function () {
    function CurrentlyPlaying(store, player) {
        this.store = store;
        this.player = player;
    }
    CurrentlyPlaying.prototype.ngOnInit = function () {
        this.viewModel$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__button_view_model_selector__["c" /* currentDetailsSelector */]);
        this.getHeight$ = this.viewModel$.map(function (v) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__button_view_model_selector__["b" /* getHeight */])(v.progress, v.length); });
        this.link$ = this.viewModel$.map(function (v) { return ["play", v.guid]; });
        this.shouldShow$ = this.viewModel$.map(function (v) { return !v.listeningLatest; });
        this.title$ = this.viewModel$.map(function (v) { return v.title; });
    };
    return CurrentlyPlaying;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__stores__["i" /* RssState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stores__["i" /* RssState */]) === "function" && _a || Object)
], CurrentlyPlaying.prototype, "feed", void 0);
CurrentlyPlaying = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'CurrentlyPlaying',
        template: "<button *ngIf=\"shouldShow$ | async\" [routerLink]=\"link$ | async\">{{title$ | async}}<div class=\"cover\" [style.height]=\"getHeight$ | async\"></div></button>",
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["c" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__player__["c" /* AudioPlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player__["c" /* AudioPlayerService */]) === "function" && _c || Object])
], CurrentlyPlaying);

var _a, _b, _c;
//# sourceMappingURL=currently-playing.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_index__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_view_model_selector__ = __webpack_require__(264);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestPodcast; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LatestPodcast = (function () {
    function LatestPodcast(store, player) {
        this.store = store;
        this.player = player;
    }
    LatestPodcast.prototype.ngOnInit = function () {
        this.viewModel$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__button_view_model_selector__["a" /* latestDetailsSelector */]);
        this.getHeight$ = this.viewModel$.map(function (v) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__button_view_model_selector__["b" /* getHeight */])(v.progress, v.length); });
        this.link$ = this.viewModel$.map(function (v) { return ["play", v.guid]; });
        this.title$ = this.viewModel$.map(function (v) { return v.title; });
    };
    return LatestPodcast;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__stores__["i" /* RssState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stores__["i" /* RssState */]) === "function" && _a || Object)
], LatestPodcast.prototype, "feed", void 0);
LatestPodcast = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'LatestPodcast',
        template: "<button [routerLink]=\"link$ | async\">{{title$ | async}}<div class=\"cover\"\n    [style.height]=\"getHeight$ | async\"></div></button>",
        styles: [__webpack_require__(280), __webpack_require__(508)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__player_index__["c" /* AudioPlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_index__["c" /* AudioPlayerService */]) === "function" && _c || Object])
], LatestPodcast);

var _a, _b, _c;
//# sourceMappingURL=latest-podcast.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingContainer = (function () {
    function LandingContainer(store) {
        this.store = store;
        this.currentFeed$ = store.select(__WEBPACK_IMPORTED_MODULE_2__stores__["k" /* currentRssFeedSelector */]);
    }
    LandingContainer.prototype.ngOnInit = function () {
    };
    return LandingContainer;
}());
LandingContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'landing-container',
        template: '<app-landing [feed]="currentFeed$ | async"></app-landing>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === "function" && _a || Object])
], LandingContainer);

var _a;
//# sourceMappingURL=landing-container.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_index__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = (function () {
    function LandingComponent(router, player) {
        this.router = router;
        this.player = player;
    }
    Object.defineProperty(LandingComponent.prototype, "archiveListener", {
        get: function () {
            return !!this.player.currentItem && !!this.feed && !!this.feed.podcasts && this.player.currentItem.url != this.feed.podcasts[0].url;
        },
        enumerable: true,
        configurable: true
    });
    LandingComponent.prototype.navigateToArchive = function (feed) {
        this.router.navigate(["podcast", encodeURIComponent(feed.link), "archive"]);
    };
    LandingComponent.prototype.ngOnInit = function () {
        console.log("LandingComponent:feed", this.feed);
    };
    return LandingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__stores_index__["i" /* RssState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__stores_index__["i" /* RssState */]) === "function" && _a || Object)
], LandingComponent.prototype, "feed", void 0);
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__(620),
        styles: [__webpack_require__(509)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__player__["c" /* AudioPlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__player__["c" /* AudioPlayerService */]) === "function" && _c || Object])
], LandingComponent);

var _a, _b, _c;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_player_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerContainer = (function () {
    function PlayerContainer(playerSvc, store) {
        this.playerSvc = playerSvc;
        this.store = store;
        this.source$ = store.select(__WEBPACK_IMPORTED_MODULE_2__stores__["e" /* currentPodcastSelector */]);
        this.source$.subscribe(function (podcast) {
            if (!!podcast) {
                playerSvc.load(podcast); //TODO: An effect on the AudioPlayerService
            }
            else {
                playerSvc.unload();
            }
        });
    }
    PlayerContainer.prototype.ngOnInit = function () {
    };
    return PlayerContainer;
}());
PlayerContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'player-container',
        template: '<player [src]="source$ | async" ></player>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__audio_player_service__["a" /* AudioPlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__audio_player_service__["a" /* AudioPlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* Store */]) === "function" && _b || Object])
], PlayerContainer);

var _a, _b;
//# sourceMappingURL=player-container.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audio_player_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Player = (function () {
    function Player(player) {
        this.player = player;
        this.time$ = player.playerEvents$.map(function (e) { return e.progress; });
    }
    Object.defineProperty(Player.prototype, "currentTime", {
        get: function () {
            return this.player.currentTime;
        },
        set: function (value) {
            this.player.advanceTo(value);
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.player.playerEvents$.subscribe(function (e) {
            _this.slider.min = 0;
            _this.slider.max = e.length;
            //console.log("Slider?", this.slider);
        });
    };
    return Player;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__stores__["f" /* Podcast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__stores__["f" /* Podcast */]) === "function" && _a || Object)
], Player.prototype, "src", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('slider'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSlider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSlider */]) === "function" && _b || Object)
], Player.prototype, "slider", void 0);
Player = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'player',
        template: __webpack_require__(621),
        styles: [__webpack_require__(512)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__audio_player_service__["a" /* AudioPlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__audio_player_service__["a" /* AudioPlayerService */]) === "function" && _c || Object])
], Player);

var _a, _b, _c;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rss_selector__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__archive__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_listener_service__ = __webpack_require__(266);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });





var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_0__rss_selector__["a" /* SelectorContainer */] },
    { path: "podcast/:id", component: __WEBPACK_IMPORTED_MODULE_1__landing__["b" /* LandingContainer */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__route_listener_service__["a" /* RssSelectorGuard */]] },
    { path: "podcast/:id/archive", component: __WEBPACK_IMPORTED_MODULE_2__archive__["b" /* ArchiveContainer */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__route_listener_service__["a" /* RssSelectorGuard */]] },
    { path: "podcast/:id/play/:episode", component: __WEBPACK_IMPORTED_MODULE_3__player__["b" /* PlayerContainer */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__route_listener_service__["a" /* RssSelectorGuard */], __WEBPACK_IMPORTED_MODULE_4__route_listener_service__["b" /* EpisodeSelectorGuard */]] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routes__ = __webpack_require__(432);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_routes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_listener_service__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__route_listener_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__route_listener_service__["b"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssSelector; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RssSelector = (function () {
    function RssSelector(router) {
        this.router = router;
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    RssSelector.prototype.addFeed = function (url) {
        this.add.emit(url);
    };
    RssSelector.prototype.grow = function () {
        console.log("GROW!");
        this.expandSearch = true;
    };
    RssSelector.prototype.shring = function () {
        console.log("shrink");
        this.expandSearch = false;
    };
    RssSelector.prototype.navigateToFeed = function (feed) {
        this.router.navigate(["podcast", encodeURIComponent(feed.link)]);
    };
    RssSelector.prototype.ngOnInit = function () {
    };
    return RssSelector;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], RssSelector.prototype, "feeds", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], RssSelector.prototype, "add", void 0);
RssSelector = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'rss-selector',
        template: __webpack_require__(622),
        styles: [__webpack_require__(510)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RssSelector);

var _a, _b;
//# sourceMappingURL=rss-selector.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_actions__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//TODO: Make this use the NGRX store. Later.
var SelectorContainer = (function () {
    function SelectorContainer(store) {
        this.store = store;
        this.feeds$ = this.store.select('rssStates');
    }
    SelectorContainer.prototype.ngOnInit = function () {
    };
    SelectorContainer.prototype.addFeed = function (feedUrl) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__stores_actions__["j" /* LoadRssData */](feedUrl));
    };
    return SelectorContainer;
}());
SelectorContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: "selector-container",
        template: "<rss-selector [feeds]=\"feeds$ | async\" (add)=\"addFeed($event)\"></rss-selector>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === "function" && _a || Object])
], SelectorContainer);

var _a;
//# sourceMappingURL=selector-container.component.js.map

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

//# sourceMappingURL=application.types.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rss_types__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rss_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rss_types__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__rss_types__, "RssState")) __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__rss_types__["RssState"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__rss_types__, "Podcast")) __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__rss_types__["Podcast"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rss_effects__ = __webpack_require__(440);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__rss_effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(439);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rssReducer; });



var rssReducer = __WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* reducer */];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_bindNodeCallback__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_bindNodeCallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_bindNodeCallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (immutable) */ __webpack_exports__["a"] = readFeed;
// Import RxJs required methods


var parser = __webpack_require__(628);
var parserCurry = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].bindNodeCallback(parser.parseString);
function parsePodcastItem(item) {
    return {
        title: item.title,
        text: item.contentSnippet,
        guid: item.guid,
        url: item.link,
        media: item.enclosure,
        pubDate: item.pubDate
    };
}
function readFeed(text) {
    var readObs$ = parserCurry(text).map(function (result) {
        var feed = { title: result.feed.title,
            description: result.feed.description,
            link: result.feed.link,
            feedUrl: result.feed.feedUrl,
            iconUrl: result.feed.itunes.image
        };
        feed.podcasts = Array.from(result.feed.entries).map(parsePodcastItem);
        return feed;
    });
    return readObs$;
}
//# sourceMappingURL=parser.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });

var reducer = function (state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* STORE_RSS_DATA */]:
            return state.concat([action.payload]);
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parser__ = __webpack_require__(438);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







function isBad(url) {
    return url === ''; //TODO: more checks
}
var RssEffects = (function () {
    function RssEffects(actions$, http) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        this.loadRssFromServer$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__actions__["f" /* LOAD_RSS_DATA */])
            .debounceTime(300)
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* toPayload */])
            .switchMap(function (url) {
            if (isBad(url)) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_empty__["empty"])(); //TODO: Remap ourselves to the future search on bad searches
            }
            return _this.getFeed(url).map(function (feed) { return new __WEBPACK_IMPORTED_MODULE_2__actions__["g" /* StoreRssData */](feed); });
        });
    }
    RssEffects.prototype.getFeed = function (url) {
        var feed$ = this.http.get(url)
            .flatMap(function (res) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__parser__["a" /* readFeed */])(res.text()); })
            .publishReplay(1)
            .refCount()
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error || 'Server error'); });
        return feed$;
    };
    return RssEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], RssEffects.prototype, "loadRssFromServer$", void 0);
RssEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _c || Object])
], RssEffects);

var _a, _b, _c;
//# sourceMappingURL=rss.effects.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

//# sourceMappingURL=rss.types.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_types__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ui_types__);
/* unused harmony reexport UiState */
/* unused harmony reexport ArchiveState */
/* unused harmony reexport PlayerState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(443);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__reducer__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(58);
/* harmony export (immutable) */ __webpack_exports__["a"] = uiReducer;

function uiReducer(state, action) {
    if (state === void 0) { state = { listeningHistory: [] }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* RSS_SELECTED */]:
            if (state.currentFeedLink != action.payload) {
                return Object.assign(state, { currentFeedLink: action.payload, currentGuid: undefined });
            }
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* PODCAST_SELECTED */]:
            return Object.assign(state, { currentGuid: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* PODCAST_MEDIA_UPDATE */]:
            var newHistory = state.listeningHistory.slice();
            var ps_1 = action.payload;
            var psi = state.listeningHistory.findIndex(function (h) { return h.guid === ps_1.guid; });
            if (psi > -1) {
                newHistory.splice(psi, 1);
            }
            newHistory.push(ps_1);
            return Object.assign(state, { listeningHistory: newHistory });
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

//# sourceMappingURL=ui.types.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".mainSection > main {\n  background-color: #610D5B;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  width: 100%;\n}\n.mainSection > main .previous,\n.mainSection > main .next {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-flex: 2;\n      -ms-flex: 2 0 auto;\n          flex: 2 0 auto;\n  width: 90%;\n  margin: auto;\n}\n.mainSection > main .previous div,\n.mainSection > main .next div {\n  padding: 0.2em;\n  font-size: 1.2em;\n  font-family: 'Roboto Condensed', sans-serif;\n  width: 100%;\n  text-align: center;\n  border: 1px solid black;\n  background-color: white;\n  color: black;\n}\n.mainSection > main .current {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-flex: 5;\n      -ms-flex: 5 0 auto;\n          flex: 5 0 auto;\n  width: 100%;\n}\n.mainSection > main .current section {\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  padding: 0.4rem;\n}\n.mainSection > main .current section header {\n  font-size: 1.8em;\n}\n.mainSection > main .current section main {\n  font-size: 0.8em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "button:before {\n  position: absolute;\n  left: -0.5em;\n  top: 1em;\n  content: \"Latest\";\n  background-color: black;\n  color: white;\n  width: 4.5em;\n  height: 1em;\n}\nbutton:after {\n  position: absolute;\n  background: -webkit-linear-gradient(top left, #000000 55%, rgba(255, 255, 255, 0.5) 60%, transparent);\n  background: linear-gradient(to bottom right, #000000 55%, rgba(255, 255, 255, 0.5) 60%, transparent);\n  left: 4em;\n  top: 1em;\n  height: 1em;\n  width: 1em;\n  display: block;\n  content: \"\";\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "section header {\n  background: -webkit-linear-gradient(left, white 50%, grey, black 90%);\n  background: linear-gradient(to right, white 50%, grey, black 90%);\n}\nsection main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  min-height: 80vh;\n}\nsection main > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  display: block;\n}\nsection footer {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  background: -webkit-linear-gradient(left, white 50%, grey, black 90%);\n  background: linear-gradient(to right, white 50%, grey, black 90%);\n}\nsection footer img {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 2em;\n  width: 2em;\n}\nsection footer a:not(:first-of-type) img {\n  background: white;\n  border-radius: 5px;\n}\nsection footer a:last-of-type img {\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 98%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  margin: auto;\n}\nheader {\n  width: 100%;\n  background: white;\n  color: black;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  font-size: 1em;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\nheader * {\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\nheader div.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  width: 100%;\n}\nheader h1 {\n  margin: 0.2em;\n  font-size: 1.2em;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\nheader input {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\nheader input,\nheader button {\n  font-size: 0.5em;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\nheader h2 {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\nmain {\n  -webkit-box-flex: 6;\n      -ms-flex: 6 1 auto;\n          flex: 6 1 auto;\n}\nfooter {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\nheader.grow {\n  -webkit-box-flex: 5;\n      -ms-flex: 5 0 auto;\n          flex: 5 0 auto;\n  font-size: 1.5em;\n}\nheader.grow h1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  font-size: 0.8em;\n}\nheader.grow h2 {\n  color: red;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  width: 100%;\n  text-align: center;\n  padding-bottom: 1rem;\n}\nheader.grow input {\n  -webkit-box-flex: 5;\n      -ms-flex: 5 0 auto;\n          flex: 5 0 auto;\n  font-size: 1.1em;\n}\nheader.grow button {\n  -webkit-box-flex: 2;\n      -ms-flex: 2 1 auto;\n          flex: 2 1 auto;\n  font-size: 1.4em;\n}\nmain {\n  margin: auto;\n  width: 90%;\n}\nmain > ul > li {\n  border: 1px solid grey;\n  margin: 0.2em;\n  width: 100%;\n  padding: 1em;\n  background-color: white;\n  color: black;\n}\nmain > ul > li h1 {\n  font-size: 2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".mainSection {\r\n    position: relative;\r\n    top: 1vh;\r\n    left: 1vw;\r\n    color: black;\r\n    background-color: white;\r\n    width: 98vw;\r\n    height: 98vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "md-slider {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_component__ = __webpack_require__(431);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__player_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_container_component__ = __webpack_require__(430);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__player_container_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audio_player_service__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__audio_player_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOAD_RSS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return STORE_RSS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RSS_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PODCAST_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PODCAST_MEDIA_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LoadRssData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return StoreRssData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RssSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PodcastSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastMediaUpdate; });
var LOAD_RSS_DATA = "LOAD_RSS_DATA";
var STORE_RSS_DATA = "STORE_RSS_DATA";
var RSS_SELECTED = "RSS_SELECTED";
var PODCAST_SELECTED = "PODCAST_SELECTED";
var PODCAST_MEDIA_UPDATE = "PODCAST_MEDIA_UPDATE";
var LoadRssData = (function () {
    function LoadRssData(payload) {
        this.payload = payload;
        this.type = LOAD_RSS_DATA;
    }
    return LoadRssData;
}());

var StoreRssData = (function () {
    function StoreRssData(payload) {
        this.payload = payload;
        this.type = STORE_RSS_DATA;
    }
    return StoreRssData;
}());

var RssSelected = (function () {
    function RssSelected(payload) {
        this.payload = payload;
        this.type = RSS_SELECTED;
    } //RSS link key
    return RssSelected;
}());

var PodcastSelected = (function () {
    function PodcastSelected(payload) {
        this.payload = payload;
        this.type = PODCAST_SELECTED;
    } //RSS Guid
    return PodcastSelected;
}());

var PodcastMediaUpdate = (function () {
    function PodcastMediaUpdate(payload) {
        this.payload = payload;
        this.type = PODCAST_MEDIA_UPDATE;
    }
    return PodcastMediaUpdate;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<section class=\"mainSection\">\r\n    <header>{{feed?.title}} Archives</header>\r\n    <main>\r\n        <section class=\"previous\" (click)=\"movePrevious()\">\r\n            <div *ngFor=\"let podcast of previous\">{{podcast.title}}</div>\r\n        </section>\r\n\r\n        <section class=\"current\">\r\n            <section [routerLink]=\"urlFor(podcast)\" *ngFor=\"let podcast of current\">\r\n                <header>{{podcast.title}}</header>\r\n                <main>{{podcast.text}}</main>\r\n            </section>\r\n        </section>\r\n        <section class=\"next\" (click)=\"moveNext()\">\r\n            <div *ngFor=\"let podcast of next\">{{podcast.title}}</div>\r\n        </section>\r\n    </main>\r\n</section>"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<section class=\"mainSection\">\r\n  <header>{{feed?.title}}</header>\r\n  <main>\r\n    <LatestPodcast [feed]=\"feed\"></LatestPodcast>\r\n    <CurrentlyPlaying [feed]=\"feed\" *ngIf=\"archiveListener\">\r\n    </CurrentlyPlaying>\r\n    <button (click)=\"navigateToArchive(feed)\">\r\n      Browse Archive\r\n    </button>\r\n  </main>\r\n  <footer>\r\n    <a href=\"\"><img src=\"assets/facebook.svg\"></a>\r\n    <a href=\"\"><img src=\"assets/twitter.svg\"></a>\r\n    <a href=\"\"><img src=\"assets/tumblr.svg\"></a>\r\n  </footer>\r\n</section>\r\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<section class=\"player mainSection\">\r\n    <header><h1>{{src?.title}}</h1>\r\n    <p class=\"text_description\">{{src?.text}}</p></header>\r\n    <main class=\"controls\">\r\n        <button (click)=\"player.advanceBy(-30)\"><md-icon>replay_30</md-icon></button>\r\n        <button (click)=\"player.advanceBy(-5)\"><md-icon>replay_5</md-icon></button>\r\n        <md-icon class=\"play\" *ngIf=\"!player.playing\" (click)=\"player.play()\">play_circle_filled</md-icon>\r\n        <md-icon class=\"pause\" *ngIf=\"player.playing\" (click)=\"player.pause()\">pause_circle_filled</md-icon>\r\n        <button (click)=\"player.advanceBy(5)\"><md-icon>forward_5</md-icon></button>\r\n        <button (click)=\"player.advanceBy(30)\"><md-icon>forward_30</md-icon></button>\r\n    </main>\r\n    <br><md-slider [(ngModel)]=\"currentTime\" #slider></md-slider>\r\n    <br>Current Time:<input type=\"text\" [ngModel]=\"currentTime\">\r\n</section>"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <header [class.grow]=\"expandSearch\">\r\n    <div class=\"row\">\r\n    <h1>Enter Podcast URL</h1>\r\n    <form (submit)=\"addFeed(urlInput.value)\" >\r\n      <input size=\"40\" (focus)=\"grow()\" (blur)=\"shring()\" type=\"text\" #urlInput (keyup.enter)=\"addFeed(urlInput.value)\">\r\n      <button (click)=\"addFeed(urlInput.value)\">Add</button>\r\n    </form>\r\n    </div>\r\n    <h2>It is advisable to copy and paste this URL</h2>\r\n    </header>\r\n  <main>\r\n    <ul>\r\n      <li *ngFor=\"let feed of feeds\">\r\n        <h1>{{feed.title}}</h1>\r\n        <button>Read Description</button>\r\n        <button (click)=\"navigateToFeed(feed)\">Listen Now</button>\r\n      </li>\r\n    </ul>    \r\n  </main>\r\n</section>"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(361);


/***/ })

},[892]);
//# sourceMappingURL=main.bundle.js.map