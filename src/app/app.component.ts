import { ApiService } from './api.service';

import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  color: string;

  name: string = 'sankar';

  userLoggedIn: boolean;

  myobj = {
    name: 'John',
    age: 30,
    cars: ['Ford', 'BMW', 'Fiat'],
  };

  n: string;
  mname: any;

  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.currentMessage.subscribe((m) => (this.message = m));
  }
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  ngAfterViewInit() {}

  message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}
