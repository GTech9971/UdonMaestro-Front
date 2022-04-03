import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { UdonCardMidModule } from "../shared/udon-card-mid/udon-card-mid.module";
import { MoreShopPageRoutingModule } from "./more-shop-routing.module";
import { MoreShopPage } from "./more-shop.page";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UdonCardMidModule,
        MoreShopPageRoutingModule,
    ], declarations: [MoreShopPage],
    exports: [MoreShopPage],
})
export class MoreShopPageModule { }