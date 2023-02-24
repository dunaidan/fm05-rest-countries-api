import { Grid } from "@mui/material";
import CountryItem from "./country-item";

function CountryList({ countries }) {
  return (
    <Grid container p={3} spacing={6} justifyContent="center">
      {countries.map(country => <CountryItem key={country.cca3} country={country} />)}
    </Grid>
  );
}

export default CountryList;