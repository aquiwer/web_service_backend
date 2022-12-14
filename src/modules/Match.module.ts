import { MatchService } from './../services/Match.service';
import { MatchController } from './../controllers/Match.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchSchema, Match } from '../schemas/Match.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }]),
  ],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
