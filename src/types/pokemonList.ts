export interface IPokemonResult {
  name: string;
  url: string;
}

export interface IPokemonListApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonResult[];
}
