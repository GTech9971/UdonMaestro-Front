import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoreShopPageModule } from './presentations/more-shop-page/more-shop.page.module';
import { RegistryPageModule } from './presentations/registry-page/registry.page.module';
import { ShopInfoPageModule } from './presentations/shop-info-page/shop-info.page.module';
import { KagawaPrefRepository } from './dmoain/repositories/KagawaPrefRepository/KagawaPref.repository';
import { KagawaPrefImplRepository } from './infra/KagawaPrefRepository/KagawaPrefImpl.repository';
import { MockKagawaPrefRepository } from './infra/KagawaPrefRepository/MockKagawaPref.repository';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RegistryPageModule,
    MoreShopPageModule,
    ShopInfoPageModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: KagawaPrefRepository, useClass: MockKagawaPrefRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
