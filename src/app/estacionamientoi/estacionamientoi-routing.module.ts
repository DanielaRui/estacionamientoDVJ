import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstacionamientoiPage } from './estacionamientoi.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionamientoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstacionamientoiPageRoutingModule {}
