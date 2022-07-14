import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DomainReusedPassAcc, DomainReusedPassAccList, DomainShortInfo} from "../../../interfaces";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ReusedPasswordsService} from "../../../services/reused-passwords.service";

@Component({
  selector: 'app-reused-passwords-domain',
  templateUrl: './reused-passwords-domain.component.html',
  styleUrls: ['./reused-passwords-domain.component.scss']
})
export class ReusedPasswordsDomainComponent implements OnInit {
  displayedColumns: string[] = ['pk', 'domainName', 'samAccName', 'reusedDomainName', 'reusedSamAccName', 'createTime'];
  dataSource: MatTableDataSource<DomainReusedPassAcc>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  @Input() domain: DomainShortInfo = {
    'pk': 0,
    'name': '',
    'hostname': '',
    'baseDn': ''
  }
  domainReusedPassAccList: DomainReusedPassAccList = [];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(private reusedPasswordsService: ReusedPasswordsService) {
    this.dataSource = new MatTableDataSource(this.domainReusedPassAccList);
  }

  ngOnInit(): void {
    this.reusedPasswordsService.getDomainReusedPassAccList(this.domain.pk).subscribe((domainReusedPassAccList) => {
      this.domainReusedPassAccList = domainReusedPassAccList;
      this.dataSource = new MatTableDataSource(this.domainReusedPassAccList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    console.log('ngOnInit finished');
  }

  ngAfterViewInit() {
  }


}
