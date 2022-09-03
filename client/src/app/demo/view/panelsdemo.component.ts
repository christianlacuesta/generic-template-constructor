import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';

@Component({
    templateUrl: './panelsdemo.component.html',
})
export class PanelsDemoComponent implements OnInit {

    items: MenuItem[];

    cardMenu: MenuItem[];

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'UI Kit'},
            {label: 'Panel'}
        ]);
    }

    ngOnInit() {
        this.items = [
            {label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'pi pi-bookmark', routerLink: ['/theming']}
        ];

        this.cardMenu = [
            {
                label: 'Save', icon: 'pi pi-fw pi-check'
            },
            {
                label: 'Update', icon: 'pi pi-fw pi-refresh'
            },
            {
                label: 'Delete', icon: 'pi pi-fw pi-trash'
            },
        ];
    }
}
