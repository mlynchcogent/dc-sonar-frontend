import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SyncDomainsService} from "../../services/sync-domains.service";
import {LoadersShowerService} from "../../../shared/services/loaders-shower.service";

@Component({
  selector: 'app-sync-domains',
  templateUrl: './sync-domains.component.html',
  styleUrls: ['./sync-domains.component.scss']
})
export class SyncDomainsComponent implements OnInit {

  constructor(private syncDomainService: SyncDomainsService, public loadersShower: LoadersShowerService) {
  }

  ngOnInit(): void {
    this.loadersShower.setPageLoading();
    setTimeout(() => {
      this.loadersShower.setPageLoaded();
    }, 1000);
  }

}
