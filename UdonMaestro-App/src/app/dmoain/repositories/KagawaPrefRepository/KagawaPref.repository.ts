import { Injectable } from "@angular/core";
import { GetKagawaCityDataResponse } from "../../data/response/GetKagawaCityData.response";

/**
 * 香川県の市のレポジトリ
 */
@Injectable({
    providedIn: 'root'
})
export abstract class KagawaPrefRepository {

    abstract fetchKagawaCityList(): Promise<GetKagawaCityDataResponse>;
}