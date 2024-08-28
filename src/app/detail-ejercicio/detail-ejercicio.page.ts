import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Ejercicio } from '../interfaces/ejercicio';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-detail-ejercicio',
  templateUrl: './detail-ejercicio.page.html',
  styleUrls: ['./detail-ejercicio.page.scss'],
})
export class DetailEjercicioPage implements OnInit {

  ejercicio: Ejercicio | null = null; // Variable para almacenar el ejercicio
  tipo: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestoreService: FirestoreService
  ) { }

  async ngOnInit() {
    // Obtener el ID y el tipo del ejercicio desde la URL
    const id = this.route.snapshot.paramMap.get('id');
    this.tipo = Number(this.route.snapshot.paramMap.get('tipo'));
    
    if (id && !isNaN(this.tipo)) {
      // Obtener los detalles del ejercicio desde la colección correcta
      this.ejercicio = await this.getEjercicioDetalle(id, this.tipo);
    }
  }

  async getEjercicioDetalle(id: string, tipo: number): Promise<Ejercicio | null> {
    try {
      let ejercicios: Ejercicio[] = [];

      switch (tipo) {
        case 1:
          ejercicios = await firstValueFrom(this.firestoreService.getCollectionPesos());
          break;
        case 2:
          ejercicios = await firstValueFrom(this.firestoreService.getCollectionDistancias());
          break;
        case 3:
          ejercicios = await firstValueFrom(this.firestoreService.getCollectionBodyBuilding());
          break;
        case 4:
          ejercicios = await firstValueFrom(this.firestoreService.getCollectionDesafios());
          break;
        default:
          console.error('Tipo de ejercicio no válido');
          return null;
      }

      return ejercicios.find(e => e.id === id) || null;
    } catch (error) {
      console.error('Error obteniendo los detalles del ejercicio:', error);
      return null;
    }
  }

  getTipoDescripcion(tipo: number): string {
    switch (tipo) {
      case 1:
        return 'Peso';
      case 2:
        return 'Distancia';
      case 3:
        return 'Body Building';
      case 4:
        return 'Desafío';
      case 5:
        return 'A Heroe';
      case 6:
        return 'A Girl';
      default:
        return 'Desconocido';
    }
  }

  getHecho(hecho: string): string {
    switch (hecho) {
      case 'N':
        return 'No';
      case 'S':
        return 'Si';
      case 'P':
        return 'Pendiente';
      default:
        return 'No';
    }
  }

  marcarPendiente(){
    this.ejercicio!.hecho = 'P';
    this.firestoreService.addDocument('pendiente', this.ejercicio);
    this.router.navigate(['/home']);
  }

  irAHome() {
    this.router.navigate(['/home']);
  }

}
