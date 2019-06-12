import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { User } from '../Models/credent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  log(userCred) {
    console.log(userCred);
    this.loginService.getData().subscribe((x: User[]) => {
      if (x[0].loginId === userCred.email) {
        console.log(x[0].password);
        if (x[0].password === userCred.password) {
          alert('logged in successfully');
        } else {
          alert('Incorrect Password');
        }
      } else {
        alert('Incorrect Email');
      }
    });
  }
  ngOnInit() { }

}
