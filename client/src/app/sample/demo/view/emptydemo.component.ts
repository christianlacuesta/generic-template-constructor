import {Component} from '@angular/core';
import {AppBreadcrumbService} from '../../layout/breadcrumb/app.breadcrumb.service';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent {

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Pages'},
            {label: 'Empty Page'}
        ]);
    }
}
