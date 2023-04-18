import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggle() {
    this.menuStatus = !this.menuStatus;
    this.sidebarToggled.emit(this.menuStatus);
  }

}
