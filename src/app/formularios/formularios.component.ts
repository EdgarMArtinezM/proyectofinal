import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';


@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  @Input() link:any;
  alumnos=[
    {
      id:1,
      name:"Edgar",
      lastName:"Martinez",
      age:23,
      actions:['Eliminar']
    },
    {
      id:2,
      name:"Dana",
      lastName:"Martinez",
      age:10,
      actions:['Eliminar']
    },
    {
      id:4,
      name:"Elisa",
      lastName:"Mendoza",
      age:10,
      actions:['Eliminar']
    },
    {
      id:5,
      name:"Angel",
      lastName:"Martinez",
      age:19,
      actions:['Eliminar']
    },
    {
      id:6,
      name:"Hector",
      lastName:"Martinez",
      age:30,
      actions:['Eliminar']
    }
  ]
  clases:clases[]=[
    {
      id:1,
      name:"LOLO",
      actions:['Eliminar']
    }
  ]
  cursos:cursos[]=[]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  agregar(array:any){
    this.dialog.open(DialogAddComponent, { data: { array } }).afterClosed().toPromise().then(itemData => {
      if (itemData) {
        if(itemData.array=='alumnos'){
          itemData.information['actions']=['Eliminar'];
          itemData.information['id']=1;
          this.alumnos.push(itemData.information)
        }
        if(itemData.array=='clases'){
          itemData.information['actions']=['Eliminar'];
          itemData.information['id']=1;
          this.clases.push(itemData.information)
        }
        if(itemData.array=='cursos'){
          itemData.information['actions']=['Eliminar'];
          itemData.information['id']=1;
          this.cursos.push(itemData.information)
        }
        
      }
  });
  }
  delete(i:any,array:string){
    if(array=='alumnos'){
      this.alumnos=this.alumnos.filter(e=>i.name!=e.name)
    }else{
      this.clases=this.clases.filter(e=>i.name!=e.name)
    }
    console.log("Eliminar")
  }

}
export interface clases{
  id:number,
  name:string,
  actions:string[]
}
export interface cursos{
  id:number,
  name:string,
  actions:string[]
}
