import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { CreateRoomComponent } from './CreateRoom/createRoom.component';

const routes: Routes = [
    {
        path: '',
        component: RoomsComponent,
    },
  {
        path: 'Create',
        component: CreateRoomComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoomsRoutingModule { }