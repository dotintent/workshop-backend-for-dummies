import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getCars(): { cars: Record<string, string> } {
    const cars = this.carsService.getCars();
    return { cars };
  }

  @Post()
  createCar(@Body() { car }: { car: string }) {
    return this.carsService.createCar(car);
  }

  @Delete()
  deleteCar(@Body() { id }: { id: number }) {
    return this.carsService.deleteCar(id);
  }
}
