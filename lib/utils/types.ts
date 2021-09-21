export type Drivers = Driver[];

export interface Driver {
    id: string;
    code: string;
    number?: number;
    firstName: string;
    lastName: string;
    birthday: string;
    nationality: string;
}

export type Constructors = Constructor[];

export interface Constructor {
    id: string;
    name: string;
    nationality: string;
}

export interface StandingList<T> {
    season: number;
    round: number;
    standings: T;
}

export type DriverStandings = DriverStanding[];

export interface DriverStanding {
    position: number;
    points: number;
    wins: number;
    driver: Driver;
    constructors: Constructors;
}

export type ConstructorStandings = ConstructorStanding[];

export interface ConstructorStanding {
    position: number;
    points: number;
    wins: number;
    constructor: Constructor;
}

export type RacesSchedule = RaceSchedule[];

export interface RaceSchedule {
    season: number;
    round: number;
    name: string;
    circuit: Circuit;
    date: Date;
}

export interface Circuit {
    id: string;
    name: string;
    location: Location;
}

export interface Location {
    latitude: number;
    longitude: number;
    country: string;
    city: string;
}
