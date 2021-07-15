import { useState } from 'react';

import { Head, PokemonList, Nav } from '../components';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  const [page, setPage] = useState(0);

  return (
    <Container>
      <Head title="SWR - Paginated" />

      <Nav isPaginated />

      <PokemonList page={page} />

      <div className="hidden">
        <PokemonList page={page + 1} />
      </div>

      <div className="flex items-center justify-center my-5 pb-5">
        <button
          className="bg-purple-700 px-5 py-2 rounded-md transform duration-300 hover:-translate-y-0.5"
          onClick={() => page > 0 && setPage(page - 1)}
        >
          Prev
        </button>

        <div className="mx-5">{page}</div>

        <button
          className="bg-purple-700 px-5 py-2 rounded-md transform duration-300 hover:-translate-y-0.5"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default Home;
