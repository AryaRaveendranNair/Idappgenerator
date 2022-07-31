import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchmanagerComponent } from './batchmanager/batchmanager.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewbatchmanagerComponent } from './newbatchmanager/newbatchmanager.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"batchmanager",component:BatchmanagerComponent},
  {path:"formcontrol",component:FormcontrolComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"newbatchmanager",component:NewbatchmanagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
