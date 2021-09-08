import DriverParser from '@parsers/driver';
import { makeRequest } from '@utils/request';
import { Constructor, Driver } from '@utils/types';
import ConstructorParser from './parsers/constructor';

export const getDriverInformation = async (id: string): Promise<Driver> => {
    return await makeRequest<Driver>(`/drivers/${id}`, DriverParser.getInstance());
};

export const getConstructorInformation = async (id: string): Promise<Constructor> => {
    return await makeRequest<Constructor>(`/constructors/${id}`, ConstructorParser.getInstance());
};
