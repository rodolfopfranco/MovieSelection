import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../shared/models/filme';
import { ConfigPrams } from '../shared/models/config-prams';
import { ConfigParamsService } from './config-params.service';

//Classe responsável por gerenciar a conexão com o backend.
//url de onde está a API:
const url = 'http://localhost:3000/filmes/';

//Injectable para disponibilizar em qualquer local:
@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  //Injeção de dependência do httpClient
  constructor(private http: HttpClient,
              private configService: ConfigParamsService) { }

  //o http client oferece diversas operações da API, como post, put, get e delete.
  //Utiliza o Filme como um shared module em "src/app/shared/models/filme.ts"
  salvar(filme: Filme): Observable<Filme> {
    //o HttpClient já converte o texto para o formato JSon
    return this.http.post<Filme>(url, filme);
  }

  editar(filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(url + filme.id, filme);
  }

  listar(config: ConfigPrams): Observable<Filme[]> {
    const configPrams = this.configService.configurarParametros(config);
    return this.http.get<Filme[]>(url, {params: configPrams});
  }

  visualizar(id: number): Observable<Filme> {
    return this.http.get<Filme>(url + id);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
