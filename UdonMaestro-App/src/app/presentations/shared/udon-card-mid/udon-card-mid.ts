import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-udon-card-mid',
    templateUrl: './udon-card-mid.html',
    styleUrls: ['./udon-card-mid.scss']
})
export class UdonCardMid {

    /**
     * 画像のパス
     */
    @Input() imgSrc: string;

}