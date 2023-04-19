import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sidebarToggle() {
    this.menuStatus = !this.menuStatus;
    this.sidebarToggled.emit(this.menuStatus);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
