import { KagawaTownData } from "./KagawaTown.data";

/**
 * 香川県の市のデータ
 */
export interface KagawaCityData {
    /** 市コード */
    CityCode: number;
    /** 市の名前 */
    CityName: string;
    /** 町村リスト */
    TownList: KagawaTownData[];
}