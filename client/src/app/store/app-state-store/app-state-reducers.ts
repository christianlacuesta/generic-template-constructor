import { AppStateModel } from "src/app/models/app-models/app-state";
import { initialTableState } from "src/app/models/engine/table/table.model";
import { initialUserState } from "src/app/models/user/user.model";
import { initialUserSessionState } from "src/app/models/usersession/usersession";

const initialState: AppStateModel = {
    isAuthenticated: false,
    isFormSubmitted: false,
    language: {name: 'English', code: 'en'},
    user: initialUserState,
    userSession: initialUserSessionState,
    roles: [],
    formItems: [],
    formRequired: [],
    table: initialTableState 
}