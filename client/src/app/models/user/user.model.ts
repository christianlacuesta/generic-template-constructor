
export interface UserModel {
    userId: number;
    idNo: string;
    staffId: string;
    username: string;
    password: string;
    title: any
    firstName: string;
    middleName: string;
    lastName: string;
    gender: any;
    dateOfBirth: any;
    nationality: any;
    organization: any;
    department: any;
    section: any;
    position: any;
    email: string;
    phone: string
    mobile: string;
    groups: any[];
    createdById: string;
    createdByName: string;
    updatedById: string;
    updatedByName: string;
    createdAt: Date;
    updatedAt: Date;
}


export const initialUserState: UserModel = {
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
}