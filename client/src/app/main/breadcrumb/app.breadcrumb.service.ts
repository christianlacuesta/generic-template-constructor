import { Injectable } from '@angular/core';
import { Subject ,  Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable()
export class AppBreadcrumbService {

    private itemsSource = new Subject<MenuItem[]>();

    itemsHandler = this.itemsSource.asObservable();

    setItems(items: MenuItem[]) {
        let containsNull: boolean = false;
        for (let i = 0; items.length > i; i++) {
            if (typeof(items[i].label) === 'undefined') {
                containsNull = true;
            }
        }
        if (!containsNull) {
            this.itemsSource.next(items);
        }

    }
}
