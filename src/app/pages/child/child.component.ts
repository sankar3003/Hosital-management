import { ApiService } from './../api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  private loggedIn: boolean;
  message: string;
  data = 'hello sankar welcoem to  parent';
  messaging = ' hei this is veeiw child';

  fname = 'sandy master';

  @Input() newbj;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private api: ApiService) {}

  get login(): boolean {
    return this.loggedIn;
  }
  @Input()
  set login(value: boolean) {
    this.loggedIn = value;
    if (this.loggedIn === true) {
      this.message = 'Welcoem back';
    } else {
      this.message = 'please logged in';
    }
  }

  ngOnInit(): void {}
  sendMessage() {
    this.messageEvent.emit(this.data);
  }

  sendingmessage() {
    this.api.changem(this.messaging);
  }
}
