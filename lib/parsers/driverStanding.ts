import { DriverStanding } from '@/utils/types';
import Parser from '@parsers/parser';
import ConstructorParser from '@parsers/constructor';
import DriverParser from '@parsers/driver';

export default class DriverStandingParser extends Parser {

    private static instance: DriverStandingParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new DriverStandingParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        const constructorParser = ConstructorParser.getInstance();
        const driverParser = DriverParser.getInstance();

        const { position, points, wins, Driver: driverData, Constructors: constructors } = data;

        const driverStanding: DriverStanding = {
            position: parseInt(position, 10),
            points: parseFloat(points),
            wins: parseInt(wins, 10),
            driver: driverParser.parse(driverData),
            constructor: constructorParser.parse(constructors[0]),
        };

        return driverStanding;
    }

}
