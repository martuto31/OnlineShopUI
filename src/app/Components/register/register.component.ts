import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DecodedToken } from 'src/app/Models/DecodedToken';
import { User } from 'src/app/Models/user.model';
import { NavService } from 'src/app/Services/nav.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private router: Router, private userService: UserService, private navService: NavService) {}

  user: User = {username: '', password: '', email: '', roleId: 1, id: 0};

  public onSubmit(): void 
  {
      this.userService
      .registerUser(this.user)
      .subscribe(() => 
      {
        this.userService
        .loginUser(this.user.username, this.user.password)
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
    });
  }

  public closePopUp()
  {
    const currentRoute = this.router.url;
    this.navService.removeBlur(currentRoute);

    (document.querySelector('.register-container') as HTMLInputElement).style.display = 'none';
  }
}
