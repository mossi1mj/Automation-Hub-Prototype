import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const App = () => {
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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/overview" element={<Overview />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
