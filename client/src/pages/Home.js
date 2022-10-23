import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import { Paper, Grid, Box } from "@mui/material";
import AutomationMetrics from "../components/AutomationMetrics";
import Automation from "../test/images/AutomationTask.gif";

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
          <Box
            component="img"
            sx={{
              height: 233,
              width: 550,
              maxHeight: { xs: 400, md: 400 },
              maxWidth: { xs: 350, md: 350 },
            }}
            alt="The house from the offer."
            src={Automation}
          />
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
