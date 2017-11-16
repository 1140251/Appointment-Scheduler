import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {AuthService} from "../shared/services/auth/auth.service";

class User {
  constructor(username?: string, password?: string) {
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  user: User = new User();
  loading = false;
  error = '';
  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/adminDEV/dashboard'])
    }
  }

  onLogin() {
    this.auth.login(this.user).subscribe(result => {
      if (result === true) {
        // login successful
        this.router.navigate(['/adminDEV']);
      } else {
        // login failed
        this.error = 'Username or password is incorrect';
        this.loading = false;
      }
    });
  }

}
