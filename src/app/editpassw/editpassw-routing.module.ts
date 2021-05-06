import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpasswPage } from './editpassw.page';

const routes: Routes = [
  {
    path: '',
    component: EditpasswPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpasswPageRoutingModule {}
