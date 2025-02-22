import { Vehicle } from './Vehicle.js';

export class Car implements Vehicle {
    type: string = 'Car';
    constructor(public make: string, public model: string, public year: number) {}

    performAction() {
        console.log(`Driving the ${this.year} ${this.make} ${this.model}`);
    }
}