import { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { geoLocations } from '../assets/mockGeoLocations';

export default function SearchBar({ setOlat, setOlon }) {
  const [searchTerm, setSearchTerm] = useState('');

  // eslint-disable-next-line no-shadow
  const searchClick = (searchTerm) => {
    const output = geoLocations.filter((el) =>
      el.city === searchTerm ? el : null
    );

    setOlat(output[0].latitude);
    setOlon(output[0].longitude);

    setSearchTerm('');
  };

  return (
    <div className="searchBar">
      <Paper
        component="form"
        onSubmit={(e) => e.preventDefault()}
        sx={{
          boxShadow: 'none',
          borderRadius: 20,
          backgroundColor: '#24759f',
        }}
      >
        <input
          className="searchBox"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
        <IconButton
          type="submit"
          className="iconButton"
          onClick={() =>
            searchClick(
              searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)
            )
          }
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
              className="searchOptions"
              type="submit"
              name={el.city}
              onClick={(e) => searchClick(e.target.name)}
              key={el.city}
            >
              {el.city}
            </button>
          ))}
    </div>
  );
}
