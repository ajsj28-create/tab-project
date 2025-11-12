import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-ng-if',
  templateUrl: './tab-ng-if.component.html',
  styleUrls: ['./tab-ng-if.component.scss']
})
export class TabNgIfComponent implements OnInit {

  selectedSkill: string = 'html'

  constructor() { }

  ngOnInit(): void {
  }

}