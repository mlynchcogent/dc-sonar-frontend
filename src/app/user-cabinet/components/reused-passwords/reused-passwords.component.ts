import {Component, OnInit} from '@angular/core';
import {LoadersShowerService} from "../../../shared/services/loaders-shower.service";
import {ReusedPasswordsService} from "../../services/reused-passwords.service";
import {DomainsList} from "../../interfaces";
import {DomainsService} from "../../services/domains.service";

@Component({
  selector: 'app-reused-passwords',
  templateUrl: './reused-passwords.component.html',
  styleUrls: ['./reused-passwords.component.scss']
})
export class ReusedPasswordsComponent implements OnInit {
  domainsList: DomainsList = [];

  constructor(public loadersShower: LoadersShowerService, private reusedPasswordsService: ReusedPasswordsService, private domainsService: DomainsService) {
  }

  ngOnInit(): void {
    this.loadersShower.setPageLoading();
    this.domainsService.getDomainsList().subscribe((domainsList) => {
      this.domainsList = domainsList;
      this.loadersShower.setPageLoaded();
    });

  }

}
