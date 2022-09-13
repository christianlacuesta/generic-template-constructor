import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiPostResponse, AppLanguageModel } from '../models/app-models/app-common.model';
import { AppLoginElementModel } from '../models/app-models/layout/app-login-element.model';
import { AppStateModel } from '../models/app-models/app-state';
import { UserSessionModel } from '../models/usersession/usersession';
import { ConfigService } from '../services/app-config.service';
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
  @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
    this.resetError();
  }

  languageOption: AppLanguageModel[] = [
    {name: 'english', code: 'en'},
    {name: 'arabic', code: 'ar'},
  ];

  selectedLanguage: AppLanguageModel = {name: 'english', code: 'en'};

  loginInfo: AuthLoginInfoModel = {
    username: '',
    password: ''
  };

  validationMessage: string = '';

  onLoginSub: Subscription = new Subscription();
  postUserSessionSub: Subscription = new Subscription();
  putUserSessionSub: Subscription = new Subscription();

  constructor(private userService: UsersService,
              private appStateService: AppStateService,
              private userSessionService: UserSessionService,
              private configService: ConfigService,
              private router: Router) { }

  loginPageElements: AppLoginElementModel = this.configService.loginPageElements;

  appStateData$: BehaviorSubject<AppStateModel> = new BehaviorSubject<AppStateModel>(this.appStateService.initialAppStateData);

  ngOnInit(): void {}

  resetError() {
    this.validationMessage = '';
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

          const appStateCopy: AppStateModel = this.appStateService.initialAppStateData;

          Object.assign(appStateCopy, {isLoading: true});

          this.appStateService.appStateData.next(appStateCopy);  

          this.postUserSessionSub = this.userSessionService.postUserSession(newUserSession).subscribe((createdUserSession: ApiPostResponse) => {

              const createdUserSessionCopy = JSON.parse(JSON.stringify(createdUserSession.post));

              Object.assign(appStateCopy, {
                isAuthenticated: true,
                language: this.selectedLanguage,
                user: userResponse.post,
                userSession: createdUserSession.post,
              });

              Object.assign(createdUserSessionCopy, {appState: appStateCopy});

              this.putUserSessionSub = this.userSessionService.putUserSession(createdUserSessionCopy).subscribe((updatedUserSession: ApiPostResponse) => {

                const updatedUserSessionCopy = JSON.parse(JSON.stringify(updatedUserSession.post));
                
                setTimeout(() => {
                  Object.assign(appStateCopy, {
                    isLoading: false,
                    userSession: updatedUserSessionCopy,
                  });
  
                  this.appStateService.appStateData.next(appStateCopy);  

                  this.router.navigate(['main/' + createdUserSession.post.userSessionId + '/' + createdUserSession.post.username])
                }, 1000)

              });

          });

        } else {

          this.validationMessage = userResponse.message;

        }
    });

    } else {

      this.validationMessage = 'Please enter a username and password.'

    }
  }

  ngOnDestroy() {
    this.onLoginSub.unsubscribe();
    this.postUserSessionSub.unsubscribe();
    this.putUserSessionSub.unsubscribe();
  }


}
