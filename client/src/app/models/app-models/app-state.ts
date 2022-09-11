import { FormItemModel, FormRequiredModel } from "../engine/form/form.model";
import { TableModel } from "../engine/table/table.model";
import { User } from "../user/user.model";
import { UserSession } from "../usersession/usersession";
import { AppLanguageModel } from "./app-common.model";


export interface AppStateModel {
    isAuthenticated: boolean;
    isFormSubmitted: boolean;
    language: AppLanguageModel;
    user: User; 
    userSession: UserSession;
    roles: any[];
    formItems: FormItemModel[];
    formRequired: FormRequiredModel[],
    table: TableModel;
}