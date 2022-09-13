import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotelinventory-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName :string = 'Lourd Hotel';
  
  constructor() { }

  ngOnInit(): void {
  }

}
