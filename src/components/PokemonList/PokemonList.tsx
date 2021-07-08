import { memo } from 'react';

import { pokemonListLimit } from '../../constants/pokemon';
import { useSWR } from '../../hooks/useSWR';
import { IPokemonListApi } from '../../types/pokemonList';
import { PokemonCard } from '../../components';

interface IProps {
  page: number;
}

const PokemonListComponent: React.FC<IProps> = ({ page }) => {
  const { data } = useSWR<IPokemonListApi>(
    `/pokemon?limit=${pokemonListLimit}&offset=${pokemonListLimit * page}`,
  );

  if (!data) {
    return <> Carregando... </>;
  }

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
      {data.results.map(pokemon => (
        <PokemonCard pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};

export const PokemonList = memo(PokemonListComponent);
