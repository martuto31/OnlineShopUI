import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DecodedToken } from 'src/app/Models/DecodedToken';
import { NavService } from 'src/app/Services/nav.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  username: string = "";
  password: string = "";

  constructor(private router: Router, private userService: UserService, private navService: NavService) {}

  public onSubmit(): void 
  {
      this.userService
      .loginUser(this.username, this.password)
      .subscribe((response) => 
      {
        const decodedToken = jwtDecode(response) as DecodedToken;
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

        localStorage.setItem('token', response);
        localStorage.setItem('role', role);

        this.userService.setAuthenticated(true);
        this.userService.checkIfAdmin();

        this.closePopUp();
      }, err => 
      {
        console.log(err);
      });
  }

  public closePopUp()
  {
    const currentRoute = this.router.url;
    this.navService.removeBlur(currentRoute);

    (document.querySelector('.login-container') as HTMLInputElement).style.display = 'none';
  }
};
