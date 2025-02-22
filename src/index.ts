import inquirer from 'inquirer';
import { Car } from './Car.js';
import { Truck } from './Truck.js';
import { Motorbike } from './Motorbike.js';

async function main() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
    ]);

    if (action === 'Create a new vehicle') {
        const { vehicleType } = await inquirer.prompt([
            {
                type: 'list',
                name: 'vehicleType',
                message: 'What type of vehicle would you like to create?',
                choices: ['Car', 'Truck', 'Motorbike'],
            },
        ]);

        let vehicle;
        if (vehicleType === 'Car') {
            const { make, model, year } = await inquirer.prompt([
                { type: 'input', name: 'make', message: 'Enter the make of the car:' },
                { type: 'input', name: 'model', message: 'Enter the model of the car:' },
                { type: 'number', name: 'year', message: 'Enter the year of the car:' },
            ]);
            vehicle = new Car(make, model, year);
        } else if (vehicleType === 'Truck') {
            const { make, model, year, payloadCapacity } = await inquirer.prompt([
                { type: 'input', name: 'make', message: 'Enter the make of the truck:' },
                { type: 'input', name: 'model', message: 'Enter the model of the truck:' },
                { type: 'number', name: 'year', message: 'Enter the year of the truck:' },
                { type: 'number', name: 'payloadCapacity', message: 'Enter the payload capacity (in tons):' },
            ]);
            vehicle = new Truck(make, model, year, payloadCapacity);
        } else if (vehicleType === 'Motorbike') {
            const { make, model, year, engineSize } = await inquirer.prompt([
                { type: 'input', name: 'make', message: 'Enter the make of the motorbike:' },
                { type: 'input', name: 'model', message: 'Enter the model of the motorbike:' },
                { type: 'number', name: 'year', message: 'Enter the year of the motorbike:' },
                { type: 'number', name: 'engineSize', message: 'Enter the engine size (in cc):' },
            ]);
            vehicle = new Motorbike(make, model, year, engineSize);
        }

        if (vehicle) {
            vehicle.performAction();
        }
    } else if (action === 'Select an existing vehicle') {
        console.log('Existing vehicle functionality not implemented yet.');
    }
}

main();