import { Vehicle } from './Vehicle.js';

export class Truck implements Vehicle {
    type: string = 'Truck';
    constructor(public make: string, public model: string, public year: number, public payloadCapacity: number) {}

    performAction() {
        console.log(`Hauling cargo with the ${this.year} ${this.make} ${this.model} with a payload capacity of ${this.payloadCapacity} tons`);
    }
}