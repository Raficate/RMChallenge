import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaManualPage } from './busqueda-manual.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaManualPageRoutingModule {}
