import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDesafiosPage } from './list-desafios.page';

const routes: Routes = [
  {
    path: '',
    component: ListDesafiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDesafiosPageRoutingModule {}
