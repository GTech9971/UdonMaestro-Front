import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstPage } from './first.page';

import { FirstPageRoutingModule } from './first-routing.module';
import { SwiperModule } from 'swiper/angular';
import { UdonCardMidModule } from '../../shared/udon-card-mid/udon-card-mid.module';
import { UdonFavListItemModule } from '../../shared/udon-favlist-item/udon-fav-list-item.module';
import { UdonFavListModule } from '../../shared/udon-fav-list/udon-fav-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FirstPageRoutingModule,
    SwiperModule,
    UdonCardMidModule,
    UdonFavListItemModule,
    UdonFavListModule,
  ],
  declarations: [FirstPage]
})
export class FirstPageModule { }
