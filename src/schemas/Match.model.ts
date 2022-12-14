import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { Team } from '../interfaces/Match.interfaces';
import { Team as TeamSchema } from './Team.model';

export type MatchDocument = HydratedDocument<Match>;

@Schema()
export class Match {
  @ApiProperty()
  @Prop({ required: true, type: () => TeamSchema })
  first_team: Team;

  @ApiProperty()
  @Prop({ required: true, type: () => TeamSchema })
  second_team: Team;

  @ApiProperty()
  @Prop({ required: true })
  game_day: Date;

  @ApiProperty()
  @Prop({ required: true })
  result: string;

  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop({ required: true })
  description: string;
}

export const MatchSchema = SchemaFactory.createForClass(Match);
