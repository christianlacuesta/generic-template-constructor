import {Component, OnInit} from '@angular/core';
import { ProductService } from '../service/productservice';
import { PhotoService } from '../service/photoservice';
import { Product } from '../domain/product';
import {AppBreadcrumbService} from "../../app.breadcrumb.service";

@Component({
    templateUrl: './mediademo.component.html',
    styleUrls: ['../../../assets/demo/badges.scss']
})
export class MediaDemoComponent implements OnInit{

    products: Product[];

    images: any[];
  
    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
  
    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  
    constructor(private productService: ProductService, private photoService: PhotoService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
        {label: 'UI Kit'},
        {label: 'Media'}
        ]);
    }  

    ngOnInit() {
        this.productService.getProductsSmall().then(products => {
            this.products = products;
        });
  
        this.photoService.getImages().then(images => {
            this.images = images;
        });
    }
}