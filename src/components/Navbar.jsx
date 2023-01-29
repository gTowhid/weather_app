import { Box, Button, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import img from '../assets/logo.jpeg';

export default function Navbar({ setUrl, city, setOlat, setOlon }) {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#005986',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <img src={img} alt="logo" />
        <Typography variant="h5" maxWidth="30px" sx={{ color: 'white' }}>
          Temperature Here
        </Typography>
        <SearchBar setOlat={setOlat} setOlon={setOlon} />
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
        <Button
          variant="text"
          onClick={() => {
            setUrl('forecast/minutely');
          }}
        >
          Nowcast
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setUrl('forecast/3hourly');
          }}
        >
          5 Day Forecast
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setUrl('forecast/daily');
          }}
        >
          16 Day Forecast
        </Button>
      </Box>
    </Box>
  );
}
