import { User } from "../user/user.model";
import { UserSession } from "../usersession/usersession.model";

export interface LanguageModel {
    name: string;
    code: string;
}

export interface AppStateModel {
    isAuthenticated: boolean;
    language: LanguageModel;
    user: User; 
    userSession: UserSession;
    roles: any[];
}