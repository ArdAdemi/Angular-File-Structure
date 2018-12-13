import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
    this.authService.login().subscribe(res => console.log(res));
  }

  ngOnInit() {
  }

}
