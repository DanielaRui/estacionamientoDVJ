import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionamientoiPageRoutingModule } from './estacionamientoi-routing.module';

import { EstacionamientoiPage } from './estacionamientoi.page';
import { MenuModule } from '../components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionamientoiPageRoutingModule,
    MenuModule
  ],
  declarations: [EstacionamientoiPage]
})
export class EstacionamientoiPageModule {}
