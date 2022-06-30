import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, EMPTY, Observable, throwError} from 'rxjs';
import {SnackBarService} from "../services/snack-bar.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private snackBarService: SnackBarService) {
    console.log('HttpErrorInterceptor constract');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('HttpErrorInterceptor', request);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        console.log('error', error);

        // For 401 errors works refresh-token interceptor
        if (error.error.status === 401){
          return EMPTY;
        }

        let errorText = '';

        if (error.error instanceof ErrorEvent) {
          errorText = `Client: ${error.error.message}`;
          this.snackBarService.showError(errorText);
          return throwError(() => error);
        }

        if (error.status === 503) {
          errorText = 'HTTP Error 503. The service is unavailable.';
        }
        if (error.status === 500) {
          if ('message' in error.error) {
            errorText = `Server: ${error.message} ${error.error.message}`;
          } else {
            errorText = `Server: ${error.message} ${JSON.stringify(error.error)}`;
          }
        }
        // All others errors
        else {
          if ('message' in error.error) {
            errorText = `Server: ${error.message} ${error.error.message}`;
          } else {
            errorText = `Server: ${error.message} ${JSON.stringify(error.error)}`;
          }
        }

        this.snackBarService.showError(errorText);
        return throwError(() => error);
      })
    );
  }

}
