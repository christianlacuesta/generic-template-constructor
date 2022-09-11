export interface UserSession {
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