import { Component } from '@angular/core';
import { AppBreadcrumbService } from '../../app.breadcrumb.service';

@Component({
    templateUrl: './documentation.component.html',
})
export class DocumentationComponent {

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Documentation' }
        ]);
    }
}