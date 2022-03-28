import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistryPage } from '../../registry-page/registry.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'first-tab',
        loadChildren: () => import('../first-tab/first.module').then(m => m.FirstPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/home/first-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/first-tab',
    pathMatch: 'full'
  },
  {
    path: 'registry',
    component: RegistryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomePageRoutingModule { }
