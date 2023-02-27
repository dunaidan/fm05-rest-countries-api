import { Button, Typography } from "@mui/material";
import Router from "next/router";

function CountryBorder({ name, path }) {

  const buttonOnClickHandler = () => {
    Router.replace(`/${path}`);
  }

  return (
      <Button 
        variant="outlined" 
        sx={{ fontSize: '1em', padding: '0.2em 1.2em', margin: '0.2em 0.2em', textTransform: 'none' }}
        onClick={buttonOnClickHandler}
      >
        {name}
      </Button>
  );
}

export default CountryBorder;