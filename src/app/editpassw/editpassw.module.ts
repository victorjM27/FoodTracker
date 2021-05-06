import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpasswPageRoutingModule } from './editpassw-routing.module';

import { EditpasswPage } from './editpassw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpasswPageRoutingModule
  ],
  declarations: [EditpasswPage]
})
export class EditpasswPageModule {}
