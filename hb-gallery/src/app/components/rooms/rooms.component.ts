import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';

import { Room } from '../../models/room'; 
import { RoomService } from '../../services/room.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {

  userLoggedIn: boolean = false;
  rooms: Room[] = [];

  constructor(private roomService: RoomService,
              private sharedService: SharedService) {
    this.userLoggedIn = sharedService.isLogged;
  }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }

}
