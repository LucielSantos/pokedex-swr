import { pokemonImageExtension, pokemonImagePath } from '../constants/pokemon';

export const getPokemonIdByUrl = (url: string) => {
  const newUrl = url[url.length - 1] === '/' ? url.slice(0, url.length - 1) : url;

  const arr = newUrl.split('/');

  return arr[arr.length - 1];
};

export const mountPokemonImageUrl = (id: string) =>
  `${pokemonImagePath}${id}${pokemonImageExtension}`;

export const getPokemonImageByUrl = (url: string) => mountPokemonImageUrl(getPokemonIdByUrl(url));
