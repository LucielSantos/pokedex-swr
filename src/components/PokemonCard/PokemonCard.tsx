import Image from 'next/image';
import { memo } from 'react';
import { IPokemonResult } from '../../types/pokemonList';
import { getPokemonImageByUrl } from '../../utils/generic';

interface IProps {
  pokemon: IPokemonResult;
}

const PokemonCardComponent: React.FC<IProps> = ({ pokemon }) => {
  return (
    <div
      className="border-4 border-purple-700 rounded-lg p-4 flex flex-col items-center "
      key={pokemon.name}
    >
      <div className="mb-3">
        <Image src={getPokemonImageByUrl(pokemon.url)} height={80} width={80} />
      </div>

      {pokemon.name}
    </div>
  );
};

export const PokemonCard = memo(PokemonCardComponent);
