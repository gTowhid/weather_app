import { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { geoLocations } from '../assets/mockGeoLocations';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  // eslint-disable-next-line no-shadow
  const searchClick = (searchTerm) => {
    // console.log(searchTerm);
    const output = geoLocations.filter((el) =>
      el.city === searchTerm ? el : null
    );

    console.log(output);
  };

  return (
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
  );
}
