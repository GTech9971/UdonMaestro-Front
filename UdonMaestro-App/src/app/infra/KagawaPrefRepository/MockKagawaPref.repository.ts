import { Injectable } from "@angular/core";
import { GetKagawaCityDataResponse } from "src/app/dmoain/data/response/GetKagawaCityData.response";
import { KagawaPrefRepository } from "src/app/dmoain/repositories/KagawaPrefRepository/KagawaPref.repository";
import { MockHelperService } from "src/app/dmoain/services/MockHelper.service";

@Injectable({
    providedIn: 'root'
})
export class MockKagawaPrefRepository extends KagawaPrefRepository {

    constructor(private helper: MockHelperService) {
        super();
    }


    fetchKagawaCityList(): Promise<GetKagawaCityDataResponse> {
        return this.helper.loadMockDataFromJsonFile(KagawaPrefRepository.name, this.fetchKagawaCityList.name);
    }

}