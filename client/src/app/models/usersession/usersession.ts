export interface UserSessionModel {
    userSessionId: number;
    userId: number;
    idNo: string;
    staffId: string;
    username: string;
    password: string;
    transaction: string;
    appState: any;
    createdById: string;
    createdByName: string;
    updatedById: string;
    updatedByName: string;
    createdAt: Date;
    updatedAt: Date;
}

export const initialUserSessionState: UserSessionModel = {
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
}