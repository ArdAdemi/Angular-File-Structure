import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../shared/authentication';
import {Router} from '@angular/router';
import {DataService} from '../../../core/services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router, private dataservice: DataService) {

  }

  ngOnInit() {
    this.dataservice.getUsers().subscribe(data => console.log(data),
    );
  }


  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/');

  }

}
