import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { AppComponent } from '../../app.component';
import { AppMainComponent } from '../../app.main.component';
import { MessageService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { AppBreadcrumbService } from '../breadcrumb/app.breadcrumb.service';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { AppStateService } from 'src/app/services/app-state.service';
import { UserSession } from 'src/app/models/usersession/usersession.model';
import { AppStateModel } from 'src/app/models/app-state/app-state.model';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss'],
    providers: [MessageService],
    animations: [
        trigger('topbarActionPanelAnimation', [
            transition(':enter', [
                style({opacity: 0, transform: 'scaleY(0.8)'}),
                animate('.12s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: '*' })),
              ]),
              transition(':leave', [
                animate('.1s linear', style({ opacity: 0 }))
              ])
        ])
    ]
})

// ends

export class AppTopBarComponent {

    name: string;
    userSession: UserSession;
    appStateDataCopy: AppStateModel;

    appStateDataSub: Subscription = new Subscription();

    language = [
        {name: 'English', code: 'en'},
        {name: 'Arabic', code: 'ar'},
    ];

    selectedLanguage = {name: 'English', code: 'en'};

    constructor(private messageService: MessageService,
                public appMain: AppMainComponent, 
                private appStateService: AppStateService,
                private store: Store<AppState>) {}

    ngOnInit(): void {  
        this.appStateDataSub = this.appStateService.appStateData.subscribe(appStateData => {
            this.name = appStateData.user.firstName + ' ' + appStateData.user.lastName;
            this.appStateDataCopy = appStateData;
            this.userSession = appStateData.userSession;
        });
        
    }

    onChange(event: any): void {

        Object.assign(this.appStateDataCopy, {language: event.value});
        
        this.appStateService.appStateData.next(this.appStateDataCopy);
    }

    onLogout() {
        const userSessionCopy = this.userSession;

        Object.assign(userSessionCopy, {transaction: 'logout'})

        this.appStateService.onLogout(userSessionCopy);
    }
    
    message(severity: any, summary: any, detail: any) { this.messageService.add({severity: severity, summary: summary, detail: detail }); }

    ngOnDestroy() {
        this.appStateDataSub.unsubscribe();
    }

}
