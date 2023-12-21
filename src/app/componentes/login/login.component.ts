import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,Validators,FormBuilder, FormControlName, FormControl } from '@angular/forms';
import{ApiSerice}from '../../servicios/api.service'
import{LoginI}from '../../modelos/login.interface'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({

      email: new FormControl("",Validators.required),
      clave: new FormControl("",Validators.required)



  })
  
  constructor(private api:ApiSerice){
  
  
  
  }
  
  ngOnInit(): void {
      
  
  
  
  }
  
  
  onLogin(form:any){
    
    
    this.api.loginByEmail(form).subscribe(data =>{
      console.log(data);
    })
    
    
    
    

  }
  }