import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { UdonCardList } from "./udon-card-list";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [UdonCardList],
    exports: [UdonCardList],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UdonCardListModule {
}