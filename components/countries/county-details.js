import { Grid, Typography } from "@mui/material";
import CountryBorder from "./country-border";
import Image from "next/image";
import styles from "./details.module.css";

function CountryDetails({ country, countryNamePath }) {

  const officialName = country.name.common;
  const svgFlag = country.flags.svg;
  const imageDescription = `Flag of ${officialName}`;

  let native = null;
  if(country.name.hasOwnProperty('nativeMame')) {
    native = Object.values(country.name?.nativeName)[0];
  }
  const nativeName = (native !== null && native.hasOwnProperty('common')) ? native.common : 'unknown';

  const population = country?.population.toLocaleString();
  const region = country?.region;
  const subRegion = country?.subregion;
  const capital = country?.capital;
  const tld = (country?.tld && country.tld.length > 0) ? country.tld[0] : 'unknown';

  let currencies = null;
  if(country.hasOwnProperty('currencies')) {
    currencies = Object.values(country?.currencies)[0];
  }
  const currenciesName = (currencies !== null && currencies.hasOwnProperty('name')) ? currencies.name : 'unknown';

  let languages = null;
  if(country.hasOwnProperty('languages')) {
    languages = Object.values(country?.languages);
  }
  
  let languagesName = '';
  if(languages === null || undefined || languages.length === 0) {
    languagesName = 'unknown';
  } else {
    for(let i=0; i<languages.length; i++) {
      languagesName += languages[i] + ', ';
    }
  }

  const borders = country?.borders;
  let bordersFullInfo = [];
  if(borders != null || borders != undefined) {
    bordersFullInfo = borders.map(border => {
      const namePath =  countryNamePath.find(country => {
        
        if(country.path === border) {
          return country
        } 
        
      });
      return namePath;
    });
  } 
  
  return (
    <Grid container spacing={3} alignItems="flex-start" p={3}>

      <Grid item lg={5} md={6} sm={5} xm={12} className={styles.imageContainer}>
        <Image priority="blur" className={styles.image} fill src={svgFlag} alt={imageDescription}/>
      </Grid>

      <Grid item lg={7} md={6} sm={7} xm={12}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography component='h2' fontSize='2rem' fontWeight={700}>{officialName}</Typography>
          </Grid>
          <Grid item md={6} sm={12} xm={12}>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              <strong>Native Name:</strong> {nativeName}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              <strong>Population:</strong> {population}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              <strong>Region:</strong> {region}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              <strong>Sub Region:</strong> {subRegion}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              <strong>Capital:</strong> {capital}
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} xm={12}>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              <strong>Top Level Domain:</strong> {tld}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              <strong>Currencies:</strong> {currenciesName}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              <strong>Languages:</strong> {languagesName === 'unknown' ? languagesName : languagesName.slice(0, languagesName.length-2)}
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
          <Typography variant="body2" color="text.secondary" mt={1} fontWeight={700}>
            Border Countries:
            {bordersFullInfo.map(border => {
              return <CountryBorder key={border.path} name={border.name} path={border.path} />
            })}
          </Typography> 
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CountryDetails;