import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children:[
          {
            path:'',
            loadChildren:() => import('../home/home.module').then(m=> m.HomePageModule)
          }
        ]
      },
      {
        path: 'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'settings',
        children:[
          {
            path:'',
            loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: 'favorites',
        children:[
          {
            path:'',
            loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
          }
        ]
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
