import { ExtraPointStats } from './extra-point-stats';
import { fieldGoalStats } from './field-goal-stats';
import { FumbleStats } from './fumble-stats';
import { InterceptionStats } from './interception-stats';
import { KickoffReturnStats } from './kickoff-return-stats';
import { KickoffStats } from './kickoff-stats';
import { MiscStats } from './misc-stat';
import { PassingStats } from './passing-stats';
import { PuntReturnStats } from './punt-return-stats';
import { PuntingStats } from './puntint-stats';
import { RecievingStats } from './recieveing-stats';
import { RushingStats } from './rushing-stats';
import { StandingsStats } from './standings-stats';
import { TackleStats } from './tackles-stats';
import { TwoPointAttemptStats } from './two-point-attempt-stats';

export class Stats{
    extraPointAttempts: ExtraPointStats;
    fieldGoals: fieldGoalStats;
    fumbles: FumbleStats;
    gamesPlayed: number;
    intercepctios: InterceptionStats;
    kickoffReturns: KickoffReturnStats;
    kickoffs: KickoffStats;
    miscellaneous: MiscStats;
    passing: PassingStats;
    puntReturns: PuntReturnStats
    punting: PuntingStats;
    receiving: RecievingStats;
    rushing: RushingStats;
    standings: StandingsStats;
    tackles: TackleStats;
    twoPointAttempts: TwoPointAttemptStats;
}