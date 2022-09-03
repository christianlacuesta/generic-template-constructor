import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';

@Component({
    templateUrl: './buttondemo.component.html'
})
export class ButtonDemoComponent implements OnInit {

    items: MenuItem[];

    loading = [false, false, false, false];

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'UI Kit'},
            {label: 'Button'}
        ]);
    }

    ngOnInit() {
        this.items = [
            {label: 'Update', icon: 'pi pi-refresh'},
            {label: 'Delete', icon: 'pi pi-times'},
            {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
            {separator: true},
            {label: 'Setup', icon: 'pi pi-cog'}
        ];
    }

    load(index) {
        this.loading[index] = true;
        setTimeout(() => this.loading[index] = false, 1000);
    }
}
