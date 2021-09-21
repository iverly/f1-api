import Parser from '@parsers/parser';
import DriverStandingParser from '@parsers/driverStanding';
import ConstructorStandingParser from '@parsers/constructorStanding';

export default class ConstructorStandingsParser extends Parser {

    private static instance: ConstructorStandingsParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new ConstructorStandingsParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        const constructorStandingParser = ConstructorStandingParser.getInstance();
        const constructorStandings = [];

        if ((!data || !data.length) && (!data?.StandingsLists || !data?.StandingsLists.length)) {
            return constructorStandings;
        }

        const dataList = data?.StandingsLists ? data?.StandingsLists[0].ConstructorStandings : data;
        for (const constructorStandingData of dataList || []) {
            constructorStandings.push(constructorStandingParser.parse(constructorStandingData));
        }

        return constructorStandings;
    }

}
