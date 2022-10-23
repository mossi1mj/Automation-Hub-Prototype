import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Overview from "./pages/Overview";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
