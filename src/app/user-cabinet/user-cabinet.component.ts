import {Component, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRightFromBracket,
  faHouse,
  faInfinity,
  faRecycle,
  faRotate,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import {UserLoginService} from "../services/user-login.service";
import {UserInfo} from "../interfaces";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { frontEndVersion } from 'src/environments/version';


export interface VersionInfoData {
  version: string;
}

@Component({
  selector: 'app-user-cabinet',
  templateUrl: './user-cabinet.component.html',
  styleUrls: ['./user-cabinet.component.scss']
})
export class UserCabinetComponent implements OnInit {
  faUser = faUser;
  faArrowRightFromBracket = faArrowRightFromBracket;
  faHouse = faHouse;
  faRotate = faRotate;
  faInfinity = faInfinity;
  faTriangleExclamation = faTriangleExclamation;
  faRecycle = faRecycle;

  userInfo: UserInfo = {
    userID: 0,
    username: ''
  };

  backEndVersion = '0.0.0';
  frontEndVersion = frontEndVersion.title;

  constructor(private userLoginService: UserLoginService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.userLoginService.checkLogging();
    this.userInfo = this.userLoginService.getUserIngo();
    this.getVersion().subscribe((versionInfoData) => {
      this.backEndVersion = versionInfoData.version;
    })
  }

  logout() {
    this.userLoginService.logout(false);
  }

  getVersion(): Observable<VersionInfoData> {
    return this.http.get<VersionInfoData>(`${environment.url}/api/user-cabinet/version/`).pipe(
      map((data) => {
        return data;
      })
    )
  }

}
