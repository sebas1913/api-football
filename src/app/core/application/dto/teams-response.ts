export interface ITeamsResponse {
    get:        string;
    parameters: Parameters;
    errors:     unknown[];
    results:    number;
    paging:     Paging;
    response:   Response[];
}

export interface Paging {
    current: number;
    total:   number;
}

export interface Parameters {
    search: string;
}

export interface Response {
    team:  Team;
    venue: Venue;
}

export interface Team {
    id:       number;
    name:     string;
    code:     null | string;
    country:  string;
    founded:  number | null;
    national: boolean;
    logo:     string;
}

export interface Venue {
    id:       number | null;
    name:     null | string;
    address:  null | string;
    city:     null | string;
    capacity: number | null;
    surface:  null | string;
    image:    null | string;
}
