import Head from 'next/head'
import axios from 'axios';
import { Box, Container } from '@mui/material';
import SearchForm from '@/components/search/search-form';
import CountryList from '@/components/countries/country-list';
import { useState } from 'react';


export default function Home(props) {

  console.log(props.countries)
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
          <SearchForm />
          <CountryList countries={props.countries}/>
        </Container>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const countries = response.data;
  const sortedCountries = countries.sort((countryA, countryB) => {
    if(countryA.name.official < countryB.name.official) return -1;
    if(countryA.name.official > countryB.name.official) return 1;
    return 0;
  })

  return {
    props: {
      countries: sortedCountries
    },
    revalidate: false
  }
}