import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantsModule } from './modules/participants/participants.module';

import { config } from 'dotenv';

config();

/*
ORM, "Object-Relational Mapping", jest techniką programowania,
która umożliwia konwersję danych między systemami niekompatybilnymi na poziomie typów (np SQL i Javascript).
Jest to sposób na przeniesienie danych z bazy danych do obiektowego języka programowania.
 */

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ParticipantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
