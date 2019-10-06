import { Stadium } from './home-stadium';
import { MediaAccount } from './media-account';

export class Team{
    abbreviation: string;
    city: string;
    homeVenue: Stadium;
    id: number;
    name: string;
    officialLogoImageSrc: string;
    socialMediaAccounts: MediaAccount[];
    teamColorsHex: string[];
}