import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs"
import { Router } from '@angular/router';

import { AuthData } from "./auth-data.model"

@Injectable({ providedIn: "root" })
export class AuthService {

  private token!: string;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>()

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  constructor(private http: HttpClient, private route: Router) { }

  getAuthStatusListner() {
    return this.authStatusListener.asObservable()
  }

  signInUser(email: string, password: string) {
    const authData: AuthData = { email, password };
    this.http.post<{ token: string }>("https://taskfrontendapi.azurewebsites.net/api/user/login", authData).subscribe(res => {
      console.log(res)
      const token = res.token
      this.token = token;
      this.isAuthenticated = true;
      this.authStatusListener.next(true)
      this.route.navigate(['/country']);
    })
  }
}
