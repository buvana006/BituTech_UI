import { Component, OnInit,ViewChild,Input,Output,EventEmitter } from '@angular/core';
import {NavItem} from '../nav-items';

@Component({
  selector: 'app-matdynamicsubmenu',
  templateUrl: './matdynamicsubmenu.component.html',
  styleUrls: ['./matdynamicsubmenu.component.sass']
})
export class MatdynamicsubmenuComponent implements OnInit {

  @Input() items: NavItem[];
  @ViewChild('childMenu', {static: true}) public childMenu: any;


  constructor() { }
  ngOnInit() {

  }


}
