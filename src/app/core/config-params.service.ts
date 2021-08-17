import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ConfigPrams } from '../shared/models/config-prams';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  //Gerencia os parâmetros de consulta da API:
  configurarParametros(config: ConfigPrams): HttpParams {
    let httpParams = new HttpParams();
    if (config.pagina) {
      //Página na qual irá
      httpParams = httpParams.set('_page', config.pagina.toString());
    }
    if (config.limite) {
      //Limite de filmes por carregamento:
      httpParams = httpParams.set('_limit', config.limite.toString());
    }
    if (config.pesquisa) {
      //Busca por um determinado item:
      httpParams = httpParams.set('q', config.pesquisa);
    }
    if (config.campo) {
      httpParams = httpParams.set(config.campo.tipo, config.campo.valor.toString());
    }
    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');

    return httpParams;
  }
}
