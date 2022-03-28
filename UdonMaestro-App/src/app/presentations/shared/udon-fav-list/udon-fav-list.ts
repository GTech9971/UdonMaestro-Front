import { Component, ViewChild } from "@angular/core";

@Component({
    selector: 'app-udon-fav-list',
    templateUrl: './udon-fav-list.html',
    styleUrls: ['./udon-fav-list.scss']
})
export class UdonFavList {

    loadData(event) {
        setTimeout(() => {
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            // if (data.length == 1000) {
            //     event.target.disabled = true;
            // }
        }, 500);
    }

}