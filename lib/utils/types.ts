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
