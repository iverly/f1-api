import DriverParser from '@parsers/driver';
import { makeRequest } from '@utils/request';
import { Constructor, Constructors, Driver, Drivers, DriverStandings } from '@utils/types';
import ConstructorParser from '@parsers/constructor';
import ConstructorsParser from '@parsers/constructors';
import DriversParser from '@parsers/drivers';
import DriverStandingsParser from '@parsers/driverStandings';

const getCurrentConstructors = async (): Promise<Constructors> => {
    return getConstructors(new Date().getFullYear());
};

const getConstructors = async (year: number | string): Promise<Constructors> => {
    return makeRequest<Constructors>(`/${year}/constructors`, ConstructorsParser.getInstance());
};

const getCurrentDrivers = async (): Promise<Drivers> => {
    return getDrivers(new Date().getFullYear());
};

const getDrivers = async (year: number | string): Promise<Drivers> => {
    return makeRequest<Drivers>(`/${year}/drivers`, DriversParser.getInstance());
};

const getDriverInformation = async (id: string): Promise<Driver> => {
    return makeRequest<Driver>(`/drivers/${id}`, DriverParser.getInstance());
};

const getConstructorInformation = async (id: string): Promise<Constructor> => {
    return makeRequest<Constructor>(`/constructors/${id}`, ConstructorParser.getInstance());
};

const getCurrentDriverStandings = async (): Promise<DriverStandings> => {
    return makeRequest<DriverStandings>('/current/driverStandings', DriverStandingsParser.getInstance());
};

const getDriverStandings = async (year: number | string, round: number): Promise<DriverStandings> => {
    let url = `/${year}/driverStandings`;
    if (round && isFinite(round) && round > 0) {
        url = `/${year}/${round}/driverStandings`;
    }
    return makeRequest<DriverStandings>(url, DriverStandingsParser.getInstance());
};

export {
    getCurrentConstructors,
    getConstructors,
    getCurrentDrivers,
    getDrivers,
    getDriverInformation,
    getConstructorInformation,
    getCurrentDriverStandings,
    getDriverStandings,
};
