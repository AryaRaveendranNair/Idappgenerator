import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BatchmanagerComponent } from './batchmanager/batchmanager.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewbatchmanagerComponent } from './newbatchmanager/newbatchmanager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BatchmanagerComponent,
    FormcontrolComponent,
    NavbarComponent,
    NewbatchmanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
