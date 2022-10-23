import React, { Fragment } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#7768E5ff" },
      secondary: { main: "#353688ff" },
      background: {
        paper: "#181C3Aff",
        default: "#090D28ff",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#7768E5ff" },
      secondary: { main: "#353688ff" },
      background: {
        paper: "#FFFFFFff",
        default: "#FDFDFDff",
      },
    },
  });

  return (
    <Fragment>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <NavigationBar />
        {children}
      </ThemeProvider>
    </Fragment>
  );
};

export default Layout;
