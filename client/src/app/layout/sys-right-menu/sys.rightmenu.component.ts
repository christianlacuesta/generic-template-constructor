import {Component} from '@angular/core';
import { AppComponent } from '../../app.component';
import {SysMainComponent} from '../sys-main/sys.main.component';

@Component({
    selector: 'sys-rightmenu',
    templateUrl: './sys.rightmenu.component.html'
})
export class SysRightMenuComponent {
    constructor(public appMain: SysMainComponent, public app: AppComponent) {}
}
