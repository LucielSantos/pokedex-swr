import { useSWRInfinite as useSWRInfiniteLib } from 'swr';
import api from '../services/api';

interface IGetKey<T> {
  (pageIndex: number, previousPageData: T): null | string;
}

export function useSWRInfinite<TData = any, Error = any>(getKey: IGetKey<TData>) {
  const { ...props } = useSWRInfiniteLib<TData, Error>(getKey, async url => {
    const response = await api.get(url);

    return response.data;
  });

  return props;
}
