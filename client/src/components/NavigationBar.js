import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Fab } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ThemeSwitch from "./ThemeSwitch";

const NavigationBar = () => {
  const menuOptions = [
    { text: "Home", path: "/" },
    { text: "Explore", path: "/explore" },
  ];

  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      style={{ background: "#5F285E", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={() => navigate("/")}
        >
          Automation Hub
        </Typography>
        {menuOptions.map((option) => (
          <Button
            key={option.text}
            variant="text"
            color="inherit"
            onClick={() => navigate(option.path)}
          >
            {option.text}
          </Button>
        ))}
        <Fab color="secondary" aria-label="add">
          <SmartToyIcon />
        </Fab>
        <ThemeSwitch />
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
