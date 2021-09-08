import Parser from '@parsers/parser';
import DriverParser from './driver';

export default class DriversParser extends Parser {

    private static instance: DriversParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new DriversParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        const driverParser = DriverParser.getInstance();
        const drivers = [];

        if (!data?.Drivers || !data?.Drivers.length) {
            return drivers;
        }

        for (const driverData of data?.Drivers || []) {
            drivers.push(driverParser.parse(driverData));
        }

        return drivers;
    }

}
