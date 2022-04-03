import { Component } from "@angular/core";

@Component({
    selector: 'app-basic-shop-info',
    templateUrl: './basic-shop-info.page.html',
    styleUrls: ['./basic-shop-info.page.scss']
})
export class BasicShopInfoPage {
    readonly WEEKS: string[] = ['月', '火', '水', '木', '金', '土', '日', '祝'];


}