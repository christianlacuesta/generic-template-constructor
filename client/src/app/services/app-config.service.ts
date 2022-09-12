import { Injectable } from '@angular/core';
import { AppLoginElementModel } from '../models/app-models/app-login-element.model';

@Injectable({ providedIn: 'root' })
export class ConfigService {

    loginPageElements: AppLoginElementModel = {
        logo: null,
        title: {
            name: 'title',
            label: 'LOGIN',
            label2: 'تسجيل الدخول',
            code: '1'
        },
        welcomeMessage: {
            name: 'welcomeMessage',
            label: 'Welcome',
            label2: 'أهلا وسهلا',
            code: '2'
        },
        instructionMessage: {
            name: 'instructionMessage',
            label: 'Please use the form to sign-in in the network',
            label2: 'الرجاء استخدام النموذج لتسجيل الدخول إلى الشبكة',
            code: '3'
        },
        buttonLabel: {
            name: 'buttonLabel',
            label: 'LOGIN',
            label2: 'تسجيل الدخول',
            code: '4'
        }, 
        usernameLabel: {
            name: 'usernameLabel',
            label: 'Username',
            label2: 'اسم المستخدم',
            code: '5'
        }, 
        passwordLabel: {
            name: 'passwordLabel',
            label: 'Password',
            label2: 'كلمة المرور',
            code: '6'
        }, 
    };

    constructor() { }

}


