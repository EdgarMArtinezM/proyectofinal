import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {
  formArch!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private fb: FormBuilder) { 
    this.form(data.array);
  }

  ngOnInit(): void {
    
  }
  form(array:any){
    if(array=='alumnos'){
      this.formArch = this.fb.group({
        "name": ['', Validators.required],
        "lastName": ['', Validators.required],
        "age": ['', Validators.required]
      });
    }else if(array=='clases'){
      this.formArch = this.fb.group({
        "name": ['', Validators.required]
      });
    }else{
      this.formArch = this.fb.group({
        "name": ['', Validators.required]
      });
    }
  }

}
