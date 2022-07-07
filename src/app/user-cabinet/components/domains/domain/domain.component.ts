import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Domain} from "../../../interfaces";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

export interface DialogDeleteDomainData {
  pk: number;
  name: string;
  hostname: string;
}

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

  @Input() domain: Domain = {
    "pk": 0,
    "name": "",
    "hostname": "",
    "baseDn": "",
    "workstationName": "",
    "workstationPassword": "",
    "userDn": "",
    "userPassword": "",
    "dumpStatus": "WAIT_SOFT_ADDING",
    "dumpStatusUpdate": "1970-01-01T00:00:00Z",
    "dumpErrDesc": null,
    "bruteStatus": "WAIT_SOFT_ADDING",
    "bruteProgress": 12,
    "bruteStatusUpdate": "1970-01-01T00:00:00Z",
    "bruteErrorDesc": null,
    "noExpPassStatus": "WAIT_SOFT_ADDING",
    "noExpPassStatusUpdate": "1970-01-01T00:00:00Z",
    "noExpPassErrDesc": null,
    "reusedPassStatus": "WAIT_SOFT_ADDING",
    "reusedPassStatusUpdate": "1970-01-01T00:00:00Z",
    "reusedPassErrDesc": null
  };
  @Output() onRemove = new EventEmitter<number>();


  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialogDeleteDomain(): void {
    const dialogRef = this.dialog.open(DialogDeleteDomain, {
      width: '250px',
      data: {pk: this.domain.pk, name: this.domain.name, hostname: this.domain.hostname},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === true) {
        this.onRemove.emit(this.domain.pk);
      }
    });
  }
}


@Component({
  selector: 'dialog-delete-domain',
  templateUrl: 'dialog-delete-domain.html',
})
export class DialogDeleteDomain {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteDomain>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDeleteDomainData,
  ) {
  }
}
