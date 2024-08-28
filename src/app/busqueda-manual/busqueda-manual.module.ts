import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaManualPageRoutingModule } from './busqueda-manual-routing.module';

import { BusquedaManualPage } from './busqueda-manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaManualPageRoutingModule
  ],
  declarations: [BusquedaManualPage]
})
export class BusquedaManualPageModule {}
