import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { BasicShopInfoModule } from "./basic-shop-info/basic-shop-info.page.module";
import { ShopInfoPageRoutingModule } from "./shop-info-routing.module";
import { ShopInfoPage } from "./shop-info.page";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ShopInfoPageRoutingModule,
        BasicShopInfoModule,
    ], declarations: [ShopInfoPage]
})
export class ShopInfoPageModule { }