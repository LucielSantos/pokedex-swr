import swr from 'swr';
import api from '../services/api';

export function useSWR<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = swr<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error, mutate };
}
