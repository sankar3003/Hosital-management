import { ApplicationConfig } from './resources/application.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private config: ApplicationConfig) {}

  get() {
    return this.http.get(this.config.domain + `view.php`);
  }

  delete(id: number) {
    return this.http.get(this.config.domain + 'delete.php?id=' + id);
  }
  getuser(id) {
    return this.http.get(this.config.domain + 'view_one.php?id=' + id);
  }
  createUser(data) {
    return this.http.post(this.config.domain + 'create.php', data);
  }
  updateUser(data) {
    return this.http.post(this.config.domain + 'update.php', data);
  }
}
