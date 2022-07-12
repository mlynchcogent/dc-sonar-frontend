import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import jwt_decode from 'jwt-decode';
import {map, Observable} from "rxjs";
import {Token, TokenData, TokenRefreshRequest, UserInfo, UserLoginData} from "../interfaces";
import {Router} from '@angular/router';
import {SnackBarService} from "../shared/services/snack-bar.service";
import {SyncRequestClient, SyncRequestHeader} from 'ts-sync-request/dist'
import {SupportFunctionsService} from "../shared/services/support-functions.service";

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {


  // http options used for making API calls
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private tokenTemplate: Token = {
    token_type: '',
    exp: 0,
    iat: 0,
    jti: '',
    user_id: 0,
    username: ''
  };


  constructor(private http: HttpClient,
              private router: Router,
              private snackBarService: SnackBarService,
              private supportFunctionsService: SupportFunctionsService) {

  }

  login(userLoginData: UserLoginData) {
    console.log('login');
    this.getToken(userLoginData).subscribe((tokenData: TokenData) => {
        console.log(tokenData);
        this.setNewToken(tokenData);
        this.router.navigate(['/user-cabinet', 'domains']);
      },
      err => {
        if (err.status === 401) {
          this.snackBarService.showError('Incorrect login or password');
        }
      },);
  }

  public setNewToken(tokenData: TokenData) {
    console.log('setNewToken', tokenData);
    this.setTokenLocal('accessToken', jwt_decode(tokenData.access));
    this.setTokenLocal('refreshToken', jwt_decode(tokenData.refresh));
    localStorage.setItem('accessTokenClean', tokenData.access);
    localStorage.setItem('refreshTokenClean', tokenData.refresh);
    this.setStatus('login');
  }

  logout(isForce:boolean = true) {
    this.setTokenLocal('accessToken', this.tokenTemplate);
    this.setStatus('logout');
    this.router.navigate(['/']);
    if (isForce){
      this.snackBarService.showInfo('Login is required');
    }
  }

  getToken(userLoginData: UserLoginData): Observable<TokenData> {
    console.log('getToken');
    return this.http.post<TokenData>(`${environment.url}/token/`, JSON.stringify(userLoginData), this.httpOptions).pipe(
      map((data) => {
        return data;
      })
    )
  }

  refreshTokenSync(): TokenData {
    const url = `${environment.url}/token/refresh/`;
    return new SyncRequestClient().post<TokenRefreshRequest, TokenData>(url, {
      'refresh': this.getRefreshTokenClean()
    });
  }

  private setStatus(status: string) {
    localStorage.setItem('status', status);
  }

  public getStatus(): string {
    const status = localStorage.getItem('status');
    if (status) {
      return status;
    }
    return '';
  }

  private setTokenLocal(name: string, token: Token) {
    localStorage.setItem(name, JSON.stringify(token));
  }

  private getTokenLocal(name: string): Token {
    const token = localStorage.getItem(name);
    if (token) {
      return JSON.parse(token);
    }
    return this.tokenTemplate;
  }

  getAccessToken() {
    return this.getTokenLocal('accessToken');
  }

  getRefreshToken() {
    return this.getTokenLocal('refreshToken');
  }

  private getRefreshTokenClean(): string {
    const refreshTokenClean = localStorage.getItem('refreshTokenClean');
    if (refreshTokenClean) {
      return refreshTokenClean;
    }
    return '';
  }

  public getAccessTokenClean(): string {

    const accessTokenClean = localStorage.getItem('accessTokenClean');
    console.log('accessTokenClean', accessTokenClean);
    if (accessTokenClean) {
      return accessTokenClean;
    }
    return '';
  }

  public checkLogging(): void {

    if (this.getStatus() != 'login') {
      this.logout();
    }
    const refreshToken = this.getRefreshToken();
    if (this.supportFunctionsService.getCurrentUTCSeconds() >= refreshToken.exp) {
      this.logout();
    }
  }

  public getUserIngo(): UserInfo{
    const accessToken = this.getAccessToken();
    return {
      userID: accessToken.user_id,
      username: accessToken.username
    }
  }
}
