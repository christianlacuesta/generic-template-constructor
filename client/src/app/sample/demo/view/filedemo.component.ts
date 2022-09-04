import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';
import {AppBreadcrumbService} from '../../../layout/breadcrumb/app.breadcrumb.service';

@Component({
    templateUrl: './filedemo.component.html',
    providers: [MessageService]
})
export class FileDemoComponent {

    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'UI Kit'},
            {label: 'File'}
        ]);
    }

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    onBasicUpload(event: any) {
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }
}
