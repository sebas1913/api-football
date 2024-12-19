const defaultBaseUrl = "https://v3.football.api-sports.io/";

export class HttpClient {
    private baseUrl: string;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl || defaultBaseUrl;
    }

    private async handleResponse(response: Response) {
        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        }
        return await response.json();
    }

    private getHeaders() {
        const headers = new Headers();
        const apiKey = process.env['NEXT_PUBLIC_RAPIDAPI_KEY'];
        console.log('API KEY', apiKey);
        
        if (!apiKey) {
            throw new Error("N/A API KEY");
        }
        headers.append("x-rapidapi-key", apiKey);
        headers.append("x-rapidapi-host", "v3.football.api-sports.io");
        return headers;
    }

    async get<T>(url: string): Promise<T> {
        const headers = await this.getHeaders();
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "GET",
            cache: "no-store"
        });
        return this.handleResponse(response);
    }
}
