import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';
import { ConfigsService } from 'src/app/services/configs.service';
import { Subscription } from 'rxjs';
import { LanguageModel } from 'src/app/models/app-state/app-state.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  tableName: string = '';

  tableColumns = [
    { field: 'id', header: 'id' },
    { field: 'code', header: 'Code1' },
    { field: 'name', header: 'Code1' },
  ];

  tableData = [
    {
      "id": "1000",
      "code": "xxxxx",
      "name": "Bamboo Watch",
      "description": "Product Description",
      "image": "bamboo-watch.jpg",
      "price": 65,
      "category": "Accessories",
      "quantity": 24,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    },
    {
      "id": "1000",
      "code": "xxxxx",
      "name": "Bamboo Watch",
      "description": "Product Description",
      "image": "bamboo-watch.jpg",
      "price": 65,
      "category": "Accessories",
      "quantity": 24,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    },
  ];

  selectedLanguage: LanguageModel = {name: 'English', code: 'en'};
  
  routeSub: Subscription = new Subscription();
  appStateDataSub: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private appStateService: AppStateService,
              private configsService: ConfigsService) { }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(params => {
        this.tableName = params.tableName;
        this.tableColumns = this.configsService.getColumnsConfig(params.tableName);
    
    });

    this.appStateDataSub = this.appStateService.appStateData.subscribe(appStateData => {
        this.selectedLanguage = appStateData.language;
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.appStateDataSub.unsubscribe();
  }

}
