import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenupPage } from './menup.page';

const routes: Routes = [
  {
    path: '',
    component: MenupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenupPageRoutingModule {}
