import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DomainReusedPassAccList} from "../interfaces";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReusedPasswordsService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  getDomainReusedPassAccList(): Observable<DomainReusedPassAccList> {
    return this.http.get<DomainReusedPassAccList>(`${environment.url}/api/user-cabinet/domain-reused-pass-acc/`, this.httpOptions).pipe(
      map((data: DomainReusedPassAccList) => {
        return data;
      })
    );
  }
}
