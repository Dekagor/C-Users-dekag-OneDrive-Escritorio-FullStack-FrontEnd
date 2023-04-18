import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl:'./sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebarStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
      url: "home",
    },
    {
      number: '2',
      name: 'Acerca',
      icon: 'fa-regular fa-face-smile-beam',
      url: "acerca",
    },
    {
      number: '3',
      name: 'Experiencia',
      icon: 'fa-solid fa-user-plus',
      url: "experiencia",
    },
    {
      number: '4',
      name: 'Educacion',
      icon: 'fa-solid fa-graduation-cap',
      url: "educacion",
    },
    {
      number: '5',
      name: 'Skill',
      icon: 'fa-solid fa-laptop-code',
      url: "skill",
    },
    {
      number: '6',
      name: 'Proyectos',
      icon: 'fa-solid fa-code',
      url: "proyectos",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
