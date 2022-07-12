import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BrutedNTLMAcc, DomainBrutedNTLM} from "../../../interfaces";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-weak-passwords-domain',
  templateUrl: './weak-passwords-domain.component.html',
  styleUrls: ['./weak-passwords-domain.component.scss']
})
export class WeakPasswordsDomainComponent implements OnInit {
  displayedColumns: string[] = ['pk', 'samAccName', 'accPassword', 'updateTime'];
  dataSource: MatTableDataSource<BrutedNTLMAcc>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  @Input() domainBrutedNTLM: DomainBrutedNTLM = {
    'pk': 0,
    'name': '',
    'hostname': '',
    'baseDn': '',
    'brutedNtlmAcc': []
  };

  constructor() {
    this.dataSource = new MatTableDataSource(this.domainBrutedNTLM.brutedNtlmAcc);
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.domainBrutedNTLM.brutedNtlmAcc);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

}
