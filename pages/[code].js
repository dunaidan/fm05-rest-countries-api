import axios from "axios";
import fs from 'fs';
import path from 'path';
import { Alert, Box, Container } from "@mui/material";
import ButtonBack from "@/components/ui/button-back";
import CountryDetails from "@/components/countries/county-details";

function Country(props) {
  
  return (
    <>
      <Head>
        <title>{props.country[0].name.common}</title>
      </Head>
      <Box component="main">
        <Container maxWidth="xl">
          <ButtonBack />
          {
          (props.country != null && props.error === null || props.error === undefined) ?
            <CountryDetails country={props.country[0]} countryNamePath={props.countryNamePath}/>
          :
            <Alert sx={{ margin: '2em' }} severity="error">{props.error}</Alert>  
          }
        </Container>
      </Box> 
    </>   
  )
}

export default Country;

export async function getStaticProps(context) {
  const { params } = context;
  const { code } = params;

  let countryResponse;

  try {
    countryResponse = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
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

  const fileToReadJSONFrom = path.join(process.cwd(),'public/countryNamePath.json');
  const countryNamePath = JSON.parse(fs.readFileSync(fileToReadJSONFrom, 'utf-8'));


  return {
    props: {
      country: countryResponse.data,
      countryNamePath: countryNamePath
    },
  }
}

export async function getStaticPaths() {
  const file = path.join(process.cwd(), 'public/countryNamePath.json');
  
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const allPaths = response.data.map(country => {
    return {
      name: country.name.common,
      path: country.cca3
    }
  });
  // exclude country with UNK, there is an error
  // const filteredPaths = allPaths.filter(country => country.path !== "UNK");

  //export countries name -> path in local file
  fs.writeFileSync(file, JSON.stringify(allPaths), 'utf-8')

  return {
    paths: allPaths.map(country => ({params: {code: country.path}})),
    fallback: false
  }
}