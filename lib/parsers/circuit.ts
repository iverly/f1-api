import Parser from '@parsers/parser';
import { Circuit } from '@utils/types';
import LocationParser from './location';

export default class CircuitParser extends Parser {

    private static instance: CircuitParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new CircuitParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        const locationParser = LocationParser.getInstance();

        const { circuitId, circuitName, Location: location } = data;

        const circuit: Circuit = {
            id: circuitId,
            name: circuitName,
            location: locationParser.parse(location),
        };

        return circuit;
    }

}
