import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./details.module.css";

function CountryDetails() {
  return (
    <Grid container spacing={3} alignItems="flex-start" p={3}>

      <Grid item lg={5} md={6} sm={5} xm={12} className={styles.imageContainer}>
        <Image priority="blur" className={styles.image} fill src='https://countries.petethompson.net/data/flags/mda.svg' alt="Moldova"/>
      </Grid>

      <Grid item lg={7} md={6} sm={7} xm={12}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography component='h2' fontSize='2rem' fontWeight={700}>Republic of Moldova</Typography>
          </Grid>
          <Grid item md={6} sm={12} xm={12}>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Native Name:</strong> Republica Moldova
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Population:</strong> 4,343,343
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Region:</strong> Europe
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Sub Region:</strong> East Europe
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Capital:</strong> Chisinau
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} xm={12}>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Top Level Domain:</strong> .md
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Currencies:</strong> Lei
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Languages:</strong> Romanian
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