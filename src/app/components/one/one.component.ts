import { Component, Directive } from '@angular/core';
import { DataService } from 'src/app/data.service';

interface Flight {
  flightNumber: string;
  departure: string;
  destination: string;
  departureTime: string;
  returnTime: string;
  ticketPrice: number;
  returnFlightNumber: string;
  arrivalTime: string;
  flightTime: string;
  returnArrivalTime: string;
}

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent {
  departure: string = '';
  destination: string = '';
  departureDate: string = '';
  returnDate: string = '';
  numberOfPassengers: any;
  searchResults: Flight[] = [];
  currentDate: string = '';
  maxDate: string = '';
  name: string = '';
  date: any = new Date();

 


  flights: Flight[] = [
    {
      flightNumber: 'ABC123',
      returnFlightNumber: 'ABC456',
      departure: 'Kraków',
      destination: 'Warszawa',
      departureTime: '10:00',
      arrivalTime: '10:50',
      flightTime: '0h 50min',
      returnTime: '9:00',
      returnArrivalTime: '9:50',
      ticketPrice: 100,
    },
    {
      flightNumber: 'DEF123',
      returnFlightNumber: 'DEF456',
      departure: 'Kraków',
      destination: 'Los Angeles',
      departureTime: '16:45',
      arrivalTime: '20:05',
      flightTime: '12h 20min ',
      returnTime: '00:05',
      returnArrivalTime: '21:25',
      ticketPrice: 3000,
    },
    {
      flightNumber: 'GHI789',
      returnFlightNumber: 'GHI456',
      departure: 'Kraków',
      destination: 'Paryż',
      departureTime: '10:00',
      arrivalTime: '12:15',
      flightTime: '2h 15min',
      returnTime: '20:00',
      returnArrivalTime: '22:15',
      ticketPrice: 400,
    },
  ];
 

  constructor(private dataService: DataService) {
    this.currentDate = new Date().toISOString().split('T')[0];
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    this.maxDate = sixMonthsFromNow.toISOString().split('T')[0];
  }

  searchFlights() {
    this.searchResults = this.flights.filter(
      (flight) =>
        flight.departure.toLowerCase() === this.departure.toLowerCase() &&
        flight.destination.toLowerCase() === this.destination.toLowerCase()
    );
  }

  setDestination() {
    this.dataService.setSelectedDestination(this.destination);
  }

  setNumberOfPassengers() {
    this.dataService.setSelectedNumberOfPassengers(this.numberOfPassengers);
  }

}
