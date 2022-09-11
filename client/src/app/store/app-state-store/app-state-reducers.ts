import { AppStateModel } from "src/app/models/app-models/app-state";



const initialState: AppStateModel = {
    isAuthenticated: false,
    isFormSubmitted: false,
    language: {name: 'English', code: 'en'},
    user: {
        userId: 0,
        idNo: '',
        staffId: '',
        username: '',
        password: '',
        title: {},
        firstName: '',
        middleName: '',
        lastName:  '',
        gender: {},
        dateOfBirth: new Date(),
        nationality: {},
        organization: {},
        department: {},
        section: {},
        position:{},
        email: '',
        phone: '',
        mobile: '',
        groups: [],
        createdById: '',
        createdByName: '',
        updatedById: '',
        updatedByName: '',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    userSession: {
        userSessionId: 0,
        userId: 0,
        idNo: '',
        staffId: '',
        username: '',
        password:  '',
        transaction: '',
        appState: null,
        createdById:  '',
        createdByName:  '',
        updatedById: '',
        updatedByName: '',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    roles: [
        
    ],
    formItems: [],
    formRequired: [],
    table: {
        tableName: '',
        filters: [],
        limit: 10,
        offset: 0,
        count: 0,
        rows: []
    }  
}