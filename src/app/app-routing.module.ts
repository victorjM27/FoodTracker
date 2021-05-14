import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    redirectTo:'slides',
    pathMatch:'full'
  }, 
  {
    path: 'menup',
    loadChildren: () => import('./menup/menup.module').then( m => m.MenupPageModule)
  },  
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },  
  {
    path: 'singin',
    loadChildren: () => import('./singin/singin.module').then( m => m.SinginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'editpassw',
    loadChildren: () => import('./editpassw/editpassw.module').then( m => m.EditpasswPageModule)
  }, 
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then( m => m.InicialPageModule)
  },  
  {
    path: 'editinfo',
    loadChildren: () => import('./editinfo/editinfo.module').then( m => m.EditinfoPageModule)
  },
  {
    path: 'addrecipe',
    loadChildren: () => import('./addrecipe/addrecipe.module').then( m => m.AddrecipePageModule)
  },
  {
    path: 'addfoodinfo',
    loadChildren: () => import('./addfoodinfo/addfoodinfo.module').then( m => m.AddfoodinfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
