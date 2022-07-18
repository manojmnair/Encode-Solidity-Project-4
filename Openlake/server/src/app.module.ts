import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { BlockModule } from './block/block.module';


@Module({
  imports: [
  ConfigModule.forRoot(),
  SharedModule,
  BlockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
