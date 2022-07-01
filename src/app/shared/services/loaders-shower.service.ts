import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadersShowerService {

  private isPageLoading: boolean = false;
  private isRequestSending = new BehaviorSubject<boolean>(false);
  sharedIsRequestSending = this.isRequestSending.asObservable();

  public setRequestSending() {
    console.log('setRequestSending');
    this.isRequestSending.next(true);
  }

  public setRequestSent() {
    console.log('setRequestSent');
    this.isRequestSending.next(false);
  }

  public getIsPageLoading() {
    return this.isPageLoading;
  }

  public getIsRequestSending() {
    return this.isRequestSending;
  }


  public setPageLoading() {
    this.isPageLoading = true;
  }

  public setPageLoaded() {
    this.isPageLoading = false;
  }


  constructor() {
  }


}
