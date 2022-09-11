export interface AppCommonModel {
    name: string;
    label: string;
    label2: string;
    code: string;
}

export interface AppLanguageModel {
    name: string;
    code: string;
}

export interface AppActionModel {
    type: string;
    payload: any;
}