import { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// import useFetchLoc from '../utlis/useFetchLoc';
import { geoLocations } from '../assets/mockGeoLocations';

export default function SearchBar({ setOlat, setOlon }) {
  const [searchTerm, setSearchTerm] = useState('');

  // const { geoLocations } = useFetchLoc();

  // eslint-disable-next-line no-shadow
  const searchClick = (searchTerm) => {
    const output = geoLocations.filter((el) =>
      el.city === searchTerm ? el : null
    );

    setOlat(output[0].latitude);
    setOlon(output[0].longitude);

    console.log(output);
    setSearchTerm('');
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={(e) => e.preventDefault()}
        sx={{
          pl: 2,
          boxShadow: 'none',
          borderRadius: 20,
          mr: { sm: 5 },
          backgroundColor: '#24759f',
        }}
      >
        <input
          className="searchBox"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: '10px', color: 'red' }}
          onClick={() => searchClick(searchTerm)}
        >
          <SearchIcon sx={{ color: 'whitesmoke' }} />
        </IconButton>
      </Paper>

      {searchTerm &&
        geoLocations
          .filter((location) =>
            location.city.toLowerCase().includes(searchTerm)
          )
          .slice(0, 5)
          .map((el) => (
            <button
              type="submit"
              name={el.city}
              onClick={(e) => searchClick(e.target.name)}
              key={el.city}
            >
              {el.city}
            </button>
          ))}
    </>
  );
}
