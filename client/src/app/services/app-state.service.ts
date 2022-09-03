import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppStateModel } from '../models/app-state/app-state.model';
import { User } from '../models/user/user.model';
import { UserSession } from '../models/usersession/usersession.model';
import { UserSessionService } from './usersession.service';


const apiUrl = environment.apiUrl + 'users/';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({ providedIn: 'root' })
export class AppStateService implements OnDestroy {

    putUserSessionSub: Subscription = new Subscription();

    appStateData = new BehaviorSubject<AppStateModel>({
        isAuthenticated: false,
        language: {name: 'English', code: 'en'},
        user: {
            userId: 0,
            idNo: '',
            staffId: '',
            username: '',
            password: '',
            title: {},
            firstName: '',
            middleName: '',
            lastName:  '',
            gender: {},
            dateOfBirth: new Date(),
            nationality: {},
            organization: {},
            department: {},
            section: {},
            position:{},
            email: '',
            phone: '',
            mobile: '',
            groups: [],
            createdById: '',
            createdByName: '',
            updatedById: '',
            updatedByName: '',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        userSession: {
            userSessionId: 0,
            userId: 0,
            idNo: '',
            staffId: '',
            username: '',
            password:  '',
            transaction: '',
            appState: null,
            createdById:  '',
            createdByName:  '',
            updatedById: '',
            updatedByName: '',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        roles: [
            
        ]
    })

    constructor(private http: HttpClient,
                private userSessionService: UserSessionService,
                private router: Router) { }


    onLogout(userSession: UserSession) {
        this.putUserSessionSub = this.userSessionService.putUserSession(userSession).subscribe(updatedUserSession => {
            // console.log(updatedUserSession)
        });

        this.router.navigate(['login']);
    }

    ngOnDestroy() {
        this.putUserSessionSub.unsubscribe();
    }

}
