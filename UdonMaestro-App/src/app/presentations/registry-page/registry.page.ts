import { Component, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
@Component({
    selector: 'app-registry-page',
    templateUrl: './registry.page.html',
    styleUrls: ['./registry.page.scss']
})
export class RegistryPage {

    readonly WEEKS: string[] = ['月', '火', '水', '木', '金', '土', '日', '祝'];


    startTime: string;
    endTime: string;

    constructor() {
    }


    formatDate(dateStr: string): string {
        let date: Date = new Date(dateStr);
        const HOURS = ("00" + (date.getHours())).slice(-2)
        const MINS = ("00" + (date.getMinutes())).slice(-2)

        return `${HOURS}:${MINS}`;
    }
}