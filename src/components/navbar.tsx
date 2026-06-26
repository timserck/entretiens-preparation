import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export default function Navbar({ darkMode, toggleDarkMode }: Props) {
  const pages: string[] = ["exercices", "users", "about"];
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          RISE App
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {pages.map((page) => (
            <Button color="inherit" component={Link} to={`/${page}`}>
              {page}
            </Button>
          ))}
        </Box>

        <IconButton color="inherit" onClick={toggleDarkMode}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
