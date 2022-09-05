import {Component, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    topbarTheme = 'bluegrey';

    menuTheme = 'bluegrey';

    layoutMode = 'light';

    menuMode = 'overlay';

    inlineMenuPosition = 'bottom';

    inputStyle = 'filled';

    ripple = true;

    isRTL = false;

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
