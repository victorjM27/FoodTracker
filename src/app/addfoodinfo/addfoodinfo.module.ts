import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfoodinfoPageRoutingModule } from './addfoodinfo-routing.module';

import { AddfoodinfoPage } from './addfoodinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfoodinfoPageRoutingModule
  ],
  declarations: [AddfoodinfoPage]
})
export class AddfoodinfoPageModule {}
