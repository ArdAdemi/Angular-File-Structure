import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../core/authentication';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/');

  }

}
