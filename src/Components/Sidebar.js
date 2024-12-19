import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ChevronLeft, Dashboard, BarChart, CalendarToday, TableChart, Chat } from "@mui/icons-material";

const Sidebar = ({ open, toggleDrawer, drawerWidth }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        width: open ? drawerWidth : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 60,
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          boxSizing: "border-box",
          overflowX: "hidden",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: open ? "space-between" : "center",
          padding: "8px",
        }}
      >
        {open && <Typography variant="h6">Mantis</Typography>}
        <IconButton onClick={toggleDrawer}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <Divider />

      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          {open && <ListItemText primary="Dashboard" />}
        </ListItem>

        <ListItem button component={Link} to="/vendas">
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          {open && <ListItemText primary="Statistics" />}
        </ListItem>

        <ListItem button component={Link} to="/carrinho">
          <ListItemIcon>
            <TableChart />
          </ListItemIcon>
          {open && <ListItemText primary="Data" />} 
        </ListItem>
{/* 
        <ListItem button component={Link} to="/calendar">
          <ListItemIcon>
            <CalendarToday />
          </ListItemIcon>
          {open && <ListItemText primary="Calendar" />}
        </ListItem> */}

        <ListItem button component={Link} to="/chat">
          <ListItemIcon>
            <Chat />
          </ListItemIcon>
          {open && <ListItemText primary="Chat" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
