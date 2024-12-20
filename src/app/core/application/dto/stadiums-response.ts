export interface IStadiumsResponse {
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
    country: string;
}

export interface Response {
    id:       number;
    name:     string;
    address:  string;
    city:     string;
    country:  string;
    capacity: number;
    surface:  string;
    image:    string;
}
