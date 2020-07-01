import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  angForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.createForm();
  }
  title = 'angular13';
  /*createForm(){
    this.angForm = this.fb.group({
      email: [""],
      password: [""]
    });
  }
  onClickSubmit(email, password){
    alert("Your Email is : "+email);
  } */

  createForm(){
    this.angForm = this.fb.group({
      nombre: ["",Validators.required],
      primerapellido: ["",Validators.required],
      segundoapellido: ["",Validators.required],
      ssn: ["",[Validators.minLength(4),Validators.maxLength(4),Validators.required]],
      postal: ["",[Validators.minLength(5),Validators.maxLength(5),Validators.required]],
      dia: ["",Validators.required],
      mes: ["",Validators.required],
      anio: ["",Validators.required],
      email: ["",[Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),Validators.required]],
      password: ["",Validators.required],
      confirmarpassword: ["",Validators.required]
    });
  }
  
  onClickSubmit(nombre,primerapellido,segundoapellido,ssn,postal,dia,mes,anio,email,password,confirmarpassword){
    if(nombre.value === ""){
      alert("Complete el campo Nombre");
    }else if(primerapellido.value === ""){
      alert("Complete el campo Primer Apellido");
    }else if(segundoapellido.value === ""){
      alert("Complete el campo Segundo Apellido");
    }else if(ssn.value === ""){
      alert("Complete el campo SSN");
    }else if(postal.value === ""){
      alert("Complete el campo Códigi Postal");
    }else if(dia.value === ""){
      alert("Complete el campo Día");
    }else if(mes.value === ""){
      alert("Complete el campo Mes");
    }else if(anio.value === ""){
      alert("Complete el campo Año");
    }else if(email.value === ""){
      alert("Complete el campo Email");
    }else if(password.value === ""){
      alert("Complete el campo Password");
    }else if(confirmarpassword.value === ""){
      alert("Complete el campo Confirmar Password");
    }else{
      alert("Su nombre es : "+primerapellido+" "+segundoapellido+" "+nombre+" y completaste exitosamente el formulario");
    //alert("Your primerapellido is : "+primerapellido);
    //alert("Your segundoapellido is : "+segundoapellido);
    //alert("Your ssn is : "+ssn);
    //alert("Your postal is : "+postal);
    //alert("Your dia is : "+dia);
    //alert("Your mes is : "+mes);
    //alert("Your anio is : "+anio);
    //alert("Your email is : "+email);
    //alert("Your password is : "+password);
    //alert("Your confirmarpassword is : "+confirmarpassword);
    }
  }
  ngOnInit(){}
  
}
