import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUserUrl = 'https://localhost:7260/api/User';


  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<any>(`${this.apiUserUrl}/Register`, user);
  }

  loginUser(username: string, password: string): Observable<User> {
    return this.http.post<any>(`${this.apiUserUrl}/Login`, {username, password});
  }
}
