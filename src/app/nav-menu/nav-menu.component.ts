import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  options=["Alumnos","Clases","Cursos"];
  links:any;
  constructor() { }

  ngOnInit(): void {
  }
  view(option:any){
    this.links=option
  }

}
