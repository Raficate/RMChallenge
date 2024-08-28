import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDesafiosPageRoutingModule } from './list-desafios-routing.module';

import { ListDesafiosPage } from './list-desafios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDesafiosPageRoutingModule
  ],
  declarations: [ListDesafiosPage]
})
export class ListDesafiosPageModule {}
