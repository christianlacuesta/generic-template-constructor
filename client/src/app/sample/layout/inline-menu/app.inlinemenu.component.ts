import { Component, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { AppMainComponent } from '../main/app.main.component';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'app-inline-menu',
    template: `
    <div [ngClass]="{'layout-inline-menu': true, 'layout-inline-menu-active':appMain.inlineMenuActive[key]}" [ngStyle]="style" [class]="styleClass" [style.minWidth]="appMain.isHorizontal() ? '165px' : 0">
        <a class="layout-inline-menu-action flex flex-row align-items-center" [ngClass]="appMain.isHorizontal() ? 'p-3 py-3' : 'p-3'" (click)="onClick($event)"
            pTooltip="Amy Elsner" [tooltipDisabled]="isTooltipDisabled">
            <img src="assets/demo/images/avatar/amyelsner.png" alt="avatar" style="width: 32px; height: 32px;">
            <span class="flex flex-column" [ngClass]="{'ml-2': !app.isRTL, 'mr-2': app.isRTL}">
                <span class="font-bold">Amy Elsner</span>
                <small>Webmaster</small>
            </span>
            <i class="layout-inline-menu-icon pi pi-angle-down" [ngClass]="{'ml-auto': !app.isRTL, 'mr-auto': app.isRTL}"></i>
        </a>

        <ul class="layout-inline-menu-action-panel" [@menu]="appMain.inlineMenuActive[key] ? isHorizontalActive() ? 'visible' : 'visibleAnimated' : isHorizontalActive() ? 'hidden' : 'hiddenAnimated'">
            <li class="layout-inline-menu-action-item" pTooltip="Settings" [tooltipDisabled]="isTooltipDisabled">
                <a class="flex flex-row align-items-center" [attr.tabindex]="tabIndex">
                    <i class="pi pi-cog pi-fw"></i>
                    <span>Settings</span>
                </a>
            </li>
            <li class="layout-inline-menu-action-item" pTooltip="Terms of Usage" [tooltipDisabled]="isTooltipDisabled">
                <a class="flex flex-row align-items-center" [attr.tabindex]="tabIndex">
                    <i class="pi pi-file-o pi-fw"></i>
                    <span>Terms of Usage</span>
                </a>
            </li>
            <li class="layout-inline-menu-action-item" pTooltip="Support" [tooltipDisabled]="isTooltipDisabled">
                <a class="flex flex-row align-items-center" [attr.tabindex]="tabIndex">
                    <i class="pi pi-compass pi-fw"></i>
                    <span>Support</span>
                </a>
            </li>
            <li class="layout-inline-menu-action-item" pTooltip="Logout" [tooltipDisabled]="isTooltipDisabled">
                <a class="flex flex-row align-items-center" [attr.tabindex]="tabIndex">
                    <i class="pi pi-power-off pi-fw"></i>
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    </div>
    `,
    animations: [
        trigger('menu', [
            state('hiddenAnimated', style({
                height: '0px',
                paddingBottom: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*',
                overflow: 'visible'
            })),
            state('visible', style({
                opacity: 1,
                'z-index': 100
            })),
            state('hidden', style({
                opacity: 0,
                'z-index': '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('visible => hidden', animate('.1s linear')),
            transition('hidden => visible', [style({transform: 'scaleY(0.8)'}), animate('.12s cubic-bezier(0, 0, 0.2, 1)')])
        ])
    ]
})
export class AppInlineMenuComponent {

    @Input() key = 'inline-menu';

    @Input() style: any;

    @Input() styleClass: string = '';

    active: boolean = false;

    constructor(public appMain: AppMainComponent, public app: AppComponent) { }

    onClick(event: any) {
        this.appMain.onInlineMenuClick(event, this.key);
        event.preventDefault();
    }

    get isTooltipDisabled() {
        return !(this.appMain.isSlim() && !this.appMain.isMobile());
    }

    get tabIndex() {
        return !this.appMain.inlineMenuActive  ? '-1' : null;
    }

    isHorizontalActive() {
       return this.appMain.isHorizontal() && !this.appMain.isMobile();
    }
}
