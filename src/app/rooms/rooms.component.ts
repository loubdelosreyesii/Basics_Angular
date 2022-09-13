import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotelinventory-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName :string = 'Lourd Hotel';
  numberOfRooms : Number = 10;
  
  constructor() { }

  ngOnInit(): void {
  }

}
