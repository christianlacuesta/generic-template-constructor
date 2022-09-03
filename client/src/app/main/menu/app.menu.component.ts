import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';
import {AppComponent} from '../../app.component';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';

@Component({
    selector: 'app-menu',
    template: `
        <ul *ngIf="!loading" class="layout-menu">
            <li app-menuitem 
            *ngFor="let item of model; 
            let i = index;" 
            [item]="item" 
            [index]="i" 
            [root]="true">
            </li>
        </ul>
        <app-admin></app-admin>
    `
})
export class AppMenuComponent implements OnInit {



    model: any[] = [
        {
            label: 'Home Page', icon: 'pi pi-fw pi-home',
            items: [
                {id: 2, label: 'Home', icon: 'pi pi-home', badgeClass: 'p-badge-info'}
            ]
        },
    ];
    sessionLocalStore = JSON.parse(localStorage.getItem('userSession'));

    userRolePermissionSub: Subscription;
    userSessionSub: Subscription;
    getSystemsByOrganizationSub: Subscription;

    loading: boolean = false;

    constructor(public app: AppComponent,
                private store: Store<AppState>) {}

    ngOnInit() {

             
    }

    ngOnDestroy() {
        
    }
}
