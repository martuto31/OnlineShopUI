import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  showLogin(){
    (document.querySelector('.login-container') as HTMLInputElement).style.display = 'flex';
    (document.querySelector('.home-container') as HTMLInputElement).style.filter = 'blur(.5rem)';
  }
}
