import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.serivce';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {



  constructor(private router: Router, public authService: AuthService) { }
  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.authService.isLoggedIn = true;
    }

  }
  goTo(name: string) {
    this.router.navigate([name])
  }
  logout() {
    localStorage.clear();
    this.authService.isLoggedIn = false;
    this.router.navigate(['/login-page'])
  }

}
