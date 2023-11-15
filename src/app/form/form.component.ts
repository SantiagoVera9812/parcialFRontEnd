import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registro: RegistroService) {
    this.userForm = this.formBuilder.group({
      nombre:['',Validators.required],
      autor:['',Validators.required]
    })
  }

  ngOnInit(){}

  onSubmit(){
    if(this.userForm.valid){
      const userData = this.userForm.value;
      console.log(userData);
      this.registro.addUser(userData).subscribe(
        (response) => {
          console.log('se agrego el track', response)
        },
        (error) => {
          console.log('error al crear track', error)
        }
      )
    }
  }

}
