import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEjercicioPageRoutingModule } from './detail-ejercicio-routing.module';

import { DetailEjercicioPage } from './detail-ejercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEjercicioPageRoutingModule
  ],
  declarations: [DetailEjercicioPage]
})
export class DetailEjercicioPageModule {}
