import { Component, OnInit } from '@angular/core';
import { AppLanguageModel } from '../models/app-models/app-language.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  languageOption: AppLanguageModel[] = [
    {name: 'english', code: 'en'},
    {name: 'arabic', code: 'ar'},
  ];

  selectedLanguage: AppLanguageModel = {name: 'english', code: 'en'};

  constructor() { }

  ngOnInit(): void {

    
  }

}
