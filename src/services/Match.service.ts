import { Match, MatchDocument } from '../schemas/Match.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMatchDto } from '../dto/Match.dto';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel(Match.name) private matchModel: Model<MatchDocument>,
  ) {}

  async getAllMatches(): Promise<CreateMatchDto[]> {
    return await this.matchModel.find();
  }

  async addMatch(match: CreateMatchDto): Promise<void> {
    await this.matchModel.create(match);
  }

  async findSpecificMatch(team_name: string): Promise<CreateMatchDto[]> {
    return await this.matchModel.find({
      name: { $regex: new RegExp(team_name, 'i') },
    });
  }
}
