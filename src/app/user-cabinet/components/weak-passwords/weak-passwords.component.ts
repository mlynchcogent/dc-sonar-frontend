import {Component, OnInit} from '@angular/core';
import {LoadersShowerService} from "../../../shared/services/loaders-shower.service";
import {WeakPasswordsService} from "../../services/weak-passwords.service";
import {DomainBrutedNTLMList} from "../../interfaces";

@Component({
  selector: 'app-weak-passwords',
  templateUrl: './weak-passwords.component.html',
  styleUrls: ['./weak-passwords.component.scss']
})
export class WeakPasswordsComponent implements OnInit {
  domainBrutedNTLMList: DomainBrutedNTLMList = [];

  constructor(public loadersShower: LoadersShowerService, private weakPasswordsService: WeakPasswordsService) {
  }

  ngOnInit(): void {
    this.loadersShower.setPageLoading();
    this.weakPasswordsService.getDomainsBrutedNtlmList().subscribe((domainBrutedNTLMList) => {
      this.domainBrutedNTLMList = domainBrutedNTLMList;
      this.loadersShower.setPageLoaded();
    });
  }

}
