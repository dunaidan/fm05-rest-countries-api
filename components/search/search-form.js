import { AccountCircle } from "@mui/icons-material";
import { Box, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

function SearchForm(props) {
  const [region, setRegion] = useState('');
  const [countryName, setCountryName] = useState('');

  const handleSelectChange = (event) => {
    setRegion(event.target.value);
    props.searchCountryByRegion(event.target.value);
  }

  const inputOnChangeHandler = (event) => {
    const countryName = event.target.value;

    setCountryName(countryName);
    props.searchCountryByNameHandler(countryName, region);
  }

  return (
    <Box p={3}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <TextField 
            id="outlined-basic" 
            placeholder="Search for a country..." 
            variant="outlined" 
            size="medium" 
            fullWidth
            value={countryName}
            onChange={inputOnChangeHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}  
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FormControl fullWidth>
            <InputLabel id="region-select-label">Filter by Region</InputLabel>
            <Select
              labelId="region-select-label"
              id="region-select"
              value={region}
              label="Filter by Region"
              onChange={handleSelectChange}
              size="medium"
            >
              <MenuItem defaultValue value={"All"}>All</MenuItem>
              <MenuItem value={"Africa"}>Africa</MenuItem>
              <MenuItem value={"Americas"}>Americas</MenuItem>
              <MenuItem value={"Asia"}>Asia</MenuItem>
              <MenuItem value={"Europe"}>Europe</MenuItem>
              <MenuItem value={"Oceania"}>Oceania</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchForm;