import { HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { KagawaCityData } from "../data/KagawaCitry.data";
import { GetKagawaCityDataResponse } from "../data/response/GetKagawaCityData.response";
import { KagawaPrefRepository } from "../repositories/KagawaPrefRepository/KagawaPref.repository";

@Injectable({
    providedIn: 'root'
})
export class KagawaPrefService {

    private _kagawaCityDataList: KagawaCityData[];
    public readonly KagawaCityDataListObserver$: Observable<KagawaCityData[]>;
    private kagawaCityDataListSubject: BehaviorSubject<KagawaCityData[]>;

    constructor(private repository: KagawaPrefRepository) {
        this._kagawaCityDataList = [];
        this.kagawaCityDataListSubject = new BehaviorSubject<KagawaCityData[]>([]);
        this.KagawaCityDataListObserver$ = this.kagawaCityDataListSubject.asObservable();
    }


    /**
     * 香川の市のリストを返す
     * @returns 
     */
    public async fetchKagawaCityList(): Promise<GetKagawaCityDataResponse> {
        const response = await this.repository.fetchKagawaCityList();
        if (response.StatusCode === HttpStatusCode.Ok) {
            this._kagawaCityDataList = response.CityList;
            this.nextKagawaCityList();
        }

        return response;
    }

    public nextKagawaCityList() {
        this.kagawaCityDataListSubject.next(this._kagawaCityDataList);
    }

}