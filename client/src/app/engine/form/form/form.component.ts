import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfigsService } from 'src/app/services/configs.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  tableName: string

  form = new FormGroup({
    'name':new FormControl(null,[Validators.required])
  });

  formConfig: any = null;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig,
              private configsService: ConfigsService) { }

  ngOnInit(): void {

    this.tableName = this.config.data.tableName;

    this.formConfig = this.configsService.getFormsConfig(this.tableName);

  }

  onSubmit() {
    console.log(this.form);
  }

  onBack() {

  }

}
