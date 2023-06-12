import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars: Record<string, string> = {};

  getCars() {
    return { ...this.cars };
  }

  createCar(newCar: string) {
    const carId = Date.now();

    this.cars[carId] = newCar;

    return { message: `Car with id ${carId} created!` };
  }

  deleteCar(carId: number) {
    delete this.cars[carId];
    return { message: `Car with id ${carId} deleted!` };
  }
}
