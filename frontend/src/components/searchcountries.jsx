import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, IconButton, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/${searchTerm}`);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (

    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      mt: "10rem",
    }}>
      <Typography variant="h1" fontWeight={600} gutterBottom sx={{
        background: '-webkit-linear-gradient(#03fc2c, #05f09d)',
        'WebkitBackgroundClip': 'text',
        'WebkitTextFillColor': 'transparent',
        backgroundClip: 'text',
      }}>
        Search Country
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '40rem' }} >
        <TextField
          label="Search by Country Name"
          value={searchTerm}
          onChange={handleChange}
          variant="standard"
          color="success"
          InputProps={{
            endAdornment: (
              <IconButton type="submit" aria-label="search">
                <SearchIcon color="success"/>
              </IconButton>
            ),
          }}
          sx={{
            width: '100%', color: '#ffc0cb', border: 0,
            outline: 0
          }}
        />
      </form>
    </Box>
  );
}

export default SearchForm;
