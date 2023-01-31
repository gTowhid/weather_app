import { ResponsiveLine } from '@nivo/line';
import { Box } from '@mui/material';
import { mockLineData as data } from '../assets/mockData';
// import { useEffect, useState } from 'react';
// import { fetchFromAPI } from '../utlis/fetchFromAPI';
// import useLocation from '../utlis/useLocation';

// eslint-disable-next-line no-unused-vars
export default function LineChart({ url, setCity, olat, olon }) {
  /* let { lat, lon } = useLocation();
  const [data, setData] = useState([]);

  if (olat && olon) {
    lat = olat;
    lon = olon;
  }

  useEffect(() => {
    fetchFromAPI(url, lat, lon)
      .then((response) => {
        // eslint-disable-next-line arrow-body-style, array-callback-return
        const chartData = response.data.map((n) => {
          return {
            x: url === 'forecast/daily' ? n.valid_date : n.timestamp_local,
            y: n.temp,
          };
        });
        setCity(
          `${response.timezone} | ${response.state_code} | ${response.country_code}`
        );
        setData([
          {
            id: response.city_name,
            color: 'hsl(138, 70%, 50%)',
            data: chartData,
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, lat, lon, setCity]);
 */
  return (
    <Box
      height="80vh"
      sx={{
        backgroundImage: 'linear-gradient(#005986, whitesmoke)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'hidden',
      }}
    >
      <Box
        height="70vh"
        width="70vw"
        border="1px solid whitesmoke"
        borderRadius="10px"
        sx={{ backgroundColor: '#f1f2f3' }}
      >
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'time',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'temperature (in deg C)',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          enableGridX={false}
          colors={{ scheme: 'paired' }}
          lineWidth={5}
          enablePoints={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh
          legends={[]}
        />
      </Box>
    </Box>
  );
}
