import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/Services/nav.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router: Router, private navService: NavService, private userService: UserService) { }

  isAuthenticated: boolean = false;
  isAdmin: boolean = false;

  ngOnInit() {
    this.userService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    this.userService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }

  showLoginForm(){
    const currentRoute = this.router.url;

    (document.querySelector('.login-container') as HTMLInputElement).style.display = 'flex';

    this.navService.blurBackground(currentRoute);
  }

  showRegisterForm(){
    const currentRoute = this.router.url;

    (document.querySelector('.register-container') as HTMLInputElement).style.display = 'flex';

    this.navService.blurBackground(currentRoute);
  }

  logout(){
    this.isAuthenticated = false;
    this.userService.setAuthenticated(false);

    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAdmin');

    this.showLoginForm();
  }
}
