import {Component, AfterViewInit, Renderer2, OnInit, OnDestroy} from '@angular/core';
import { MenuService } from '../menu/app.menu.service';
import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html'
})
export class AppMainComponent implements AfterViewInit, OnInit, OnDestroy {

    topbarMenuActive: boolean = false;

    menuActive: boolean = false;

    staticMenuDesktopInactive: boolean = false;

    mobileMenuActive: boolean = false;

    menuClick: boolean = false;

    mobileTopbarActive: boolean = false;

    topbarRightClick: boolean = false;

    topbarItemClick: boolean = false;

    activeTopbarItem: string = '';

    documentClickListener!: () => void;

    configActive: boolean = false;

    configClick: boolean = false;

    rightMenuActive: boolean = false;

    menuHoverActive = false;

    searchClick = false;

    search = false;

    currentInlineMenuKey: number = 0;

    inlineMenuActive: any[] = [];

    inlineMenuClick: boolean = false;

    constructor(public renderer: Renderer2, private menuService: MenuService, private primengConfig: PrimeNGConfig,
                public app: AppComponent) { }

    ngOnInit() {
        this.menuActive = this.isStatic() && !this.isMobile();
    }

    ngAfterViewInit() {
        // hides the horizontal submenus or top menu if outside is clicked
        this.documentClickListener = this.renderer.listen('body', 'click', () => {
            if (!this.topbarItemClick) {
                this.activeTopbarItem = '';
                this.topbarMenuActive = false;
            }

            if (!this.menuClick && (this.isHorizontal() || this.isSlim())) {
                this.menuService.reset();
            }

            if (this.configActive && !this.configClick) {
                this.configActive = false;
            }

            if (!this.menuClick) {
                if (this.mobileMenuActive) {
                    this.mobileMenuActive = false;
                }

                if (this.isOverlay()) {
                    this.menuActive = false;
                }

                this.menuHoverActive = false;
                this.unblockBodyScroll();
            }

            if (!this.searchClick) {
                this.search = false;
            }

            if (this.inlineMenuActive[this.currentInlineMenuKey] && !this.inlineMenuClick) {
                this.inlineMenuActive[this.currentInlineMenuKey] = false;
            }

            this.inlineMenuClick = false;
            this.searchClick = false;
            this.configClick = false;
            this.topbarItemClick = false;
            this.topbarRightClick = false;
            this.menuClick = false;
        });
    }

    onMenuButtonClick(event: any) {
        this.menuActive = !this.menuActive;
        this.topbarMenuActive = false;
        this.topbarRightClick = true;
        this.menuClick = true;

        if (this.isDesktop()) {
            this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
        } else {
            this.mobileMenuActive = !this.mobileMenuActive;
            if (this.mobileMenuActive) {
                this.blockBodyScroll();
            } else {
                this.unblockBodyScroll();
            }
        }

        event.preventDefault();
    }

    onTopbarMobileButtonClick(event: any) {
        this.mobileTopbarActive = !this.mobileTopbarActive;
        event.preventDefault();
    }

    onRightMenuButtonClick(event: any) {
        this.rightMenuActive = !this.rightMenuActive;
        event.preventDefault();
    }

    onMenuClick($event: any) {
        this.menuClick = true;

        if (this.inlineMenuActive[this.currentInlineMenuKey] && !this.inlineMenuClick) {
            this.inlineMenuActive[this.currentInlineMenuKey] = false;
        }
    }

    onSearchKeydown(event: any) {
        if (event.keyCode === 27) {
            this.search = false;
        }
    }

    onInlineMenuClick(event: any, key: any) {
        if (key !== this.currentInlineMenuKey) {
            this.inlineMenuActive[this.currentInlineMenuKey] = false;
        }

        this.inlineMenuActive[key] = !this.inlineMenuActive[key];
        this.currentInlineMenuKey = key;
        this.inlineMenuClick = true;
    }

    onTopbarItemClick(event: any, item: any) {
        this.topbarItemClick = true;

        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = '';
        }
        else {
            this.activeTopbarItem = item;
        }

        if (item === 'search') {
            this.search = !this.search;
            this.searchClick = !this.searchClick;
        }

        event.preventDefault();
    }

    onTopbarSubItemClick(event: any) {
        event.preventDefault();
    }

    onRTLChange(event: any) {
        this.app.isRTL = event.checked;
    }

    onRippleChange(event: any) {
        this.app.ripple = event.checked;
        this.primengConfig.ripple = event.checked;
    }

    onConfigClick(event: any) {
        this.configClick = true;
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return window.innerWidth <= 991;
    }

    isOverlay() {
        return this.app.menuMode === 'overlay';
    }

    isStatic() {
        return this.app.menuMode === 'static';
    }

    isHorizontal() {
        return this.app.menuMode === 'horizontal';
    }

    isSlim() {
        return this.app.menuMode === 'slim';
    }

    blockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    }

    unblockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
    }
}
