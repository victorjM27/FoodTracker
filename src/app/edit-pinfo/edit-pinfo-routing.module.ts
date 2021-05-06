import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPinfoPage } from './edit-pinfo.page';

const routes: Routes = [
  {
    path: '',
    component: EditPinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPinfoPageRoutingModule {}
