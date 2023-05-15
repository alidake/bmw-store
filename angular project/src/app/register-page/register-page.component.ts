import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  env = environment;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group(
      {

        fullName: [undefined, [Validators.required, Validators.maxLength(20)]],

        username: [undefined, [Validators.required, Validators.minLength(4), Validators.max(16)]],

        email: [undefined, [Validators.required, Validators.email]],


        phoneNumber: [undefined, [Validators.pattern(/\d/g), Validators.maxLength(10)]],


        password: [undefined, [Validators.required, Validators.minLength(6)]],

        confirmPassword: [undefined, [Validators.required, Validators.minLength(6)]],

        gender: [undefined, Validators.required],

        role: [undefined, Validators.required],







      }
    )
  }
  createUser() {
    if (this.registerForm.valid) {

      const register = this.registerForm.value;
      this.http.post(`${this.env.apiUrl}/register`, register).
        pipe(catchError(err => {
          console.log(err);
          alert(err.error.error);
          return EMPTY.pipe();
        })).
        subscribe(data => {
          console.log(data);
        })
    }

    else {
      if (!this.registerForm.get('username').valid) {
        alert('Invalid username')
      }
      else if (!this.registerForm.get('email').valid) {
        alert('Invalid Email')
      }
      else if (this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value)
        alert("passwords do not match")
    }
  }
}
