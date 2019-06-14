import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient ) { }

  registerUser(user) {
    return this.http.post(this.url + '/register', user).pipe(map((res) => {
      return res;
    }));
  }

  loginUser(userCred): Observable<any> {
    console.log('user service');
    return this.http.post(this.url + '/login', userCred).pipe(map((res) => {
      console.log(res);
     // return res;
    }));
  }
}
