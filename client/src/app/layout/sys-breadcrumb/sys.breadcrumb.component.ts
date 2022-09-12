import { Component, OnDestroy } from '@angular/core';
import { SysBreadcrumbService } from './sys.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'sys-breadcrumb',
    templateUrl: './sys.breadcrumb.component.html'
})
export class SysBreadcrumbComponent implements OnDestroy {

    subscription: Subscription;

    items: MenuItem[];

    home: MenuItem;

    constructor(public breadcrumbService: SysBreadcrumbService) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
