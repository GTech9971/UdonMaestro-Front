import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-tab',
  templateUrl: 'first.page.html',
  styleUrls: ['first.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FirstPage {

  constructor(private router: Router) { }

  /**
   * 注目の店最大ページに移動する
   */
  onClickMoreShop() {

  }

  /**
   * 登録画面へ遷移
   */
  async onClickRegistryPage() {
    await this.router.navigate(['registry']);
  }

}
