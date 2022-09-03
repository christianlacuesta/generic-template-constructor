import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import {AppComponent} from '../../app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer flex align-items-center p-2 shadow-2">
            <!-- <img *ngIf="logo" id="footer-logo" [src]="logo" alt="ultima-footer-logo"  style="height: 4rem">
            <img *ngIf="!logo" id="footer-logo" [src]="'assets/layout/images/footer-' + (app.layoutMode === 'light' ? 'ultima' : 'ultima-dark') + '.svg'" alt="ultima-footer-logo"> -->
            <!-- <button pButton pRipple type="button" icon="pi pi-github fs-large" class="p-button-rounded p-button-text p-button-plain" [ngClass]="{'ml-auto mr-2': !app.isRTL, 'ml-2 mr-auto': app.isRTL}"></button>
            <button pButton pRipple type="button" icon="pi pi-facebook fs-large" class="p-button-rounded p-button-text p-button-plain" [ngClass]="{'mr-2': !app.isRTL, 'ml-2': app.isRTL}"></button>
            <button pButton pRipple type="button" icon="pi pi-twitter fs-large" class="p-button-rounded p-button-text p-button-plain" [ngClass]="{'mr-2': !app.isRTL, 'ml-2': app.isRTL}"></button> -->
        </div>
    `
})
export class AppFooterComponent {
    organization$: Observable<any[]>;
    logo: string;
    routeSub: Subscription;

    constructor(public app: AppComponent,
                private route: ActivatedRoute,
                private store: Store<AppState>) {}

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}
