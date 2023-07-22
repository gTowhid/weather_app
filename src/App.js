/* eslint-disable import/no-cycle */
import { Box } from '@mui/material';
import React, { useState, useMemo } from 'react';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';

export const AllContext = React.createContext();

export default function App() {
  const [url, setUrl] = useState('forecast/minutely');
  const [city, setCity] = useState('');
  const [olat, setOlat] = useState(null);
  const [olon, setOlon] = useState(null);

  const contextValue = useMemo(
    () => ({
      url,
      setUrl,
      city,
      setOlat,
      setOlon,
      setCity,
      olat,
      olon,
    }),
    [city, olat, olon, url]
  );

  return (
    <Box>
      <AllContext.Provider value={contextValue}>
        <Navbar />
        <LineChart />
      </AllContext.Provider>
    </Box>
  );
}
