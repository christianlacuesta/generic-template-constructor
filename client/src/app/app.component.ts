import {Component, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    topbarTheme = 'bluegrey';
    menuTheme = 'light';
    layoutMode = 'light';
    menuMode = 'static';
    inlineMenuPosition = 'bottom';
    inputStyle = 'outlined';
    ripple = true;
    isRTL = false;

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
