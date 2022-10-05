import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './shared/rodape/rodape.component';
import { ContadorComponent } from './pages/contador/contador.component';
import { CardComponent } from './pages/card/card.component';
import { HeadersComponent } from './shared/headers/headers.component';
import { ListaComponent } from './pages/lista/lista.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaFilmeComponent } from './pages/lista-filme/lista-filme.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    CardComponent,
    HeadersComponent,
    ListaComponent,
    HomeComponent,
    ListaFilmeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
