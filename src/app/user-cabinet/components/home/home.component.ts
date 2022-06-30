import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TokenData} from "../../../interfaces";
import {environment} from "../../../../environments/environment";


export interface BrutedNTLMAcc {
  "pk": number,
  "domain": number,
  "samAccName": string,
  "accPassword": string,
  "updateTime": string
}

export interface BrutedNTLMAccList extends Array<BrutedNTLMAcc> {

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  brutedNTLMAccList: BrutedNTLMAccList = [];

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
  }

  showBrutedAccs() {
    this.brutedNTLMAccList = [];
    this.getBrutedAccs().subscribe((brutedNTLMAccList) => {
      this.brutedNTLMAccList = brutedNTLMAccList;
    });
  }

  getBrutedAccs(): Observable<BrutedNTLMAccList> {
    return this.http.get<BrutedNTLMAccList>(`${environment.url}/api/user-cabinet/bruted-ntlm-acc/`).pipe(
      map((data) => {
        return data;
      })
    )
  }
}
