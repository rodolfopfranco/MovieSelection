export interface Filme {
  //? indica que é opcional.
  //Os nomes precisam ser os mesmos do banco
  id?: number;
  titulo: string;
  urlFoto?: string;
  dtLancamento: Date;
  descricao?: string;
  nota: number;
  urlIMDb?: string;
  genero: string;
}
