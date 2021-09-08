import DriverParser from './parsers/driver';
import { makeRequest } from './utils/request';
import { Driver } from './utils/types';

export const getDriverInformation = async (id: string): Promise<Driver> => {
    return await makeRequest<Driver>(`/drivers/${id}`, DriverParser.getInstance());
};
