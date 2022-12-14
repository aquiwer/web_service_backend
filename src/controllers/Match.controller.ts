import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Match as MatchModel } from '../schemas/Match.model';
import { CreateMatchDto } from '../dto/Match.dto';
import { Match } from './../interfaces/Match.interfaces';
import { MatchService } from './../services/Match.service';

@ApiBearerAuth()
@ApiTags('match')
@Controller('/match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get('/all')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: MatchModel,
  })
  @ApiOperation({ summary: 'Fetch all matches' })
  async getAllMatches(): Promise<CreateMatchDto[]> {
    return this.matchService.getAllMatches();
  }

  @Get(':team_name')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: MatchModel,
  })
  @ApiOperation({ summary: 'Fetch specified match' })
  async findSpecificMatch(
    @Param() search_data: { team_name: string },
  ): Promise<CreateMatchDto[]> {
    return this.matchService.findSpecificMatch(search_data.team_name);
  }
  @ApiOperation({ summary: 'Create match' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: MatchModel,
  })
  @Post('/add')
  async addMatch(@Body() match: CreateMatchDto): Promise<Match[]> {
    console.log(match);
    await this.matchService.addMatch(match);
    return await this.getAllMatches();
  }
}
