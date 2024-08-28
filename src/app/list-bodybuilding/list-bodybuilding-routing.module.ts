import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBodybuildingPage } from './list-bodybuilding.page';

const routes: Routes = [
  {
    path: '',
    component: ListBodybuildingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBodybuildingPageRoutingModule {}
