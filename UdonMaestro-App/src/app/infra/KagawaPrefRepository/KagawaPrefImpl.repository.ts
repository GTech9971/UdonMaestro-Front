import { Injectable } from "@angular/core";
import { KagawaPrefRepository } from "src/app/dmoain/repositories/KagawaPrefRepository/KagawaPref.repository";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { GetKagawaCityDataResponse } from "src/app/dmoain/data/response/GetKagawaCityData.response";

@Injectable({
    providedIn: 'root'
})
export class KagawaPrefImplRepository extends KagawaPrefRepository {

    constructor(private client: HttpClient) {
        super();
    }

    fetchKagawaCityList(): Promise<GetKagawaCityDataResponse> {
        return this.client.get<GetKagawaCityDataResponse>(`${environment.APIUrl}/kagawa-pref-info`).toPromise();
    }

}