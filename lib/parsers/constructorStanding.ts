import { ConstructorStanding } from '@/utils/types';
import Parser from '@parsers/parser';
import ConstructorParser from '@parsers/constructor';

export default class ConstructorStandingParser extends Parser {

    private static instance: ConstructorStandingParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new ConstructorStandingParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        const constructorParser = ConstructorParser.getInstance();

        const { position, points, wins, Constructor: constructor } = data;

        const constructorStanding: ConstructorStanding = {
            position: parseInt(position, 10),
            points: parseFloat(points),
            wins: parseInt(wins, 10),
            constructor: constructorParser.parse(constructor),
        };

        return constructorStanding;
    }

}
