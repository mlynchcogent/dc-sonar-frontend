import {Component, OnInit} from '@angular/core';
import {LoadersShowerService} from "../../../shared/services/loaders-shower.service";
import {NoExpirePasswordsService} from "../../services/no-expire-passwords.service";
import {DomainNoExpPassAccList} from "../../interfaces";

@Component({
  selector: 'app-no-expire-passwords',
  templateUrl: './no-expire-passwords.component.html',
  styleUrls: ['./no-expire-passwords.component.scss']
})
export class NoExpirePasswordsComponent implements OnInit {
  domainNoExpPassAccList: DomainNoExpPassAccList = [];

  constructor(public loadersShower: LoadersShowerService, private noExpirePasswordsService: NoExpirePasswordsService) {
  }

  ngOnInit(): void {
    this.loadersShower.setPageLoading();
    this.noExpirePasswordsService.getDomainNoExpPassAccList().subscribe((domainNoExpPassAccList) => {
      this.domainNoExpPassAccList = domainNoExpPassAccList;
      this.loadersShower.setPageLoaded();
    });
  }

}
