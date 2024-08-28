import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDistanciasPage } from './list-distancias.page';

const routes: Routes = [
  {
    path: '',
    component: ListDistanciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDistanciasPageRoutingModule {}
