import { StandingList } from '@/utils/types';
import Parser from '@parsers/parser';

export default class StandingListParser extends Parser {

    private static instance: StandingListParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new StandingListParser();
        }
        return this.instance;
    }

    public parse(data: any, extraParser: Parser): any {
        if (!data.StandingsLists || !data.StandingsLists.length) {
            return null;
        }

        const { season, round, DriverStandings: driverStandings, ConstructorStandings: constructorStandings } = data.StandingsLists[0];

        const standingList: StandingList<any> = {
            season,
            round,
            standings: extraParser.parse(driverStandings || constructorStandings),
        };

        return standingList;
    }

}
