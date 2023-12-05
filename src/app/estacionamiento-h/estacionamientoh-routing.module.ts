import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstacionamientoHPage } from './estacionamiento-h.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionamientoHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstacionamientoHPageRoutingModule {}
