import { NgModule } from '@angular/core';
import { RoomsComponent } from './rooms.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoomModalServiceNestedComponent } from './modal.component';
import { CreateRoomModule } from './CreateRoom/createRoom.module';

@NgModule({
  imports: [
    RoomsRoutingModule,
    FormsModule,
    CommonModule,
    CreateRoomModule
  ],
  declarations: [ RoomsComponent, RoomModalServiceNestedComponent ],
exports: [RoomsComponent], 
})
export class RoomsModule { }
