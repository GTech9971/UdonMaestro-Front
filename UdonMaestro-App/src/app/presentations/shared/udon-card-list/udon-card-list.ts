import { Component } from "@angular/core";

@Component({
    selector: 'app-udon-card-list',
    templateUrl: './udon-card-list.html',
    styleUrls: ['./udon-card-list.scss']
})
export class UdonCardList {


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