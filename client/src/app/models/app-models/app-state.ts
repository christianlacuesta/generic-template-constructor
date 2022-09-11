import { FormItemModel, FormRequiredModel } from "../engine/form/form.model";
import { TableModel } from "../engine/table/table.model";
import { UserModel } from "../user/user.model";
import { UserSessionModel } from "../usersession/usersession";
import { AppLanguageModel } from "./app-common.model";


export interface AppStateModel {
    isAuthenticated: boolean;
    isFormSubmitted: boolean;
    language: AppLanguageModel;
    user: UserModel; 
    userSession: UserSessionModel;
    roles: any[];
    formItems: FormItemModel[];
    formRequired: FormRequiredModel[],
    table: TableModel;
}