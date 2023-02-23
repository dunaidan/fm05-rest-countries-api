import { useContext } from "react";
import ColorModeContext from "@/context/color-mode-context";
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function Navbar() {
  const colorModeCtx = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar display="flex">
          <Typography component="h1" fontSize='1.5em' fontWeight={700} sx={{ flexGrow: 1 }}>
              Where in the world?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton sx={{ mr: 1 }} onClick={colorModeCtx.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {theme.palette.mode} mode
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;