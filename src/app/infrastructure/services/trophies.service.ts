import { HttpClient } from "../utils/httpClient";
import { ITrophiesResponse } from "@/app/core/application/dto/trophies-response";

export class TrophieService {
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async findById(id: string): Promise<ITrophiesResponse> {
        try {
            const response = await this.httpClient.get<ITrophiesResponse>(`trophies?player=${id}`);
            return response;
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}