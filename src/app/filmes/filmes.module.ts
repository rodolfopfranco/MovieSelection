import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { MaterialModule } from '../shared/material/material.module';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { CamposModule } from '../shared/components/campos/campos.module';
import { VisualizarFilmesComponent } from './visualizar-filmes/visualizar-filmes.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    //Responsável pelo scroll infinito, após executar o comando npm install ngx-infinite-scroll --save:
    InfiniteScrollModule
  ],
  declarations: [CadastroFilmesComponent, ListagemFilmesComponent, VisualizarFilmesComponent]
})
export class FilmesModule { }
