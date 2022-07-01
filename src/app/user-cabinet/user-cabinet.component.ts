import {Component, OnInit} from '@angular/core';
import {UserLoginService} from "../services/user-login.service";
import {UserInfo} from "../interfaces";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {frontEndVersion} from 'src/environments/version';
import {LoadersShowerService} from "../shared/services/loaders-shower.service";


export interface VersionInfoData {
  version: string;
}

@Component({
  selector: 'app-user-cabinet',
  templateUrl: './user-cabinet.component.html',
  styleUrls: ['./user-cabinet.component.scss']
})
export class UserCabinetComponent implements OnInit {
  isRequestSending: boolean = false;

  userInfo: UserInfo = {
    userID: 0,
    username: ''
  };

  backEndVersion = '0.0.0';
  frontEndVersion = frontEndVersion.title;

  constructor(private userLoginService: UserLoginService, private http: HttpClient, private loadersShower: LoadersShowerService) {

  }

  ngOnInit(): void {
    this.userLoginService.checkLogging();
    this.userInfo = this.userLoginService.getUserIngo();
    this.getVersion().subscribe((versionInfoData) => {
      this.backEndVersion = versionInfoData.version;
    });

    this.loadersShower.sharedIsRequestSending.subscribe(isRequestSending => {
      // console.log('subscribe isRequestSending', isRequestSending);
      this.isRequestSending = isRequestSending
    });
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
