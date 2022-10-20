import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#5F285E" },
      secondary: { main: "#CB3974" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
