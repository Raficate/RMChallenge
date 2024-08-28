import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ejercicio } from '../interfaces/ejercicio';
import { FirestoreService } from '../services/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ejerciciosJSON: Ejercicio[] = [];
  hayPendiente: boolean = false;
  pendiente: Ejercicio | null | undefined = null;  // Global variable to store the pending exercise

  constructor(
    private http: HttpClient,
    private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.checkPendiente();
  }

  ionViewWillEnter() {
    this.checkPendiente();
  }

  async checkPendiente() {
    try {
      const ejerciciosPesos = await firstValueFrom(this.firestoreService.getCollectionPesos());
      const ejerciciosDistancias = await firstValueFrom(this.firestoreService.getCollectionDistancias());
      const ejerciciosBodyBuilding = await firstValueFrom(this.firestoreService.getCollectionBodyBuilding());
      const ejerciciosDesafíos = await firstValueFrom(this.firestoreService.getCollectionDesafios());

      // Concatenar todos los ejercicios
      const todosLosEjercicios = ejerciciosPesos.concat(ejerciciosDistancias, ejerciciosBodyBuilding, ejerciciosDesafíos);

      // Buscar el primer ejercicio con el campo 'hecho' igual a 'P'
      this.pendiente = todosLosEjercicios.find(ejercicio => ejercicio.hecho === 'P');
      console.log('Ejercicio pendiente: ', this.pendiente);

      // Si se encuentra un ejercicio pendiente, actualizar las variables
      if (this.pendiente) {
        this.hayPendiente = true;
      } else {
        this.hayPendiente = false;
      }
    } catch (error) {
      console.error('Error verificando pendientes:', error);
    }
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  cargarPesos() {
    this.router.navigate(['/list-pesos']);
  }

  cargarDistancias() {
    this.router.navigate(['/list-distancias']);
  }

  cargarBodyBuilding() {
    this.router.navigate(['/list-bodybuilding']);
  }

  cargarDesafios() {
    this.router.navigate(['/list-desafios']);
  }

  irAPendiente() {
    if (this.pendiente) {
      const tipo = this.getTipo(this.pendiente.tipo);  // Get the collection type as a string
      this.router.navigate(['/pendiente', tipo, this.pendiente.id]);
    } else {
      console.error('No hay ningún ejercicio pendiente.');
    }
  }

  irABusquedaManual() {
    this.router.navigate(['/busqueda-manual']);
  }

  verDetalleEjercicio(ejercicio: Ejercicio) {
    this.router.navigate(['/detail-ejercicio', ejercicio.tipo, ejercicio.id]);
  }

  getTipo(tipo: number): string {
    switch (tipo) {
      case 1:
        return 'pesos';
      case 2:
        return 'distancias';
      case 3:
        return 'bodybuilding';
      case 4:
        return 'desafios';
      default:
        return 'desconocido';
    }
  }
}
