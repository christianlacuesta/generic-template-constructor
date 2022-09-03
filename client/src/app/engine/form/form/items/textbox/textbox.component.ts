import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormItemModel } from 'src/app/models/form/form.model';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() formItem: FormItemModel = null;

  formControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.formControl = new FormControl('');

  }

}
