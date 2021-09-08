import axios, { AxiosResponse } from 'axios';
import to from 'await-to-js';
import Parser from '@parsers/parser';

const BASE_URL = 'http://ergast.com/api/f1';

export const makeRequest = async <T>(url: string, parser: Parser): Promise<T> => {
    const [err, response] = await to<AxiosResponse>(axios.get(`${BASE_URL}${url}.json`));
    if (err) {
        throw err;
    }
    return parser.parse(cleanResponses(response?.data));
};

const cleanResponses = (data: any): any => {
    const MRData = data?.MRData;
    if (!MRData) {
        return null;
    }
    return MRData.DriverTable || MRData.ConstructorTable;
};
