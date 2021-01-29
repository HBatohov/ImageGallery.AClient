import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { EntranceComponent } from './components/entrance/entrance.component';
import { MainHallComponent } from './components/main-hall/main-hall.component';
import { PictureHallComponent } from './components/picture-hall/picture-hall.component';
import { RoomsComponent } from './components/rooms/rooms.component';

const routes: Routes = [
  {path: '', redirectTo: 'entrance', pathMatch: 'full'},
  {path: 'entrance', component: EntranceComponent},
  {path: 'main-hall', component: MainHallComponent},
  {path: 'picture-hall', component: PictureHallComponent},
  {path: 'rooms', component: RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
