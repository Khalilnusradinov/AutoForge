import { Vehicle } from './Vehicle.js';

export class Motorbike implements Vehicle {
    type: string = 'Motorbike';
    constructor(public make: string, public model: string, public year: number, public engineSize: number) {}

    performAction() {
        console.log(`Riding the ${this.year} ${this.make} ${this.model} with a ${this.engineSize}cc engine`);
    }
}