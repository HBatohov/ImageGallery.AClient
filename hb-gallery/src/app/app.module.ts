import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomsComponent } from './components/rooms/rooms.component';
import { EntranceComponent } from './components/entrance/entrance.component';
import { MainHallComponent } from './components/main-hall/main-hall.component';
import { LoginComponent } from './components/login/login.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { PictureHallComponent } from './components/picture-hall/picture-hall.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    EntranceComponent,
    MainHallComponent,
    LoginComponent,
    PicturesComponent,
    RegisterUserComponent,
    PictureHallComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
