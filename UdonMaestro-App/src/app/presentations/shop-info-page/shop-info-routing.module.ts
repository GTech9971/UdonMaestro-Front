import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopInfoPage } from "./shop-info.page";

const routes: Routes = [
    {
        path: 'shop-info',
        component: ShopInfoPage,
        children: [
            {
                path: 'basic-shop-info',
                loadChildren: () => import('./basic-shop-info/basic-shop-info-routing.module').then(m => m.BasicShopInfoRoutingModule)
            }
        ],
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopInfoPageRoutingModule { }