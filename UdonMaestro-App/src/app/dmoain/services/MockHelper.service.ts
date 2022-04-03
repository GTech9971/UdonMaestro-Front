import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MockHelperService {

    private readonly MOCK_FOLDER: string = "/assets/data/";

    constructor(private client: HttpClient) { }

    /**
     * ローカルモックデータを読み込む
     * @param repositoryName 
     * @param apiName 
     * @returns 
     */
    public loadMockDataFromJsonFile(repositoryName: string, apiName: string): Promise<any> {
        return this.client.get(`${this.MOCK_FOLDER}${repositoryName}/${apiName}/data.json`).toPromise();
    }
}