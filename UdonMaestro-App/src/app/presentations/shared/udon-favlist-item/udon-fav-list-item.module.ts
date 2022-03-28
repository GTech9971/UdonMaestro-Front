import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { UdonFavListItem } from "./udon-fav-list-item";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [UdonFavListItem],
    exports: [UdonFavListItem],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UdonFavListItemModule {
}