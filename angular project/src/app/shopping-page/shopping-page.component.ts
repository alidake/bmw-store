import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.scss']
})
export class ShoppingPageComponent implements OnInit {
  searchTerm = '';

  env = environment;

  cards: any = []
  tempCars = [];
  user: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const creds = JSON.parse(localStorage.getItem('user'));
    this.user = creds.user;
    this.http.get(`${this.env.apiUrl}/cars`, {
      headers: {
        Authorization: 'bearer ' + creds.token
      }
    }).subscribe(data => {
      this.cards = data
      this.tempCars = this.cards.slice();
    })
  }
  search(search: string) {
    this.tempCars = this.cards.filter(data => {
      return data.model?.toLowerCase()?.includes(search?.toLowerCase());
    })
  }
  deleteCar(car: any) {
    Swal.fire({
      title: 'Do you want to delete' + car?.model,
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        const creds = JSON.parse(localStorage.getItem('user'));
        this.http.delete(`${this.env.apiUrl}/car/${car?._id}/delete`, {
          headers: {
            Authorization: 'bearer ' + creds.token
          }
        }).subscribe(data => {
          Swal.fire('Deleted successfuully').then(data => {
            this.ngOnInit();
          })
        })
      }
    })
  }
}


