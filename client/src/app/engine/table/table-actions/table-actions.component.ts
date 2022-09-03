import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { FormComponent } from '../../form/form/form.component';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
  providers: [DialogService]
})
export class TableActionsComponent implements OnInit {
  @Input() tableName: string = '';

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }

  showForm() {
    const ref = this.dialogService.open(FormComponent, {
      header: `Form: ${this.tableName}`,
      width: '70%',
      data: {mode: 'edit', tableName: this.tableName}
  });

  ref.onClose.subscribe((car: any) => {
      if (car) {
          // this.messageService.add({severity:'info', summary: 'Car Selected', detail:'Vin:' + car.vin});
      }
    });
  }

}
