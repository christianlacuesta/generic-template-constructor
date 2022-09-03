export interface ItemType {
    name: string; 
    code: string;
}

export interface FormItemModel {
    name: string; 
    value: any;
    required: boolean;
    label: string; 
    label2: string; 
    type: ItemType, 
    width: string;
    config: any;
    subItems: any[];
}