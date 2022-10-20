import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
