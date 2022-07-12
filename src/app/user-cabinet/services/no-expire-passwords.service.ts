import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DomainBrutedNTLMList, DomainNoExpPassAccList} from "../interfaces";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NoExpirePasswordsService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getDomainNoExpPassAccList(): Observable<DomainNoExpPassAccList> {
    return this.http.get<DomainNoExpPassAccList>(`${environment.url}/api/user-cabinet/domain-no-exp-pass-acc/`, this.httpOptions).pipe(
      map((data: DomainNoExpPassAccList) => {
        return data;
      })
    );
  }

}
