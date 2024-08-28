import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../interfaces/ejercicio';
import { FirestoreService } from '../services/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-distancias',
  templateUrl: './list-distancias.page.html',
  styleUrls: ['./list-distancias.page.scss'],
})
export class ListDistanciasPage implements OnInit {
  ejercicios: Ejercicio[] = [];
  ejercicio: Ejercicio = this.inicializarEjercicio();

  constructor(private firestoreService: FirestoreService,
              private route: ActivatedRoute,
              private router: Router,
              private alertController: AlertController) {}

  async ngOnInit() {
    await this.cargarEjercicioAleatorio();
  }

  ionViewWillEnter() {
    this.cargarEjercicioAleatorio();
  }

  async cargarEjercicioAleatorio() {
    try {
      this.ejercicios = await firstValueFrom(this.firestoreService.getCollectionDistancias());
  
      // Filtrar los ejercicios que tienen 'hecho' igual a 'No'
      const ejerciciosNoHechos = this.ejercicios.filter(ejercicio => ejercicio.hecho === 'N');
  
      if (ejerciciosNoHechos && ejerciciosNoHechos.length > 0) {
        let order = this.getRandomInt(ejerciciosNoHechos.length);
  
        if (order >= 0 && order < ejerciciosNoHechos.length) {
          this.ejercicio = ejerciciosNoHechos[order];
          console.log('Ejercicio seleccionado:', this.ejercicio);
        } else {
          console.error('Índice generado fuera de rango:', order);
        }
      } else {
        console.error('No hay ejercicios pendientes o la colección de ejercicios no fue recuperada correctamente.');
      }
    } catch (error) {
      console.error('Error obteniendo los datos de Firestore:', error);
    }
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  inicializarEjercicio(): Ejercicio {
    return {
      id: '',
      tipo: 2,
      nombre: '',
      descripcion: '',
      hecho: 'N',
      marca: '',
      fecha: '',
      comentario: ''
    };
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

  irAHome() {
    this.router.navigate(['/home']);
  }

  async marcarPendiente() {
    this.ejercicio.hecho = 'P';

    try {
      await this.firestoreService.updateDocument('distancias', this.ejercicio.id!, {
        hecho: this.ejercicio.hecho
      });

      console.log('Ejercicio marcado como pendiente correctamente:' + this.ejercicio.id!);
    } catch (error) {
      console.error('Error marcando el ejercicio como pendiente:', error);
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Hubo un problema al marcar el ejercicio como pendiente. Inténtalo de nuevo más tarde.',
        buttons: ['OK'],
      });

      await alert.present();
    }

    this.router.navigate(['/home']);
  }
}

