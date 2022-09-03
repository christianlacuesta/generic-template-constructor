import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onChange(tableName: string) {
    const urlArr = this.route.snapshot.url;

    let newLink = [];

    for (let i = 0; urlArr.length > i; i++) {
      newLink.push(urlArr[i].path);
    }
    
    newLink.push('table');
    newLink.push(tableName);

    this.router.navigate(newLink);
  }

}
