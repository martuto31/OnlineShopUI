import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private router: Router, private userService: UserService) {}

  user: User = {username: '', password: '', email: '', roleId: 1, id: 0};

  public onSubmit(): void 
  {
      this.userService
      .registerUser(this.user)
      .subscribe(() => 
      {
        // Register successful, navigate to home page
        this.router.navigate(['/home']);
      }, err => 
      {
        console.log(err);
      });
  }

  public closePopUp()
  {
    (document.querySelector('.register-container') as HTMLInputElement).style.display = 'none';
    (document.querySelector('.home-container') as HTMLInputElement).style.filter = 'blur(0)';
  }
}
