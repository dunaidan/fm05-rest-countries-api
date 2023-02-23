import Head from 'next/head'
import { Nunito_Sans } from '@next/font/google'
import { Box } from '@mui/material';
import SearchForm from '@/components/search/search-form';
import { Container } from '@mui/system';

const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['300', '600', '800'] },);

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
        <Container maxWidth="lg">
          <SearchForm />
        </Container>
      </Box>
    </>
  )
}
