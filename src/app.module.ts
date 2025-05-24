import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './modules/heroes/heroes.module';

@Module({
  imports: [HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
