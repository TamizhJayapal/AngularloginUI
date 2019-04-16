import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/credent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  url = '../assets/credential.json';
  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
