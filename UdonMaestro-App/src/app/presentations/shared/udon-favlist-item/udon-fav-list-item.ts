import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-udon-fav-list-item',
    templateUrl: './udon-fav-list-item.html',
    styleUrls: ['./udon-fav-list-item.scss']
})
export class UdonFavListItem {
    /**
     * うどんリスト画像
     */
    @Input() imgSrc: string;
}