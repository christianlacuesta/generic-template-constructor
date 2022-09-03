(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ngrx/effects', ['exports', '@ngrx/store', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngrx = global.ngrx || {}, global.ngrx.effects = {}), global.ngrx.store, global.rxjs, global.rxjs.operators, global.ng.core));
}(this, (function (exports, store, rxjs, operators, core) { 'use strict';

    var DEFAULT_EFFECT_CONFIG = {
        dispatch: true,
        useEffectsErrorHandler: true,
    };
    var CREATE_EFFECT_METADATA_KEY = '__@ngrx/effects_create__';

    /**
     * @description
     * Creates an effect from an `Observable` and an `EffectConfig`.
     *
     * @param source A function which returns an `Observable`.
     * @param config A `Partial<EffectConfig>` to configure the effect.  By default, `dispatch` is true and `useEffectsErrorHandler` is true.
     * @returns If `EffectConfig`#`dispatch` is true, returns `Observable<Action>`.  Else, returns `Observable<unknown>`.
     *
     * @usageNotes
     *
     * ** Mapping to a different action **
     * ```ts
     * effectName$ = createEffect(
     *   () => this.actions$.pipe(
     *     ofType(FeatureActions.actionOne),
     *     map(() => FeatureActions.actionTwo())
     *   )
     * );
     * ```
     *
     *  ** Non-dispatching effects **
     * ```ts
     * effectName$ = createEffect(
     *   () => this.actions$.pipe(
     *     ofType(FeatureActions.actionOne),
     *     tap(() => console.log('Action One Dispatched'))
     *   ),
     *   { dispatch: false }
     *   // FeatureActions.actionOne is not dispatched
     * );
     * ```
     */
    function createEffect(source, config) {
        var effect = source();
        var value = Object.assign(Object.assign({}, DEFAULT_EFFECT_CONFIG), config);
        Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
            value: value,
        });
        return effect;
    }
    function getCreateEffectMetadata(instance) {
        var propertyNames = Object.getOwnPropertyNames(instance);
        var metadata = propertyNames
            .filter(function (propertyName) {
            if (instance[propertyName] &&
                instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY)) {
                // If the property type has overridden `hasOwnProperty` we need to ensure
                // that the metadata is valid (containing a `dispatch`property)
                // https://github.com/ngrx/platform/issues/2975
                var property = instance[propertyName];
                return property[CREATE_EFFECT_METADATA_KEY].hasOwnProperty('dispatch');
            }
            return false;
        })
            .map(function (propertyName) {
            var metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
            return Object.assign({ propertyName: propertyName }, metaData);
        });
        return metadata;
    }

    function getSourceForInstance(instance) {
        return Object.getPrototypeOf(instance);
    }

    var METADATA_KEY = '__@ngrx/effects__';
    /**
     * @deprecated The Effect decorator (`@Effect`) is deprecated in favor for the `createEffect` method.
     * See the docs for more info {@link https://ngrx.io/guide/migration/v11#the-effect-decorator}
     */
    function Effect(config) {
        if (config === void 0) { config = {}; }
        return function (target, propertyName) {
            var metadata = Object.assign(Object.assign(Object.assign({}, DEFAULT_EFFECT_CONFIG), config), {
                propertyName: propertyName
            });
            addEffectMetadataEntry(target, metadata);
        };
    }
    function getEffectDecoratorMetadata(instance) {
        var effectsDecorators = store.compose(getEffectMetadataEntries, getSourceForInstance)(instance);
        return effectsDecorators;
    }
    /**
     * Type guard to detemine whether METADATA_KEY is already present on the Class
     * constructor
     */
    function hasMetadataEntries(sourceProto) {
        return sourceProto.constructor.hasOwnProperty(METADATA_KEY);
    }
    /** Add Effect Metadata to the Effect Class constructor under specific key */
    function addEffectMetadataEntry(sourceProto, metadata) {
        if (hasMetadataEntries(sourceProto)) {
            sourceProto.constructor[METADATA_KEY].push(metadata);
        }
        else {
            Object.defineProperty(sourceProto.constructor, METADATA_KEY, {
                value: [metadata],
            });
        }
    }
    function getEffectMetadataEntries(sourceProto) {
        return hasMetadataEntries(sourceProto)
            ? sourceProto.constructor[METADATA_KEY]
            : [];
    }

    function getEffectsMetadata(instance) {
        return getSourceMetadata(instance).reduce(function (acc, _a) {
            var propertyName = _a.propertyName, dispatch = _a.dispatch, useEffectsErrorHandler = _a.useEffectsErrorHandler;
            acc[propertyName] = { dispatch: dispatch, useEffectsErrorHandler: useEffectsErrorHandler };
            return acc;
        }, {});
    }
    function getSourceMetadata(instance) {
        var effects = [
            getEffectDecoratorMetadata,
            getCreateEffectMetadata,
        ];
        return effects.reduce(function (sources, source) { return sources.concat(source(instance)); }, []);
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function mergeEffects(sourceInstance, globalErrorHandler, effectsErrorHandler) {
        var sourceName = getSourceForInstance(sourceInstance).constructor.name;
        var observables$ = getSourceMetadata(sourceInstance).map(function (_a) {
            var propertyName = _a.propertyName, dispatch = _a.dispatch, useEffectsErrorHandler = _a.useEffectsErrorHandler;
            var observable$ = typeof sourceInstance[propertyName] === 'function'
                ? sourceInstance[propertyName]()
                : sourceInstance[propertyName];
            var effectAction$ = useEffectsErrorHandler
                ? effectsErrorHandler(observable$, globalErrorHandler)
                : observable$;
            if (dispatch === false) {
                return effectAction$.pipe(operators.ignoreElements());
            }
            var materialized$ = effectAction$.pipe(operators.materialize());
            return materialized$.pipe(operators.map(function (notification) { return ({
                effect: sourceInstance[propertyName],
                notification: notification,
                propertyName: propertyName,
                sourceName: sourceName,
                sourceInstance: sourceInstance,
            }); }));
        });
        return rxjs.merge.apply(void 0, __spreadArray([], __read(observables$)));
    }

    var MAX_NUMBER_OF_RETRY_ATTEMPTS = 10;
    function defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft) {
        if (retryAttemptLeft === void 0) { retryAttemptLeft = MAX_NUMBER_OF_RETRY_ATTEMPTS; }
        return observable$.pipe(operators.catchError(function (error) {
            if (errorHandler)
                errorHandler.handleError(error);
            if (retryAttemptLeft <= 1) {
                return observable$; // last attempt
            }
            // Return observable that produces this particular effect
            return defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft - 1);
        }));
    }

    var Actions = /** @class */ (function (_super) {
        __extends(Actions, _super);
        function Actions(source) {
            var _this = _super.call(this) || this;
            if (source) {
                _this.source = source;
            }
            return _this;
        }
        Actions.prototype.lift = function (operator) {
            var observable = new Actions();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        return Actions;
    }(rxjs.Observable));
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Actions.decorators = [
        { type: core.Injectable }
    ];
    /**
     * @type {function(): !Array<(null|{
     *   type: ?,
     *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
     * })>}
     * @nocollapse
     */
    Actions.ctorParameters = function () { return [
        { type: rxjs.Observable, decorators: [{ type: core.Inject, args: [store.ScannedActionsSubject,] }] }
    ]; };
    /**
     * `ofType` filters an Observable of `Actions` into an Observable of the actions
     * whose type strings are passed to it.
     *
     * For example, if `actions` has type `Actions<AdditionAction|SubstractionAction>`, and
     * the type of the `Addition` action is `add`, then
     * `actions.pipe(ofType('add'))` returns an `Observable<AdditionAction>`.
     *
     * Properly typing this function is hard and requires some advanced TS tricks
     * below.
     *
     * Type narrowing automatically works, as long as your `actions` object
     * starts with a `Actions<SomeUnionOfActions>` instead of generic `Actions`.
     *
     * For backwards compatibility, when one passes a single type argument
     * `ofType<T>('something')` the result is an `Observable<T>`. Note, that `T`
     * completely overrides any possible inference from 'something'.
     *
     * Unfortunately, for unknown 'actions: Actions' these types will produce
     * 'Observable<never>'. In such cases one has to manually set the generic type
     * like `actions.ofType<AdditionAction>('add')`.
     *
     * @usageNotes
     *
     * Filter the Actions stream on the "customers page loaded" action
     *
     * ```ts
     * import { ofType } from '@ngrx/effects';
     * import * fromCustomers from '../customers';
     *
     * this.actions$.pipe(
     *  ofType(fromCustomers.pageLoaded)
     * )
     * ```
     */
    function ofType() {
        var allowedTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            allowedTypes[_i] = arguments[_i];
        }
        return operators.filter(function (action) { return allowedTypes.some(function (typeOrActionCreator) {
            if (typeof typeOrActionCreator === 'string') {
                // Comparing the string to type
                return typeOrActionCreator === action.type;
            }
            // We are filtering by ActionCreator
            return typeOrActionCreator.type === action.type;
        }); });
    }

    function reportInvalidActions(output, reporter) {
        if (output.notification.kind === 'N') {
            var action = output.notification.value;
            var isInvalidAction = !isAction(action);
            if (isInvalidAction) {
                reporter.handleError(new Error("Effect " + getEffectName(output) + " dispatched an invalid action: " + stringify(action)));
            }
        }
    }
    function isAction(action) {
        return (typeof action !== 'function' &&
            action &&
            action.type &&
            typeof action.type === 'string');
    }
    function getEffectName(_b) {
        var propertyName = _b.propertyName, sourceInstance = _b.sourceInstance, sourceName = _b.sourceName;
        var isMethod = typeof sourceInstance[propertyName] === 'function';
        return "\"" + sourceName + "." + String(propertyName) + (isMethod ? '()' : '') + "\"";
    }
    function stringify(action) {
        try {
            return JSON.stringify(action);
        }
        catch (_a) {
            return action;
        }
    }

    var onIdentifyEffectsKey = 'ngrxOnIdentifyEffects';
    function isOnIdentifyEffects(instance) {
        return isFunction(instance, onIdentifyEffectsKey);
    }
    var onRunEffectsKey = 'ngrxOnRunEffects';
    function isOnRunEffects(instance) {
        return isFunction(instance, onRunEffectsKey);
    }
    var onInitEffects = 'ngrxOnInitEffects';
    function isOnInitEffects(instance) {
        return isFunction(instance, onInitEffects);
    }
    function isFunction(instance, functionName) {
        return (instance &&
            functionName in instance &&
            typeof instance[functionName] === 'function');
    }

    var _ROOT_EFFECTS_GUARD = new core.InjectionToken('@ngrx/effects Internal Root Guard');
    var USER_PROVIDED_EFFECTS = new core.InjectionToken('@ngrx/effects User Provided Effects');
    var _ROOT_EFFECTS = new core.InjectionToken('@ngrx/effects Internal Root Effects');
    var ROOT_EFFECTS = new core.InjectionToken('@ngrx/effects Root Effects');
    var _FEATURE_EFFECTS = new core.InjectionToken('@ngrx/effects Internal Feature Effects');
    var FEATURE_EFFECTS = new core.InjectionToken('@ngrx/effects Feature Effects');
    var EFFECTS_ERROR_HANDLER = new core.InjectionToken('@ngrx/effects Effects Error Handler');

    var EffectSources = /** @class */ (function (_super) {
        __extends(EffectSources, _super);
        function EffectSources(errorHandler, effectsErrorHandler) {
            var _this = _super.call(this) || this;
            _this.errorHandler = errorHandler;
            _this.effectsErrorHandler = effectsErrorHandler;
            return _this;
        }
        EffectSources.prototype.addEffects = function (effectSourceInstance) {
            this.next(effectSourceInstance);
        };
        /**
         * @internal
         */
        EffectSources.prototype.toActions = function () {
            var _this = this;
            return this.pipe(operators.groupBy(getSourceForInstance), operators.mergeMap(function (source$) {
                return source$.pipe(operators.groupBy(effectsInstance));
            }), operators.mergeMap(function (source$) {
                var effect$ = source$.pipe(operators.exhaustMap(function (sourceInstance) {
                    return resolveEffectSource(_this.errorHandler, _this.effectsErrorHandler)(sourceInstance);
                }), operators.map(function (output) {
                    reportInvalidActions(output, _this.errorHandler);
                    return output.notification;
                }), operators.filter(function (notification) { return notification.kind === 'N' && notification.value != null; }), operators.dematerialize());
                // start the stream with an INIT action
                // do this only for the first Effect instance
                var init$ = source$.pipe(operators.take(1), operators.filter(isOnInitEffects), operators.map(function (instance) { return instance.ngrxOnInitEffects(); }));
                return rxjs.merge(effect$, init$);
            }));
        };
        return EffectSources;
    }(rxjs.Subject));
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EffectSources.decorators = [
        { type: core.Injectable }
    ];
    /**
     * @type {function(): !Array<(null|{
     *   type: ?,
     *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
     * })>}
     * @nocollapse
     */
    EffectSources.ctorParameters = function () { return [
        { type: core.ErrorHandler },
        { type: undefined, decorators: [{ type: core.Inject, args: [EFFECTS_ERROR_HANDLER,] }] }
    ]; };
    function effectsInstance(sourceInstance) {
        if (isOnIdentifyEffects(sourceInstance)) {
            return sourceInstance.ngrxOnIdentifyEffects();
        }
        return '';
    }
    function resolveEffectSource(errorHandler, effectsErrorHandler) {
        return function (sourceInstance) {
            var mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
            if (isOnRunEffects(sourceInstance)) {
                return sourceInstance.ngrxOnRunEffects(mergedEffects$);
            }
            return mergedEffects$;
        };
    }

    var EffectsRunner = /** @class */ (function () {
        function EffectsRunner(effectSources, store) {
            this.effectSources = effectSources;
            this.store = store;
            this.effectsSubscription = null;
        }
        EffectsRunner.prototype.start = function () {
            if (!this.effectsSubscription) {
                this.effectsSubscription = this.effectSources
                    .toActions()
                    .subscribe(this.store);
            }
        };
        EffectsRunner.prototype.ngOnDestroy = function () {
            if (this.effectsSubscription) {
                this.effectsSubscription.unsubscribe();
                this.effectsSubscription = null;
            }
        };
        return EffectsRunner;
    }());
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EffectsRunner.decorators = [
        { type: core.Injectable }
    ];
    /**
     * @type {function(): !Array<(null|{
     *   type: ?,
     *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
     * })>}
     * @nocollapse
     */
    EffectsRunner.ctorParameters = function () { return [
        { type: EffectSources },
        { type: store.Store }
    ]; };

    var ROOT_EFFECTS_INIT = '@ngrx/effects/init';
    var rootEffectsInit = store.createAction(ROOT_EFFECTS_INIT);
    var EffectsRootModule = /** @class */ (function () {
        function EffectsRootModule(sources, runner, store, rootEffects, storeRootModule, storeFeatureModule, guard) {
            this.sources = sources;
            runner.start();
            rootEffects.forEach(function (effectSourceInstance) { return sources.addEffects(effectSourceInstance); });
            store.dispatch({ type: ROOT_EFFECTS_INIT });
        }
        EffectsRootModule.prototype.addEffects = function (effectSourceInstance) {
            this.sources.addEffects(effectSourceInstance);
        };
        return EffectsRootModule;
    }());
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EffectsRootModule.decorators = [
        { type: core.NgModule, args: [{},] }
    ];
    /**
     * @type {function(): !Array<(null|{
     *   type: ?,
     *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
     * })>}
     * @nocollapse
     */
    EffectsRootModule.ctorParameters = function () { return [
        { type: EffectSources },
        { type: EffectsRunner },
        { type: store.Store },
        { type: Array, decorators: [{ type: core.Inject, args: [ROOT_EFFECTS,] }] },
        { type: store.StoreRootModule, decorators: [{ type: core.Optional }] },
        { type: store.StoreFeatureModule, decorators: [{ type: core.Optional }] },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [_ROOT_EFFECTS_GUARD,] }] }
    ]; };

    var EffectsFeatureModule = /** @class */ (function () {
        function EffectsFeatureModule(root, effectSourceGroups, storeRootModule, storeFeatureModule) {
            effectSourceGroups.forEach(function (group) { return group.forEach(function (effectSourceInstance) { return root.addEffects(effectSourceInstance); }); });
        }
        return EffectsFeatureModule;
    }());
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EffectsFeatureModule.decorators = [
        { type: core.NgModule, args: [{},] }
    ];
    /**
     * @type {function(): !Array<(null|{
     *   type: ?,
     *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
     * })>}
     * @nocollapse
     */
    EffectsFeatureModule.ctorParameters = function () { return [
        { type: EffectsRootModule },
        { type: Array, decorators: [{ type: core.Inject, args: [FEATURE_EFFECTS,] }] },
        { type: store.StoreRootModule, decorators: [{ type: core.Optional }] },
        { type: store.StoreFeatureModule, decorators: [{ type: core.Optional }] }
    ]; };

    var EffectsModule = /** @class */ (function () {
        function EffectsModule() {
        }
        EffectsModule.forFeature = function (featureEffects) {
            if (featureEffects === void 0) { featureEffects = []; }
            return {
                ngModule: EffectsFeatureModule,
                providers: [
                    featureEffects,
                    {
                        provide: _FEATURE_EFFECTS,
                        multi: true,
                        useValue: featureEffects,
                    },
                    {
                        provide: USER_PROVIDED_EFFECTS,
                        multi: true,
                        useValue: [],
                    },
                    {
                        provide: FEATURE_EFFECTS,
                        multi: true,
                        useFactory: createEffects,
                        deps: [core.Injector, _FEATURE_EFFECTS, USER_PROVIDED_EFFECTS],
                    },
                ],
            };
        };
        EffectsModule.forRoot = function (rootEffects) {
            if (rootEffects === void 0) { rootEffects = []; }
            return {
                ngModule: EffectsRootModule,
                providers: [
                    {
                        provide: EFFECTS_ERROR_HANDLER,
                        useValue: defaultEffectsErrorHandler,
                    },
                    EffectsRunner,
                    EffectSources,
                    Actions,
                    rootEffects,
                    {
                        provide: _ROOT_EFFECTS,
                        useValue: [rootEffects],
                    },
                    {
                        provide: _ROOT_EFFECTS_GUARD,
                        useFactory: _provideForRootGuard,
                        deps: [
                            [EffectsRunner, new core.Optional(), new core.SkipSelf()],
                            [_ROOT_EFFECTS, new core.Self()],
                        ],
                    },
                    {
                        provide: USER_PROVIDED_EFFECTS,
                        multi: true,
                        useValue: [],
                    },
                    {
                        provide: ROOT_EFFECTS,
                        useFactory: createEffects,
                        deps: [core.Injector, _ROOT_EFFECTS, USER_PROVIDED_EFFECTS],
                    },
                ],
            };
        };
        return EffectsModule;
    }());
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    EffectsModule.decorators = [
        { type: core.NgModule, args: [{},] }
    ];
    function createEffects(injector, effectGroups, userProvidedEffectGroups) {
        var e_1, _a, e_2, _b;
        var mergedEffects = [];
        try {
            for (var effectGroups_1 = __values(effectGroups), effectGroups_1_1 = effectGroups_1.next(); !effectGroups_1_1.done; effectGroups_1_1 = effectGroups_1.next()) {
                var effectGroup = effectGroups_1_1.value;
                mergedEffects.push.apply(mergedEffects, __spreadArray([], __read(effectGroup)));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (effectGroups_1_1 && !effectGroups_1_1.done && (_a = effectGroups_1.return)) _a.call(effectGroups_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var userProvidedEffectGroups_1 = __values(userProvidedEffectGroups), userProvidedEffectGroups_1_1 = userProvidedEffectGroups_1.next(); !userProvidedEffectGroups_1_1.done; userProvidedEffectGroups_1_1 = userProvidedEffectGroups_1.next()) {
                var userProvidedEffectGroup = userProvidedEffectGroups_1_1.value;
                mergedEffects.push.apply(mergedEffects, __spreadArray([], __read(userProvidedEffectGroup)));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (userProvidedEffectGroups_1_1 && !userProvidedEffectGroups_1_1.done && (_b = userProvidedEffectGroups_1.return)) _b.call(userProvidedEffectGroups_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return createEffectInstances(injector, mergedEffects);
    }
    function createEffectInstances(injector, effects) {
        return effects.map(function (effect) { return injector.get(effect); });
    }
    function _provideForRootGuard(runner, rootEffects) {
        // check whether any effects are actually passed
        var hasEffects = !(rootEffects.length === 1 && rootEffects[0].length === 0);
        if (hasEffects && runner) {
            throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");
        }
        return 'guarded';
    }

    /**
     * Wraps project fn with error handling making it safe to use in Effects.
     * Takes either a config with named properties that represent different possible
     * callbacks or project/error callbacks that are required.
     */
    function act(
    /** Allow to take either config object or project/error functions */
    configOrProject, errorFn) {
        var _a = typeof configOrProject === 'function'
            ? {
                project: configOrProject,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                error: errorFn,
                operator: operators.concatMap,
                complete: undefined,
                unsubscribe: undefined,
            }
            : Object.assign(Object.assign({}, configOrProject), { operator: configOrProject.operator || operators.concatMap }), project = _a.project, error = _a.error, complete = _a.complete, operator = _a.operator, unsubscribe = _a.unsubscribe;
        return function (source) { return rxjs.defer(function () {
            var subject = new rxjs.Subject();
            return rxjs.merge(source.pipe(operator(function (input, index) { return rxjs.defer(function () {
                var completed = false;
                var errored = false;
                var projectedCount = 0;
                return project(input, index).pipe(operators.materialize(), operators.map(function (notification) {
                    switch (notification.kind) {
                        case 'E':
                            errored = true;
                            return new rxjs.Notification('N', error(notification.error, input));
                        case 'C':
                            completed = true;
                            return complete
                                ? new rxjs.Notification('N', complete(projectedCount, input))
                                : undefined;
                        default:
                            ++projectedCount;
                            return notification;
                    }
                }), operators.filter(function (n) { return n != null; }), operators.dematerialize(), operators.finalize(function () {
                    if (!completed && !errored && unsubscribe) {
                        subject.next(unsubscribe(projectedCount, input));
                    }
                }));
            }); })), subject);
        }); };
    }

    /**
     * `concatLatestFrom` combines the source value
     * and the last available value from a lazily evaluated Observable
     * in a new array
     *
     * @usageNotes
     *
     * Select the active customer from the NgRx Store
     *
     * ```ts
     * import { concatLatestFrom } from '@ngrx/effects';
     * import * fromCustomers from '../customers';
     *
     * this.actions$.pipe(
     *  concatLatestFrom(() => this.store.select(fromCustomers.selectActiveCustomer))
     * )
     * ```
     *
     * Select a customer from the NgRx Store by its id that is available on the action
     *
     * ```ts
     * import { concatLatestFrom } from '@ngrx/effects';
     * import * fromCustomers from '../customers';
     *
     * this.actions$.pipe(
     *  concatLatestFrom((action) => this.store.select(fromCustomers.selectCustomer(action.customerId)))
     * )
     * ```
     */
    function concatLatestFrom(observablesFactory) {
        return rxjs.pipe(operators.concatMap(function (value) {
            var observables = observablesFactory(value);
            var observablesAsArray = Array.isArray(observables)
                ? observables
                : [observables];
            return rxjs.of(value).pipe(operators.withLatestFrom.apply(void 0, __spreadArray([], __read(observablesAsArray))));
        }));
    }

    /**
     * DO NOT EDIT
     *
     * This file is automatically generated at build
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Actions = Actions;
    exports.EFFECTS_ERROR_HANDLER = EFFECTS_ERROR_HANDLER;
    exports.Effect = Effect;
    exports.EffectSources = EffectSources;
    exports.EffectsFeatureModule = EffectsFeatureModule;
    exports.EffectsModule = EffectsModule;
    exports.EffectsRootModule = EffectsRootModule;
    exports.EffectsRunner = EffectsRunner;
    exports.ROOT_EFFECTS_INIT = ROOT_EFFECTS_INIT;
    exports.USER_PROVIDED_EFFECTS = USER_PROVIDED_EFFECTS;
    exports.act = act;
    exports.concatLatestFrom = concatLatestFrom;
    exports.createEffect = createEffect;
    exports.defaultEffectsErrorHandler = defaultEffectsErrorHandler;
    exports.getEffectsMetadata = getEffectsMetadata;
    exports.mergeEffects = mergeEffects;
    exports.ofType = ofType;
    exports.rootEffectsInit = rootEffectsInit;
    exports.ɵa = getSourceMetadata;
    exports.ɵb = createEffects;
    exports.ɵc = _provideForRootGuard;
    exports.ɵd = _ROOT_EFFECTS_GUARD;
    exports.ɵe = _ROOT_EFFECTS;
    exports.ɵf = ROOT_EFFECTS;
    exports.ɵg = _FEATURE_EFFECTS;
    exports.ɵh = FEATURE_EFFECTS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngrx-effects.umd.js.map
