export interface ItemType {
    name: string; 
    code: string;
}

export interface FormRequiredModel {
    name: string;
    value: any;
    required: boolean;
}

export interface FormItemModel {
    name: string; 
    value: any;
    required: boolean;
    filter: boolean;
    label: string; 
    label2: string; 
    type: ItemType, 
    width: string;
    config: any;
    subItems: any[];
}