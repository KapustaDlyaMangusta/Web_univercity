import { baseRequest } from "./api.js";

const PLANES_URL = "/planes";

export const getPlanes = async (searchQuery, sortOption) => {
  const response = await baseRequest(PLANES_URL + `?q=${searchQuery}&s=${sortOption}`);

  return await response.json();
}

export const getPlaneById = async (id) => {
  const response = await baseRequest(PLANES_URL + `/${id}`);

  return await response.json();
}

export const getPlanesPassengersCount = async () => {
  const response = await baseRequest(PLANES_URL + '/count');

  return await response.json();
}

export const createPlane = (body) => baseRequest(PLANES_URL, 'POST', body);

export const updatePlane = (body) => baseRequest(PLANES_URL, 'PUT', body);

export const deletePlane = (id) => baseRequest(PLANES_URL + `/${id}`, 'DELETE');
