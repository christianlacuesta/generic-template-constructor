import {Component} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {state, style, trigger} from '@angular/animations';

@Component({
    selector: 'app-wizard',
    templateUrl: './app.wizard.component.html',
    animations: [
        trigger('tabBar', [
            state('register', style({
                width: '33.3333%',
                left: '0'
            })),
            state('tier', style({
                width: '33.3333%',
                left: '33.3333%'
            })),
            state('payment', style({
                width: '33.3333%',
                left: '66.6667%'
            }))
        ])
    ]
})
export class AppWizardComponent {

    activeTab = 'register';

    activeCard = '';

    dropdownOptions1: SelectItem[];

    dropdownOptions2: SelectItem[];

    selectDropdownOptions1: any;

    selectDropdownOptions2: any;

    birthdate: Date;

    checked = false;

    radioButton1: string;

    constructor() {
        this.dropdownOptions1 = [
            {label: 'Select Time Zone', value: null},
            {label: 'UTC-12.00', value: {id: 1, name: 'UTC-12.00', code: '-12'}},
            {label: 'UTC-11.00', value: {id: 2, name: 'UTC-11.00', code: '-11'}},
            {label: 'UTC-10.00', value: {id: 3, name: 'UTC-10.00', code: '-10'}},
            {label: 'UTC-09.30', value: {id: 4, name: 'UTC-09.30', code: '-93'}},
            {label: 'UTC-09.00', value: {id: 5, name: 'UTC-09.00', code: '-09'}},
            {label: 'UTC-08.00', value: {id: 6, name: 'UTC-08.00', code: '-08'}},
            {label: 'UTC-07.00', value: {id: 7, name: 'UTC-07.00', code: '-07'}},
            {label: 'UTC-06.00', value: {id: 8, name: 'UTC-06.00', code: '-06'}},
            {label: 'UTC-05.00', value: {id: 9, name: 'UTC-05.00', code: '-05'}},
            {label: 'UTC-04.00', value: {id: 10, name: 'UTC-04.00', code: '-04'}},
            {label: 'UTC-03.30', value: {id: 11, name: 'UTC-03.30', code: '-33'}},
            {label: 'UTC-03.00', value: {id: 12, name: 'UTC-03.00', code: '-03'}},
            {label: 'UTC-02.00', value: {id: 13, name: 'UTC-02.00', code: '-02'}},
            {label: 'UTC-01.00', value: {id: 14, name: 'UTC-01.00', code: '-01'}},
            {label: 'UTC-+00.00', value: {id: 15, name: 'UTC-+00.00', code: '-00'}},
            {label: 'UTC+01.00', value: {id: 16, name: 'UTC+01.00', code: '+01'}},
            {label: 'UTC+02.00', value: {id: 17, name: 'UTC+02.00', code: '+02'}},
            {label: 'UTC+03.00', value: {id: 18, name: 'UTC+03.00', code: '+03'}},
            {label: 'UTC+03.30', value: {id: 19, name: 'UTC+03.30', code: '+33'}},
            {label: 'UTC+04.00', value: {id: 20, name: 'UTC+04.00', code: '+04'}},
            {label: 'UTC+04.30', value: {id: 21, name: 'UTC+04.30', code: '+43'}},
            {label: 'UTC+05.00', value: {id: 22, name: 'UTC+05.00', code: '+05'}},
            {label: 'UTC+05.30', value: {id: 23, name: 'UTC+05.30', code: '+53'}},
            {label: 'UTC+05.45', value: {id: 24, name: 'UTC+05.45', code: '+54'}},
            {label: 'UTC+06.00', value: {id: 25, name: 'UTC+06.00', code: '+06'}},
            {label: 'UTC+06.30', value: {id: 26, name: 'UTC+06.30', code: '+63'}},
            {label: 'UTC+07.00', value: {id: 27, name: 'UTC+07.00', code: '+07'}},
            {label: 'UTC+08.00', value: {id: 28, name: 'UTC+08.00', code: '+08'}},
            {label: 'UTC+08.45', value: {id: 29, name: 'UTC+08.45', code: '+84'}},
            {label: 'UTC+09.00', value: {id: 30, name: 'UTC+09.00', code: '+09'}},
            {label: 'UTC+09.30', value: {id: 31, name: 'UTC+09.30', code: '+93'}},
            {label: 'UTC+10.00', value: {id: 32, name: 'UTC+10.00', code: '+10'}},
            {label: 'UTC+10.30', value: {id: 33, name: 'UTC+10.30', code: '+13'}},
            {label: 'UTC+11.00', value: {id: 34, name: 'UTC+01.00', code: '+11'}},
            {label: 'UTC+12.00', value: {id: 35, name: 'UTC+01.00', code: '+12'}},
            {label: 'UTC+12.45', value: {id: 36, name: 'UTC+01.00', code: '+24'}},
            {label: 'UTC+13.00', value: {id: 37, name: 'UTC+01.00', code: '+13'}},
            {label: 'UTC+14.00', value: {id: 38, name: 'UTC+01.00', code: '+14'}},
        ];

        this.dropdownOptions2 = [
            {label: 'Where did you hear Ultima', value: null},
            {label: 'Blogs', value: 'Blogs'},
            {label: 'Google Ads', value: 'google'},
            {label: 'Your Forum', value: 'prime-forum'},
            {label: 'Youtube', value: 'Youtube'},
            {label: 'Reddit', value: 'Reddit'},
            {label: 'Events', value: 'Events'},
            {label: 'Other', value: 'Other'}
        ];
    }

    clickNext(step) {
        this.activeTab = step;
    }

    selectTier(card) {
        this.activeCard = card;
        this.activeTab = 'payment';
    }

}
