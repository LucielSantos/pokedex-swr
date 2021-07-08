import Link from 'next/link';
import { memo } from 'react';

interface IProps {
  isInfinity?: boolean;
  isPaginated?: boolean;
}

const NavComponent: React.FC<IProps> = ({ isInfinity, isPaginated }) => {
  return (
    <div className="mb-5 flex flex-col items-center">
      <p className="text-5xl">Pokedex</p>

      <h2 className="text-xl mt-3">This exemple implements Next.js with SWR.</h2>

      <sub className="text-sm mb-3 italic">
        All pages are rendering by <b>Client-side</b>.
      </sub>

      <div className="flex my-3">
        <Link href="/">
          <div
            className={`${
              isPaginated && 'bg-purple-700'
            } px-5 py-2 rounded-md transform duration-300 hover:-translate-y-0.5 cursor-pointer`}
          >
            Paginated
          </div>
        </Link>

        <Link href="/infinityScroll">
          <div
            className={`${
              isInfinity && 'bg-purple-700'
            } px-5 py-2 rounded-md transform duration-300 hover:-translate-y-0.5 cursor-pointer ml-5`}
          >
            Infinity scroll
          </div>
        </Link>
      </div>
    </div>
  );
};

export const Nav = memo(NavComponent);
