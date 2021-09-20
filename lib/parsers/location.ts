import Parser from '@parsers/parser';
import { Location } from '@utils/types';

export default class LocationParser extends Parser {

    private static instance: LocationParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new LocationParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        const { lat, long, locality: city, country } = data;

        const location: Location = {
            latitude: parseFloat(lat),
            longitude: parseFloat(long),
            city,
            country,
        };

        return location;
    }

}
