import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../../../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../../shared/services/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  userListError: boolean;
  submitClicked = false;
  private userId: string;

  userForm: FormGroup;

  private user: User;

  private roleList: string[];

  private errorMessage = null;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  get username() { return this.userForm.get('username'); }

  get email() { return this.userForm.get('email'); }

  get password() { return this.userForm.get('password'); }

  get confirmPassword() { return this.userForm.get('confirmPassword'); }

  get role() { return this.userForm.get('role'); }

  ngOnInit() {
    this.roleList = ['SuperAdmin', 'Admin'];
    this.route.params.forEach((params: Params) => {
      this.userId = params['id'];
    });
    this.userService.getUser(this.userId).subscribe(
      res => {
        this.user = res.json();
        console.log(this.user.username);
      },
      error => { this.userListError = true; });
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.minLength(4), Validators.required]),
      confirmPassword: new FormControl('', [Validators.minLength(4), Validators.required]),
      role: new FormControl('', Validators.required)
    }, this.passwordMatchValidator // your validation method
    );

  }

  private passwordMatchValidator(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      AC.get('confirmPassword').setErrors({ mismatch: true });
    } else {
      return null;
    }
  }

  cancel() {
    this.router.navigate(['/adminDEV/users/list']);
  }

  onSubmit() {
    this.submitClicked = true;
    if (this.userForm.valid) {
      this.submitClicked = false;
      this.userService.updateUser(this.userId, this.user).subscribe(
        res => {
          console.log('res' + res);
          this.user = null;
          this.userService.sucessMessage = 'User updated sucessfully';
          this.router.navigate(['/adminDEV/users/list']);
        },
        error => {
          if (error.status === 404) {
            this.errorMessage = 'User not found!';
          } else {
            this.errorMessage = 'Something went wrong!\n' + error;
          }
          setTimeout(() => this.errorMessage = null, 5000);
        });
    }
  }

}
