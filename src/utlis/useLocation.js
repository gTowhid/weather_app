import { useEffect, useState } from 'react';

export default function useLocation() {
  const [lat, setLat] = useState(0.0);
  const [lon, setLon] = useState(0.0);

  useEffect(() => {
    async function successFunction(position) {
      setLat(position.coords.latitude.toFixed(1));
      setLon(position.coords.longitude.toFixed(1));
      console.log(`Your latitude is :${lat} and longitude is ${lon}`);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
    } else {
      // eslint-disable-next-line no-alert
      alert(
        'It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.'
      );
    }
  }, [lat, lon]);

  return { lat, lon };
}
