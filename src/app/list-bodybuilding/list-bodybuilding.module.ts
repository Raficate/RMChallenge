import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBodybuildingPageRoutingModule } from './list-bodybuilding-routing.module';

import { ListBodybuildingPage } from './list-bodybuilding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBodybuildingPageRoutingModule
  ],
  declarations: [ListBodybuildingPage]
})
export class ListBodybuildingPageModule {}
