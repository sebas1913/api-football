import { HttpClient } from "../utils/httpClient";
import { IPlayersResponse } from "@/app/core/application/dto/players-response";

export class PlayerService{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async find(search: string): Promise<IPlayersResponse> {
        try {
            const response = await this.httpClient.get<IPlayersResponse>(`players/profiles?search=${search}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}