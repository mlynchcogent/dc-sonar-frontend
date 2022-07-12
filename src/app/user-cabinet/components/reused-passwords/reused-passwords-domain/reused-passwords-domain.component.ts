import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DomainReusedPassAcc, ReusedPassAcc} from "../../../interfaces";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-reused-passwords-domain',
  templateUrl: './reused-passwords-domain.component.html',
  styleUrls: ['./reused-passwords-domain.component.scss']
})
export class ReusedPasswordsDomainComponent implements OnInit {
  displayedColumns: string[] = ['pk', 'samAccName', 'createTime'];
  dataSource: MatTableDataSource<ReusedPassAcc>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  @Input() domainReusedPassAcc: DomainReusedPassAcc = {
    'pk': 0,
    'name': '',
    'hostname': '',
    'baseDn': '',
    'reusedPassAcc': []
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor() {
    this.dataSource = new MatTableDataSource(this.domainReusedPassAcc.reusedPassAcc);
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.domainReusedPassAcc.reusedPassAcc);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
