import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppLanguageModel } from '../models/app-models/app-common.model';
import { AppStateModel } from '../models/app-models/app-state';
import { UserSessionModel } from '../models/usersession/usersession';
import { AppStateService } from '../services/app-state.service';
import { UsersService } from '../services/user/user.service';
import { UserSessionService } from '../services/usersession/usersession.service';
import { AuthLoginInfoModel } from './auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [MessageService]
})
export class AuthComponent implements OnInit, OnDestroy {

  languageOption: AppLanguageModel[] = [
    {name: 'english', code: 'en'},
    {name: 'arabic', code: 'ar'},
  ];

  loginInfo: AuthLoginInfoModel = {
    username: '',
    password: ''
  };

  validationMessage: string = '';

  selectedLanguage: AppLanguageModel = {name: 'english', code: 'en'};

  onLoginSub: Subscription = new Subscription();
  postUserSessionSub: Subscription = new Subscription();

  constructor(private userService: UsersService,
              private appStateService: AppStateService,
              private userSessionService: UserSessionService,
              private router: Router) { }

  ngOnInit(): void {

    
  }

  onSubmit(form: NgForm) {

    if (form.value) {
      Object.assign(this.loginInfo, form.value);

    this.onLoginSub = this.userService.onLogin(this.loginInfo).subscribe((userResponse: any) => {

        if (userResponse.post) {


          const newUserSession: UserSessionModel = {
            userSessionId: 0,
            userId: userResponse.post.userId,
            idNo: userResponse.post.idNo,
            staffId: userResponse.post.staffId,
            username: userResponse.post.username,
            password: userResponse.post.password,
            transaction: 'login',
            appState: null,
            createdById: userResponse.post.createdById,
            createdByName: userResponse.post.createdByName,
            updatedById: userResponse.post.updatedById,
            updatedByName: userResponse.post.updatedByName,
            createdAt: new Date(),
            updatedAt: new Date(),
          };


          this.postUserSessionSub = this.userSessionService.postUserSession(newUserSession).subscribe((createdUserSession: any) => {


              const createdUserSessionCopy = JSON.parse(JSON.stringify(createdUserSession.post));

              const appStateCopy: AppStateModel = this.appStateService.initialAppStateData;

              Object.assign(appStateCopy, {
                isAuthenticated: true,
                language: {name: 'English', code: 'en'},
                user: userResponse.post,
                userSession: createdUserSession.post,
              });

              Object.assign(createdUserSessionCopy, {appState: appStateCopy});

              this.userSessionService.putUserSession(createdUserSessionCopy).subscribe((updatedUserSession: any) => {


                this.appStateService.appStateData.next(appStateCopy);  
                this.router.navigate(['main/' + createdUserSession.post.userSessionId + '/' + createdUserSession.post.username])
              })

          });

        } else {
          this.validationMessage = userResponse.message;
        }
    });

    } else {

    }
  }

  ngOnDestroy() {
    this.onLoginSub.unsubscribe();
    this.postUserSessionSub.unsubscribe();
  }


}
