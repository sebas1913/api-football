export interface IPlayersResponse {
    get:        string;
    parameters: Parameters;
    errors:     any[];
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
    player: Player;
}

export interface Player {
    id:          number;
    name:        string;
    firstname:   string;
    lastname:    string;
    age:         number;
    birth:       Birth;
    nationality: string;
    height:      null;
    weight:      null;
    number:      null;
    position:    string;
    photo:       string;
}

export interface Birth {
    date:    string;
    place:   null;
    country: string;
}
