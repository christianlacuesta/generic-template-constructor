import { ElementRef, AfterContentInit, EventEmitter, QueryList, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { Header, Footer, BlockableUI } from 'primeng/api';
import { Scroller, ScrollerOptions } from 'primeng/scroller';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
import * as i3 from "primeng/scroller";
export declare class VirtualScroller implements AfterContentInit, BlockableUI {
    el: ElementRef;
    cd: ChangeDetectorRef;
    value: any[];
    itemSize: number;
    style: any;
    styleClass: string;
    scrollHeight: any;
    lazy: boolean;
    options: ScrollerOptions;
    delay: number;
    header: Header;
    footer: Footer;
    templates: QueryList<any>;
    scroller: Scroller;
    onLazyLoad: EventEmitter<any>;
    itemTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    loadingItemTemplate: TemplateRef<any>;
    virtualScrollTimeout: any;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    onLazyItemLoad(event: any): void;
    getBlockableElement(): HTMLElement;
    scrollToIndex(index: number, mode?: ScrollBehavior): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VirtualScroller, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VirtualScroller, "p-virtualScroller", never, { "value": "value"; "itemSize": "itemSize"; "style": "style"; "styleClass": "styleClass"; "scrollHeight": "scrollHeight"; "lazy": "lazy"; "options": "options"; "delay": "delay"; }, { "onLazyLoad": "onLazyLoad"; }, ["header", "footer", "templates"], ["p-header", "p-footer"], false>;
}
export declare class VirtualScrollerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<VirtualScrollerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<VirtualScrollerModule, [typeof VirtualScroller], [typeof i1.CommonModule, typeof i2.SharedModule, typeof i3.ScrollerModule], [typeof VirtualScroller, typeof i2.SharedModule, typeof i3.ScrollerModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<VirtualScrollerModule>;
}
