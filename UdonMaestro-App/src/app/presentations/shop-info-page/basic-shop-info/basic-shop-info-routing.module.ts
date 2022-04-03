import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicShopInfoPage } from "./basic-shop-info.page";

const routes: Routes = [
    {
        path: '',
        component: BasicShopInfoPage
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BasicShopInfoRoutingModule {

}