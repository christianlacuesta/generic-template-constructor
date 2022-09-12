import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AppStateModel } from '../models/app-models/app-state';
import { initialTableState } from "src/app/models/engine/table/table.model";
import { initialUserState } from "src/app/models/user/user.model";
import { initialUserSessionState, UserSessionModel } from "src/app/models/usersession/usersession";
import { UserSessionService } from './usersession/usersession.service';

@Injectable({ providedIn: 'root' })
export class AppStateService implements OnDestroy {

    putUserSessionSub: Subscription = new Subscription();

    initialAppStateData: AppStateModel = {
        isAuthenticated: false,
        isLoading: false,
        language: {name: 'English', code: 'en'},
        user: initialUserState,
        userSession: initialUserSessionState,
        roles: [],
        isFormSubmitted: false,
        formItems: [],
        formRequired: [],
        table: initialTableState, 
        action: null,
        done: false,
        error: null
    }

    appStateData: BehaviorSubject<AppStateModel> = new BehaviorSubject<AppStateModel>(this.initialAppStateData);

    constructor(private userSessionService: UserSessionService,
                private router: Router) { }


    onLogout(userSession: UserSessionModel) {
        this.putUserSessionSub = this.userSessionService.putUserSession(userSession).subscribe((updatedUserSession: any) => {
            console.log(updatedUserSession)
            this.router.navigate(['login']);
        });
    }

    ngOnDestroy() {
        this.putUserSessionSub.unsubscribe();
    }

}
