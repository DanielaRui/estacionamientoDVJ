import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionamientoHPageRoutingModule } from './estacionamientoh-routing.module';

import { EstacionamientoHPage } from './estacionamiento-h.page';
import { MenuModule } from '../components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionamientoHPageRoutingModule,
    MenuModule
  ],
  declarations: [EstacionamientoHPage]
})
export class EstacionamientoHPageModule {}
