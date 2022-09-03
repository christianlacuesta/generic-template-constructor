import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormItemModel } from '../models/form/form.model';

@Injectable({ providedIn: 'root' })
export class ConfigsService {

    objectType: any[] = [
        {name: 'textBox', label: 'Text Box', code: 'tx'},
        {name: 'dropDown', label: 'Drop Down',  code: 'dr'},
        {name: 'checkBox',  label: 'Check Box', code: 'ck'},
        {name: 'radioButton', label: 'Radio Button', code: 'rb'},
        {name: 'upload',  label: 'Upload', code: 'up'},
    ];

    userFormConfig = [];

    roleFormConfig = [];

    objectFormConfig: FormItemModel[] = [
        {
            name: 'name', 
            value: null, 
            required: true,
            label: 'Name', 
            label2: 'Arabic Name', 
            type: {name: 'textBox', code: 'tx'}, 
            width: 'col-12 mb-2 lg:col-3 mb-lg-0', 
            config: [],
            subItems: []
        },
        {
            name: 'label', 
            value: null, 
            required: true,
            label: 'Label', 
            label2: 'Arabic Label', 
            type: {name: 'textBox', code: 'tx'}, 
            width: 'col-12 mb-2 lg:col-3 mb-lg-0', 
            config: [],
            subItems: []
        },
        {
            name: 'label2', 
            value: null, 
            required: true,
            label: 'Label2', 
            label2: 'Arabic Label2', 
            type: {name: 'textBox', code: 'tx'}, 
            width: 'col-12 mb-2 lg:col-3 mb-lg-0', 
            config: [],
            subItems: []
        },
        {
            name: 'config', 
            value: null, 
            required: true,
            label: 'Config', 
            label2: 'Arabic Config', 
            type: {name: 'dropDown', code: 'dr'}, 
            width: 'col-12 mb-2 lg:col-3 mb-lg-0', 
            config: [],
            subItems: [...this.objectType]
        }
    ]
    

    userAdminColumnConfig = [
        { field: 'userId', header: 'User Id', header2: 'xxxx xx'},
        { field: 'idNo', header: 'Nationality Id', header2: 'xxxx xx'},
        { field: 'staffId', header: 'Staff Id',  header2: 'xxxx xx' },
        { field: 'firstName', header: 'First Name',  header2: 'xxxx xx' },
        { field: 'lastName', header: 'Last Name',  header2: 'xxxx xx' },
    ];

    roleAdminColumnConfig = [
        { field: 'roleId', header: 'Role Id', header2: 'xxxx xx'},
        { field: 'name', header: 'Role Name', header2: 'xxxx xx'},
        { field: 'label', header: 'Label', header2: 'xxxx xx'},
    ];

    objectAdminColumnConfig = [
        { field: 'objectId', header: 'Object Id', header2: 'xxxx xx'},
        { field: 'name', header: 'Object Name', header2: 'xxxx xx'},
        { field: 'label', header: 'Label', header2: 'xxxx xx'},
    ];

    constructor(private http: HttpClient) { }


    getFormsConfig(tableName: string) {
        switch (tableName) {
            case 'users': return this.userFormConfig; break; 
            case 'roles': return this.roleFormConfig; break;
            case 'objects': return this.objectFormConfig; break;     
        
            default: return [];
        }
    }

    getColumnsConfig(tableName: string) {
        switch (tableName) {
            case 'users': return this.userAdminColumnConfig; break; 
            case 'roles': return this.roleAdminColumnConfig; break;
            case 'objects': return this.objectAdminColumnConfig; break;     
        
            default: return [];
        }
    }

}
