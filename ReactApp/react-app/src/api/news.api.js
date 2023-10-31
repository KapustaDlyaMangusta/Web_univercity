import API from './api';

export const fetchLatestNews = async () => {
  const response = await API.get('news/latest');

  return response.data;
}

export const fetchNews = async () => {
  const response = await API.get('news');

  return response.data;
}