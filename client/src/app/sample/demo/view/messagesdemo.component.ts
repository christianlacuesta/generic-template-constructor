import {Component} from '@angular/core';
import {Message, MessageService} from 'primeng/api';
import {AppBreadcrumbService} from '../../layout/breadcrumb/app.breadcrumb.service';

@Component({
    templateUrl: './messagesdemo.component.html',
    styles: [`
		:host ::ng-deep .p-message {
			margin-left: .25em;
		}

        :host ::ng-deep .p-toast{
            z-index:99999;
        }
    `],
    providers: [MessageService]
})
export class MessagesDemoComponent {

    msgs: Message[] = [];

    constructor(private service: MessageService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'UI Kit'},
            {label: 'Messages'}
        ]);
    }

    showInfoViaToast() {
        this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
    }

    showWarnViaToast() {
        this.service.add({key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    showErrorViaToast() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSuccessViaToast() {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }

    showInfoViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarnViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showErrorViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSuccessViaMessages() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }
}
