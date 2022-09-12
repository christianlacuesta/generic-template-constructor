import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  providers: [MessageService]
})
export class LoaderComponent implements OnInit {

  value: number = 0;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    let interval = setInterval(() => {
      this.value = this.value + 20;
        if (this.value >= 100) {
          this.value = 100;
          this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});
          clearInterval(interval);
        }
      }, 100);
  }

}
