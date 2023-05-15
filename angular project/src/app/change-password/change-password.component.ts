import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  loginForm: FormGroup;
  env = environment;
  showError: boolean;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {


        password: [undefined, [Validators.required, Validators.minLength(6)]],



        newPassword: [undefined, [Validators.required, Validators.minLength(6)]],


      }
    )
    this.loginForm.valueChanges.subscribe(data => {
      this.showError = false;
    })
  }
  changePass() {
    if (this.loginForm.valid) {
      const token = JSON.parse(localStorage.getItem('user')).token
      this.http.put(`${this.env.apiUrl}/change-pass`, this.loginForm.value, { headers: { authorization: 'bearer ' + token } }).pipe(catchError(err => {
        console.log(err);
        alert(err.error.error);
        return EMPTY.pipe();
      })).subscribe(data => {
        alert('password changed successfully')
      })

    }
    else { this.showError = true }
  }
}
