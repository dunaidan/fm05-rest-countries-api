import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Router from "next/router";
import styles from './country-item.module.css';

function CountryItem({ country }) {
  
  const imageDescription = `Flag of ${country.officialName}`;

  return (
    <Grid item lg={3} md={4} sm={6} xm={12}>
      <Card>
        <CardActionArea onClick={()=>{Router.push(country.cca3)}}>
          <CardMedia
            component="img"
            image={country.svgFlag}
            alt={imageDescription}
            className={styles.cardImg}
          />
          <CardContent sx={{ padding: "1.5em" }}>
            <Typography gutterBottom variant="h6" component="div" mb={2} fontWeight={700}>
              {country.officialName}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Region:</strong> {country.region}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <strong>Capital:</strong> {country.capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CountryItem;