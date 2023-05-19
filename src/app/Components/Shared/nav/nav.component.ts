import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  showLoginForm(){
    // loading in home
    (document.querySelector('.login-container') as HTMLInputElement).style.display = 'flex';
    (document.querySelector('.home-container') as HTMLInputElement).style.filter = 'blur(.5rem)';
  }

  showRegisterForm(){
    (document.querySelector('.register-container') as HTMLInputElement).style.display = 'flex';
    (document.querySelector('.home-container') as HTMLInputElement).style.filter = 'blur(.5rem)';
  }
}
