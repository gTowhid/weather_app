import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import SearchBar from './SearchBar';
import img from '../assets/logo.jpeg';
// eslint-disable-next-line import/no-cycle
import { AllContext } from '../App';

export default function Navbar() {
  const { setUrl, city } = useContext(AllContext);
  return (
    <Box>
      <Box
        className="topBar"
        sx={{
          backgroundColor: '#005986',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={img} alt="logo" style={{ marginRight: '10vw' }} />
        <Typography
          className="topBarText"
          variant="h5"
          paddingRight="40vw"
          sx={{ color: 'white' }}
        >
          World Temperatures
        </Typography>
        <SearchBar />
      </Box>

      <Box sx={{ backgroundColor: '#24759f' }}>
        <Typography sx={{ padding: '8px 0 8px 10px', color: 'white' }}>
          {`${city}`}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: '#0e4763',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <button
          className="navButton"
          type="submit"
          onClick={() => {
            setUrl('forecast/minutely');
          }}
        >
          Nowcast
        </button>
        <button
          className="navButton"
          type="submit"
          onClick={() => {
            setUrl('forecast/3hourly');
          }}
        >
          5 Day Forecast
        </button>
        <button
          className="navButton"
          type="submit"
          onClick={() => {
            setUrl('forecast/daily');
          }}
        >
          16 Day Forecast
        </button>
      </Box>
    </Box>
  );
}
