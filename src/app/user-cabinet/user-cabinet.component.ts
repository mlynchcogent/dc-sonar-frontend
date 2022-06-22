import {Component, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-cabinet',
  templateUrl: './user-cabinet.component.html',
  styleUrls: ['./user-cabinet.component.scss']
})
export class UserCabinetComponent implements OnInit {
  faUser = faUser;

  constructor() {
  }

  ngOnInit(): void {
  }

}
