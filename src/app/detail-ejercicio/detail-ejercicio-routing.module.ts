import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEjercicioPage } from './detail-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEjercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEjercicioPageRoutingModule {}
