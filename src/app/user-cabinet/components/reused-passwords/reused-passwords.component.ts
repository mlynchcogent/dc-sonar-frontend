import { Component, OnInit } from '@angular/core';
import {LoadersShowerService} from "../../../shared/services/loaders-shower.service";

@Component({
  selector: 'app-reused-passwords',
  templateUrl: './reused-passwords.component.html',
  styleUrls: ['./reused-passwords.component.scss']
})
export class ReusedPasswordsComponent implements OnInit {

  constructor(public loadersShower: LoadersShowerService) { }

  ngOnInit(): void {
    this.loadersShower.setPageLoading();
    setTimeout(() => {
      this.loadersShower.setPageLoaded();
    }, 1000);
  }

}
