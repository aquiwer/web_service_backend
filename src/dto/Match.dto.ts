import { Match } from '../schemas/Match.model';
import { Team as TeamSchema } from '../schemas/Team.model';
import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Team } from '../interfaces/Match.interfaces';

export class CreateMatchDto {
  @ApiProperty({
    type: () => TeamSchema,
  })
  @Prop({ required: true, type: Object })
  first_team: Team;

  @ApiProperty({
    type: () => TeamSchema,
  })
  @Prop({ required: true, type: Object })
  second_team: Team;

  @ApiProperty({
    type: Date,
  })
  @Prop({ required: true })
  game_day: Date;

  @ApiProperty({
    type: String,
  })
  @Prop({ required: true })
  result: string;

  @ApiProperty({
    type: String,
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    type: String,
  })
  @Prop({ required: true })
  description: string;
}
