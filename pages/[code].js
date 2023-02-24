import axios from "axios";
import { Box, Container } from "@mui/material";
import ButtonBack from "@/components/ui/button-back";
import CountryDetails from "@/components/countries/county-details";

function Country(props) {

  console.log(props.country)

  return (
    <Box component="main">
      <Container maxWidth="xl">
        <ButtonBack />
        <CountryDetails country={props.country[0]}/>
      </Container>
    </Box>    
  )
}

export default Country;

export async function getStaticProps(context) {
  const { params } = context;
  const { code } = params;

  const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);


  return {
    props: {
      country: response.data
    },
  }
}

export async function getStaticPaths() {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const allPaths = response.data.map((country => country.cca3))

  return {
    paths: allPaths.map(path => ({params: {code: path}})),
    fallback: false
  }
}