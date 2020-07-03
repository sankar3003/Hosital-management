import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Scheduler } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit {
  _url = 'http://localhost:5200/persons';
  _url1 = 'http://api.giphy.com/v1/gifs/trending';
  stickers = 'http://api.giphy.com/v1/stickers/random';
  api = '17r6fP4PNFGOt3f47gY5ZK0cjpusQFjH';

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getAlldata();
  }
  getAlldata(): any {
    // return this.http.get<any>(this._url);
    return this.http.get(this._url1 + `?api_key=${this.api}`);
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  save(req, id) {
    let data = req;
    if (id && id != null) {
      return this.http.put(this._url + `/${id}`, data);
    } else if (id == null || '') {
      return this.http.post(this._url, data);
    }
  }

  getbyid(id) {
    let id1 = id;
    return this.http.get(this._url + `/${id1}`);
  }
  delete(id) {
    return this.http.delete(this._url + `/${id}`);
  }
}
