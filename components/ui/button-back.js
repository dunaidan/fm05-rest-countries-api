import { Box, Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Router from "next/router";

function ButtonBack() {
  return (
    <Box p={3} mt={4} mb={2}>
      <Button 
        onClick={() => Router.push('/')} 
        variant="outlined" 
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ fontSize: '0.7em', padding: '0.7em 2.5em' }}
      >
        Back
      </Button>
    </Box>
  );
}

export default ButtonBack;