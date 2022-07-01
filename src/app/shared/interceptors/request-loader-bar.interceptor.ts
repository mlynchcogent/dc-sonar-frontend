import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {LoadersShowerService} from "../services/loaders-shower.service";

@Injectable()
export class RequestLoaderBarInterceptor implements HttpInterceptor {

  constructor(private loadersShower: LoadersShowerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('RequestLoaderBarInterceptor');
    this.loadersShower.setRequestSending();
    return next.handle(request).pipe(
      map(event => {
        this.loadersShower.setRequestSent();
        return event;
      })
    )
  }
}
