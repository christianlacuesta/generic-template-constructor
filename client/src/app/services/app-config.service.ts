import { Injectable } from '@angular/core';
import { AppLoginElementModel } from '../models/app-models/app-login-element.model';

@Injectable({ providedIn: 'root' })
export class ConfigService {

    loginPageElements: AppLoginElementModel = {
        logo: null,
        title: {
            name: '',
            label: '',
            label2: '',
            code: ''
        },
        welcomeMessage: {
            name: '',
            label: '',
            label2: '',
            code: ''
        },
        instructionMessage: {
            name: '',
            label: '',
            label2: '',
            code: ''
        },
        buttonLabel: {
            name: '',
            label: '',
            label2: '',
            code: ''
        }, 
    };

    constructor() { }

}


