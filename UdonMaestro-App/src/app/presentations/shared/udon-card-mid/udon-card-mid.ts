import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-udon-card-mid',
    templateUrl: './udon-card-mid.html',
    styleUrls: ['./udon-card-mid.scss']
})
export class UdonCardMid {

    constructor(private router: Router) { }

    /**
     * 画像のパス
     */
    @Input() imgSrc: string;

    /**
     * 詳細ページに移動する
     */
    async onClickMoveInfoPage() {
        await this.router.navigate(['shop-info']);
    }

}