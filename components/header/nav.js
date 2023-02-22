import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from "next/link";
import styles from "./nav.module.css";

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar display="flex">
          <Typography component="h1" sx={{ flexGrow: 1 }}>
            <Link className={styles.link} href='/'>
              Where in the world?
            </Link>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton sx={{ mr: 1 }} color="inherit">
              <Brightness7Icon />
              {/* <Brightness4Icon /> */}
            </IconButton>
            Dark Mode
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;