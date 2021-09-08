import Parser from '@parsers/parser';
import ConstructorParser from './constructor';

export default class ConstructorsParser extends Parser {

    private static instance: ConstructorsParser;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new ConstructorsParser();
        }
        return this.instance;
    }

    public parse(data: any): any {
        const constructorParser = ConstructorParser.getInstance();
        const constructors = [];

        if (!data?.Constructors || !data?.Constructors.length) {
            return constructors;
        }

        for (const constructorData of data?.Constructors || []) {
            constructors.push(constructorParser.parse(constructorData));
        }

        return constructors;
    }

}
