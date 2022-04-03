import { Component, Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { KagawaCityData } from "src/app/dmoain/data/KagawaCitry.data";
import { KagawaPrefService } from "src/app/dmoain/services/KagawaPref.service";
import { KagawaPrefUtil } from "src/app/utils/KagawaPref.util";
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Injectable({
    providedIn: 'root'
})
@Component({
    selector: 'app-registry-page',
    templateUrl: './registry.page.html',
    styleUrls: ['./registry.page.scss']
})
export class RegistryPage implements OnInit {

    readonly WEEKS: string[] = ['月', '火', '水', '木', '金', '土', '日', '祝'];

    readonly kagawaPrefCityListObserver: Observable<KagawaCityData[]>;

    /** 香川県の市のテキストリスト */
    get KagawaPrefCityTextList(): string[] {
        return [];
    }

    startTime: string;
    endTime: string;

    constructor(private kagawaPrefService: KagawaPrefService) {
        this.kagawaPrefCityListObserver = this.kagawaPrefService.KagawaCityDataListObserver$;
    }

    async ngOnInit() {
        try {
            this.kagawaPrefService.fetchKagawaCityList();
        } catch (e) {

        }
    }


    formatDate(dateStr: string): string {
        let date: Date = new Date(dateStr);
        const HOURS = ("00" + (date.getHours())).slice(-2)
        const MINS = ("00" + (date.getMinutes())).slice(-2)

        return `${HOURS}:${MINS}`;
    }
}