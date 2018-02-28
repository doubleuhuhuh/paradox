/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export noop */
/* unused harmony export toggleClass */
/* harmony export (immutable) */ __webpack_exports__["a"] = domReady;
/* unused harmony export shuffle */
function noop(){}

function toggleClass(el, className){
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push(className);

      el.className = classes.join(' ');
    }
}

function domReady(cb){
    document.addEventListener('DOMContentLoaded', function(e) {
        cb();
    });
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["event"] = event;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trak_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_trak_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_trak_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib__ = __webpack_require__(0);




var initialized = false;
var defaultEventObj = {
  eventName: 'gaEvent'
};

function init(){
    if(!initialized){
        __WEBPACK_IMPORTED_MODULE_1_trak_js__["start"]();
        __WEBPACK_IMPORTED_MODULE_1_trak_js__["options"].trackType = 'ga';
        __WEBPACK_IMPORTED_MODULE_1_trak_js__["options"].clean = false;
        initialized = true;
    }
}

Object(__WEBPACK_IMPORTED_MODULE_2_lib__["a" /* domReady */])(init);

function event(obj){
    if(initialized){
        var config = __WEBPACK_IMPORTED_MODULE_0_extend___default()(obj, defaultEventObj);
        __WEBPACK_IMPORTED_MODULE_1_trak_js__["event"](config);
    }
    else{
        console.warn('Google analytics is not ready!', obj);
    }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* trak.js v0.5.4 | (c) 2016 @mrmartineau | https://github.com/mrmartineau/trak.js
   Universal event tracking API. */
var trak = (function() {
	'use strict';


	/**
	 * trak.clean()
	 * Cleans the input replacing spaces with a specified delimeter (see trak.options) and converts to lower case
	 * @param  string str
	 * @return string cleaned string
	 */
	var clean = function(str) {
		if (!str) {
			return '';
		}
		if (!trak.options.clean) {
			return wildcard.call(this, str);
		} else {
			return wildcard.call(this, str).toString().replace(/\s|'|"/g, settings.delimeter).toLowerCase();
		}
	};


	/**
	 * trak.event()
	 * @param  object options     See getOptions() function for available items
	 */
	var event = function(options) {
		var opts           = getOptions(options);

		// Cache the options
		var category       = clean.call(this, opts.category);
		var action         = clean.call(this, opts.action);
		var label          = clean.call(this, opts.label);
		var eventName      = opts.eventName;
		var value          = opts.value;
		var nonInteraction = opts.nonInteraction;

		if (settings.trackType === 'ga' && typeof ga !== 'undefined') {
			ga('send', 'event', category, action, label, value, {'nonInteraction': nonInteraction});

		} else if (settings.trackType === '_gaq' && typeof _gaq !== 'undefined') {
			_gaq.push(['_trackEvent', category, action, label, value]);

		} else if (settings.trackType === 'gtm' && typeof dataLayer !== 'undefined') {
			dataLayer.push({
				'event'         : eventName,
				'eventCategory' : category,
				'eventAction'   : action,
				'eventLabel'    : label,
				'eventValue'    : value,
				'eventNonInteraction': nonInteraction
			});
		}

		if (settings.additionalTypes !== undefined) {
			settings.additionalTypes(opts);
		}

		if (settings.debug) {
			console.debug('Debug message:\n Category:', category, '\n Action:', action, '\n Label:', label);
		}
	};


	/**
	 * attrEvent
	 * This is used when elements with the [data-trak] is present.
	 * It calls trak.event()
	 * Usage in your js code:
	 * > trak.attrEvent.call(this);
	 */
	var attrEvent = function() {
		var trakWithJs = this.getAttribute('data-trakwithjs') !== null ? true : false;
		if (!trakWithJs) {
			var _options = JSON.parse(this.getAttribute('data-trak'));
			event.call(this, _options);
		}
	};


	/**
	 * Function to convert wildcards into real values
	 * @param  string str
	 * @return string     The converted ouput from str
	 */
	var wildcard = function(str) {
		var output;

		switch(str) {
			case 'page.title':
				output = document.title;
				break;
			case 'page.href':
				output = window.location.href;
				break;
			case 'link.href':
				output = this.href;
				break;
			case 'link.title':
				output = this.title;
				break;
			case 'referrer':
				output = document.referrer ? document.referrer : 'No referrer';
				break;
			default:
				output = str;
				break;
		}
		return output;
	};


	/**
	 * getOptions
	 * Get all the options
	 */
	var getOptions = function (opts) {
		return {
			category       : opts && opts.category       || '',
			action         : opts && opts.action         || '',
			label          : opts && opts.label          || '',
			value          : opts && opts.value          || 0,
			nonInteraction : opts && opts.nonInteraction || false,
			eventName      : opts && opts.eventName      || undefined
		};
	};


	/**
	 * trak.options
	 * These are the default options for trak.js
	 * To override them, reassign these values in your code, see
	 * https://gist.github.com/mrmartineau/24ae259f373e6dbda66f for an example
	 * @type {Object}
	 */
	var settings = {
		clean           : true, // trak.options.clean     = false
		delimeter       : '_',  // trak.options.delimeter = '-'
		trackType       : 'ga', // trak.options.trackType = 'ga' Available options: ga, _gaq & gtm
		additionalTypes : undefined,
		debug           : false
	};


	var start = function() {
		var trakElements = document.querySelectorAll('[data-trak]');

		for (var i = 0; i < trakElements.length ; i++) {
			var _options = JSON.parse(trakElements[i].getAttribute('data-trak'));

			// This allows us to choose other event types but sets click as the default
			var trigger = _options.trigger || 'click';

			if (trakElements[i].addEventListener) {
				trakElements[i].addEventListener(trigger, attrEvent);
			} else if (trakElements[i].attachEvent) {
				trakElements[i].attachEvent('on' + trigger, attrEvent);
			}
		}
	};

	return {
		start     : start,
		clean     : clean,
		event     : event,
		attrEvent : attrEvent,
		wildcard  : wildcard,
		options   : settings
	};

})();


// Check for AMD/Module support, otherwise define trak as a global variable.
if (true) {
	// AMD. Register as an anonymous module.
	!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		'use strict';
		return trak;
	}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = trak;
} else {
	window.trak = trak;
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2QyMzEzMjE5ZDA3MDkxN2JmZDEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL3RyYWNrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leHRlbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RyYWsuanMvZGlzdC90cmFrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLFlBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxpQ0FBaUM7O0FBRXpGLEdBQUc7QUFDSDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLGlCQUFpQiwwQkFBMEI7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUFBO0FBQ0YsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZDIzMTMyMTlkMDcwOTE3YmZkMSIsImV4cG9ydCBmdW5jdGlvbiBub29wKCl7fVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWwsIGNsYXNzTmFtZSl7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSBjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMClcbiAgICAgICAgY2xhc3Nlcy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSk7XG4gICAgICBlbHNlXG4gICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuXG4gICAgICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21SZWFkeShjYil7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2IoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2pzL21vZHVsZXMvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IGV4dGVuZCBmcm9tICdleHRlbmQnO1xuaW1wb3J0ICogYXMgdHJhayBmcm9tICd0cmFrLmpzJ1xuaW1wb3J0IHtkb21SZWFkeX0gZnJvbSAnbGliJ1xuXG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbnZhciBkZWZhdWx0RXZlbnRPYmogPSB7XG4gIGV2ZW50TmFtZTogJ2dhRXZlbnQnXG59O1xuXG5mdW5jdGlvbiBpbml0KCl7XG4gICAgaWYoIWluaXRpYWxpemVkKXtcbiAgICAgICAgdHJhay5zdGFydCgpO1xuICAgICAgICB0cmFrLm9wdGlvbnMudHJhY2tUeXBlID0gJ2dhJztcbiAgICAgICAgdHJhay5vcHRpb25zLmNsZWFuID0gZmFsc2U7XG4gICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG59XG5cbmRvbVJlYWR5KGluaXQpO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnQob2JqKXtcbiAgICBpZihpbml0aWFsaXplZCl7XG4gICAgICAgIHZhciBjb25maWcgPSBleHRlbmQob2JqLCBkZWZhdWx0RXZlbnRPYmopO1xuICAgICAgICB0cmFrLmV2ZW50KGNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNvbnNvbGUud2FybignR29vZ2xlIGFuYWx5dGljcyBpcyBub3QgcmVhZHkhJywgb2JqKTtcbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9qcy9tb2R1bGVzL3RyYWNrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KGFycik7XG5cdH1cblxuXHRyZXR1cm4gdG9TdHIuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuXHRpZiAoIW9iaiB8fCB0b1N0ci5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0dmFyIGhhc0lzUHJvdG90eXBlT2YgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuXHQvLyBOb3Qgb3duIGNvbnN0cnVjdG9yIHByb3BlcnR5IG11c3QgYmUgT2JqZWN0XG5cdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gT3duIHByb3BlcnRpZXMgYXJlIGVudW1lcmF0ZWQgZmlyc3RseSwgc28gdG8gc3BlZWQgdXAsXG5cdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBvYmopIHsgLyoqLyB9XG5cblx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnIHx8IGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmU7XG5cdHZhciB0YXJnZXQgPSBhcmd1bWVudHNbMF07XG5cdHZhciBpID0gMTtcblx0dmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cdHZhciBkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG5cdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdGkgPSAyO1xuXHR9XG5cdGlmICh0YXJnZXQgPT0gbnVsbCB8fCAodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykpIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdGZvciAoOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzW2ldO1xuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAob3B0aW9ucyAhPSBudWxsKSB7XG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRzcmMgPSB0YXJnZXRbbmFtZV07XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBjb3B5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIHRyYWsuanMgdjAuNS40IHwgKGMpIDIwMTYgQG1ybWFydGluZWF1IHwgaHR0cHM6Ly9naXRodWIuY29tL21ybWFydGluZWF1L3RyYWsuanNcbiAgIFVuaXZlcnNhbCBldmVudCB0cmFja2luZyBBUEkuICovXG52YXIgdHJhayA9IChmdW5jdGlvbigpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiB0cmFrLmNsZWFuKClcclxuXHQgKiBDbGVhbnMgdGhlIGlucHV0IHJlcGxhY2luZyBzcGFjZXMgd2l0aCBhIHNwZWNpZmllZCBkZWxpbWV0ZXIgKHNlZSB0cmFrLm9wdGlvbnMpIGFuZCBjb252ZXJ0cyB0byBsb3dlciBjYXNlXHJcblx0ICogQHBhcmFtICBzdHJpbmcgc3RyXHJcblx0ICogQHJldHVybiBzdHJpbmcgY2xlYW5lZCBzdHJpbmdcclxuXHQgKi9cclxuXHR2YXIgY2xlYW4gPSBmdW5jdGlvbihzdHIpIHtcclxuXHRcdGlmICghc3RyKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHRcdGlmICghdHJhay5vcHRpb25zLmNsZWFuKSB7XHJcblx0XHRcdHJldHVybiB3aWxkY2FyZC5jYWxsKHRoaXMsIHN0cik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gd2lsZGNhcmQuY2FsbCh0aGlzLCBzdHIpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzfCd8XCIvZywgc2V0dGluZ3MuZGVsaW1ldGVyKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiB0cmFrLmV2ZW50KClcclxuXHQgKiBAcGFyYW0gIG9iamVjdCBvcHRpb25zICAgICBTZWUgZ2V0T3B0aW9ucygpIGZ1bmN0aW9uIGZvciBhdmFpbGFibGUgaXRlbXNcclxuXHQgKi9cclxuXHR2YXIgZXZlbnQgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHR2YXIgb3B0cyAgICAgICAgICAgPSBnZXRPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHRcdC8vIENhY2hlIHRoZSBvcHRpb25zXHJcblx0XHR2YXIgY2F0ZWdvcnkgICAgICAgPSBjbGVhbi5jYWxsKHRoaXMsIG9wdHMuY2F0ZWdvcnkpO1xyXG5cdFx0dmFyIGFjdGlvbiAgICAgICAgID0gY2xlYW4uY2FsbCh0aGlzLCBvcHRzLmFjdGlvbik7XHJcblx0XHR2YXIgbGFiZWwgICAgICAgICAgPSBjbGVhbi5jYWxsKHRoaXMsIG9wdHMubGFiZWwpO1xyXG5cdFx0dmFyIGV2ZW50TmFtZSAgICAgID0gb3B0cy5ldmVudE5hbWU7XHJcblx0XHR2YXIgdmFsdWUgICAgICAgICAgPSBvcHRzLnZhbHVlO1xyXG5cdFx0dmFyIG5vbkludGVyYWN0aW9uID0gb3B0cy5ub25JbnRlcmFjdGlvbjtcclxuXHJcblx0XHRpZiAoc2V0dGluZ3MudHJhY2tUeXBlID09PSAnZ2EnICYmIHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0Z2EoJ3NlbmQnLCAnZXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUsIHsnbm9uSW50ZXJhY3Rpb24nOiBub25JbnRlcmFjdGlvbn0pO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoc2V0dGluZ3MudHJhY2tUeXBlID09PSAnX2dhcScgJiYgdHlwZW9mIF9nYXEgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChzZXR0aW5ncy50cmFja1R5cGUgPT09ICdndG0nICYmIHR5cGVvZiBkYXRhTGF5ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdGRhdGFMYXllci5wdXNoKHtcclxuXHRcdFx0XHQnZXZlbnQnICAgICAgICAgOiBldmVudE5hbWUsXHJcblx0XHRcdFx0J2V2ZW50Q2F0ZWdvcnknIDogY2F0ZWdvcnksXHJcblx0XHRcdFx0J2V2ZW50QWN0aW9uJyAgIDogYWN0aW9uLFxyXG5cdFx0XHRcdCdldmVudExhYmVsJyAgICA6IGxhYmVsLFxyXG5cdFx0XHRcdCdldmVudFZhbHVlJyAgICA6IHZhbHVlLFxyXG5cdFx0XHRcdCdldmVudE5vbkludGVyYWN0aW9uJzogbm9uSW50ZXJhY3Rpb25cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmFkZGl0aW9uYWxUeXBlcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHNldHRpbmdzLmFkZGl0aW9uYWxUeXBlcyhvcHRzKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2V0dGluZ3MuZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZygnRGVidWcgbWVzc2FnZTpcXG4gQ2F0ZWdvcnk6JywgY2F0ZWdvcnksICdcXG4gQWN0aW9uOicsIGFjdGlvbiwgJ1xcbiBMYWJlbDonLCBsYWJlbCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIGF0dHJFdmVudFxyXG5cdCAqIFRoaXMgaXMgdXNlZCB3aGVuIGVsZW1lbnRzIHdpdGggdGhlIFtkYXRhLXRyYWtdIGlzIHByZXNlbnQuXHJcblx0ICogSXQgY2FsbHMgdHJhay5ldmVudCgpXHJcblx0ICogVXNhZ2UgaW4geW91ciBqcyBjb2RlOlxyXG5cdCAqID4gdHJhay5hdHRyRXZlbnQuY2FsbCh0aGlzKTtcclxuXHQgKi9cclxuXHR2YXIgYXR0ckV2ZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdHJha1dpdGhKcyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRyYWt3aXRoanMnKSAhPT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcclxuXHRcdGlmICghdHJha1dpdGhKcykge1xyXG5cdFx0XHR2YXIgX29wdGlvbnMgPSBKU09OLnBhcnNlKHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRyYWsnKSk7XHJcblx0XHRcdGV2ZW50LmNhbGwodGhpcywgX29wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbiB0byBjb252ZXJ0IHdpbGRjYXJkcyBpbnRvIHJlYWwgdmFsdWVzXHJcblx0ICogQHBhcmFtICBzdHJpbmcgc3RyXHJcblx0ICogQHJldHVybiBzdHJpbmcgICAgIFRoZSBjb252ZXJ0ZWQgb3VwdXQgZnJvbSBzdHJcclxuXHQgKi9cclxuXHR2YXIgd2lsZGNhcmQgPSBmdW5jdGlvbihzdHIpIHtcclxuXHRcdHZhciBvdXRwdXQ7XHJcblxyXG5cdFx0c3dpdGNoKHN0cikge1xyXG5cdFx0XHRjYXNlICdwYWdlLnRpdGxlJzpcclxuXHRcdFx0XHRvdXRwdXQgPSBkb2N1bWVudC50aXRsZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncGFnZS5ocmVmJzpcclxuXHRcdFx0XHRvdXRwdXQgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbGluay5ocmVmJzpcclxuXHRcdFx0XHRvdXRwdXQgPSB0aGlzLmhyZWY7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xpbmsudGl0bGUnOlxyXG5cdFx0XHRcdG91dHB1dCA9IHRoaXMudGl0bGU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3JlZmVycmVyJzpcclxuXHRcdFx0XHRvdXRwdXQgPSBkb2N1bWVudC5yZWZlcnJlciA/IGRvY3VtZW50LnJlZmVycmVyIDogJ05vIHJlZmVycmVyJztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRvdXRwdXQgPSBzdHI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBnZXRPcHRpb25zXHJcblx0ICogR2V0IGFsbCB0aGUgb3B0aW9uc1xyXG5cdCAqL1xyXG5cdHZhciBnZXRPcHRpb25zID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNhdGVnb3J5ICAgICAgIDogb3B0cyAmJiBvcHRzLmNhdGVnb3J5ICAgICAgIHx8ICcnLFxyXG5cdFx0XHRhY3Rpb24gICAgICAgICA6IG9wdHMgJiYgb3B0cy5hY3Rpb24gICAgICAgICB8fCAnJyxcclxuXHRcdFx0bGFiZWwgICAgICAgICAgOiBvcHRzICYmIG9wdHMubGFiZWwgICAgICAgICAgfHwgJycsXHJcblx0XHRcdHZhbHVlICAgICAgICAgIDogb3B0cyAmJiBvcHRzLnZhbHVlICAgICAgICAgIHx8IDAsXHJcblx0XHRcdG5vbkludGVyYWN0aW9uIDogb3B0cyAmJiBvcHRzLm5vbkludGVyYWN0aW9uIHx8IGZhbHNlLFxyXG5cdFx0XHRldmVudE5hbWUgICAgICA6IG9wdHMgJiYgb3B0cy5ldmVudE5hbWUgICAgICB8fCB1bmRlZmluZWRcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIHRyYWsub3B0aW9uc1xyXG5cdCAqIFRoZXNlIGFyZSB0aGUgZGVmYXVsdCBvcHRpb25zIGZvciB0cmFrLmpzXHJcblx0ICogVG8gb3ZlcnJpZGUgdGhlbSwgcmVhc3NpZ24gdGhlc2UgdmFsdWVzIGluIHlvdXIgY29kZSwgc2VlXHJcblx0ICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbXJtYXJ0aW5lYXUvMjRhZTI1OWYzNzNlNmRiZGE2NmYgZm9yIGFuIGV4YW1wbGVcclxuXHQgKiBAdHlwZSB7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdHZhciBzZXR0aW5ncyA9IHtcclxuXHRcdGNsZWFuICAgICAgICAgICA6IHRydWUsIC8vIHRyYWsub3B0aW9ucy5jbGVhbiAgICAgPSBmYWxzZVxyXG5cdFx0ZGVsaW1ldGVyICAgICAgIDogJ18nLCAgLy8gdHJhay5vcHRpb25zLmRlbGltZXRlciA9ICctJ1xyXG5cdFx0dHJhY2tUeXBlICAgICAgIDogJ2dhJywgLy8gdHJhay5vcHRpb25zLnRyYWNrVHlwZSA9ICdnYScgQXZhaWxhYmxlIG9wdGlvbnM6IGdhLCBfZ2FxICYgZ3RtXHJcblx0XHRhZGRpdGlvbmFsVHlwZXMgOiB1bmRlZmluZWQsXHJcblx0XHRkZWJ1ZyAgICAgICAgICAgOiBmYWxzZVxyXG5cdH07XHJcblxyXG5cclxuXHR2YXIgc3RhcnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0cmFrRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFrXScpO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHJha0VsZW1lbnRzLmxlbmd0aCA7IGkrKykge1xyXG5cdFx0XHR2YXIgX29wdGlvbnMgPSBKU09OLnBhcnNlKHRyYWtFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhaycpKTtcclxuXHJcblx0XHRcdC8vIFRoaXMgYWxsb3dzIHVzIHRvIGNob29zZSBvdGhlciBldmVudCB0eXBlcyBidXQgc2V0cyBjbGljayBhcyB0aGUgZGVmYXVsdFxyXG5cdFx0XHR2YXIgdHJpZ2dlciA9IF9vcHRpb25zLnRyaWdnZXIgfHwgJ2NsaWNrJztcclxuXHJcblx0XHRcdGlmICh0cmFrRWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHRcdHRyYWtFbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKHRyaWdnZXIsIGF0dHJFdmVudCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHJha0VsZW1lbnRzW2ldLmF0dGFjaEV2ZW50KSB7XHJcblx0XHRcdFx0dHJha0VsZW1lbnRzW2ldLmF0dGFjaEV2ZW50KCdvbicgKyB0cmlnZ2VyLCBhdHRyRXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHN0YXJ0ICAgICA6IHN0YXJ0LFxyXG5cdFx0Y2xlYW4gICAgIDogY2xlYW4sXHJcblx0XHRldmVudCAgICAgOiBldmVudCxcclxuXHRcdGF0dHJFdmVudCA6IGF0dHJFdmVudCxcclxuXHRcdHdpbGRjYXJkICA6IHdpbGRjYXJkLFxyXG5cdFx0b3B0aW9ucyAgIDogc2V0dGluZ3NcclxuXHR9O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG4vLyBDaGVjayBmb3IgQU1EL01vZHVsZSBzdXBwb3J0LCBvdGhlcndpc2UgZGVmaW5lIHRyYWsgYXMgYSBnbG9iYWwgdmFyaWFibGUuXHJcbmlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyAmJiBkZWZpbmUuYW1kKSB7XHJcblx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG5cdGRlZmluZSAoZnVuY3Rpb24oKSB7XHJcblx0XHQndXNlIHN0cmljdCc7XHJcblx0XHRyZXR1cm4gdHJhaztcclxuXHR9KTtcclxufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG5cdG1vZHVsZS5leHBvcnRzID0gdHJhaztcclxufSBlbHNlIHtcclxuXHR3aW5kb3cudHJhayA9IHRyYWs7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdHJhay5qcy9kaXN0L3RyYWsuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==