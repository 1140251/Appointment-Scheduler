import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../../../../models/user';
import { UserService } from '../../../../shared/services/user/user.service';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  submitClicked= false;
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
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.minLength(4), Validators.required]),
      confirmPassword: new FormControl('', [Validators.minLength(4), Validators.required]),
      role: new FormControl('', Validators.required)
    }, this.passwordMatchValidator // your validation method
    );
  }

  cancel() {
    this.router.navigate(['/adminDEV/users/list']);
  }

  onSubmit() {
    this.submitClicked = true;
    if (this.userForm.valid) {
      this.submitClicked = false;
      this.user = this.userForm.value;
      /* Any API call logic via services goes here */
      this.userService.addUser(this.user).subscribe(
        res => {
          this.userService.sucessMessage = 'User added sucessfully';
          this.router.navigate(['/adminDEV/users/list']);
        },
        error => {
          if (error.status === 409) {
            this.errorMessage = 'User already exist!';
          } else {
            this.errorMessage = 'Something went wrong!\n' + error;
          }
          setTimeout(() => this.errorMessage = null, 5000);
        }
      );
    }
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

}
