import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-ejercicio',
    loadChildren: () => import('./add-ejercicio/add-ejercicio.module').then( m => m.AddEjercicioPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'list-pesos',
    loadChildren: () => import('./list-pesos/list-pesos.module').then( m => m.ListPesosPageModule)
  },
  {
    path: 'list-distancias',
    loadChildren: () => import('./list-distancias/list-distancias.module').then( m => m.ListDistanciasPageModule)
  },
  {
    path: 'list-bodybuilding',
    loadChildren: () => import('./list-bodybuilding/list-bodybuilding.module').then( m => m.ListBodybuildingPageModule)
  },
  {
    path: 'list-desafios',
    loadChildren: () => import('./list-desafios/list-desafios.module').then( m => m.ListDesafiosPageModule)
  },
  {
    path: 'pendiente/:tipo/:id',
    loadChildren: () => import('./pendiente/pendiente.module').then( m => m.PendientePageModule)
  },
  {
    path: 'busqueda-manual',
    loadChildren: () => import('./busqueda-manual/busqueda-manual.module').then( m => m.BusquedaManualPageModule)
  },
  {
    path: 'sin-ejercicios/:type',
    loadChildren: () => import('./sin-ejercicios/sin-ejercicios.module').then( m => m.SinEjerciciosPageModule)
  },
  {
    path: 'detail-ejercicio/:tipo/:id',
    loadChildren: () => import('./detail-ejercicio/detail-ejercicio.module').then( m => m.DetailEjercicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
