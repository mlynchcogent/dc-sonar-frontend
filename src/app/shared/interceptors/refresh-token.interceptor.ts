import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, EMPTY, Observable, throwError} from 'rxjs';
import {UserLoginService} from "../../services/user-login.service";
import {SnackBarService} from "../services/snack-bar.service";

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private userLoginService: UserLoginService, private snackBarService: SnackBarService) {
  }

  private static getCurrentUTCSeconds(): number {
    return Math.floor(Date.now() / 1000);
  }

  private Catch401Error(error: HttpErrorResponse, request: HttpRequest<unknown>, next: HttpHandler) {
    // http-error interceptor works for non 401 errors
    if (error.status != 401) {
      return EMPTY;
    }

    // Access token not valid
    if (error.status === 401 && error.error.code === 'token_not_valid' && error.error.detail === 'Given token not valid for any token type') {
      console.log('catch Access token not valid 401');
      const tokenData = this.userLoginService.refreshTokenSync();
      this.userLoginService.setNewToken(tokenData);
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${this.userLoginService.getAccessTokenClean()}`}
      });
      console.log('send request', request);
      return next.handle(request)

    }

    // Refresh token not valid
    if (error.status === 401 && error.error.code === 'token_not_valid' && error.error.detail === 'Token is invalid or expired') {
      console.log('catch Refresh token not valid 401');
      this.userLoginService.logout();
      return EMPTY;
    }

    // Catch Unknown 401 Error
    let errorText = '';
    if ('message' in error.error) {
      errorText = `Unknown 401 Server: ${error.message} ${error.error.message}`;
    } else {
      errorText = `Unknown 401 Server: ${error.message} ${JSON.stringify(error.error)}`;
    }
    this.snackBarService.showError(errorText);
    return throwError(() => error);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('RefreshTokenInterceptor');

    const userLoginStatus = this.userLoginService.getStatus();
    console.log('userLoginStatus', userLoginStatus);
    console.log('request.url', request.url)
    if ((userLoginStatus != 'login') && !request.url.includes('/token/')) {
      this.userLoginService.logout();
      return EMPTY;
    }

    if (userLoginStatus === 'login' && !request.url.includes('/token/')) {
      const accessToken = this.userLoginService.getAccessToken();
      const refreshToken = this.userLoginService.getRefreshToken();

      if (accessToken.user_id === 0 || refreshToken.user_id === 0) {
        this.userLoginService.logout();
        return EMPTY;
      }

      console.log(RefreshTokenInterceptor.getCurrentUTCSeconds(), '>=', accessToken.exp);

      if (RefreshTokenInterceptor.getCurrentUTCSeconds() >= accessToken.exp) {
        if (RefreshTokenInterceptor.getCurrentUTCSeconds() >= refreshToken.exp) {
          this.userLoginService.logout();
          return EMPTY;
        }
        console.log('Getting new token before request');

        const tokenData = this.userLoginService.refreshTokenSync();
        this.userLoginService.setNewToken(tokenData);

      }

    }

    request = request.clone({
      setHeaders: {Authorization: `Bearer ${this.userLoginService.getAccessTokenClean()}`}
    });
    console.log('send request', request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.Catch401Error(error, request, next);
      })
    );
  }
}
