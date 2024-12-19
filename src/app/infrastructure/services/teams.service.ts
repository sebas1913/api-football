import { HttpClient } from "../utils/httpClient";
import { ITeamsResponse } from "@/app/core/application/dto/teams-response";

export class TeamsService{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async find(search: string): Promise<ITeamsResponse> {
        try {
            const response = await this.httpClient.get<ITeamsResponse>(`teams?search=${search}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}