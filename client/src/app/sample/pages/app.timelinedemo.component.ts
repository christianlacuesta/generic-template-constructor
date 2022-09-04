import {Component, OnInit} from '@angular/core';
import {AppBreadcrumbService} from '../../layout/breadcrumb/app.breadcrumb.service';
import {PrimeIcons} from 'primeng/api';

@Component({
    templateUrl: './app.timelinedemo.component.html',
    styles: [`
        .custom-marker {
            display: flex;
            width: 2rem;
            height: 2rem;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            border-radius: 50%;
            z-index: 1;
        }
        
        ::ng-deep {
            .p-timeline-event-content,
            .p-timeline-event-opposite {
                line-height: 1;
            }
        }
        
        @media screen and (max-width: 960px) {
            :host ::ng-deep {
                .customized-timeline {
                    .p-timeline-event:nth-child(even) {
                        flex-direction: row !important;
        
                        .p-timeline-event-content {
                            text-align: left !important;
                        }
                    }
        
                    .p-timeline-event-opposite {
                        flex: 0;
                    }
        
                    .p-card {
                        margin-top: 1rem;
                    }
                }
            }
        }
    `]
})
export class AppTimelineDemoComponent implements OnInit{

    customEvents: any[];

    horizontalEvents: any[];

    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Pages'},
            {label: 'Timeline'}
        ]);
    }

    ngOnInit() {
        this.customEvents = [
            {
                status: 'Ordered',
                date: '15/10/2020 10:30',
                icon: PrimeIcons.SHOPPING_CART,
                color: '#9C27B0',
                image: 'game-controller.jpg'
            },
            {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
            {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
            {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
        ];

        this.horizontalEvents = [
            '2020', '2021', '2022', '2023'
        ];
    }
}
