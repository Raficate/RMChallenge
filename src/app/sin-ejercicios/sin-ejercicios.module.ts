import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinEjerciciosPageRoutingModule } from './sin-ejercicios-routing.module';

import { SinEjerciciosPage } from './sin-ejercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinEjerciciosPageRoutingModule
  ],
  declarations: [SinEjerciciosPage]
})
export class SinEjerciciosPageModule {}
