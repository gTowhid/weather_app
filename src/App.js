import { Box } from '@mui/material';
import { useState } from 'react';
import Navbar from './components/Navbar';
import LineChart from './components/LineChart';

export default function App() {
  const [url, setUrl] = useState('forecast/minutely');
  const [city, setCity] = useState('Four Oaks');

  return (
    <Box>
      <Navbar setUrl={setUrl} city={city} />
      <LineChart url={url} setCity={setCity} />
    </Box>
  );
}
