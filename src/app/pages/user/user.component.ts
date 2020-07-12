import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { filter } from 'rxjs/operators';
import { UsersService } from './../../users.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { ThemePalette } from '@angular/material/core';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FileUploadService } from 'src/app/file-upload.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { appointments } from '../add-appointment/add-appointment.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
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
  users: User[];

  userForm: FormGroup;
  appointments: any = [];
  isshown = false;
  isTable = true;
  isBtn = true;
  submitted: boolean = false;
  inputForm: FormGroup;
  dataSource: any;
  displayedColumns: any[] = ['id', 'name', 'email', 'action'];
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  form: FormGroup;
  progress: number = 0;
  data: any = [];
  constructor(
    public fileUploadService: FileUploadService,
    private appointservice: AppointmentService,
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private userservice: UsersService
  ) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      id: [null],
    });
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit() {
    this.getusers();
    //this.dataSource.paginator = this.paginator;
  }

  opencard() {
    this.submitted = false;
    this.userForm.reset();
    this.isshown = true;
    this.isTable = false;
    this.isBtn = false;
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

  create(values) {
    console.table(values);
    const productData = new FormData();
    productData.append('name', values.name);
    productData.append('email', values.email);

    this.userservice.createUser(productData).subscribe((res) => {
      console.log(res);
      if (res['result'] == 'success') {
        this.isshown = false;
        this.isTable = true;
        this.isBtn = true;
        this.getusers();
      }
    });
  }
  update(values) {
    const productData = new FormData();
    productData.append('id', values.id);
    productData.append('name', values.name);
    productData.append('email', values.email);

    this.userservice.updateUser(productData).subscribe((res) => {
      if (res['result'] == 'success') {
        this.isshown = false;
        this.isTable = true;
        this.isBtn = true;
        this.getusers();
      }
    });
  }

  view(id) {
    this.userservice.getuser(id).subscribe((res) => {
      if (res) {
        this.isshown = true;
        this.isTable = false;
        this.isBtn = false;
        this.userForm.patchValue({
          name: res['name'],
          email: res['email'],
          id: res['id'],
        });
      }
    });
  }

  getusers() {
    this.userservice.get().subscribe(
      (res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource<appointments>(res);
        this.data = this.dataSource;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        alert('For Doing crud opearation you must start Your Xamp Server');
      }
    );
  }
  delete(users: User): void {
    console.log(users);
    this.userservice.delete(users.id).subscribe((res) => {
      if (res) {
        this.getusers();
      }
      this.data = this.users.filter((u) => u != users);
    });
  }
}
