import { Box, Button } from '@mui/material';

export default function Navbar({ setUrl }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '20px',
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          setUrl('forecast/minutely');
        }}
      >
        Nowcast
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setUrl('forecast/3hourly');
        }}
      >
        5 Day Forecast
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setUrl('forecast/daily');
        }}
      >
        16 Day Forecast
      </Button>
    </Box>
  );
}
