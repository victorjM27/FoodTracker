import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenupPageRoutingModule } from './menup-routing.module';

import { MenupPage } from './menup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenupPageRoutingModule
  ],
  declarations: [MenupPage]
})
export class MenupPageModule {}
