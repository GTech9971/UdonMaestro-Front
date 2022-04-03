import { HttpStatusCode } from "@angular/common/http";

export interface BaseResponse {
    /**Httpステータスコード */
    StatusCode: HttpStatusCode;
}