import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MichalModule } from './michal/michal.module';

@Module({
  imports: [CarsModule, MichalModule],
})
export class AppModule {}
