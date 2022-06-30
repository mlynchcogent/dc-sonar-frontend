import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupportFunctionsService {

  constructor() { }

  public getCurrentUTCSeconds(): number {
    return Math.floor(Date.now() / 1000);
  }

}
