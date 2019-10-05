import { Reference } from './reference';
import { TeamStatsTotals } from './teamStatTotals';


export class Information{
    lastUpdatedOn: string;
    references: Reference[];
    teamStatsTotals: TeamStatsTotals[];
}