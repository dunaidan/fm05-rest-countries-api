import Head from 'next/head'
import { Box, Container } from '@mui/material';
import SearchForm from '@/components/search/search-form';
import CountryList from '@/components/countries/country-list';


export default function Home() {
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
          <CountryList />
        </Container>
      </Box>
    </>
  )
}
