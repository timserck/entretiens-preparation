import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "../components/navbar";
import { useState } from "react";


export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />


      {/* contenu des pages */}
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}