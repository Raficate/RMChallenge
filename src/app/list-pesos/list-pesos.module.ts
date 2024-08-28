import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPesosPageRoutingModule } from './list-pesos-routing.module';

import { ListPesosPage } from './list-pesos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPesosPageRoutingModule
  ],
  declarations: [ListPesosPage]
})
export class ListPesosPageModule {}
