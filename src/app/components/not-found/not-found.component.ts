import {Component, OnInit} from '@angular/core';
import {UserLoginService} from "../../services/user-login.service";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private userLoginService: UserLoginService) {
  }

  ngOnInit(): void {
    const userLoginStatus = this.userLoginService.getStatus();
    if (userLoginStatus != 'login') {
      this.userLoginService.logout();
    }
  }

}
