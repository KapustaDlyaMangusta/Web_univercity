import API from './api'

export const fetchCarrots = async (searchQuery, filterOption, sortOption) => {
  const response = await API.get(`carrots?q=${searchQuery}&f=${filterOption}&s=${sortOption}`);

  return response.data;
}

export const fetchCarrotById = async (id) => {
  const response = await API.get(`carrots/${id}`);

  return response.data;
}