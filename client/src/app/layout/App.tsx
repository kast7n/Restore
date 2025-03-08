import { useState } from "react";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const palleteType = darkMode ? 'dark' : 'light';

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
}

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'dark') ? '#eaeaea' : '#121212',
      }

    }
  })



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode}/>
      <Box sx={{
        minHeight: '100vh',
        background: darkMode ? 
          'radial-gradient(circle, #1e3aBa, #111B27)' :
          'radial-gradient(circle, #baecf9, #f0f9ff)',
          py: 6
      }}>
        <Container maxWidth="xl" sx={{mt: 8}}>
          <Outlet/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
