import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserLoginService} from "../../services/user-login.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(public userLoginService: UserLoginService, private router: Router) {
  }

  ngOnInit(): void {

  }

  submit() {
    if (this.form.valid) {
      this.userLoginService.login(this.form.value);

    }
  }

}
