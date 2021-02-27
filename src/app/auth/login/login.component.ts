import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // The ! is a "definite assignment assertion" to tell typescript
  // that this variable will have a value at run time.
  // Without this, there will be the TS2564 error
  loginForm!: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      // email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      userId: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required]})
    });
  }

  onSubmit(): void {
    console.log(this.loginForm);
    this.authService.login({
      userId: this.loginForm.value.userId,
      password: this.loginForm.value.password,
      roles: Math.random() > 0.49 ? ['art-lib-admin', 'art-lib-user'] : ['art-lib-user']
    });
  }

}
