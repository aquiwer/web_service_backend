export interface Match {
  game_day: Date;
  first_team: Team;
  second_team: Team;
  result: string;
  name: string;
  description: string;
}

export interface Team {
  country: string;
  score: number;
}
