import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.scss'],
})
export class WildcardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.test();
  }
  test() {
    console.log('tets');
  }
}
