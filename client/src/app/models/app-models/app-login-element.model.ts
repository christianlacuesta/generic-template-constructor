import { AppCommonModel } from "./app-common.model";

export interface AppLoginElementModel {
    logo: any;
    title: AppCommonModel;
    welcomeMessage: AppCommonModel;
    instructionMessage: AppCommonModel;
    buttonLabel: AppCommonModel;    
    usernameLabel: AppCommonModel;
    passwordLabel: AppCommonModel;
}