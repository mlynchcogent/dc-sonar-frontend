import { Component, OnInit } from '@angular/core';
import {LoadersShowerService} from "../../../shared/services/loaders-shower.service";

@Component({
  selector: 'app-never-expire-passwords',
  templateUrl: './never-expire-passwords.component.html',
  styleUrls: ['./never-expire-passwords.component.scss']
})
export class NeverExpirePasswordsComponent implements OnInit {

  constructor(public loadersShower: LoadersShowerService) { }

  ngOnInit(): void {
    this.loadersShower.setPageLoading();
    setTimeout(() => {
      this.loadersShower.setPageLoaded();
    }, 1000);
  }

}
