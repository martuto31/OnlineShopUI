import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUserUrl = 'https://localhost:7260/api/User'; 
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private isAdminSubject = new BehaviorSubject<boolean>(false);
  public isAdmin$ = this.isAdminSubject.asObservable();

  constructor(private http: HttpClient) {
    this.isAuthenticatedSubject.next(localStorage.getItem('isAuthenticated') === 'true');
    this.isAdminSubject.next(localStorage.getItem('isAdmin') === 'true');
    // console.log(localStorage.getItem('isAuthenticated'));
    // console.log(localStorage.getItem('isAdmin'));
   }

  registerUser(user: User): Observable<User> {
    return this.http.post<any>(`${this.apiUserUrl}/Register`, user);
  }

  loginUser(username: string, password: string): Observable<string> {
    return this.http.post(`${this.apiUserUrl}/Login`, {username, password}, { responseType: 'text' });
  }

  setAuthenticated(isAuthenticated: boolean): any{
    this.isAuthenticatedSubject.next(isAuthenticated);
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }

  setAdmin(isAdmin: boolean): any{
    this.isAdminSubject.next(isAdmin);
    localStorage.setItem('isAdmin', isAdmin.toString());
  }

  checkIfAdmin(): any{
    var role = localStorage.getItem('role');

    if(role === "Admin")
    {
      this.setAdmin(true);
    }
    else
    {
      this.setAdmin(false);
    }
  }
}
