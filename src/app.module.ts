import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FightersModule } from './fighters/fighters.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { RefereesModule } from './referees/referees.module';
import { FightsModule } from './fights/fights.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FightersModule,
    DatabaseModule,
    RefereesModule,
    FightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
