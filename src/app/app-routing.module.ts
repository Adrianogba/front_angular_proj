import { ListaFilmeComponent } from './pages/lista-filme/lista-filme.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ContadorComponent } from './pages/contador/contador.component';
import { CardComponent } from './pages/card/card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'contador',
    component: ContadorComponent,
  },
  {
    path: 'certificacao',
    component: ListaComponent,
  },
  {
    path: 'filmes',
    component: ListaFilmeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
