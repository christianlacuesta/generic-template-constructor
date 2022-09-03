import { Component, OnDestroy } from '@angular/core';
import { AppBreadcrumbService } from './app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './app.breadcrumb.component.html'
})
export class AppBreadcrumbComponent implements OnDestroy {
    sessionLocalStore = JSON.parse(localStorage.getItem('userSession'));

    subscription: Subscription;

    items: MenuItem[];

    home: MenuItem;


    constructor(public breadcrumbService: AppBreadcrumbService,
                private router: Router,
                private store: Store<AppState>) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });

        this.home = { icon: 'pi pi-home', routerLink: '' };
    }

    ngOnInit() {

    }

    changeRoute(event: Event) {

    }


    ngOnDestroy() {

    }
}
