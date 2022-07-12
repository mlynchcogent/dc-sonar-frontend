import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DomainBrutedNTLMList} from "../interfaces";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeakPasswordsService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getDomainsBrutedNtlmList(): Observable<DomainBrutedNTLMList> {
    return this.http.get<DomainBrutedNTLMList>(`${environment.url}/api/user-cabinet/domain-bruted-ntlm-acc/`, this.httpOptions).pipe(
      map((data: DomainBrutedNTLMList) => {
        return data;
      })
    );
  }
}
