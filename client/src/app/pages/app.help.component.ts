import { Component } from '@angular/core';
import {AppBreadcrumbService} from '../app.breadcrumb.service';

@Component({
    selector: 'app-help',
    templateUrl: './app.help.component.html',
})
export class AppHelpComponent {

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Pages' },
            { label: 'Help', routerLink: ['/pages/help'] }
        ]);
    }
}
