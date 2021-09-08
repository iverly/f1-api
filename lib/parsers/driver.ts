import Parser from '@parsers/parser';
import { Driver } from '../utils/types';

export default class DriverParser extends Parser {

    private static instance: DriverParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new DriverParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        let driverData = data;
        if (data?.Drivers) {
            if (!data?.Drivers.length) {
                return null;
            }
            driverData = data.Drivers[0];
        }

        const { driverId, permanentNumber, code, givenName, familyName, dateOfBirth, nationality } = driverData;
        const driver: Driver = {
            id: driverId,
            code,
            number: parseInt(permanentNumber, 10),
            firstName: givenName,
            lastName: familyName,
            birthday: dateOfBirth,
            nationality,
        };

        return driver;
    }

}
