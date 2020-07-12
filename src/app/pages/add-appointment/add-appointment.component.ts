import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AppointmentService } from 'src/app/services/appointment.service';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FileUploadService } from 'src/app/file-upload.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';

export interface appointments {
  id: number;
  name: string;
  doctor: string;
  email: any;
  visit_time: any;
  number: number;
  injury: string;
}
@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
  @ViewChild('picker') picker: any;
  public disableMinute: boolean = false;
  public hideTime: boolean = false;
  public date: moment.Moment;
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = true;
  public enableMeridian = false;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  appointments: any = [];
  isshown = false;
  isTable = true;
  isBtn = true;
  submitted: boolean = false;
  inputForm: FormGroup;
  dataSource: any;
  displayedColumns: any[] = [
    'id',
    'name',
    'doctor',
    'photo',

    'email',
    'visit_time',
    'number',
    'injury',
    'action',
  ];
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  form: FormGroup;
  progress: number = 0;
  data: any = [];
  constructor(
    public fileUploadService: FileUploadService,
    private appointservice: AppointmentService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null],
    });
    this.createForm();
  }

  public dateControl = new FormControl(new Date(2021, 9, 4, 5, 6, 7));
  createForm() {
    this.inputForm = this.fb.group({
      id: null,
      name: [null, Validators.required],
      doctor: [null, Validators.required],
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],

      visit_time: [null, Validators.required],

      number: [
        null,
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      injury: [null, Validators.required],
    });
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit() {
    this.getappointments();

    //this.dataSource.paginator = this.paginator;
  }

  opencard() {
    this.submitted = false;
    this.inputForm.reset();
    this.isshown = true;
    this.isTable = false;
    this.isBtn = false;
  }
  getappointments() {
    this.appointservice.getAppointment().subscribe(
      (res) => {
        console.log(res);
        if (res) {
          this.dataSource = new MatTableDataSource<appointments>(res);
          this.data = this.dataSource;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      (error) => {
        alert('please Start Json Server');
      }
    );
  }

  save() {
    this.submitted = true;
    let req = this.inputForm.value;
    let id = this.inputForm.get('id').value;

    if (this.inputForm.valid && id == null) {
      let id = null;
      this.appointservice.save(req, id).subscribe((res) => {
        if (res) {
          this.snackBar.open('Success!!', 'Created', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.isshown = false;
          this.isTable = true;
          this.isBtn = true;
          this.getappointments();
        }
      });
    } else if (this.inputForm.valid && id != null) {
      this.appointservice.save(req, id).subscribe((res) => {
        if (res) {
          this.snackBar.open('Success!!', 'Updated', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.isshown = false;
          this.isTable = true;
          this.isBtn = true;
        }
        let newhospital_managements = this.dataSource.filter(
          (item) => item.id !== id
        );
        this.dataSource = newhospital_managements;
      });
    }
  }
  delete(id) {
    let Id = id;
    this.appointservice.delete(id).subscribe((res) => {
      if (res) {
        this.snackBar.open('Success!!', 'Deleted', {
          duration: 500,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.getappointments();
      }
    });
  }

  view(id) {
    this.appointservice.view(id).subscribe((res) => {
      if (res) {
        this.isshown = true;
        this.isTable = false;
        this.inputForm.patchValue({
          name: res['name'] || '',
          id: res['id'] || '',
          doctor: res['doctor'] || '',
          email: res['email'] || '',
          photo: res['photo'] || '',
          date: res['date'] || '',
          visit_time: res['visit_time'] || '',
          number: res['number'] || '',
          injury: res['injury'] || '',
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  goForm() {
    this.isshown = false;
    this.isBtn = true;
    this.isTable = true;
  }
}
