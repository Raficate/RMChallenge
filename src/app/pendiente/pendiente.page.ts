import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../interfaces/ejercicio';
import { FirestoreService } from '../services/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.page.html',
  styleUrls: ['./pendiente.page.scss'],
})
export class PendientePage implements OnInit {

  ejercicios: Ejercicio[] = [];
  pendiente: Ejercicio = this.inicializarEjercicio();

  constructor(private firestoreService: FirestoreService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private alertController: AlertController) { }

  async ngOnInit() {
    await this.cargarEjercicioPendiente();
  }

  ionViewWillEnter() {
    this.cargarEjercicioPendiente();
  }

  async cargarEjercicioPendiente() {
    try {
      const colecciones = [
        this.firestoreService.getCollectionPesos(),
        this.firestoreService.getCollectionDistancias(),
        this.firestoreService.getCollectionBodyBuilding(),
        this.firestoreService.getCollectionDesafios()
      ];
  
      for (const coleccionObservable of colecciones) {
        const ejercicios = await firstValueFrom(coleccionObservable);
  
        const ejercicioPendiente = ejercicios.find(ejercicio => ejercicio.hecho === 'P');
        if (ejercicioPendiente) {
          this.pendiente = ejercicioPendiente;
          console.log('Ejercicio pendiente encontrado:', this.pendiente);
          return;  // Salir de la función cuando se encuentra el ejercicio pendiente
        }
      }
  
      console.error('No se encontró ningún ejercicio pendiente en las colecciones.');
    } catch (error) {
      console.error('Error obteniendo los datos de Firestore:', error);
    }
  }
  

  inicializarEjercicio(): Ejercicio {
    return {
      id: '',
      tipo: 1,
      nombre: '',
      descripcion: '',
      hecho: 'N',
      marca: '',
      fecha: '',
      comentario: ''
    };
  }

  irAHome() {
    this.router.navigate(['/home']);
  }

  async guardarMarca() {
    if (!this.pendiente.marca || this.pendiente.marca.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Campo requerido',
        message: 'Debes completar el campo de Marca.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const tipo = this.getTipo(this.pendiente.tipo);
      this.pendiente.hecho = 'S';

      try {
        await this.firestoreService.updateDocument(tipo, this.pendiente.id!, {
          marca: this.pendiente.marca,
          comentario: this.pendiente.comentario,
          hecho: this.pendiente.hecho,
          fecha: this.datePipe.transform(Date.now(), 'yyyy-MM-dd') + ""
        });
        console.log('Ejercicio actualizado correctamente');
        await this.firestoreService.deleteDocument('pendiente', this.pendiente.id!);
      } catch (error) {
        console.error('Error actualizando el ejercicio:', error);
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un problema al actualizar el ejercicio. Inténtalo de nuevo más tarde.',
          buttons: ['OK'],
        });

        await alert.present();
      }
    }

    this.irAHome();
  }

  async quitarPendiente() {
    const tipoColeccion = this.getTipo(this.pendiente.tipo);
  
    try {
      // Actualizar el documento correspondiente en la colección según su tipo
      await this.firestoreService.updateDocument(tipoColeccion, this.pendiente.id!, {
        hecho: 'N'
      });
  
      console.log('Ejercicio actualizado correctamente a "No hecho"');
    } catch (error) {
      console.error('Error al actualizar el ejercicio:', error);
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Hubo un problema al actualizar el ejercicio. Inténtalo de nuevo más tarde.',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  
    this.irAHome();
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
      case 5:
        return 'heroes';
      case 6:
        return 'girls';
      default:
        return 'desconocido';
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

}
