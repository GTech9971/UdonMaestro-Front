import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-more-shop-page',
    templateUrl: './more-shop.page.html',
    styleUrls: ['./more-shop.page.scss']
})
export class MoreShopPage {


    constructor(private router:Router){

    }

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

  /**
  * 登録画面へ遷移
  */
  async onClickRegistryPage() {
    await this.router.navigate(['registry']);
  }
}