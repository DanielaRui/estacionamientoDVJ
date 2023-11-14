import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionamientojPageRoutingModule } from './estacionamientoj-routing.module';

import { EstacionamientojPage } from './estacionamientoj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionamientojPageRoutingModule
  ],
  declarations: [EstacionamientojPage]
})
export class EstacionamientojPageModule {}
