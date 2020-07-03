import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResolveEnd } from '@angular/router';

import { rejects } from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  userdata: any;
  isdisabled: boolean = false;
  constructor(private api: ApiService, public fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: null,
      name: [{ value: null, disabled: this.isdisabled }, Validators.required],
    });
  }

  ngOnInit(): any {
    this.getAlldata();
  }
  getAlldata() {
    this.api.getAlldata().subscribe((res) => {
      if (res && res != null) {
        this.userdata = res.data;
        console.log(this.userdata);
      }
    });
  }
  save() {
    if (this.form.get('id').value != null && this.form.valid) {
      let id = this.form.get('id').value;

      let req = this.form.value;
      this.api.save(req, id).subscribe((res) => {
        if (res) {
          alert('Update Successfully');
          this.getAlldata();
          this.form.reset();
        }
      });
    } else if (this.form.get('id').value == null && this.form.valid) {
      let req = this.form.value;
      let id = this.form.get('id').value;
      this.api.save(req, id).subscribe((res) => {
        if (res) {
          alert('Insertd Successfully');
          this.getAlldata();
          this.form.reset();
        }
      });
    }
  }

  getById(id) {
    this.api.getbyid(id).subscribe((res) => {
      console.log(res);
      if (res && res != null) {
        this.form.patchValue({
          name: res['name'],
          id: res['id'],
        });
      }
    });
  }

  delete(id) {
    const promise = this.api.delete(id).toPromise();
    console.log(promise);
    promise.then(
      (data) => {
        console.log('Promise resolved with: ' + JSON.stringify(data));
        this.getAlldata();
      },
      (error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
        this.getAlldata();
      }
    );
  }
}
