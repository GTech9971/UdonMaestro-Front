import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SwiperModule } from "swiper/angular";
import { BasicShopInfoRoutingModule } from "./basic-shop-info-routing.module";
import { BasicShopInfoPage } from "./basic-shop-info.page";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SwiperModule,
        BasicShopInfoRoutingModule,
    ], declarations: [BasicShopInfoPage]
})
export class BasicShopInfoModule { }