import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoreShopPage } from "./more-shop.page";

const routes: Routes = [
    {
        path: '',
        component: MoreShopPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MoreShopPageRoutingModule { }