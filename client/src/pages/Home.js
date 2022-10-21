import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import { Paper, Grid } from "@mui/material";
import AutomationMetrics from "../components/AutomationMetrics";

const Home = () => {
  return (
    <Fragment>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={12} md={4}>
          <Paper>Test Item 1</Paper>
          <Paper>Test Item 1</Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Carousel />
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <AutomationMetrics />
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <Paper>Test Item 1</Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
