import { Grid } from "@mui/material";
import CountryItem from "./country-item";

function CountryList() {
  return (
    <Grid container p={3} spacing={6} justifyContent="center">
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
    </Grid>
  );
}

export default CountryList;