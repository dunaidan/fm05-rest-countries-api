import Head from 'next/head'
import axios from 'axios';
import { Alert, Box, Container } from '@mui/material';
import SearchForm from '@/components/search/search-form';
import CountryList from '@/components/countries/country-list';
import { useState } from 'react';


export default function Home(props) {
  const [countries, setCountries] = useState(props.countries);

  const searchCountryByNameHandler = (name, region) => {
    const countriesByRegion = searchCountryByRegion(region);

    const filteredCountries = countriesByRegion.filter(country => {
      return country.officialName.toUpperCase().startsWith(name.toUpperCase());
    });
    setCountries(filteredCountries);
  }

  const searchCountryByRegion = (region) => {
    if(region === "All" || region === '') {
      setCountries(props.countries);
      return props.countries;
    }
    const filteredCountries = props.countries.filter(country => {
      return country.region === region;
    });
    setCountries(filteredCountries);
    return filteredCountries;
  }


  return (
    <>
      <Head>
        <title>Countries Application</title>
        <meta name="description" content="Here you cand find all countries in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Box component="main">
          <Container maxWidth="xl">
          
            
            {(countries != null && props.error === null || props.error === undefined) ?
              <>
                <SearchForm searchCountryByNameHandler={searchCountryByNameHandler} searchCountryByRegion={searchCountryByRegion}/>
                <CountryList countries={countries}/>
              </>
            :
            <Alert sx={{ margin: '2em' }} severity="error">{props.error}</Alert>
              
            }
          </Container>
        </Box>
        
    </>
  )
}

export async function getStaticProps() {

  let response;

  try {
    response = await axios.get('https://restcountries.com/v3.1/all');
  } catch(error) {
    let errorMessage = '';
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      errorMessage = `Error status: ${error.response.status}, message: ${error.response.data.message}`;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      errorMessage = `Error: ${error.request}`;
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = `Error: ${error.message}`;
    }
    return {
      props: {
        error: errorMessage
      },
      revalidate: false
    }
  }
  
  const countries = response.data;

  //reduce the data to essentials
  const countriesEssentialData = countries.map(country => {
    return {
      // is present
      cca3: country.cca3,
      officialName: country.name.common,
      svgFlag: country.flags.svg,

      // possible missing
      population: (country.hasOwnProperty('population')) ? country.population : 'unknown',
      region: (country.hasOwnProperty('region')) ? country.region : 'unknown',
      capital: (country.hasOwnProperty('capital')) ? country.capital : 'unknown',
    }
  });

  // sort all countries
  const sortedCountries = countriesEssentialData.sort((countryA, countryB) => {
    if(countryA.officialName < countryB.officialName) return -1;
    if(countryA.officialName > countryB.officialName) return 1;
    return 0;
  })

  return {
    props: {
      countries: sortedCountries,
    },
    revalidate: false
  }
}