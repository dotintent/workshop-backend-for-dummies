import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParticipantsModule } from './modules/participants/participants.module';

import { config } from 'dotenv';

config();

@Module({
  imports: [ParticipantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
