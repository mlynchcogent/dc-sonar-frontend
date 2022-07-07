import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {createDomain, Domain, DomainsList} from "../interfaces";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DomainsService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getDomainsList(): Observable<DomainsList> {
    return this.http.get<DomainsList>(`${environment.url}/api/user-cabinet/domain/`, this.httpOptions).pipe(
      map((data: DomainsList) => {
        return data;
      })
    );
  }

  getDomain(domainID: number): Observable<Domain> {
    return this.http.get<Domain>(`${environment.url}/api/user-cabinet/domain/${domainID}/`, this.httpOptions).pipe(
      map((data: Domain) => {
        return data;
      })
    );
  }

  createDomain(domainData: createDomain): Observable<Domain> {
    return this.http.post<Domain>(`${environment.url}/api/user-cabinet/domain/`, domainData, this.httpOptions).pipe(
      map((data: Domain) => {
        return data;
      })
    );
  }

  deleteDomain(domainID: number): Observable<void> {
    return this.http.delete<void>(`${environment.url}/api/user-cabinet/domain/${domainID}/`, this.httpOptions);
  }
}
