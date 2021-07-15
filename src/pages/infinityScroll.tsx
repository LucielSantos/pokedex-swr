import { useEffect, useRef } from 'react';
import { Head, Nav, PokemonCard } from '../components';
import { pokemonListLimit } from '../constants/pokemon';
import { useOnScreen } from '../hooks/useOnScreen';
import { useSWRInfinite } from '../hooks/useSWRInfinite';
import { IPokemonListApi } from '../types/pokemonList';

const InfinityScroll: React.FC = () => {
  const loadButtonRef = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(loadButtonRef, '100px');

  const { data, size, setSize, isValidating } = useSWRInfinite<IPokemonListApi>(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.results.length) return null;

      return `/pokemon?limit=${pokemonListLimit}&offset=${pokemonListLimit * pageIndex}`;
    },
  );

  const isEmpty = data?.[0]?.results?.length === 0;
  const isRefreshing = isValidating && data && data.length === size;

  useEffect(() => {
    if (isVisible && !isEmpty && !isRefreshing) {
      setSize(size + 1);
    }
  }, [isVisible, isRefreshing, isEmpty]);

  return (
    <div className="flex flex-col items-center p-8">
      <Head title="SWR - Infinity scroll" />

      <Nav isInfinity />

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        {!data
          ? 'Carregando...'
          : data.map(apiResponse =>
              apiResponse.results.map(pokemon => (
                <PokemonCard pokemon={pokemon} key={pokemon.name} />
              )),
            )}
      </div>

      <div
        className="bg-purple-700 px-5 py-2 rounded-md transform duration-300 hover:-translate-y-0.5 cursor-pointer mt-5"
        onClick={() => setSize(size + 1)}
        ref={loadButtonRef}
      >
        Loading more!
      </div>
    </div>
  );
};

export default InfinityScroll;
