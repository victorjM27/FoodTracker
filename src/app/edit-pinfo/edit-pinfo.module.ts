import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPinfoPageRoutingModule } from './edit-pinfo-routing.module';

import { EditPinfoPage } from './edit-pinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPinfoPageRoutingModule
  ],
  declarations: [EditPinfoPage]
})
export class EditPinfoPageModule {}
