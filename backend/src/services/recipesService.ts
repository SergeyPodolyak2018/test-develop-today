import { EXTERNAL_API } from '../../const';
import { TParams } from '../definition/types';

const externalApi = {
  search: `${EXTERNAL_API}/search.php?s=`,
  ingredient: `${EXTERNAL_API}/filter.php?i=`,
  country: `${EXTERNAL_API}/filter.php?a=`,
  category: `${EXTERNAL_API}/filter.php?c=`,
  id: `${EXTERNAL_API}/lookup.php?i=`,
};

const getAll = async (params: TParams) => {
  let url = '';
  if (Object.keys(params).length === 0) {
    url = externalApi.search;
  }
  if (params.category) {
    url = externalApi.category + params.category;
  }
  if (params.country) {
    url = externalApi.country + params.country;
  }
  if (params.ingredient) {
    url = externalApi.ingredient + params.ingredient;
  }

  if (url === '') throw new Error('Wrong params');

  const resp = await fetch(url);
  const result = await resp.json();
  return result;
};

const getById = async (id: number) => {
  const resp = await fetch(externalApi.id + id);
  const result = await resp.json();
  return result;
};

export default { getAll, getById };
