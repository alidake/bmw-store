import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.serivce';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  env = environment;
  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {


        username: [undefined, [Validators.required, Validators.minLength(4), Validators.max(16)]],



        password: [undefined, [Validators.required, Validators.minLength(6)]],


      }
    )
  }
  login() {
    if (this.loginForm.valid) {

      const register = this.loginForm.value;
      this.http.post(`${this.env.apiUrl}/login`, register).
        pipe(catchError(err => {
          console.log(err);
          alert(err.error.error);
          return EMPTY.pipe();
        })).
        subscribe(data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.authService.isLoggedIn = true;
          this.router.navigate(['/landing-page'])
        })
    }

    else {
      if (!this.loginForm.get('username').valid) {
        alert('Invalid username')
      }

      else if (this.loginForm.get('password').value !== this.loginForm.get('confirmPassword').value)
        alert("passwords do not match")
    }
  }
}
