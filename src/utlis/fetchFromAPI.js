import axios from 'axios';

const BASE_URL = 'https://weatherbit-v1-mashape.p.rapidapi.com';

export const fetchFromAPI = async (url, lat, lon) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: { lat, lon },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
    },
  });

  return data;
};
