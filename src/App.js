import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, CssBaseline, IconButton, Toolbar, AppBar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Components/Sidebar";
import AppRoutes from "./Routes/Routes";

const drawerWidth = 240;

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* Barra Superior */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ marginRight: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Dream Nutrition
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Menu Lateral */}
        <Sidebar open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />

        {/* Conteúdo */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <AppRoutes />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
