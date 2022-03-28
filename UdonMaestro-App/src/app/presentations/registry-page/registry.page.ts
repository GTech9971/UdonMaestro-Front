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

    constructor() {
    }
}