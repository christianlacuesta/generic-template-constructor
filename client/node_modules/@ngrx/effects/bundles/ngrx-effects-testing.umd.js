(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/effects'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@ngrx/effects/testing', ['exports', '@ngrx/effects', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngrx = global.ngrx || {}, global.ngrx.effects = global.ngrx.effects || {}, global.ngrx.effects.testing = {}), global.ngrx.effects, global.rxjs));
}(this, (function (exports, effects, rxjs) { 'use strict';

    /**
     * @description
     * Creates mock actions provider.
     *
     * @param factoryOrSource Actions' source or source creation function
     *
     * @usageNotes
     *
     * **With `TestBed.configureTestingModule`**
     *
     * ```ts
     * describe('Books Effects', () => {
     *   let actions$: Observable<any>;
     *   let effects: BooksEffects;
     *
     *   beforeEach(() => {
     *     TestBed.configureTestingModule({
     *       providers: [
     *         provideMockActions(() => actions$),
     *         BooksEffects,
     *       ],
     *     });
     *
     *     actions$ = TestBed.inject(Actions);
     *     effects = TestBed.inject(BooksEffects);
     *   });
     * });
     * ```
     *
     * **With `Injector.create`**
     *
     * ```ts
     * describe('Counter Effects', () => {
     *   let injector: Injector;
     *   let actions$: Observable<any>;
     *   let effects: CounterEffects;
     *
     *   beforeEach(() => {
     *     injector = Injector.create({
     *       providers: [
     *         provideMockActions(() => actions$),
     *         CounterEffects,
     *       ],
     *     });
     *
     *     actions$ = injector.get(Actions);
     *     effects = injector.get(CounterEffects);
     *   });
     * });
     * ```
     */
    function provideMockActions(factoryOrSource) {
        return {
            provide: effects.Actions,
            useFactory: function () {
                if (typeof factoryOrSource === 'function') {
                    return new effects.Actions(rxjs.defer(factoryOrSource));
                }
                return new effects.Actions(factoryOrSource);
            },
            deps: [],
        };
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.provideMockActions = provideMockActions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngrx-effects-testing.umd.js.map
