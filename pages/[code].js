const { Box, Container } = require("@mui/material");
import ButtonBack from "@/components/ui/button-back";
import CountryDetails from "@/components/countries/county-details";

function Country() {
  return (
    <Box component="main">
      <Container maxWidth="xl">
        <ButtonBack />
        <CountryDetails />
      </Container>
    </Box>    
  )
}

export default Country;