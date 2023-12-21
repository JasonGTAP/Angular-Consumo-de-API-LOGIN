import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
const routes: Routes = [

  {path:"", redirectTo:"login",pathMatch:"full"}, // 
  
  
  //creando rutas
  {path:"login",component:LoginComponent} 
  
  
  
  
  
  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
