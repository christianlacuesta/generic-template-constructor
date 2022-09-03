import {Component, OnInit} from '@angular/core';
import {NodeService} from '../service/nodeservice';
import {TreeNode} from 'primeng/api';
import {AppBreadcrumbService} from '../../app.breadcrumb.service';

@Component({
    templateUrl: './treedemo.component.html'
})
export class TreeDemoComponent implements OnInit {


    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    selectedFiles1: TreeNode;

    selectedFiles2: TreeNode[];

    selectedFiles3: TreeNode;

    cols: any[];

    constructor(private nodeService: NodeService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'UI Kit'},
            {label: 'Tree'}
        ]);
    }

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.nodeService.getFiles().then(files => {
            this.files3 = [{
                label: 'Root',
                children: files
            }];
        });

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}
