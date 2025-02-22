export interface Vehicle {
    type: string;
    make: string;
    model: string;
    year: number;
    performAction(): void;
}