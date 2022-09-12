import { Injectable } from '@angular/core';
import { Subject ,  Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable()
export class SysBreadcrumbService {

    private itemsSource = new Subject<MenuItem[]>();

    itemsHandler = this.itemsSource.asObservable();

    setItems(items: MenuItem[]) {
        this.itemsSource.next(items);
    }
}
