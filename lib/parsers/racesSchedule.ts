import Parser from '@parsers/parser';
import RaceScheduleParser from '@parsers/raceSchedule';

export default class RacesScheduleParser extends Parser {

    private static instance: RacesScheduleParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new RacesScheduleParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        const raceScheduleParser = RaceScheduleParser.getInstance();
        const racesSchedule = [];

        if (!data?.Races || !data?.Races.length) {
            return racesSchedule;
        }

        for (const raceScheduleData of data?.Races || []) {
            racesSchedule.push(raceScheduleParser.parse(raceScheduleData));
        }

        return racesSchedule;
    }

}
