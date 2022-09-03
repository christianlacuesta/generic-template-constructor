import { Component, Input, OnInit } from '@angular/core';
import { FormItemModel } from 'src/app/models/form/form.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() formItem: FormItemModel = null;

  options: any[] = [];

  selectedOption: any;

  constructor() { }

  ngOnInit(): void {
    this.options = this.formItem.subItems;
  }

}
