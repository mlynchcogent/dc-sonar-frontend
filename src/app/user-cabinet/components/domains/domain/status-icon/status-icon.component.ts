import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.scss']
})
export class StatusIconComponent implements OnInit {
  @Input() status: string = 'INIT';

  constructor() { }

  ngOnInit(): void {
  }

}
