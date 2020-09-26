import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() toggleOpen: boolean;
  @Output() toggleOpenChange = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
