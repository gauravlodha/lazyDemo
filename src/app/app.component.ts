import { Component, OnInit } from '@angular/core';
declare let CONFIG: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = CONFIG.Title;

  constructor() {
  }

  ngOnInit(): void {
  }
}
