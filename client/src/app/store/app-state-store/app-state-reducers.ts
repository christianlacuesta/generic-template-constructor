import { AppStateModel } from "src/app/models/app-models/app-state";
import { initialTableState } from "src/app/models/engine/table/table.model";
import { initialUserState } from "src/app/models/user/user.model";
import { initialUserSessionState } from "src/app/models/usersession/usersession";

const initialState: AppStateModel = {
    isAuthenticated: false,
    language: {name: 'English', code: 'en'},
    user: initialUserState,
    userSession: initialUserSessionState,
    roles: [],
    isFormSubmitted: false,
    formItems: [],
    formRequired: [],
    table: initialTableState, 
    action: null,
    done: false,
    error: null
}