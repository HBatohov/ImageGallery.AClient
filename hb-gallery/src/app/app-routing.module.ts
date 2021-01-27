import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';

const routes: Routes = [
  {path: '', redirectTo: 'rooms', pathMatch:'full'},
  {path: 'rooms', component:RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
