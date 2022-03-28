import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UdonCardMid } from './udon-card-mid';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [UdonCardMid],
    exports: [UdonCardMid],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UdonCardMidModule { }
