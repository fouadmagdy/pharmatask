import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs"
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private authListnerSubs!: Subscription
  userIsAuth = false

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authListnerSubs = this.authService.getAuthStatusListner().subscribe(isAuth => {
      this.userIsAuth = isAuth;
    })
  }

  ngOnDestroy() {
    this.authListnerSubs.unsubscribe()
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.signInUser(form.value.email, form.value.password)
  }
}
