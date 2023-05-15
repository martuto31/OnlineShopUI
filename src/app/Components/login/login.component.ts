import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private userService: UserService) {}

  public onSubmit(): void 
  {
      this.userService
      .loginUser(this.username, this.password)
      .subscribe(() => 
      {
        // Login successful, navigate to home page
        this.router.navigate(['/home']);
      }, err => 
      {
        console.log(err);
      });
  }

  public closePopUp()
  {
    (document.querySelector('.login-container') as HTMLInputElement).style.display = 'none';
    (document.querySelector('.home-container') as HTMLInputElement).style.filter = 'blur(0)';
  }
};
