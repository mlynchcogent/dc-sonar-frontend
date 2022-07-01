import { Component, OnInit } from '@angular/core';
import {LoadersShowerService} from "../../../shared/services/loaders-shower.service";

@Component({
  selector: 'app-weak-passwords',
  templateUrl: './weak-passwords.component.html',
  styleUrls: ['./weak-passwords.component.scss']
})
export class WeakPasswordsComponent implements OnInit {

  constructor(public loadersShower: LoadersShowerService) { }

  ngOnInit(): void {
    this.loadersShower.setPageLoading();
    setTimeout(() => {
      this.loadersShower.setPageLoaded();
    }, 1000);
  }

}
