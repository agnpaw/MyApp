import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent  {
  // selectedDestination!: string;
  // selectedNumberOfPassengers!: number;
  // private destinationSubscription!: Subscription;
  // private numberOfPassengersSubscription!: Subscription;
  // constructor(private dataService: DataService) {}
  // ngOnInit() {
  //   this.destinationSubscription = this.dataService
  //     .getSelectedDestination()
  //     .subscribe((destination) => {
  //       this.selectedDestination = destination;
  //     });
  //   this.numberOfPassengersSubscription = this.dataService
  //     .getSelectedNumberOfPassengers()
  //     .subscribe((numberOfPassengers) => {
  //       this.selectedNumberOfPassengers = numberOfPassengers;
  //     });
  // }
  // ngOnDestroy() {
  //   this.destinationSubscription.unsubscribe();
  //   this.numberOfPassengersSubscription.unsubscribe();
  // }
}
