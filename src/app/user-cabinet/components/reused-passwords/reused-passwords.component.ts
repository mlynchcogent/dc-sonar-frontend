import {Component, OnInit} from '@angular/core';
import {LoadersShowerService} from "../../../shared/services/loaders-shower.service";
import {ReusedPasswordsService} from "../../services/reused-passwords.service";
import {DomainReusedPassAccList} from "../../interfaces";

@Component({
  selector: 'app-reused-passwords',
  templateUrl: './reused-passwords.component.html',
  styleUrls: ['./reused-passwords.component.scss']
})
export class ReusedPasswordsComponent implements OnInit {
  domainReusedPassAccList: DomainReusedPassAccList = [];

  constructor(public loadersShower: LoadersShowerService, private reusedPasswordsService: ReusedPasswordsService) {
  }

  ngOnInit(): void {
    this.loadersShower.setPageLoading();

    this.reusedPasswordsService.getDomainReusedPassAccList().subscribe((domainReusedPassAccList) => {
      this.domainReusedPassAccList = domainReusedPassAccList;
      this.loadersShower.setPageLoaded();
    });
  }

}
