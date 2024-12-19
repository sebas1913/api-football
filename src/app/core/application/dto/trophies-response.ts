interface Trophy {
    league: string;
    country: string;
    season: string;
    place: string;
}

export interface ITrophiesResponse {
    get: string;
    parameters: {
        player: string;
    };
    errors: unknown[];
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: Trophy[];
}
