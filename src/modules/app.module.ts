import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MatchModule } from './Match.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dimovski:dimovski@cluster0.efo2ux0.mongodb.net/?retryWrites=true&w=majority',
    ),
    MatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
