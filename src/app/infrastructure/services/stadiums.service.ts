import { HttpClient } from "../utils/httpClient";
import { IStadiumsResponse } from "@/app/core/application/dto/stadiums-response";

export class StadiumsService{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async find(search: string): Promise<IStadiumsResponse> {
        try {
            const response = await this.httpClient.get<IStadiumsResponse>(`venues?country=${search}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}