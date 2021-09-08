import DriverParser from '@parsers/driver';
import { makeRequest } from '@utils/request';
import { Constructor, Constructors, Driver } from '@utils/types';
import ConstructorParser from '@parsers/constructor';
import ConstructorsParser from '@parsers/constructors';

const getCurrentConstructors = async (): Promise<Constructors> => {
    return getConstructors(new Date().getFullYear());
};

const getConstructors = async (year: number | string): Promise<Constructors> => {
    return makeRequest<Constructors>(`/${year}/constructors`, ConstructorsParser.getInstance());
};

const getDriverInformation = async (id: string): Promise<Driver> => {
    return makeRequest<Driver>(`/drivers/${id}`, DriverParser.getInstance());
};

const getConstructorInformation = async (id: string): Promise<Constructor> => {
    return makeRequest<Constructor>(`/constructors/${id}`, ConstructorParser.getInstance());
};

export {
    getCurrentConstructors,
    getConstructors,
    getDriverInformation,
    getConstructorInformation,
};
