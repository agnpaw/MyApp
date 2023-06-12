import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedDestination: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private selectedNumberOfPassengers: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  setSelectedDestination(destination: string) {
    this.selectedDestination.next(destination);
  }

  getSelectedDestination(): Observable<string> {
    return this.selectedDestination.asObservable();
  }

  setSelectedNumberOfPassengers(numberOfPassengers: number) {
    this.selectedNumberOfPassengers.next(numberOfPassengers);
  }

  getSelectedNumberOfPassengers(): Observable<number> {
    return this.selectedNumberOfPassengers.asObservable();
  }
}