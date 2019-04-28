import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
// to decorate our api service we use injectable

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  messages = [];
  users = [];

  getMessages() {
    this.http.get("http://localhost:3000/posts").subscribe(res => {
      this.messages = res.json();
    });
  }

  getUsers() {
    this.http.get("http://localhost:3000/users").subscribe(res => {
      this.users = res.json();
    });
  }

  getProfile(id) {
    return this.http.get("http://localhost:3000/profile/" + id);
  }
}
