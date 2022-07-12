import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DomainNoExpPassAcc, NoExpPassAcc} from "../../../interfaces";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-no-expire-passwords-domain',
  templateUrl: './no-expire-passwords-domain.component.html',
  styleUrls: ['./no-expire-passwords-domain.component.scss']
})
export class NoExpirePasswordsDomainComponent implements OnInit {
  displayedColumns: string[] = ['pk', 'samAccName', 'createTime'];
  dataSource: MatTableDataSource<NoExpPassAcc>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  @Input() domainNoExpPassAcc: DomainNoExpPassAcc = {
    'pk': 0,
    'name': '',
    'hostname': '',
    'baseDn': '',
    'noExpPassAcc': []
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor() {
    this.dataSource = new MatTableDataSource(this.domainNoExpPassAcc.noExpPassAcc);
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.domainNoExpPassAcc.noExpPassAcc);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }
}
