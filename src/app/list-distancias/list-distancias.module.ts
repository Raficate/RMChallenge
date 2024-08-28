import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDistanciasPageRoutingModule } from './list-distancias-routing.module';

import { ListDistanciasPage } from './list-distancias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDistanciasPageRoutingModule
  ],
  declarations: [ListDistanciasPage]
})
export class ListDistanciasPageModule {}
