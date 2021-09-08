import Parser from '@parsers/parser';
import DriverStandingParser from '@parsers/driverStanding';

export default class DriverStandingsParser extends Parser {

    private static instance: DriverStandingsParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new DriverStandingsParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        const driverStandingParser = DriverStandingParser.getInstance();
        const driverStandings = [];

        if (!data?.StandingsLists || !data?.StandingsLists.length) {
            return driverStandings;
        }

        for (const driverStandingData of data?.StandingsLists[0].DriverStandings || []) {
            driverStandings.push(driverStandingParser.parse(driverStandingData));
        }

        return driverStandings;
    }

}
