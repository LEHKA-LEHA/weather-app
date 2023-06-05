import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user).pipe(
      map((data: any) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        return data;
      })
    );
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get(this.apiUrl + `?email=${email}&password=${password}`).pipe(
      map((data: any) => {
        if (data.length > 0) {
          this.isLoggedIn = true;
          return true;
        } else {
          this.isLoggedIn = false;
          return false;
        }
      })
    );
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  updateUser(user: any): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    user.id = currentUser.id;
    return this.http.put(this.apiUrl + '/' + user.id, user).pipe(
      map((data: any) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        return data;
      })
    );
  }

  deleteUser(): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return this.http.delete(this.apiUrl + '/' + currentUser.id).pipe(
      map((data: any) => {
        localStorage.removeItem('currentUser');
        this.isLoggedIn = false;
        return data;
      })
    );
  }
}
