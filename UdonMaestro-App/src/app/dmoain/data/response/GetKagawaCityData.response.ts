import { KagawaCityData } from "../KagawaCitry.data";
import { BaseResponse } from "./Base.response";

export interface GetKagawaCityDataResponse extends BaseResponse {
    CityList: KagawaCityData[];
}