import { ResponsiveLine } from '@nivo/line';
// import { mockLineData as data } from '../utlis/mockData';
import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utlis/fetchFromAPI';

export default function LineChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // default is forecast/minutely
    fetchFromAPI('forecast/3hourly')
      .then((response) => {
        // eslint-disable-next-line arrow-body-style, array-callback-return
        const chartData = response.data.map((n) => {
          return { x: new Date(n.timestamp_local).getHours(), y: n.temp };
        });
        setData([
          {
            id: response.city_name,
            color: 'hsl(138, 70%, 50%)',
            data: chartData,
          },
        ]);
        // console.log(chartData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
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
        legend: 'temperature (deg C)',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
