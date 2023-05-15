import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sellers-page',
  templateUrl: './sellers-page.component.html',
  styleUrls: ['./sellers-page.component.scss']
})
export class SellersPageComponent implements OnInit {
  carForm: FormGroup;
  showError: boolean;
  env = environment;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.carForm = this.fb.group(
      {
        model: [undefined, [Validators.required]],
        price: [undefined, [Validators.required]],
        info: [undefined, [Validators.required]],
        image: [undefined, [Validators.required]],
      }
    )
    this.carForm.valueChanges.subscribe(data => {
      this.showError = false;
    })
  } fileChange(e: any) {
    var files = e.target.files;
    var file = files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      this.carForm.get('image').setValue((event.target.result));
    }
  }
  submit() {
    if (this.carForm.valid) {
      const token = JSON.parse(localStorage.getItem('user')).token
      console.log(token);
      this.http.post(`${this.env.apiUrl}/add-car`, this.carForm.value, { headers: { authorization: 'bearer ' + token } }).subscribe(data => {
        alert('car added successfuly');
      })
    }
    else {
      this.showError = true;
    }
  }

}
