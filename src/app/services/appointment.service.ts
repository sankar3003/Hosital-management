import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  _url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAppointment(): any {
    return this.http.get(this._url + `/appointments`);
  }

  save(req, ID) {
    let request = req;
    let id = ID;
    if (id != null) {
      return this.http.put(this._url + `/appointments/${id}`, request);
    } else if (id == null) {
      return this.http.post(this._url + `/appointments`, request);
    }
  }

  delete(id) {
    return this.http.delete(this._url + `/appointments/${id}`);
  }
  view(id) {
    return this.http.get(this._url + `/appointments/${id}`);
  }
}
