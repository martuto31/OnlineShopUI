import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/Services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router: Router, private navService: NavService) { }

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
}
