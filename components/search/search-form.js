import { Box, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

function SearchForm() {
  const [region, setRegion] = useState('');

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setRegion(event.target.value);
  }

  return (
    <Box p={3}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <TextField 
            id="outlined-basic" 
            label="Search for a country..." 
            variant="outlined" 
            size="small" 
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="region-select-label">Filter by Region</InputLabel>
            <Select
              labelId="region-select-label"
              id="region-select"
              value={region}
              label="Filter by Region"
              onChange={handleSelectChange}
              size="small"
            >
              <MenuItem value={10}>Europe</MenuItem>
              <MenuItem value={20}>Asia</MenuItem>
              <MenuItem value={30}>Africa</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      
      
    </Box>
  );
}

export default SearchForm;