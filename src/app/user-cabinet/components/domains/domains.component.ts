import {Component, OnInit} from '@angular/core';
import {DomainsService} from "../../services/domains.service";
import {LoadersShowerService} from "../../../shared/services/loaders-shower.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {DomainsList} from "../../interfaces";
import {SnackBarService} from "../../../shared/services/snack-bar.service";

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {

  environment = environment;
  domainsList: DomainsList = [];

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    hostname: new FormControl('', [Validators.required]),
    baseDn: new FormControl('', [Validators.required]),
    workstationName: new FormControl('', [Validators.required]),
    workstationPassword: new FormControl('', [Validators.required]),
    userDn: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.required])
  });

  constructor(private domainsService: DomainsService,
              public loadersShower: LoadersShowerService,
              private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    this.loadersShower.setPageLoading();
    this.domainsService.getDomainsList().subscribe((domainsList) => {
      this.domainsList = domainsList;
      this.loadersShower.setPageLoaded();
    });

  }

  addDomain() {
    if (this.form.valid) {
      this.form.disable();
      this.domainsService.createDomain(this.form.value).subscribe((domain) => {
          this.domainsList.push(domain);
          this.snackBarService.showSuccess('Domain has been added');
          this.form.reset();
          this.form.markAsPristine();
          this.form.markAsUntouched();

        },
        err => console.log('HTTP Error', err),
        () => this.form.enable())
    }
  }

  removeDomain(pk: number) {
    this.domainsService.deleteDomain(pk).subscribe(() => {
      this.domainsList = this.domainsList.filter(p => p.pk !== pk);
      this.snackBarService.showSuccess('Domain has been deleted!');
    })
  }
}
