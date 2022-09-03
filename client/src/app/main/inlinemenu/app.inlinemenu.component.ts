import { Component, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { AppMainComponent } from '../../app.main.component';
import { AppComponent } from '../../app.component';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';
import { UserSessionService } from 'src/app/services/usersession.service';
import { UserSession } from 'src/app/models/usersession/usersession.model';

@Component({
    selector: 'app-inline-menu',
    templateUrl: './app.inlinemenu.component.html',
    animations: [
        trigger('menu', [
            state('hiddenAnimated', style({
                height: '0px',
                paddingBottom: '0px',
                overflow: 'hidden'
            })),
            state('visibleAnimated', style({
                height: '*',
                overflow: 'visible'
            })),
            state('visible', style({
                opacity: 1,
                'z-index': 100
            })),
            state('hidden', style({
                opacity: 0,
                'z-index': '*'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('visible => hidden', animate('.1s linear')),
            transition('hidden => visible', [style({transform: 'scaleY(0.8)'}), animate('.12s cubic-bezier(0, 0, 0.2, 1)')])
        ])
    ]
})
export class AppInlineMenuComponent {

    @Input() key = 'inline-menu';

    @Input() style: any;

    @Input() styleClass: string;

    userSession: UserSession;
    
    name: string;

    getUserSessionByIdSub: Subscription = new Subscription();
    appStateDataSub: Subscription = new Subscription();
    routeSub: Subscription = new Subscription();

    constructor(public appMain: AppMainComponent, 
                private router: Router,
                private route: ActivatedRoute,
                public app: AppComponent,
                private appStateService: AppStateService,
                private userSessionService: UserSessionService,
                private store: Store<AppState>) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params: any) => {
            this.getUserSessionByIdSub = this.userSessionService.getUserSessionById(params.sessionId, params.username, 'login').subscribe(usersession => { 
                this.userSession = usersession[0];
            })
        });

        this.appStateDataSub = this.appStateService.appStateData.subscribe(appStateData => {
            this.name = appStateData.user.firstName + ' ' + appStateData.user.lastName;
            this.userSession = appStateData.userSession;
        });
    }

    onClick(event) {
        this.appMain.onInlineMenuClick(event, this.key);
        event.preventDefault();
    }

    get isTooltipDisabled() {
        return !(this.appMain.isSlim() && !this.appMain.isMobile());
    }

    get tabIndex() {
        return !this.appMain.inlineMenuActive  ? '-1' : null;
    }

    isHorizontalActive() {
       return this.appMain.isHorizontal() && !this.appMain.isMobile();
    }

    onLogout() {
        const userSessionCopy = this.userSession;

        Object.assign(userSessionCopy, {transaction: 'logout'})

        this.appStateService.onLogout(userSessionCopy);
    }


    ngOnDestroy() {
        this.getUserSessionByIdSub.unsubscribe();
        this.appStateDataSub.unsubscribe();
        this.routeSub.unsubscribe();
    }
}
