import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NaoEncontradaComponent } from '../erros/nao-encontrada/nao-encontrada.component';

const rotas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: 'naoencontrada',
    component: NaoEncontradaComponent
  },
  {
    path: '**',
    redirectTo: '/naoencontrada',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas, { useHash: true, scrollPositionRestoration: 'enabled' })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
