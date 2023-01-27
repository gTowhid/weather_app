import { Box } from '@mui/material';
import { useState } from 'react';
import Navbar from './components/Navbar';
import LineChart from './components/LineChart';

export default function App() {
  const [url, setUrl] = useState('forecast/minutely');

  return (
    <Box>
      <Navbar setUrl={setUrl} />
      {url}
      <Box height="50vh">
        <LineChart url={url} />
      </Box>
    </Box>
  );
}
