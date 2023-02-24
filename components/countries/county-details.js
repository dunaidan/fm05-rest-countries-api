import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./details.module.css";

function CountryDetails({ country }) {

  const imageDescription = `Flag of ${country.name.official}`;

 

  return (
    <Grid container spacing={3} alignItems="flex-start" p={3}>

      <Grid item lg={5} md={6} sm={5} xm={12} className={styles.imageContainer}>
        <Image priority="blur" className={styles.image} fill src={country.flags.svg} alt={imageDescription}/>
      </Grid>

      <Grid item lg={7} md={6} sm={7} xm={12}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography component='h2' fontSize='2rem' fontWeight={700}>{country.name.official}</Typography>
          </Grid>
          <Grid item md={6} sm={12} xm={12}>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Native Name:</strong> {country.name.official}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Population:</strong> {country?.population}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Region:</strong> {country?.region}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Sub Region:</strong> {country?.subregion}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Capital:</strong> {country?.capital}
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} xm={12}>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Top Level Domain:</strong> {country.tld[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Currencies:</strong> {country.name.official}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Languages:</strong> {country.name.official}
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="body2" color="text.secondary" mt={1} fontWeight={700}>
              Border Countries:
              <Button 
                variant="outlined" 
                sx={{ fontSize: '1em', padding: '0.2em 1.5em', margin: '0 0.5em', textTransform: 'none' }}
              >
                Romania
              </Button>
              <Button 
                variant="outlined" 
                sx={{ fontSize: '1em', padding: '0.2em 1.5em', margin: '0 0.5em', textTransform: 'none' }}
              >
                Ukraine
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CountryDetails;