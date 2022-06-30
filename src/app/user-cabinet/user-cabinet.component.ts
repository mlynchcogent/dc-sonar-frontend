import {Component, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {UserLoginService} from "../services/user-login.service";

@Component({
  selector: 'app-user-cabinet',
  templateUrl: './user-cabinet.component.html',
  styleUrls: ['./user-cabinet.component.scss']
})
export class UserCabinetComponent implements OnInit {
  faUser = faUser;

  constructor(private userLoginService: UserLoginService) {
  }

  ngOnInit(): void {
    this.userLoginService.checkLogging();
  }

}
