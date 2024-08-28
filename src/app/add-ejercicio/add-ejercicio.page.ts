import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../interfaces/ejercicio';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-add-ejercicio',
  templateUrl: './add-ejercicio.page.html',
  styleUrls: ['./add-ejercicio.page.scss'],
})
export class AddEjercicioPage implements OnInit {

  ejercicios: any[];
  ejercicio = this.inicializarEjercicio();
  fecha: any;

  constructor(private firestoreService: FirestoreService,
    private datePipe: DatePipe, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() { 

  }

  guardarNuevoEjercicio(ej: Ejercicio) {
    if (this.fecha){
      ej.fecha = this.datePipe.transform(this.fecha, 'yyyy-MM-dd') + "";
      ej.fecha = ej.fecha.split('-').join('');
      
    }else {
      ej.fecha = "";
    }

    this.firestoreService.addDocument('ejercicios', ej);
  }


  inicializarEjercicio(): Ejercicio {
    const ej: Ejercicio = {
      tipo: 1,
      nombre: "",
      descripcion: "",
      hecho: "N",
      marca: "",
      fecha: "",
      comentario: ""
    };
    return ej;
  }

}
