import axios from 'axios';

const BASE_URL = 'https://weatherbit-v1-mashape.p.rapidapi.com';

export const fetchFromAPI = async (url, lat, lon) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: { lat, lon },
    headers: {
      // 'X-RapidAPI-Key': '90e8d4fdefmshabad62b747c38ccp19c8dajsnbe3dc459559c', // arnob
      'X-RapidAPI-Key': '44c08bdafemsh1d33ff2fb717825p1446d0jsnaea62639bcc9', // ria
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
    },
  });

  return data;
};
