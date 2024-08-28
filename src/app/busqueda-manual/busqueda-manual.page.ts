import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../interfaces/ejercicio';
import { FirestoreService } from '../services/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-busqueda-manual',
  templateUrl: './busqueda-manual.page.html',
  styleUrls: ['./busqueda-manual.page.scss'],
})
export class BusquedaManualPage implements OnInit {

  ejercicios: Ejercicio[] = [];
  ejerciciosFiltrados: Ejercicio[] = [];
  searchTerm: string = '';

  constructor(private firestoreService: FirestoreService,
              private route: ActivatedRoute,
              private router: Router) { }

  async ngOnInit() {
    await this.cargarEjercicios();
  }

  async cargarEjercicios() {
    try {
      const ejerciciosPesos = await firstValueFrom(this.firestoreService.getCollectionPesos());
      const ejerciciosDistancias = await firstValueFrom(this.firestoreService.getCollectionDistancias());
      const ejerciciosBodyBuilding = await firstValueFrom(this.firestoreService.getCollectionBodyBuilding());
      const ejerciciosDesafíos = await firstValueFrom(this.firestoreService.getCollectionDesafios());

      this.ejercicios = ejerciciosPesos.concat(ejerciciosDistancias, ejerciciosBodyBuilding, ejerciciosDesafíos);
      this.ordenarEjerciciosAlfabeticamente();
      this.filtrarEjercicios();
  
    } catch (error) {
      console.error('Error obteniendo los datos de Firestore:', error);
    }
  }

  ordenarEjerciciosAlfabeticamente() {
    this.ejercicios.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  filtrarEjercicios() {
    const term = this.searchTerm.toLowerCase();
    this.ejerciciosFiltrados = this.ejercicios.filter(ejercicio => 
      ejercicio.nombre.toLowerCase().includes(term) ||
      ejercicio.descripcion.toLowerCase().includes(term)
    );
  }

  verDetalleEjercicio(ejercicio: Ejercicio) {
    this.router.navigate(['/detail-ejercicio', ejercicio.tipo, ejercicio.id]);
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
        return '🔴';
      case 'S':
        return '🟢';
      case 'P':
        return '🟡';
      default:
        return 'No';
    }
  }
  goToHome() {
    this.router.navigate(['/home']);
  }


}
