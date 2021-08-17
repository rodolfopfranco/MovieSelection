import { CampoGenerico } from './campo-generico';
//Interface para ajudar na busca e ordenação dos resultados
export interface ConfigPrams {
  pagina?: number;
  limite?: number;
  pesquisa?: string;
  campo?: CampoGenerico;
}
