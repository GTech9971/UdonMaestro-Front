import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { UdonFavListItemModule } from "../udon-favlist-item/udon-fav-list-item.module";
import { UdonFavList } from "./udon-fav-list";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UdonFavListItemModule,
    ],
    declarations: [UdonFavList],
    exports: [UdonFavList],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UdonFavListModule {

}