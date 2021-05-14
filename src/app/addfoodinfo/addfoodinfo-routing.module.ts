import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfoodinfoPage } from './addfoodinfo.page';

const routes: Routes = [
  {
    path: '',
    component: AddfoodinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfoodinfoPageRoutingModule {}
