import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sin-ejercicios',
  templateUrl: './sin-ejercicios.page.html',
  styleUrls: ['./sin-ejercicios.page.scss'],
})
export class SinEjerciciosPage implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  tipo: string = '';

  ngOnInit() {
    this.tipo = this.route.snapshot.paramMap.get('type')!;
  }

  irAHome() {
    this.router.navigate(['/home']);
  }

}
