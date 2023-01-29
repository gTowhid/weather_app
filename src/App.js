import { Box } from '@mui/material';
import { useState } from 'react';
import Navbar from './components/Navbar';
import LineChart from './components/LineChart';

export default function App() {
  const [url, setUrl] = useState('forecast/minutely');
  const [city, setCity] = useState('');
  const [olat, setOlat] = useState(null);
  const [olon, setOlon] = useState(null);

  return (
    <Box>
      <Navbar setUrl={setUrl} city={city} setOlat={setOlat} setOlon={setOlon} />
      <LineChart url={url} setCity={setCity} olat={olat} olon={olon} />
    </Box>
  );
}
