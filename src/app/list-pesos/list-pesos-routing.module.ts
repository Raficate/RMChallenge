import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPesosPage } from './list-pesos.page';

const routes: Routes = [
  {
    path: '',
    component: ListPesosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPesosPageRoutingModule {}
