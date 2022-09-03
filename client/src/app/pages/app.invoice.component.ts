import { Component, OnInit } from '@angular/core';
import {AppBreadcrumbService} from '../app.breadcrumb.service';

@Component({
    selector: 'app-invoice',
    templateUrl: './app.invoice.component.html',
})
export class AppInvoiceComponent implements OnInit {

    billData: any[];

    billCols: any[];

    productData: any[];

    productCols: any[];

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Pages' },
            { label: 'Invoice' }
        ]);
    }

    ngOnInit() {
        this.billData = [
            {
                'billTo': 'TOYOKSU SYSCOM CORPORATION 11-27, MEIEKI 4-CHROME NAKAMURA-KU, NAGOYA 450-0002 JAPAN',
                'date': '30/08/2021',
                'no': 'A/3100',
                'notes': 'N/A'
            }
        ];

        this.billCols = [
            { field: 'billTo', header: 'BILL TO' },
            { field: 'date', header: 'DATE' },
            { field: 'no', header: 'INVOICE NO' },
            { field: 'notes', header: 'NOTES' }
        ];

        this.productData = [
            {
                'description': 'License A',
                'quantity': '4',
                'price': '$99.00',
                'total': '$396.00'
            },
            {
                'description': 'License B',
                'quantity': '1',
                'price': '$790.00',
                'total': '$790.00'
            },
            {
                'description': 'License C',
                'quantity': '2',
                'price': '$59.00',
                'total': '$118.00'
            }
        ];

        this.productCols = [
            { field: 'description', header: 'DESCRIPTION' },
            { field: 'quantity', header: 'QUANTITY' },
            { field: 'price', header: 'UNIT PRICE' },
            { field: 'total', header: 'LINE TOTAL' }
        ];
    }

    print() {
        window.print();
    }
}
