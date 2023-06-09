import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

interface Passenger {
  id: number;
  seat: string;
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent   {
  selectedCity!: string;
  passengerCount: number = 0;
  passengers: Passenger[] = [];
  planeOne: string =
    '';
  seats: string[] = [
    'A1',
    'A2',
    'A3',
    'A4',
    'B1',
    'B2',
    'B3',
    'B4',
    'C1',
    'C2',
    'C3',
    'C4',
    'D1',
    'D2',
    'D3',
    'D4',
  ];
 

  constructor() {}



  assignSeats() {
    this.passengers = [];
    
    for (let i = 1; i <= this.passengerCount; i++) {
      const passenger: Passenger = {
        id: i,
        seat: ''
      };
      
      this.passengers.push(passenger);
    }
  }
}
