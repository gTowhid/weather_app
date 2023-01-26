import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import LineChart from './components/LineChart';

export default function App() {
  return (
    <Box>
      <Navbar />
      <Box height="50vh">
        <LineChart />
      </Box>
    </Box>
  );
}
