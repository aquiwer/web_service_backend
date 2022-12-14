import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @ApiProperty()
  @Prop({ required: true, type: Object })
  country: string;

  @ApiProperty()
  @Prop({ required: true, type: Object })
  score: number;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
