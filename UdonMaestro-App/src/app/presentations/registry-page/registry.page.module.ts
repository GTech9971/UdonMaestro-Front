import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SwiperModule } from "swiper/angular";
import { RegistryPageRoutingModule } from "./registry-routing.module";
import { RegistryPage } from "./registry.page";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SwiperModule,
        RegistryPageRoutingModule,
    ],
    declarations: [RegistryPage],
})
export class RegistryPageModule { }