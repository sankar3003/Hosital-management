import { AddDoctorComponent } from './../add-doctor/add-doctor.component';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss'],
})
export class AddHospitalComponent implements OnInit, AfterViewInit {
  private myname: string;
  constructor() {}
  birthday: Date = new Date();
  toggled: boolean = true;

  @ViewChild('inputref') templateElementRef: ElementRef;

  ngOnInit() {}

  f: any = {
    n1: null,
    n2: null,
  };

  get format() {
    return this.toggled ? 'shortDate' : 'fullDate';
  }

  ngAfterViewInit() {
    this.templateElementRef.nativeElement.focus();
    console.log(this.templateElementRef);
  }

  get name(): string {
    return this.myname;
  }

  set name(value: string) {
    this.myname = value;
    if (value === 'sankar') {
    }
  }
  toggleFormat() {
    this.toggled = !this.toggled;
  }
}
